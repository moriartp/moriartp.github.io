var bg;
var button;
var inp;
var header = ["Room Number", "Building", "Room Type", "OS", "#PC", "#Mac", "Macs", "PCs"];
var sel;
var buildingSel;
var item = 0;
var screenView = 0;

var B1; //

///video vars
var playing = false;
var b1vid;
var vidButton;

function preload() {
  table = loadTable("data/TechSpaces.tsv", "tsv");
  tableAlt = loadTable("data/TechSpaces.tsv", "tsv");
  softwareTable = loadTable("data/winStandard.csv", "csv");
  macStandardTable = loadTable("data/macStandard.csv", "csv");
  winStandardTable = loadTable("data/winStandard.csv", "csv");
  macStandardListTable = loadTable("data/macStandard.csv", "csv");
}


function setup() {
  ///loading images
  bg = loadImage("assets/bg3.jpg");
  B1 = loadImage("assets/B1.jpg"); // Load the image

  createCanvas(windowWidth, windowHeight);
  background(246, 247, 235);
  textAlign(CENTER, CENTER);

  buttonUp = createButton('   NEXT ⇨   ');
  buttonUp.position(725, 1390);
  buttonUp.mousePressed(up);

  buttonDown = createButton('   ⇦ PREVIOUS   ');
  buttonDown.position(90, 1390);
  buttonDown.mousePressed(down);


  sel = createSelect();
  sel.position(800, 100);
  sel.option('ALL');
  sel.option('Windows PC Standard Software');
  sel.option('Mac Standard Software');
  sel.changed(mySelectEvent);

  // typeSel = createSelect();
  // typeSel.position(1050, 100);
  // typeSel.option('ALL');
  // typeSel.option('Classroom');
  // typeSel.option('Event Space');
  // typeSel.option('Experimental Classroom');
  // typeSel.option('Conference Room');
  // typeSel.option('Express Stations');
  // typeSel.option('Open Lab');
  // typeSel.option('Help Kiosks');
  // typeSel.option('Audio/Video Suite');
  // typeSel.option('Drawing Studio');  
  // typeSel.option('Construction Studio');  
  // typeSel.changed(mySelectEvent);



  // buildingSel = createSelect();
  // buildingSel.position(1250, 100);
  // buildingSel.option('ALL');
  // buildingSel.option('A');
  // buildingSel.option('B');
  // buildingSel.option('D');
  // buildingSel.option('E');
  // buildingSel.option('G');
  // buildingSel.option('H');
  // buildingSel.option('i');
  // buildingSel.option('L');
  // buildingSel.option('M');
  // buildingSel.option('N');
  // buildingSel.option('U');
  // buildingSel.option('W');
  // buildingSel.changed(mySelectEvent);
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
  for (var q = 0; q < macStandardListTable.getRowCount(); q++) {
    var currentMacSoftwareRow = macStandardTable.getRow(q);
  }

  for (var k = 0; k < winStandardTable.getRowCount(); k++) {
    var currentWinRow = winStandardTable.getRow(k);
  }
  for (var o = 0; o < tableAlt.getRowCount(); o++) {
    var currentRowAlt = tableAlt.getRow(0);
  }

}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(246, 247, 235);

  noStroke();
  fill(68, 187, 164, 55);
  textSize(55);
  textAlign(LEFT, TOP);
  text("Supported Technology Spaces", 80, 8);
  ellipse(40,40,33,33);


  textSize(44);
  text("Slide " + screenView, 325, 1385);

  noStroke();
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Software Packages", 800, 80);

  //COLUMN HEADER
  fill(57, 62, 65);
  rect(90, 100, 700, 22.5);
  fill(0);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill(68, 187, 164);
  text("Room", 100, 112.5);
  text("Bldg", 150, 112.5);
  text("Room Type", 200, 112.5);
  // text(StationPlatform, 500, 80 + r * 25 - (screenView*57)*22.5);
  text("Software", 380, 112.5);
  // textAlign(RIGHT);
  text("PCs", 650, 112.5);
  text("Macs", 700, 112.5);

  //Get the data/////////////////////////////////////////////////////////////////Software Package List
  noStroke();
  textSize(18);
  fill(0);
  textAlign(LEFT, CENTER);
  if (sel.value() == 'Windows PC Standard Software') {
    text("Windows PC Standard Software", 800, 150);
    for (var i = 1; i < softwareTable.getRowCount(); i++) {
      var currentSoftwareRow = softwareTable.getRow(i);
      var Software = currentSoftwareRow.getString(0);
      var Version = currentSoftwareRow.getString(1);

      ///Place software in columns based on idex value
      if (i < 56) {
        noStroke();
        fill(222, 22, 222);
        textSize(14);
        textAlign(LEFT, TOP);
        fill(0);
        text(Software + " " + Version, 800, 180 + 20 * (i - 1));
      } else if (i > 55 && i < 110) {
        noStroke();
        fill(222, 22, 222);
        textSize(14);
        textAlign(LEFT, TOP);
        fill(0);
        text(Software + " " + Version, 1100, 180 + 20 * (i - 56));
      } else {
        noStroke();
        fill(222, 22, 222);
        textSize(14);
        textAlign(LEFT, TOP);
        fill(0);
        text(Software + " " + Version, 1400, 180 + 20 * (i - 110));
      }
    }
  } else if (sel.value() == "Mac Standard Software") {
    text("Mac Standard Software", 800, 150);
    for (var q = 1; q < macStandardListTable.getRowCount(); q++) {
      var currentMacSoftwareRow = macStandardListTable.getRow(q);
      var macListSoftware = currentMacSoftwareRow.getString(0);
      var macListVersion = currentMacSoftwareRow.getString(1);

      ///Place software in columns based on idex value
      if (q < 56) {
        noStroke();
        fill(222, 22, 222);
        textSize(14);
        textAlign(LEFT, TOP);
        fill(0);
        text(macListSoftware + " " + macListVersion, 800, 180 + 20 * (q - 1));
      } else if (q > 55 && q < 110) {
        noStroke();
        fill(222, 22, 222);
        textSize(14);
        textAlign(LEFT, TOP);
        fill(0);
        text(macListSoftware + " " + macListVersion, 1100, 180 + 20 * (q - 56));
      } else {
        noStroke();
        fill(222, 22, 222);
        textSize(14);
        textAlign(LEFT, TOP);
        fill(0);
        text(macListSoftware + " " + macListVersion, 1400, 180 + 20 * (q - 110));
      }
    }
  }
  /////////////////////////////////////////////////////////////////END OF Software Package List

  //Get the data
  for (var r = 1 + 57 * screenView; r < 57 * screenView + 57; r++) {
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
    var bldgAddress = currentRow.getString(19);
    var bldgName = currentRow.getString(20);

    //floating rooms

    //   //Now draw the table within the data context
    if (r % 2 === 0) {
      if (SoftwarePack == sel.value()) {
        fill(233, 79, 55);
      } else {
        fill(222, 222, 222);
      }
      noStroke();
      // strokeWeight(0.25);
      rect(90, 100 + r * 22.5 - (screenView * 57) * 22.5, 700, 22.5); 

    } else {
      if (SoftwarePack == sel.value()) {
        noStroke();
        fill(254, 117, 95);
        rect(90, 100 + r * 22.5 - (screenView * 57) * 22.5, 700, 22.5);

      }
    }

    // noStroke();
    textSize(14);
    // fill(233, 79, 55);
    // rect(655, 74 + (r * 25 - (screenView * 50) * 25), 5 * PCQty, 12);
    // fill(63, 136, 197);
    // rect(900, 74 + (r * 25 - (screenView * 50) * 25), 5 * MacQty, 12);

    fill(0);
    noStroke();
    textAlign(LEFT, CENTER);
    text(RoomNumber, 100, 112.5 + r * 22.5 - (screenView * 57) * 22.5);
    text(BuildingCode, 150, 112.5 + r * 22.5 - (screenView * 57) * 22.5);
    text(RoomType, 200, 112.5 + r * 22.5 - (screenView * 57) * 22.5);
    // text(StationPlatform, 500, 80 + r * 25 - (screenView*57)*22.5);
    text(SoftwarePack, 380, 112.5 + r * 22.5 - (screenView * 57) * 22.5);
    // textAlign(RIGHT);
    text(PCQty, 650, 112.5 + r * 22.5 - (screenView * 57) * 22.5);
    text(MacQty, 705, 112.5 + r * 22.5 - (screenView * 57) * 22.5);


    if (mouseY > 100 + r * 22.5 - (screenView * 57) * 22.5 && mouseY <= 122.5 + r * 22.5 - (screenView * 57) * 22.5 && mouseX < 780) {
      var fixedY = 100 + r * 22.5 - (screenView * 57) * 22.5;
      fill(57, 62, 65); //;fill(22, 22, 38, 1000);
      rect(800, 120, 1500, 1250, 5); //////////////////////////////////////////////////tooltip rect
      stroke(255);

      //tooltip chart
      textAlign(LEFT, CENTER);
      textSize(18);
      rect(850, 850, 400, 300);
      noStroke();
      fill(233, 79, 55);
      rect(851, 895, PCQty * 4, 100);
      fill(255);
      text("Workstation Quantities", 851, 825);
      text(PCQty + " PCs", 851 + PCQty * 4 + 10, 945);
      fill(63, 136, 197);
      rect(851, 1005, MacQty * 4, 100);
      fill(255);
      text(MacQty + " Macs", 851 + MacQty * 4 + 10, 1055);
      for (var n = 0; n <= 10; n++) {
        fill(188);
        textSize(8);
        textAlign(CENTER, CENTER);
        text(n * 10, 850 + n * 40, 1165);
      }


      noStroke();
      fill(68, 187, 164, 55);
      rect(90, fixedY, 700, 22.5);
      textAlign(LEFT);

      fill(233, 79, 55);
      textSize(25);
      text(Support, 1650, 100 + height * 0.75);

      textSize(65);
      fill(69, 187, 164);
      text(BuildingCode + RoomNumber, 850, 175);
      fill(255);
      textSize(18);
      text(bldgName + "\n" + bldgAddress + "\nRoom Type: " + RoomType + "\nPlatform: " + StationPlatform + "\nRoom Extension:" + RoomExtension, 850, 225);


      ///PRESENTATION SETUP
      textSize(18);
      text("Presentation:\n" + Presentation, 850, 475);
      if (Presentation === "DVD, VHS (B1 type)") {
        image(B1, 850, 525, B1.width / 4.25, B1.height / 4.24);
      }

      if (SoftwarePack == 'Mac Standard Software') {
        text(SoftwarePack, 1300, 175);
        for (var j = 1; j < macStandardTable.getRowCount(); j++) { /////////////////////////TOOLTIP
          var currentMacRow = macStandardTable.getRow(j);
          var macSoftware = currentMacRow.getString(0);
          var macVersion = currentMacRow.getString(1);

          noStroke();
          fill(222, 22, 222);
          textSize(16);
          textAlign(LEFT, TOP);
          fill(255);
          if (j < 55) {
            text(macSoftware + " " + macVersion, 1300, 175 + j * 18);
          } else {
            text(macSoftware + " " + macVersion, 1650, 175 + (j - 54) * 18);

          }
        }
      } else if ((SoftwarePack == 'Windows PC Standard Software')) { /////////////////////////TOOLTIP

        text(SoftwarePack, 1300, 175);
        for (var k = 1; k < macStandardTable.getRowCount(); k++) {
          var currentWinRow = winStandardTable.getRow(k);
          var winSoftware = currentWinRow.getString(0);
          var winVersion = currentWinRow.getString(1);

          noStroke();
          fill(222, 22, 222);
          textSize(16);
          textAlign(LEFT, TOP);
          fill(255);
          if (k < 55) {
            text(winSoftware + " " + winVersion, 1300, 175 + k * 18);
          } else {
            text(winSoftware + " " + winVersion, 1650, 175 + (k - 54) * 18);

          }
        }
      }
    }
  }
  
  // if(mouseX<80 && mouseY<80){
  //   textAlign(CENTER,CENTER);
  //   rectMode(CENTER,CENTER);
  //   textSize(18);
  //   fill(22);
  //   rect(450,1400,500,100);
  //   fill('white');
  //   text("Click these buttons to look through the tables for a room",450,1400);
  // }












}

function mySelectEvent() {
  var item = sel.value();
  var buildingItem = buildingSel.value();
  var typeSel = typeSel.value();
  // background(200);
  // fill(0);
  // text("it's a " + item + "!", 750, 50);
}

function up() {
  if (screenView < 4) {
    screenView = screenView + 1;
  } else if (screenView === 4) {
    screenView = 0;
  }
}

function down() {
  if (screenView > 0) {
    screenView = screenView - 1;
  } else if (screenView === 0) {
    screenView = 4;
  }
}