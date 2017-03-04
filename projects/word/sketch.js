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
      
      for (var i = 0; i < mass;i++){
         textSize(8);
         fill(random(0,255),random(0,255),random(0,255),111);
         text(element,random(0, windowWidth),random(windowHeight,0));
      }


   }

}