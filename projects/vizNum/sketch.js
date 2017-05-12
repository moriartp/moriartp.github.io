var input;
var vizNum;
// var r = [];
// var g = [];
// var b = [];
var titleDisplay;

function setup() {
  //PC QTY SELECT ELEMENT
  input = createInput();
  input.position(windowWidth/2-52, windowHeight/2+52);
  textAlign(CENTER,CENTER);
  titleDisplay = 255;
}

function draw() {
   createCanvas(windowWidth,windowHeight);
   background(17,17,18);

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
      // r[i] = 255;
      // g[i] = 78;
      // b[i] = 0;
      
      fill(255,78,0);
      noStroke();
      rectAlign(LEFT,CENTER);
      rect(marginH * 1.5 + colH * intervalH, (marginV * 1.5 + rowV * intervalV), intervalH * 0.70, intervalV * 0.70);
  }
   
   
  
}