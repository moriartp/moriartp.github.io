var bg;
var button;
var inp;
var header = ["Room Number", "Building", "Room Type", "OS", "#PC", "#Mac", "Macs", "PCs"];
var sel;
var buildingSel;
var item = 0;

function preload() {
  table = loadTable("data/TechSpaces.tsv", "tsv");
  softwareTable = loadTable("data/winStandard.csv", "csv");
  macStandardTable = loadTable("data/macStandard.csv", "csv");
}


function setup() {
  bg = loadImage("assets/bg3.jpg");
  createCanvas(windowWidth, 6500);
  background(246, 247, 235);
  textAlign(CENTER, CENTER);

  sel = createSelect();
  sel.position(1500, 10);
  sel.option('');
  sel.option('Windows');
  sel.option('Mac');
  sel.option('3');
  sel.changed(mySelectEvent);

  buildingSel = createSelect();
  buildingSel.position(150, 10);
  buildingSel.option('');
  buildingSel.option('A');
  buildingSel.option('B');
  buildingSel.option('D');
  buildingSel.option('E');
  buildingSel.option('G');
  buildingSel.option('H');
  buildingSel.option('i');
  buildingSel.option('L');
  buildingSel.option('M');
  buildingSel.option('N');
  buildingSel.option('U');
  buildingSel.option('W');
  buildingSel.changed(mySelectEvent);





}

function parseData() {
  for (var r = 0; r < table.getRowCount(); r++) {
    var currentRow = table.getRow(r);
  }
  for (var i = 0; i < softwareTable.getRowCount(); i++) {
    var currentSoftwareRow = softwareTable.getRow(i);
  }
  for (var j = 0; j < macStandardTable.getRowCount(); j++) {
    var currentMacRow = macStandardTable.getRow(j);
  }

}

function draw() {
  createCanvas(windowWidth, 6500);
  background(246, 247, 235);

  noStroke();
  fill(68, 187, 164, 55);
  textSize(66);
  textAlign(LEFT, TOP);
  text("Supported Technology Spaces", 80, 8);

  noStroke();
  fill(0);
  textSize(16);
  textAlign(RIGHT, TOP);
  text("Software Package", 1495, 10);

  //Get the data
  noStroke();
  textSize(33);
  fill(0);
  textAlign(LEFT, CENTER);
  if (sel.value() == 'Windows') {
    text("Windows Standard Software", 1511, 75);
    for (var i = 1; i < softwareTable.getRowCount(); i++) {
      var currentSoftwareRow = softwareTable.getRow(i);
      var Software = currentSoftwareRow.getString(0);
      var Version = currentSoftwareRow.getString(1);

      noStroke();
      fill(222, 22, 222);
      textSize(26);
      textAlign(LEFT, TOP);
      fill(0);
      text(Software + " " + Version, 1511, 60 + 30 * i);
    }
  } else if (sel.value() == "Mac") {
    text("Mac Standard Software", 1511, 75);
    // for (var j = 1; j < macStandardTable.getRowCount(); j++) {
    //   var currentMacRow = macStandardTable.getRow(j);
    //   var macSoftware = currentMacRow.getString(0);
    //   var macVersion = currentMacRow.getString(1);

    //   noStroke();
    //   fill(222, 22, 222);
    //   textSize(26);
    //   textAlign(LEFT, TOP);
    //   fill(0);
    //   text(macSoftware + " " + macVersion, 1511, 60 + 30 * j);
    // }
  }

  //Get the data
  for (var r = 0; r < table.getRowCount(); r++) {
    var currentRow = table.getRow(r);
    var RoomType = currentRow.getString(0);
    var BuildingCode = currentRow.getString(1);
    var RoomNumber = currentRow.getString(2);
    var StationPlatform = currentRow.getString(3);
    var PCQty = currentRow.getString(4);
    var MacQty = currentRow.getString(5);
    var SoftwarePack = currentRow.getString(6);
    var Presentation = currentRow.getString(7);
    var RoomExtension = currentRow.getString(8);
    var Support = currentRow.getString(9);
    var Specialty = currentRow.getString(10);
    //   // var Hours = currentRow.getString(11);
    var blg = currentRow.getString(12);

    //   //Now draw the table within the data context
    noStroke();
    textSize(10);
    fill(233, 79, 55);
    rect(655, 74 + (r * 20), 5 * PCQty, 12);
    fill(63, 136, 197);
    rect(900, 74 + (r * 20), 5 * MacQty, 12);

    fill(0);
    noStroke();
    textAlign(LEFT, CENTER);
    text(RoomNumber, 100, 80 + r * 20);
    text(BuildingCode, 150, 80 + r * 20);
    text(RoomType, 200, 80 + r * 20);
    // text(StationPlatform, 500, 80 + r * 20);
    text(SoftwarePack, 380, 80 + r * 20);
    textAlign(RIGHT);
    text(PCQty, 650, 80 + r * 20);
    text(MacQty, 895, 80 + r * 20);

    noFill();
    stroke(33);
    rect(90, 70 + r * 20, 1250, 20);

    if (mouseY > 70 + r * 20 && mouseY < 88 + r * 20 && mouseX < 1300) {
      var fixedY = 70 + r * 20;
      fill(57, 62, 65); //;fill(22, 22, 38, 1000);
      rect(1350, fixedY - 111, 1000, 1350, 5); ///tooltip rect
      stroke(255);

      //tooltip chart
      textAlign(LEFT, CENTER);
      textSize(18);
      rect(1400, 300 + r * 20 + 100, 400, 300);
      noStroke();
      fill(233, 79, 55);
      rect(1401, 325 + r * 20 + 100, PCQty * 4, 100);
      fill(255);
      text("Workstation Quantities", 1401, 275 + r * 20 + 100);
      text(PCQty + " PCs", 1401 + PCQty * 4 + 10, 375 + r * 20 + 100);
      fill(63, 136, 197);
      rect(1401, 475 + r * 20 + 100, MacQty * 4, 100);
      fill(255);
      text(MacQty + " Macs", 1401 + MacQty * 4 + 10, 525 + r * 20 + 100);


      noStroke();
      fill(68, 187, 164, 55);
      rect(90, fixedY, 1250, 20);
      textAlign(LEFT);

      textSize(35);
      fill(69, 187, 164);
      text(BuildingCode + RoomNumber, 1400, 55 + r * 20 + 55 - 111);
      fill(255);
      textSize(18);
      text("Room Type: " + RoomType + "\nBuilding: " + BuildingCode + "\nPlatform: " + StationPlatform + "\nRoom Extension:" + RoomExtension, 1400, 90 + r * 20 + 55 - 111);
      textSize(18);
      text("Presentation:\n" + Presentation + "\n\nSupport:\n" + Support, 1400, 300 + r * 20 - 125);
      if (SoftwarePack == 'Mac Standard Software') {
        text(SoftwarePack, 1850, 75 + r * 20 - 40);
        for (var j = 1; j < macStandardTable.getRowCount(); j++) {
          var currentMacRow = macStandardTable.getRow(j);
          var macSoftware = currentMacRow.getString(0);
          var macVersion = currentMacRow.getString(1);

          noStroke();
          fill(222, 22, 222);
          textSize(8);
          textAlign(LEFT, TOP);
          fill(255);
          text(macSoftware + " " + macVersion, 1850, fixedY - 35 + j * 12);
        }


      }
    }
  }
}

function mySelectEvent() {
  var item = sel.value();
  var buildingItem = buildingSel.value();
  // background(200);
  // fill(0);
  // text("it's a " + item + "!", 750, 50);
}