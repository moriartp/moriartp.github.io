var input;
var vizNum;
var r = [];
var g = [];
var b = [];

function setup() {
  //PC QTY SELECT ELEMENT
  input = createInput();
  input.position(windowWidth/2-40, windowHeight/2);
}

function draw() {
   createCanvas(windowWidth,windowHeight);
   background(0);
   // fill(222);
   // text(input.value(),222,222);
   vizNum = input.value();
   // text(vizNum, 333,333);
   
  //CONSTRUCTOR VARS
  var tablingValue = sqrt(vizNum); //calculates optimal row/column count based on dataset.length
  var marginH = (windowWidth * 0.0025);
  var marginV = (windowHeight * 0.0025);
  var intervalH = ((windowWidth - (marginH * 3)) / tablingValue);
  var intervalV = ((windowHeight - (marginV * 2)) / tablingValue); 

  
  for (var i = 0; i < vizNum; i++){
      var rowV = floor(i % tablingValue);
      var colH = floor(i / tablingValue);
      r[i] = random(0,255);
      g[i] = random(0,255);
      b[i] = random(0,255);
      
      fill(r[i],g[i],b[i]);
      noStroke();
      rect(marginH * 1.5 + colH * intervalH, (marginV * 1.5 + rowV * intervalV), intervalH * 0.90, intervalV * 0.90);
  }
   
   
  
}