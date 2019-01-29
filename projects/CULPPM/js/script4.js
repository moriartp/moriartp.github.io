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
        d.content.grantbased = Boolean(d.content.grantbased);
        d.content.technical = Boolean(d.content.technical);
        d.content.value1 = +d.content.value1;
        d.content.value2 = +d.content.value2;
        d.content.value3 = +d.content.value3;        
        d.content.complexity1 = +d.content.complexity1;
        d.content.complexity2 = +d.content.complexity2;
        d.content.complexity3 = +d.content.complexity3;  


    });
 // console.log(ppm);

var formatDate = d3.timeFormat("%b %d, %Y");  
var formatPercentage = d3.format(",.0%");  
var formatDollars = d3.format("($,.2f");
var formatIntegers = d3.format(".2f");



var svg = d3.select("#containerB")    
    .attr('width','100%')
    .attr('height','17400px')
    // .style('fill','#efefef');


var circle = svg.selectAll("circle")
    .data(ppm);


// myColors
var myRed = "#F26157";
var myBlue = "#235789";
var myYellow = "#F1D302";


// blue #235789
// red #C1292E
// yellow #F1D302

var marginTop = 500;




// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET
// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET
// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET
// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET
// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET// BUDGET

var circleBudget = circle.enter().append("circle");

circleBudget.attr("cy", function(d, i) { return i * 250 + 30; });
circleBudget.attr("cx", "25%").attr('fill',myBlue).attr('stroke',myBlue).attr("stroke-width","15px");;
circleBudget.attr("r", function(d) { return Math.sqrt(d.content.budgetestimate/15); });
circleBudget.attr("class", function(d) { 
    if((+d.content.budgetestimate) < (+d.content.actualcost) ){
        return "atRisk"; 
    }
}); 

var circleCost = circle.enter().append("circle");

circleCost.attr("cy", function(d, i) { return i * 250 + 30; });
// circleEnter.attr("cy","100%")
circleCost.attr("cx", "25%").attr('class','budget').attr('fill',myYellow).attr('fill-opacity','.0').attr('stroke',myYellow);
circleCost.attr("r", function(d) { return Math.sqrt(d.content.actualcost/15); });

var textBudgetEst = circle.enter().append("text");

textBudgetEst.attr('x', "25%").attr("class","budgetText"); 
textBudgetEst.attr('y', function(d, i) { return i * 250 + 55 + Math.sqrt(d.content.budgetestimate/15); });
textBudgetEst.text(function(d) { return "Budget: "+formatDollars(d.content.budgetestimate); });
textBudgetEst.style('fill','#232323').style('font-size','14px');

var textActualCost = circle.enter().append("text");

textActualCost.attr('x', "25%").attr("class","actuals"); 
textActualCost.attr('y', function(d, i) { return i * 250 + 75 + Math.sqrt(d.content.budgetestimate/15); });
textActualCost.text(function(d) { return "Cost: "+formatDollars(d.content.actualcost); });
textActualCost.style('fill','#232323').style('font-size','14px');



// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE
// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE
// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE
// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE
// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE// FTE

var circleFTE = circle.enter().append("circle");

circleFTE.attr("cy", function(d, i) { return i * 250 + 30; });
circleFTE.attr("cx", "45%").attr('fill',myBlue).attr('stroke',myBlue).attr("stroke-width","15px");;
circleFTE.attr("r", function(d) { return Math.sqrt(d.content.fteestimate*1500); });
circleFTE.attr("class", function(d) { 
    if((+d.content.fteestimate) < (+d.content.fteactual) ){
        return "atRisk"; 
    }
}); 

var circleFTEactual = circle.enter().append("circle");

circleFTEactual.attr("cy", function(d, i) { return i * 250 + 30; });
circleFTEactual.attr("cx", "45%").attr('class','budget').attr('fill',myYellow).attr('fill-opacity','.0').attr('stroke',myYellow);
circleFTEactual.attr("r", function(d) { return Math.sqrt(d.content.fteactual*1500); });

var textFTE = circle.enter().append("text");

textFTE.attr('x', "45%").attr("class","fteText"); 
textFTE.attr('y', function(d, i) { return i * 250 + 55 + Math.sqrt(d.content.fteestimate*1500); });
textFTE.text(function(d) { return "Estimate: "+formatIntegers(d.content.fteestimate)+" FTE"; });
textFTE.style('fill','#232323').style('font-size','14px');

var textFTEact = circle.enter().append("text");

textFTEact.attr('x', "45%").attr("class","fteText"); 
textFTEact.attr('y', function(d, i) { return i * 250 + 75 + Math.sqrt(d.content.fteestimate*1500); });
textFTEact.text(function(d) { return "Actual: "+formatIntegers(d.content.fteactual)+" FTE"; });
textFTEact.style('fill','#232323').style('font-size','14px');


// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE
// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE
// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE
// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE
// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE// VALUE
var circleValue = circle.enter().append("circle");

circleValue.attr("cy", function(d, i) { return i * 250 + 30; });
circleValue.attr("cx", "65%").attr('fill',myBlue).attr('stroke',myBlue).attr("stroke-width","15px");;
circleValue.attr("r", function(d) { return Math.sqrt(d.content.orgvalue*2500); });
circleValue.attr("class", function(d) { 
    if((+d.content.orgvalue) < (+d.content.complexity) ){
        return "atRisk"; 
    }
}); 

var circleComplex = circle.enter().append("circle");

circleComplex.attr("cy", function(d, i) { return i * 250 + 30; });
circleComplex.attr("cx", "65%").attr('class','budget').attr('fill',myYellow).attr('fill-opacity','.0').attr('stroke',myYellow);
circleComplex.attr("r", function(d) { return Math.sqrt(d.content.complexity*2500); });

var textOrgValue = circle.enter().append("text");

textOrgValue.attr('x', "65%").attr("class","orgValueText"); 
textOrgValue.attr('y', function(d, i) { return i * 250 + 55 + Math.sqrt(d.content.orgvalue*2500); });
textOrgValue.text(function(d) { return "Value Rating: "+formatPercentage(d.content.orgvalue); });
textOrgValue.style('fill','#232323').style('font-size','14px');

var textComplex = circle.enter().append("text");

textComplex.attr('x', "65%").attr("class","complexText"); 
textComplex.attr('y', function(d, i) { return i * 250 + 75 + Math.sqrt(d.content.orgvalue*2500); });
textComplex.text(function(d) { return "Complexity Rating: "+formatPercentage(d.content.complexity); });
textComplex.style('fill','#232323').style('font-size','14px');



// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION
// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION
// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION
// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION
// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION// DURATION

var circleDead = circle.enter().append("circle");

circleDead.attr("cy", function(d, i) { return i * 250 + 30; });
circleDead.attr("cx", "85%").attr('fill',myBlue).attr('stroke',myBlue).attr("stroke-width","15px");
circleDead.attr("class", function(d) { 
    if((+d.content.deadline - +d.content.projectStart) < (+d.content.plannedend - +d.content.projectStart) ){
        return "atRisk"; 
    }
});    
circleDead.attr("r", function(d) { 
    if(d.content.deadline !=null){
        return (+d.content.deadline - +d.content.projectStart)*0.00000000251; 
    }
});

var circleAct = circle.enter().append("circle");
circleAct.attr("cy", function(d, i) { return i * 250 + 30; });
circleAct.attr("cx", "85%").attr('class','budget').attr('fill',myYellow).attr('fill-opacity','.0').attr('stroke',myYellow);
// circleDead.attr("r", function(d) { return Math.sqrt(d.content.deadline); });
circleAct.attr("r", function(d) { 
    if(d.content.plannedend !=null){
        return (+d.content.plannedend - +d.content.projectStart)*0.00000000251; 
    }
});

var textSched = circle.enter().append("text");

textSched.attr('x', "85%").attr("class","schedText"); 
textSched.attr('y', function(d, i) { return i * 250 + 55 + ((+d.content.deadline - +d.content.projectStart)*0.00000000251); });
// textSched.text(function(d) { return formatDate(d.content.projectStart)+" > "+formatDate(d.content.deadline); });
textSched.style('fill','#232323').style('font-size','14px');
textSched.text(function(d) { 
    if(d.content.deadline != null){
        return formatDate(d.content.projectStart)+" - "+formatDate(d.content.deadline); 
    } else {
        return "Information not available...";
    }

});

//NAME

var textEnter = circle.enter().append("text");

textEnter.attr('x', 0); 
textEnter.attr('y', function(d, i) { return i * 250 + 45; });
textEnter.attr('class', "projectName" );
textEnter.text(function(d) { return d.content.projectname; });
textEnter.style('fill','#232323').style('font-size','1.25em');;

});