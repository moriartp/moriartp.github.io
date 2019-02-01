var $url = "https://spreadsheets.google.com/feeds/list/1eewMgqHDN-fIrjZrYBuRaWztac2_Wvv4XZLnlkUpP5M/1/public/basic?alt=json"
$.getJSON($url,function(blob1){
console.log("hello");
// console.log(blob1.feed.entry);


// REGEX CLEANUP TO SET JSON KEY/VALUE PAIRS
var str = JSON.stringify(blob1.feed.entry);
 str = str.replace(/\"\$t\":\"sponsor: /g,"\"sponsor\":\"");
 str = str.replace(/, businessowner: /g,"\", \"businessowner\":\"");
 str = str.replace(/, projectname: /g,"\", \"projectname\":\"");
 str = str.replace(/, description: /g,"\", \"description\":\"");
 str = str.replace(/, link: /g,"\", \"link\":\"");
 str = str.replace(/, type: /g,"\", \"type\":\"");
 str = str.replace(/, state: /g,"\", \"state\":\"");
 str = str.replace(/, manager: /g,"\", \"manager\":\"");
 str = str.replace(/, start: /g,"\", \"projectStart\":\"");
 str = str.replace(/, plannedend: /g,"\", \"plannedend\":\""); 
 str = str.replace(/, deadline: /g,"\", \"deadline\":\"");
 str = str.replace(/, progress: /g,"\", \"progress\":\"");
 str = str.replace(/, state: /g,"\", \"state\":\"");
 str = str.replace(/, alignment: /g,"\", \"alignment\":\"");
 str = str.replace(/, value: /g,"\", \"orgvalue\":\"");
 str = str.replace(/, complexity: /g,"\", \"complexity\":\""); 
 str = str.replace(/, budgetestimate: /g,"\", \"budgetestimate\":\"");
 str = str.replace(/, actualcost: /g,"\", \"actualcost\":\""); 
 str = str.replace(/, unanticipatedpurchase: /g,"\", \"unanticipatedpurchase\":\"");
 str = str.replace(/, fteestimate: /g,"\", \"fteestimate\":\"");
 str = str.replace(/, fteactual: /g,"\", \"fteactual\":\"");
 str = str.replace(/, additionalinfo: /g,"\", \"additionalinfo\":\""); 
 str = str.replace(/, hold: /g,"\", \"hold\":\""); 
 str = str.replace(/, technical: /g,"\", \"technical\":\""); 
 str = str.replace(/, grantbased: /g,"\", \"grantbased\":\"");
 str = str.replace(/, value1: /g,"\", \"value1\":\"");  
 str = str.replace(/, value2: /g,"\", \"value2\":\"");   
 str = str.replace(/, value3: /g,"\", \"value3\":\"");  
 str = str.replace(/, complexity1: /g,"\", \"complexity1\":\"");  
 str = str.replace(/, complexity2: /g,"\", \"complexity2\":\"");  
 str = str.replace(/, complexity3: /g,"\", \"complexity3\":\"");  

// CONVERT TO JSON
 ppm = $.parseJSON(str);
 console.log(ppm);

// REFORMAT QUANT DATA ELEMENT (DATES,NUMBERS)
 var dateParser = d3.timeParse("%d-%b-%y");

     ppm.forEach(function(d) {
        d.content.deadline = dateParser(d.content.deadline);
        d.content.projectStart = dateParser(d.content.projectStart);
        d.content.plannedend = dateParser(d.content.plannedend);
        d.content.fteestimate = +d.content.fteestimate; 
        d.content.fteactual = +d.content.fteactual; 
        d.content.fteestimate = +d.content.fteestimate; 
        d.content.fteestimate = +d.content.fteestimate;
        d.content.progress = +d.content.progress;
        d.content.alignment = +d.content.alignment;
        d.content.complexity = +d.content.complexity;
        d.content.orgvalue = +d.content.orgvalue;
        d.content.budgetestimate = +d.content.budgetestimate;
        d.content.actualcost = +d.content.actualcost;
        d.content.progress = +d.content.progress;
        d.content.grantbased = Boolean(d.content.grantbased === 'TRUE');
        d.content.technical = Boolean(d.content.technical === "TRUE");       
        d.content.hold = Boolean(d.content.hold === "TRUE");
        d.content.unanticipatedpurchase = Boolean(d.content.unanticipatedpurchase === "TRUE");       
        d.content.value1 = +d.content.value1;
        d.content.value2 = +d.content.value2;
        d.content.value3 = +d.content.value3;        
        d.content.complexity1 = +d.content.complexity1;
        d.content.complexity2 = +d.content.complexity2;
        d.content.complexity3 = +d.content.complexity3;                
    });


	// Define the div for the tooltip
	var div = d3.select("body").append("div")	
	    .attr("class", "tooltip")				
	    .style("opacity", 0);

   var todaysDate = new Date();
   console.log(todaysDate);
   var formatDate = d3.timeFormat("%b %d, %Y");  
   var formatPercentage = d3.format(",.0%");  
   var formatDollars = d3.format("($,.2f");
   var formatIntegers = d3.format(".2f");

	var table = d3.select('tbody')
	var tr = table.selectAll('tr')
	    .data(ppm).enter()
	    .append('tr')
	    .attr('class',function(d) {	return d.content.state; });

	tr.append('td').html(function(d) { return '<b><a href="'+d.content.link+'">'+d.content.projectname+'</a> <i class="fas fa-external-link-square-alt"></i></b>'; })
		.on("mouseover", function(d) {		
		            div.transition()		
		                .duration(200)		
		                .style("opacity", .9);		
		            div	.html("<b>"+d.content.projectname+"</b><br/>"  + d.content.description)	
		                .style("left", (d3.event.pageX) + "px")		
		                .style("top", (d3.event.pageY - 28) + "px");	
		            })					
		        .on("mouseout", function(d) {		
		            div.transition()		
		                .duration(500)		
		                .style("opacity", 0);	
		        });
	tr.append('td').html(function(d) { 
		if(d.content.grantbased == true){
			return "<i class='fas fa-check'></i>"; 
		} else {
			return null;
		}
	}).attr('class','granted');        
	tr.append('td').html(function(d) { return d.content.sponsor; }).attr('class','sponsor');
	tr.append('td').html(function(d) { return d.content.manager; }).attr('class','pm');
	tr.append('td').html(function(d) { return d.content.businessowner; }).attr('class','businessowner');
	
	// tr.append('td').html(function(d) { return formatPercentage(
	// 	(d.content.complexity1+d.content.complexity2+d.content.complexity3)/9
	// 	); 
	// });

	// tr.append('td').html(function(d) { return formatPercentage(
	// 	(d.content.value1+d.content.value2+d.content.value3)/9
	// 	); 
	// });

	// PROJECT TIER// PROJECT TIER// PROJECT TIER// PROJECT TIER// PROJECT TIER// PROJECT TIER
	tr.append('td').html(function(d) { return "<div class='tieryStatus'>"+Math.round(formatIntegers(
		(d.content.value1+d.content.value2+d.content.value3+d.content.complexity1+d.content.complexity2+d.content.complexity3)/6
		))+"<div>"; 
	});

	// tr.append('td')
	// 	// .html(function(d) { return "<div class='"+d.content.state+"'>"+d.content.state+"<div>"; });
	// 	.html(function(d) { 
	// 		if(
				
	// 			((d.content.fteactual > d.content.fteestimate && d.content.fteestimate != null)	||
	// 			(d.content.actualcost > d.content.budgetestimate && d.content.budgetestimate != null) ||
	// 			(d.content.plannedend > d.content.deadline && d.content.deadline != null)) &&
	// 			(d.content.state == "Executing" || d.content.state == "Closing")
	// 			)
	// 		{
	// 			// return "<div class='"+d.content.state+"'>"+d.content.state+"<div>";
	// 			return "<div class='riskyState'>"+d.content.state+"</div>";
	// 		} else {
	// 			return "<div class='"+d.content.state+"'>"+d.content.state+"<div>";
	// 		}
	// 	});

	// console.log(Date.now())
	tr.append('td')
		// .html(function(d) { return "<div class='"+d.content.state+"'>"+d.content.state+"<div>"; });
		.html(function(d) { 
			if(
				
				((d.content.fteactual > d.content.fteestimate && d.content.fteestimate != null)	||
				(d.content.actualcost > d.content.budgetestimate && d.content.budgetestimate != null) ||
				(d.content.plannedend > d.content.deadline && d.content.deadline != null)) &&
				(d.content.state == "Executing") && (d.content.projectStart < todaysDate) && (d.content.hold != true)
				)
			{
				// return "<div class='"+d.content.state+"'>"+d.content.state+"<div>";
				return "<div class='riskyStatus'>"+d.content.state+"</div>";
			} else if(
				(
					(d.content.fteactual > d.content.fteestimate && d.content.fteestimate != null)	||
					(d.content.actualcost > d.content.budgetestimate && d.content.budgetestimate != null) ||
					(d.content.plannedend > d.content.deadline && d.content.deadline != null) ||
					(d.content.progress < 1)

				) &&
				(d.content.state == "Closing")

				)
			{
				return "<div class='breachedStatus'>"+d.content.state+"<div>";
				// console.log(Boolean((d.content.projectStart > todaysDate)));
			} else if(
				((d.content.fteactual <= d.content.fteestimate && d.content.fteestimate != null)	||
				(d.content.actualcost <= d.content.budgetestimate && d.content.budgetestimate != null) ||
				(d.content.plannedend <= d.content.deadline && d.content.deadline != null)) &&
				(d.content.state == "Executing") && (d.content.projectStart > todaysDate)

				)
			{
				return "<div class='futureStatus'>"+d.content.state+"<div>";
			} else if(
				(d.content.state == "Initiating")

				)
			{
				return "<div class='initialStatus'>"+d.content.state+"<div>";

			} else if(
				(d.content.state == "Executing") &&
				((todaysDate - d.content.projectStart)/(d.content.plannedend - d.content.projectStart)) >
				(d.content.progress)
				)
			{ 
				return "<div class='riskyStatus'>"+d.content.state+"<div>"
				// +formatPercentage(((todaysDate - d.content.projectStart)/(d.content.plannedend - d.content.projectStart)))
				// +" > "+formatPercentage(d.content.progress)
				;

			} else if(
				(d.content.state == "Planning")
				)
			{ 
				return "<div class='planningStatus'>"+d.content.state+"<div>";
			} else if(
				(d.content.state == "Executing") && d.content.hold == true

				)
			{
				return "<div class='holdStatus'>"+d.content.state+"<div>";
			} else if(
				((d.content.fteactual < d.content.fteestimate && d.content.fteestimate != null)	||
				(d.content.actualcost < d.content.budgetestimate && d.content.budgetestimate != null) ||
				(d.content.plannedend < d.content.deadline && d.content.deadline != null)) &&
				(d.content.state == "Executing") && (d.content.projectStart < todaysDate) && (d.content.hold != true)

				)
			{
				return "<div class='targetStatus'>"+d.content.state+"<div>";
			} else if(
				(d.content.state == "Archived") && (d.content.progress < 1)

				)
			{
				return "<div class='canceledStatus'>"+d.content.state+"<div>";
			} else if(
				(d.content.state == "Archived") && (d.content.progress >= 1)

				)
			{
				return "<div class='completedStatus'>"+d.content.state+"<div>";
			} else if(
				(
					(d.content.fteactual <= d.content.fteestimate && d.content.fteestimate != null)	&&
					(d.content.actualcost <= d.content.budgetestimate && d.content.budgetestimate != null) &&
					(d.content.plannedend <= d.content.deadline && d.content.deadline != null) &&
					(d.content.progress == 1)

				) &&
				(d.content.state == "Closing")

				)
			{
				return "<div class='targetStatus'>"+d.content.state+"<div>";
			} else {
				return "<div class='unknownStatus'>Undetermined..."+d.content.state+"<div>";
			} 


		});


	tr.append('td').html(function(d) { 
		if(d.content.state == "Initiating" || d.content.state == "Planning" || d.content.hold == true){
			// return null;
			return "<i class='fas fa-check-circle blue'></i>"; 			
		} else if (d.content.state == "Executing"){
			if(((todaysDate - d.content.projectStart)/(d.content.plannedend - d.content.projectStart)) > (d.content.progress)){
				return "<div class='hasTooltip'><i class='fas fa-exclamation-circle amber'></i><span>Actual Progress: "+formatPercentage(d.content.progress)+" < Planned Progress: "+formatPercentage(((todaysDate - d.content.projectStart)/(d.content.plannedend - d.content.projectStart)))+"</span></div>";
			} else {
				return "<i class='fas fa-check-circle green'></i>";

			}
		} else if (d.content.state == "Closing"){
			if(d.content.progress < 1){
				return "<div class='hasTooltip'><i class='fas fa-exclamation-circle red'></i><span>Actual Progress: "+formatPercentage(d.content.progress)+" < 100%</span></div>";
			} else {
				return "<i class='fas fa-check-circle green'></i>";
			}
		} else {
			return "<i class='fas fa-check-circle gray'></i>";
		}
	}).attr('class','scope');
	tr.append('td').html(function(d) { 
		if(d.content.state == "Initiating" || d.content.state == "Planning" || d.content.hold == true){
			// return null;
			return "<i class='fas fa-check-circle blue'></i>" 			
		} else if (d.content.state == "Executing"){
			if(todaysDate > d.content.deadline){
				return "<i class='fas fa-exclamation-circle red'></i>";
			}
			else if(d.content.plannedend > d.content.deadline){
				return "<i class='fas fa-exclamation-circle amber'></i>";
			}
			else if(d.content.plannedend > d.content.deadline){
				return "<i class='fas fa-exclamation-circle amber'></i>";
			} else {
				return "<i class='fas fa-check-circle green'></i>";

			}
		} else if(d.content.state == "Closing"){
			if(todaysDate > d.content.deadline || d.content.plannedend > d.content.deadline){
				return "<i class='fas fa-exclamation-circle red'></i>";				
			} else {
				return "<i class='fas fa-check-circle green'></i>";
			}
		} else {
			return "<i class='fas fa-check-circle gray'></i>";
		}

	}).attr('class','time');

	tr.append('td').html(function(d) { 
		if(d.content.state == "Initiating" || d.content.state == "Planning" || d.content.hold == true){
			// return null;
			return "<i class='fas fa-check-circle blue'></i>" 			
		} else if (d.content.state == "Executing"){
			if(d.content.unanticipatedpurchase == true){
				return "<i class='fas fa-exclamation-circle amber'></i>";
			} else {
				return "<i class='fas fa-check-circle green'></i>";
			}

		} else if (d.content.state == "Closing"){
			if(d.content.unanticipatedpurchase == true){
				return "<i class='fas fa-exclamation-circle red'></i>"
			} else {
				return "<i class='fas fa-check-circle green'></i>";
			}
		} else {
			return "<i class='fas fa-check-circle gray'></i>";
		}


	}).attr('class','cost');


	// tr.append('td').html(function(d) { return d.content.type; }).attr('class','type');
	tr.append('td').html(function(d) { 
		if(d.content.projectStart != null){
			return formatDate(d.content.projectStart);
		}
	})
		.attr('class','start');
	tr.append('td').html(function(d) { 
			if(d.content.plannedend > d.content.deadline && d.content.deadline != null && (d.content.state == "Executing" || d.content.closing == "Executing")){
				return "<div class='risky'>"+formatDate(d.content.plannedend)+"</div>";
			} else if (d.content.plannedend != null){
				return  "<div class='cost'>"+formatDate(d.content.plannedend)+"</div>";
			}
		});
	tr.append('td').html(function(d) { 
		if(d.content.deadline != null){
			return formatDate(d.content.deadline);
		}
	})
		.attr('class','deadline');	
	// tr.append('td').html(function(d) { 
	// 	if(d.content.progress > 0){
	// 		// return formatPercentage(d.content.progress);
	// 		return console.log(2 * Math.PI *15); 
	// 	}
	// }).attr('class','progress');

	tr.append('td').html(function(d) { 
		if(isNaN(d.content.progress)){
			return null
		} else {
			return "<svg class='progresso'><circle class='circley' r='19'/><circle class='circleprogress' r='19' stroke-dasharray='"+(2 * Math.PI *19)+"' stroke-dashoffset='"+(2*Math.PI*19)*(1-d.content.progress)+"'  transform='rotate(270, 25, 25)'/><text class='progressingText' x='25' y='25'>"+formatPercentage(d.content.progress)+"</text></svg>"; 
		}
	});





	// tr.append('td').html(function(d) { return formatDollars(d.content.budgetestimate); }).attr('class','budget');
	// tr.append('td').html(function(d) {
	// 		if(d.content.actualcost > d.content.budgetestimate && d.content.budgetestimate != null && (d.content.state == "Executing" || d.content.closing == "Executing")){
	// 			return "<div class='risky'>"+formatDollars(d.content.actualcost)+"</div>";
	// 		} else {
	// 			return  "<div class='cost'>"+formatDollars(d.content.actualcost)+"</div>";;
	// 		}
	// 	});
	
	// tr.append('td').html(function(d) { return formatIntegers(d.content.fteestimate); }).attr('class','fte');	
	// tr.append('td').html(function(d) { 
	// 		if(d.content.fteactual > d.content.fteestimate && d.content.fteestimate != null && (d.content.state == "Executing" || d.content.closing == "Executing")){
	// 			return "<div class='risky'>"+formatIntegers(d.content.fteactual)+"</div>";
	// 		} else {
	// 			return  "<div class='cost'>"+formatIntegers(d.content.fteactual)+"</div>";;
	// 		}
	// 	});
	

	// tr.append('td').html(function(d) { return "<!-- d.content.additionalinfo-->" 
	// 	// + "<div style='height:13px; padding-left:.5em; border-radius: .35em; margin-bottom:5px; background-color:#ababab;width:"+d.content.complexity*100+"%'>Complexity: "+formatPercentage(d.content.complexity)+"</div>"
	// 	+ "<div class='bars'style='padding-left:.5em; border-radius: .35em; margin-bottom:5px; width:"+d.content.alignment*100+"%'>Alignment: "+formatPercentage(d.content.alignment)+"</div>"
	// 	+ "<div class='bars' style='padding-left:.5em; border-radius: .35em; margin-bottom:5px; width:"+d.content.complexity*100+"%'>Complexity: "+formatPercentage(d.content.complexity)+"</div>"				
	// 	+ "<div class='bars' style='padding-left:.5em; border-radius: .35em; margin-bottom:5px; width:"+d.content.orgvalue*100+"%'>Value: "+formatPercentage(d.content.orgvalue)+"</div>"
	// 	;})
	// 	.attr('class','addinfo')	
	// 	.attr('width','300px');

	// tr.append('td').html(function(d) { 
	// 	if(d.content.grantbased == true){
	// 		return "<i class='fas fa-check-circle'></i>"; 
	// 	} else {
	// 		return null;
	// 	}
	// });



}); 
// LEAVE THIS END BRACKET