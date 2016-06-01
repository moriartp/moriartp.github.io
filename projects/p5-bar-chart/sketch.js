
var table;
var margin = 100;
var ticks = [0,10,20,30,40,50,60,70,80,90];
var currentRow = [];
var element = [];
var mass = [];
var sym = [];


function preload() {
  table = loadTable("data/elements.csv", "csv", "header");
  // table = loadTable("data/pt-data1.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight); //canvas 
  textAlign(CENTER,CENTER);
}

function parseData(){
  for (var r = 0; r < table.getRowCount(); r++) {
  var currentRow = table.getRow(r);
  }
}

function draw() {
  background(255);
  textFont('Raleway');
  
  //SETUP CHART ELEMENTS
  fill(0);
  textSize(55);
  textAlign(LEFT, CENTER);
  
  text("Atomic Mass of Non-metals",margin,50);//title
  // line(margin, margin+100*7.25,width-margin, margin+100*7.25);//x axis
  line(margin, margin+100*7.25,margin+ticks[ticks.length-1]*10, margin+100*7.25);//x axis
  line(margin, margin-10,margin+ticks[ticks.length-1]*10, margin-10);//x axis
  for(var i = 0; i< ticks.length;i++){
    textAlign(CENTER, CENTER);
    fill(222);
    stroke(2);
    line(margin+ticks[i]*10, margin-10+100*7.25,margin+ticks[i]*10, margin-10);//grid lines
    fill(255);
    ellipse(margin+ticks[i]*10, margin+100*7.25,20,20);//tick marks
    fill(0);
    noStroke();
    textSize(12);
    text(ticks[i],margin+ticks[i]*10,margin+100*7.25);//tick labels
  }

  ///DRAW USING DATA TABLE 
  //Get the data
  for (var r = 0; r < table.getRowCount(); r++) {
    var currentRow = table.getRow(r);
    var element = currentRow.getString(0);
    var mass = currentRow.getNum(1);
    var sym = currentRow.getString(2);
    var atomic = currentRow.getString(3);

    //Now draw the bars within the data context
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(0);
    text(element,50,margin+100*r+45);//bar labels
    fill(233,79,55,233);
    rect(margin, margin+100*r,mass*10, 90);//bars
    
    if(mouseY >= margin+100*r && mouseY <= margin+100*r+90 && mouseX < margin+mass*10){
      fill(57,62,65);
      rect((margin+ticks[ticks.length-1]*10)+15, margin-10, 300,200,5); //tooltip box
      fill(246,247,235);
      textSize(20);
      textAlign(LEFT,TOP);
      text("Symbol: " + sym + "\nElement: "+element + "\nAtomic Mass: " + mass + "\nAtomic Number: " + atomic, (margin+ticks[ticks.length-1]*10)+25, margin);
      stroke(255, 204, 0);
      strokeWeight(4);
      line(margin+mass*10, margin-10,margin+mass*10, margin+100*7.25);
      noStroke();
    }
    
  }
}
