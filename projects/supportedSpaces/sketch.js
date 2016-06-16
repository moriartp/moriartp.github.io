var bg;

function preload() {
  table = loadTable("data/TechSpaces.tsv", "tsv", "header");
}

function setup() {
  // bg = loadImage("assets/festival.jpg");
  createCanvas(windowWidth, 6500);
  textAlign(CENTER,CENTER);
}

function parseData(){
  for (var r = 0; r < table.getRowCount(); r++) {
  var currentRow = table.getRow(r);
  }
}

function draw() {
  background(255);
  
  // fill(222,22,222);
  // rect(90,mouseY,1111,20);

  //Get the data
  for (var r = 0; r < table.getRowCount(); r++) {
    var currentRow = table.getRow(r);
    var RoomType = currentRow.getString(0);
    var BuildingCode = currentRow.getString(1);
    var RoomNumber = currentRow.getString(2);
    var StationPlatform = currentRow.getString(3);
    var PCQty = currentRow.getString(4);
    var MacQty = currentRow.getString(5);
    // var Software = currentRow.getString(6);
    // var Presentation = currentRow.getString(7); 
  //   // var RoomExtension = currentRow.getNum(8); 
  //   // var Support = currentRow.getString(9); 
    var Specialty = currentRow.getString(10); 
  //   // var Hours = currentRow.getString(11);     

  //   //Now draw the table within the data context
  //   noStroke();
    fill(22,22,22);
    noStroke();
    textAlign(LEFT,CENTER);
    text(RoomNumber,111,80+r*20);
    text(BuildingCode,300,80+r*20);
    text(RoomType,500,80+r*20);
    text(StationPlatform,700,80+r*20);
    text(PCQty,844,80+r*20);
    text(MacQty,944,80+r*20);
    noFill();
    stroke(2);
    rect(90, 70+r*20,1111,20);
    
    if (mouseY > 70+r*20 && mouseY < 88+r*20){
      var fixedY = 70+r*20;
      fill(222,222,222,211);
      rect(1211,fixedY,555,222);
      fill(222,22,222,22);
      rect(90,fixedY,1111,20);
      textSize(25);
      fill(0);
      noStroke();
      text("Room Number: " + RoomNumber + "\nRoom Type: " + RoomType + "\nBuilding: " + BuildingCode + "\nPlatform: " + StationPlatform,1222,70+r*20+55);
      textSize(12);
    }
  }
}