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
 str = str.replace(/, fteestimate: /g,"\", \"fteestimate\":\"");
 str = str.replace(/, fteactual: /g,"\", \"fteactual\":\"");
 str = str.replace(/, additionalinfo: /g,"\", \"additionalinfo\":\""); 

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
    });


	// Define the div for the tooltip
	var div = d3.select("body").append("div")	
	    .attr("class", "tooltip")				
	    .style("opacity", 0);


   var formatDate = d3.timeFormat("%b %d, %Y");  
   var formatPercentage = d3.format(",.0%");  
   var formatDollars = d3.format("($,.2f");
   var formatIntegers = d3.format(".2f");

	var table = d3.select('tbody')
	var tr = table.selectAll('tr')
	    .data(ppm).enter()
	    .append('tr')
	    .attr('class',function(d) {	return d.content.state; });

	tr.append('td').html(function(d) { return '<b><a href="'+d.content.link+'">'+d.content.projectname+'<i class="fa fa-external-link-square" aria-hidden="true"></i></a></b>'; })
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
	tr.append('td').html(function(d) { return d.content.sponsor; }).attr('class','sponsor');
	tr.append('td').html(function(d) { return d.content.manager; }).attr('class','pm');
	// tr.append('td').html(function(d) { return formatPercentage(d.content.complexity); });
	// tr.append('td').html(function(d) { return formatPercentage(d.content.alignment); });
	// tr.append('td').html(function(d) { return formatPercentage(d.content.orgvalue); });
	tr.append('td').html(function(d) { return d.content.businessowner; }).attr('class','businessowner');
	tr.append('td')
		// .html(function(d) { return "<div class='"+d.content.state+"'>"+d.content.state+"<div>"; });
		.html(function(d) { 
			if(
				
				((d.content.fteactual > d.content.fteestimate && d.content.fteestimate != null)	||
				(d.content.actualcost > d.content.budgetestimate && d.content.budgetestimate != null) ||
				(d.content.plannedend > d.content.deadline && d.content.deadline != null)) &&
				(d.content.state == "Executing" || d.content.state == "Closing")
				)
			{
				// return "<div class='"+d.content.state+"'>"+d.content.state+"<div>";
				return "<div class='riskyState'>"+d.content.state+"</div>";
			} else {
				return "<div class='"+d.content.state+"'>"+d.content.state+"<div>";
			}
		});





	tr.append('td').html(function(d) { return d.content.type; }).attr('class','type');
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
	tr.append('td').html(function(d) { 
		if(d.content.progress > 0){
			return formatPercentage(d.content.progress); 
		}
	})
		.attr('class','progress');
	tr.append('td').html(function(d) { return formatDollars(d.content.budgetestimate); }).attr('class','budget');
	tr.append('td').html(function(d) {
			if(d.content.actualcost > d.content.budgetestimate && d.content.budgetestimate != null && (d.content.state == "Executing" || d.content.closing == "Executing")){
				return "<div class='risky'>"+formatDollars(d.content.actualcost)+"</div>";
			} else {
				return  "<div class='cost'>"+formatDollars(d.content.actualcost)+"</div>";;
			}
		});
	
	tr.append('td').html(function(d) { return formatIntegers(d.content.fteestimate); }).attr('class','fte');	
	tr.append('td').html(function(d) { 
			if(d.content.fteactual > d.content.fteestimate && d.content.fteestimate != null && (d.content.state == "Executing" || d.content.closing == "Executing")){
				return "<div class='risky'>"+formatIntegers(d.content.fteactual)+"</div>";
			} else {
				return  "<div class='cost'>"+formatIntegers(d.content.fteactual)+"</div>";;
			}
		});
	

	tr.append('td').html(function(d) { return "<!-- d.content.additionalinfo-->" 
		// + "<div style='height:13px; padding-left:.5em; border-radius: .35em; margin-bottom:5px; background-color:#ababab;width:"+d.content.complexity*100+"%'>Complexity: "+formatPercentage(d.content.complexity)+"</div>"
		+ "<div class='bars'style='padding-left:.5em; border-radius: .35em; margin-bottom:5px; width:"+d.content.alignment*100+"%'>Alignment: "+formatPercentage(d.content.alignment)+"</div>"
		+ "<div class='bars' style='padding-left:.5em; border-radius: .35em; margin-bottom:5px; width:"+d.content.complexity*100+"%'>Complexity: "+formatPercentage(d.content.complexity)+"</div>"				
		+ "<div class='bars' style='padding-left:.5em; border-radius: .35em; margin-bottom:5px; width:"+d.content.orgvalue*100+"%'>Value: "+formatPercentage(d.content.orgvalue)+"</div>"
		;})
		.attr('class','addinfo')	
		.attr('width','300px');


}); 
// LEAVE THIS END BRACKET