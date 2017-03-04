var table;
var margin = 120;

function preload() {
   table = loadTable("data/ImpressionsByCountry.csv", "csv", "header");
}

function setup() {
   createCanvas(windowWidth, windowHeight); //canvas 
   textAlign(CENTER, CENTER);
}



function setup() {
   createCanvas(windowWidth, windowHeight);

}

function draw() {
   createCanvas(windowWidth, windowHeight * 3.34);

   background(255);
   fill(0);

   for (var r = 0; r < table.getRowCount(); r++) {
      var currentRow = table.getRow(r);
      var element = currentRow.getString(0);
      var mass = currentRow.getNum(1);


      //Now draw the bars within the data context
      noStroke();
      textSize(5);
      textAlign(LEFT, CENTER);
      noStroke();
      fill(0);
      textAlign(LEFT,CENTER);
      text(element, 50, 40 + 10 * r + 4.5); //bar labels
      fill(233, 79, 55, 233);
      rectMode(LEFT,CENTER);
      rect(margin, 40 + 10 * r, mass * 1, 9); //bars

   }

}