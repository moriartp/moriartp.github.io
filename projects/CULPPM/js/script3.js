var $url = "https://spreadsheets.google.com/feeds/list/1eewMgqHDN-fIrjZrYBuRaWztac2_Wvv4XZLnlkUpP5M/1/public/basic?alt=json"
$.getJSON($url,function(blob1){
// console.log("hello");
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
 console.log(ppm);

var svg = d3.select("#container")    
    .attr('width','100%')
    .attr('height','7400px');


var circle = svg.selectAll("circle")
    .data(ppm);

var circleEnter = circle.enter().append("circle");

circleEnter.attr("cy", function(d, i) { return i * 100 + 30; });
circleEnter.attr("cx", 60).attr('fill','red');
circleEnter.attr("r", function(d) { return Math.sqrt(d.content.orgvalue*1100); });

var rectEnter = circle.enter().append("rect");

rectEnter.attr('width', function(d) { return (d.content.orgvalue*100)*1+"%"; }); 
rectEnter.attr('height', "3vh"); 
rectEnter.attr('y', function(d, i) { return i * 100 + 40; });
rectEnter.style('fill', function(d) { return "rgb(0,0,"+d.content.orgvalue*255+")"; });

var rectAlign = circle.enter().append("rect");

rectAlign.attr('width', function(d) { return (d.content.alignment*100)*.75+"%"; }); 
rectAlign.attr('height', "3vh"); 
rectAlign.attr('y', function(d, i) { return i * 100 + 75; });
rectAlign.style('fill', function(d) { return "rgb(0,0,"+d.content.alignment*255+")"; });

var textEnter = circle.enter().append("text");

textEnter.attr('x', 50); 
textEnter.attr('y', function(d, i) { return i * 100 + 60; });
textEnter.text(function(d) { return d.content.projectname; });
textEnter.style('fill','yellow');

});