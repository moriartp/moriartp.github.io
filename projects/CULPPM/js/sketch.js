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

var data = ppm;
console.log(data);    



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

}); 