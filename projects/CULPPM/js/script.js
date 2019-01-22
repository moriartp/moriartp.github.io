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


  var formatDate = d3.timeFormat("%B %d, %Y");  
  var formatPercentage = d3.format(",.0%");  
  var formatDollars = d3.format("($.2f");

	// var table = d3.select('body').append('table');
	var table = d3.select('tbody')
	var tr = table.selectAll('tr')
	    .data(ppm).enter()
	    .append('tr');

	tr.append('td').html(function(d) { return d.content.projectname; })
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
	tr.append('td').html(function(d) { return d.content.sponsor; });
	tr.append('td').html(function(d) { return d.content.manager; });
	tr.append('td').html(function(d) { return formatPercentage(d.content.complexity); });
	tr.append('td').html(function(d) { return formatPercentage(d.content.alignment); });
	tr.append('td').html(function(d) { return formatPercentage(d.content.orgvalue); });
	tr.append('td').html(function(d) { return d.content.businessowner; });
	tr.append('td')
		.attr('class',function(d) { return d.content.state; })
		.html(function(d) { return d.content.state; });
	tr.append('td').html(function(d) { return '<a href="'+d.content.link+'">'+d.content.projectname+'<i class="fa fa-external-link-square" aria-hidden="true"></i></a>'; });
	tr.append('td').html(function(d) { return d.content.type; });
	tr.append('td').html(function(d) { 
		if(d.content.projectStart != null){
			return formatDate(d.content.projectStart);
		}
	});
	tr.append('td').html(function(d) { 
		if(d.content.plannedend != null){
			return formatDate(d.content.plannedend);
		}
	})
	.attr("class", function(d) { 
		if(d.content.plannedend >= d.content.deadline && d.content.plannedend != null){
			return "risky";
		}
	});	
	tr.append('td').html(function(d) { 
		if(d.content.deadline != null){
			return formatDate(d.content.deadline);
		}
	});	
	// tr.append('td').html(function(d) { return formatDate(d.content.deadline); });
	tr.append('td').html(function(d) { ///FIX THIS PART ... RETURN NaN for null values
		if(d.content.progress != null){
			return formatPercentage(d.content.progress); 
		}
	});
	tr.append('td').html(function(d) { return formatDollars(d.content.budgetestimate); });
	tr.append('td').html(function(d) { return formatDollars(d.content.actualcost); });	
	tr.append('td').html(function(d) { return d.content.fteestimate; });	
	tr.append('td').html(function(d) { return d.content.fteactual; });	
	tr.append('td').html(function(d) { return d.content.additionalinfor; });	


});