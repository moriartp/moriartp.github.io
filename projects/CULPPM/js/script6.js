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




   var todaysDate = new Date();
   // console.log(todaysDate);
   var formatDate = d3.timeFormat("%b %d, %Y");  
   var formatPercentage = d3.format(",.0%");  
   var formatDollars = d3.format("($,.2f");
   var formatIntegers = d3.format(".2f");

	var section = d3.select('#C00')
	var chip = section.selectAll('div')
	    .data(ppm).enter()
	    .append('div')
	    .style('background-color','whitesmoke')
	    .attr('class',function(d) {	return 'chip '+ d.content.state; })
	    .attr('id', function(d) {	return d.title.$t; })

	chip.append('h2')
		.html(function(d) { return d.content.projectname+'<br>'+d.content.state })
		// .style('background-color','lightpink');

	chip.append('p')
		.html(function(d) { return d.content.description })
		.attr('class', 'blurb');

	chip.append('svg')
		.attr('class', 'viz')
		.attr('width','100%')
		.attr('height','87%')
		// .style('border','.5px solid black')
		.html(function(d) { 
			if(isNaN(d.content.progress)){
				return null
			} else {
			return "<circle class='circley' r='40'/><circle class='circleprogress' r='40' stroke-dasharray='"+(2 * Math.PI *40)+"' stroke-dashoffset='"+(2*Math.PI*40)*(1-d.content.progress)+"'  transform='rotate(270, 60, 60)'/><text class='progressingText' x='60' y='60'>"+formatPercentage(d.content.progress)+"</text><text x='30' y='130'>progress</text>"
			+"<circle class='circlex' r='40'/><circle class='circlesched' r='40' stroke-dasharray='"+(2 * Math.PI *40)+"' stroke-dashoffset='"+(2*Math.PI*40)*(1-((todaysDate - d.content.projectStart)/(d.content.plannedend - d.content.projectStart)))+"'  transform='rotate(270, 200, 60)'/><text class='schedulingText' x='200' y='60'>"+formatPercentage(((todaysDate - d.content.projectStart)/(d.content.plannedend - d.content.projectStart)))+"</text><text class='descText' x='200' y='130'>schedule</text>"

			; 
			}
		});

	var circs = section.selectAll('.viz')
		.append('circle')
		.attr('class','costBase')

	var circs = section.selectAll('.viz')
		.append('circle')
		.attr('class','costCirc')
		.attr('stroke-dasharray', function(d) { return (2 * Math.PI *40) })
		.attr('stroke-dashoffset', function(d) { return (2 * Math.PI *40)*(1-(d.content.actualcost/d.content.budgetestimate)) })
		.attr('transform', 'rotate(270, 340, 60)')

	section.selectAll('.viz')
		.append('text')
		.attr('class','costText')
		.html(function(d) { return formatPercentage(d.content.actualcost/d.content.budgetestimate) })
		.attr('x','340')
		.attr('y','60');

	section.selectAll('.viz')
		.append('text')
		.attr('class','costLabel')
		.html('cost')
		.attr('x','340')
		.attr('y','130');	


	section.selectAll('.viz')
		.append('rect')
		.attr('class','durationBar')
		.attr('width','100%')
		.attr('height','45')
		.attr('y','175')
		.style('fill','lightgray')

	// section.selectAll('.viz')
	// 	.append('rect')
	// 	.attr('class','progressBar')
	// 	.attr('y','175')
	// 	.attr('width', function(d) { 
	// 			return formatPercentage(d.content.progress);
	// 		}) 
	// 	.attr('height','45')
	// 	.style('fill','#248CA4');

	section.selectAll('.viz')
		.append('rect')
		.attr('class','deadBar')
		.attr('y','175')
		.attr('x', '98.75%')
		.attr('width','5')
		.attr('height','55')
		.style('opacity','.5')
		.style('fill','#FF4A32');

	section.selectAll('.viz')
		.append('rect')
		.attr('class','startBar')
		.attr('y','160')
		.attr('x', '0')
		.attr('width','5')
		.attr('height','60')
		.style('opacity','.5')
		.style('fill','#248CA4');




	section.selectAll('.viz')
		.append('rect')
		.attr('class','todayBar')
		.attr('y','150')
		.attr('x', function(d) { 
			if(((todaysDate - d.content.projectStart)/(d.content.deadline - d.content.projectStart))>0 
				&& ((todaysDate - d.content.projectStart)/(d.content.deadline - d.content.projectStart) <1 )){
				return formatPercentage((todaysDate - d.content.projectStart)/(d.content.deadline - d.content.projectStart)) 
				// return console.log(formatPercentage((todaysDate - d.content.projectStart)/(d.content.plannedend - d.content.projectStart))+" "+d.content.projectname)

			; } else {
				return '100%'
			}
		}) 
		.attr('width','5')
		.attr('height','70')
		.style('opacity','.5')
		.style('fill','#26C34F');

	section.selectAll('.viz')
		.append('rect')
		.attr('class','plannedEndBar')
		.attr('y','175')
		.attr('x', function(d) { 
			if(console.log(isNaN(((d.content.plannedend - d.content.projectStart)/(d.content.deadline - d.content.projectStart) )))) {
				return null
			} else {
				return formatPercentage((d.content.plannedend - d.content.projectStart)/(d.content.deadline - d.content.projectStart))
			}
		})
		.attr('width','5')
		.attr('height','70')
		.style('opacity','.5')
		.style('fill','coral');

	section.selectAll('.viz')
		.append('text')
		.attr('class','barLabel')
		.attr('x', function(d) { 
			if(console.log(isNaN(((d.content.plannedend - d.content.projectStart)/(d.content.deadline - d.content.projectStart) )))) {
				return null
			} else {
				return formatPercentage((d.content.plannedend - d.content.projectStart)/(d.content.deadline - d.content.projectStart)-.01)
			}
		})		
		.html('Planned End')
		.style('font-size','11px')
		.style('text-anchor','end')
		.attr('y','245');	

	section.selectAll('.viz')
		.append('text')
		.attr('class','todayLabel')
		.attr('x', function(d) { 
			if(((todaysDate - d.content.projectStart)/(d.content.deadline - d.content.projectStart))>0 
				&& ((todaysDate - d.content.projectStart)/(d.content.deadline - d.content.projectStart) <1 )){
				return formatPercentage(0.02+(todaysDate - d.content.projectStart)/(d.content.deadline - d.content.projectStart)); 
			} else {
				return "100%"
			}
		})	
		.html(function(d) { return "Today "+formatPercentage((todaysDate - d.content.projectStart)/(d.content.plannedend - d.content.projectStart)) })
		.style('font-size','11px')
		.attr('y','160');

	section.selectAll('.viz')
		.append('text')
		.attr('class','startLabel')
		.attr('x', '2%')
		.html(function(d) { return formatDate(d.content.projectStart); })	
		.style('font-size','11px')
		.attr('y','170');

	section.selectAll('.viz')
		.append('text')
		.attr('class','deadlineLabel')
		.attr('x', '98%')
		.html(function(d) { return formatDate(d.content.deadline); })	
		.style('font-size','11px')
		.attr('y','230')
		.style('text-anchor','end');

   console.log("made it to the end");
}); 
// LEAVE THIS END BRACKET