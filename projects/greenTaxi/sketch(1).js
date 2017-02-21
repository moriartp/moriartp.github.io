var data;
var currentRow = [];

function preload() {  // preload() runs once
  data = loadTable("data/taxi2.csv", "csv", "header");
}


function setup() {
}

function parseData(){
  for(var r = 0; r<data.getRowCount();r++){
    currentRow = currentRow.getRow(r);
  }
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(13);
  fill(222,22,222);
  for(var r = 0; r < data.getRowCount(); r++){
    var currentRow = data.getRow(r);
    var pickup_datetime = currentRow.getString(0);
    var diry = currentRow.getNum(4) - currentRow.getNum(2);
    var dirx = currentRow.getNum(3) - currentRow.getNum(5);
    
    // fill(22);
    // text(pickup_datetime+" "+diry+" "+diry, 222,10*r);
    fill(222,22,222);
    strokeWeight(0.33);
    line(windowWidth/2,windowHeight/2,windowWidth/2+dirx*2800,windowHeight/2+diry*2800);
    
    
    
    // pickup_datetime,dropoff_datetime,Pickup_longitude,Pickup_latitude,Dropoff_longitude,Dropoff_latitude,Trip_distance
  }
  for (var i = 0;i<5;i++){
    noFill();
    strokeWeight(5);
    stroke(222,22,222);
    ellipse(windowWidth/2, windowHeight/2, );
    textSize(33)
    text(i,(2.632338+(i*2.921672))*800,windowHeight/2)
  }
  
  
}