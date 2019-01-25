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
    .attr('width','90%')
    .attr('height','7400px')
    // .style('fill','#efefef');


var circle = svg.selectAll("circle")
    .data(ppm);


var bgEnter = circle.enter().append("rect");

bgEnter.attr('width', "100%"); 
bgEnter.attr('height', 45); 
bgEnter.attr('y', function(d, i) { return i * 100 + 30; });
bgEnter.style('fill', "lightgray");



var circleCost = circle.enter().append("circle");

circleCost.attr("cy", function(d, i) { return i * 100 + 52.50; });
// circleEnter.attr("cy","100%")
circleCost.attr("cx", "97.5%").attr('fill','#5FBF8C');
circleCost.attr("r", function(d) { return Math.sqrt(d.content.actualcost/100); });


var circleEnter = circle.enter().append("circle");

circleEnter.attr("cy", function(d, i) { return i * 100 + 52.50; });
// circleEnter.attr("cy","100%")
circleEnter.attr("cx", "97.5%").attr('class','budget').attr('fill','#FFB8A3').attr('fill-opacity','.05').attr('stroke','black');
circleEnter.attr("r", function(d) { return Math.sqrt(d.content.budgetestimate/100); });


// ORGVALUE
var rectEnter = circle.enter().append("rect");

rectEnter.attr('width', function(d) { return (d.content.orgvalue*100)*1+"%"; }); 
rectEnter.attr('height', 45); 
rectEnter.attr('y', function(d, i) { return i * 100 + 30; });
// rectEnter.attr('x', "10");
rectEnter.style('fill', "#8AB9D2");
// rectEnter.style('fill', function(d) { return "rgb(0,0,"+d.content.orgvalue*255+")"; });

// ALIGNMENT
var rectAlign = circle.enter().append("rect");

rectAlign.attr('width', function(d) { return (d.content.alignment*100)*1+"%"; }); 
rectAlign.attr('height', 15); 
rectAlign.attr('y', function(d, i) { return i * 100 + 45; });
// rectAlign.style('fill', function(d) { return "rgb(0,0,"+d.content.alignment*255+")"; });
rectAlign.attr("class","bulletChamber");

// COMPLEXITY
var rectComplex = circle.enter().append("rect");

rectComplex.attr('width', 10); 
rectComplex.attr('height', 45); 
rectComplex.attr('x', function(d) { return (d.content.complexity*100)*1+"%"; }); 
rectComplex.attr('y', function(d, i) { return i * 100 + 30; }).attr("class","complexityMarker");
// rectAlign.style('fill', function(d) { return "rgb(0,0,"+d.content.alignment*255+")"; });
rectComplex.style('fill', "#BC4C2B");




var textEnter = circle.enter().append("text");

textEnter.attr('x', 0); 
textEnter.attr('y', function(d, i) { return i * 100 + 29; });
textEnter.text(function(d) { return d.content.projectname; });
textEnter.style('fill','#232323').style('font-size','1.25em');;

});