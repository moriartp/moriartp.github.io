var input;
var vizNum;
var r = [];
var g = [];
var b = [];
var titleDisplay;

function setup() {
  //PC QTY SELECT ELEMENT
  input = createInput();
  input.position(windowWidth/2-51, windowHeight/2);
  textAlign(CENTER,CENTER);
  titleDisplay = 255;
}

function draw() {
   createCanvas(windowWidth,windowHeight);
   background(0);

   fill(255,255,255,titleDisplay);
   titleDisplay = titleDisplay - 0.5;
   textAlign(CENTER,CENTER);

   textSize(33);
   text("THE NUMBER CRUNCH", width/2,height*0.333);
   textSize(13);
   text("Enter a number in\nthe below field.", width/2,height*0.444);


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