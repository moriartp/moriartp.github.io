var dataset = 224;
var selb;
var selc;
var input;

function setup() {

   createCanvas(windowWidth, windowHeight); //also in draw() so that it adjusts live to window change


   ///test select...highlights if index value is divisible by selected value
   selb = createSelect();
   selb.position(75, 0); //windowHeight * 0.015);
   selb.option('0');
   selb.option('1');
   selb.option('2');
   selb.option('3');
   selb.option('4');
   selb.option('5');
   selb.option('6');
   selb.option('7');
   selb.option('8');
   selb.option('9');
   selb.option('10');
   selb.option('11');
   selb.option('12');
   selb.changed(mySelectEvent);

   selc = createSelect();
   selc.position(75, 20); //windowHeight * 0.015);
   selc.option('Windows PC Standard Software');
   selc.option('Mac Standard Software');
   selc.option('Windows PC Basic Software');
   selc.option('Mac Basic Software');
   selc.option('Windows PC Express Software');
   selc.option('Mac Express Software');
   selc.option('Windows PC Specialty Software');
   selc.option('Mac Specialty Software');
   selb.changed(mySelectEvent);

   input = createInput();
   input.position(75, 40);




}

function draw() {
   createCanvas(windowWidth, windowHeight); //in draw() so that it adjusts live to window change
   background(246, 247, 235); //mywhite, erases at 60 frames/sec
   textFont('Kanit');

   // selb = createSelect();
   // selb.position(windowWidth * 0.125, windowHeight * 0.015);
   // selb.option('0');
   // selb.option('1');
   // selb.option('2');
   // selb.option('3');
   // selb.option('4');
   // selb.option('5');
   // selb.option('6');
   // selb.option('7');
   // selb.option('8');
   // selb.option('9');
   // selb.option('10');
   // selb.option('11');
   // selb.option('12');
   // selb.changed(mySelectEvent);


   //SELECT DROPDOWN LABELS
   noStroke();
   fill(57, 62, 65);
   rect(0, 0, windowWidth * 2, 125)
   fill(222, 222, 222);
   textSize(12);
   textAlign(LEFT, CENTER);
   text("Divisible by: ", 0, 9);
   text("Alt Select: ", 0, 28);
   text("PC Qty >= ", 0, 47);


   //CONSTRUCTOR VARS
   var tablingValue = sqrt(dataset); //calculates optimal row/column count based on dataset.length
   var marginH = (windowWidth * 0.05);
   var marginV = 40 + (windowHeight * 0.025);
   var intervalH = ((windowWidth - (marginH * 2)) / tablingValue);
   var intervalV = ((windowHeight - (marginV * 2)) / tablingValue);

   ///MAKE TEXT RESPONSIVE TO WINDOW SIZE
   if (windowWidth > windowHeight) {
      textSize(intervalV / 4);
   } else {
      textSize(intervalH / 4);
   }



   //RUN THROUGH THE DATASET!!!!!!!!!!!!!!!!!!!!!!!!!!
   for (var i = 0; i <= dataset; i++) { //will eventually be replaced by preloaded dataset via dataset.length
      var rowV = floor(i % tablingValue);
      var colH = floor(i / tablingValue);
      var X1 = (marginH * 1.5 + colH * (intervalH)); //for mouse hover, captures pixel range for each tile
      var X2 = (marginH * 1.5 + colH * (intervalH * 2)); //for mouse hover, captures pixel range for each tile
      var Y1 = 40 + (marginV * 1.5 + rowV * (intervalV)); //for mouse hover, captures pixel range for each tile
      var Y2 = 40 + (marginV * 1.5 + rowV * (intervalV * 2)); //for mouse hover, captures pixel range for each tile


      //ENSURE TEXT IS ALIGNED WITH THE TILE
      textAlign(CENTER, CENTER);
      rectMode(CENTER, CENTER);

      //SET CONDITIONAL TO HIGHLIGHT TILES MATCHING SET CONDITION VIA SELECT ELEMENT
      if (i % selb.value() === 0 && i >= input.value()) {
         fill(233, 79, 55)
         rect(marginH * 1.5 + colH * intervalH, (marginV * 1.5 + rowV * intervalV), intervalH * 0.90, intervalV * 0.90, 5);
      } else {

         // fill(57, 62, 65); //myblack
         fill(222); //gray
         rect(marginH * 1.5 + colH * intervalH, (marginV * 1.5 + rowV * intervalV), intervalH * 0.90, intervalV * 0.90, 5);
      }

      //draw text (Room ID over the tiles)
      // fill(68, 187, 164); //mygreen
      fill(57, 62, 65); //myblack
      text("X1 " + i, marginH * 1.5 + colH * intervalH, (marginV * 1.5 + rowV * intervalV));

      // /////////TOOLTIP ATTEMPT...doesnt quite work yet
      // if (mouseX > X1 && mouseX < X2 && mouseY > Y1 && mouseY < Y2) {
      //    textSize(88);
      //    fill(22, 222, 222);
      //    text(i, mouseX, mouseY);
      // } else {

      // }

   }

}


function mySelectEvent() {
   var item = selb.value();
}