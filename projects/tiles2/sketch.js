var dataset = 286;
var selb;
var selc;
var selOS;
var input;
var value = 0; //toggle for tooltip activation
rectGrowX = 0;
rectGrowY = 0;
var bg;


function preload() {
     table = loadTable("data/rooms.csv", "csv", "header");
     swTable = loadTable("data/software.csv", "csv", "header");
     bg = loadImage("https://lh3.googleusercontent.com/x83t6LYJUaSSHKVYjMBeFQI-7wbr4P5W0lE0NGTJoEkTBxL4nzO-TlRDDeAAeD8LQuXAWOXsHXDNpdtO7X264lFmwJTgBLGVLnOK7OOPa9BtJgi6IlnmWpEor-Mq1uUlpkEAPUZ38kgtMgLliVDtQblF-FsTEXu3jbj6nWLyPAWvahyaFoTTw83ukKf5ZJ1rdyzv7frRKJeXRe1gHfwAW2oyPQUBAvuEJ3DFBL6pFknGaI4nJEB7-wVXMzpfZKJ8jbYFYqX7kWhgoI970e792ibtqUTEfBV7nR7GNYMOaJd0Mazcz__UmECmU6xtRmTu2_iREgRKNgq_mVUZBvkbe9W0cgL_tBP34xEgsAtLVZsFpYuyFIhrEtMYwMlxl6_ILbMWFtLJkf6rypwn-rJsrth5ZGAnZQ1qxUf69Es9oVCEBz5FREg9krhNJMu1wGnsWXxO89Ug8chGG9903VxsbJFoZmuBM5uuGOLFyGNdtTF6WQRMfWXWJCKkNw5Yrh7iA2KbzYiPODB3Ck-ypmKk7yF6Asn9-6C0jqycIlALmEoG9-5uDlWJllN-FTjAd-y459e-mG5OA7RZAIsendkJP3oBpxXzp9le=w1958-h1305-no");

}

function setup() {

     createCanvas(windowWidth, windowHeight); //also in draw() so that it adjusts live to window change
     textFont('Kanit');

     //ROOM TYPE SELECT ELEMENT
     selb = createSelect();
     selb.position(65, 20); //windowHeight * 0.015);
     selb.option('Classroom');
     selb.option('Audio / Video Suite');
     selb.option('Auditorium');
     selb.option('Conference Room');
     selb.option('Event Space');
     selb.option('Express Stations');
     selb.option('Open Lab');
     selb.option('Studio');
     selb.option('Other');
     selb.changed(mySelectEvent);

     //OS SELECT ELEMENT
     selOS = createSelect();
     selOS.position(215, 20); //windowHeight * 0.015);
     selOS.option('Mac');
     selOS.option('Mac & Windows PC');
     selOS.option('None');
     selOS.option('Windows PC');
     selOS.option('Connect Your Laptop');
     selOS.changed(mySelectEvent);


     //PC QTY SELECT ELEMENT
     input = createInput();
     input.position(400, 20);


     //MAC QTY SELECT ELEMENT
     rowInput = createInput();
     rowInput.position(570, 20);

     // colInput = createInput();
     // colInput.position(725, 20);

     //MAC QTY SELECT ELEMENT
     rowInput = createInput();
     rowInput.position(570, 20);

     //SOFTWARE SELECT ELEMENT
     swInput = createInput();
     swInput.position(65, height - 35);


}

function parseData() {
     for (var r = 0; r < table.getRowCount(); r++) {
          var currentRow = table.getRow(r);
          var roomType = currentRow.getString(0);
          var bldgCode = currentRow.getString(1);
          var roomNum = currentRow.getString(2);
          var OS = currentRow.getString(3);
          var pcQty = currentRow.getNum(4);
          var macQty = currentRow.getNum(5);
          var softwarePackage = currentRow.getString(6);
          var avDevices = currentRow.getString(7);
          var ext = currentRow.getString(8);
          var supportContact = currentRow.getString(9);
          var specialHardware = currentRow.getString(10);
          var address = currentRow.getString(11);
          var bldgName = currentRow.getString(12);
          var note = currentRow.getString(13);


     }
     for (var s = 0; s < swTable.getRowCount(); s++) {
          var currentSWRow = swTable.getRow(s);
          var softwareCat = currentSWRow.getString(0);
          var softwareName = currentSWRow.getString(1);
          var softwareVersion = currentSWRow.getString(2);
          var winEXP = currentSWRow.getString(3);
          var winST1 = currentSWRow.getString(3);
          var winSTD = currentSWRow.getString(5);
          var winSAT = currentSWRow.getString(6);
          var macEXP = currentSWRow.getString(7);
          var macHLP = currentSWRow.getString(8);
          var macST1 = currentSWRow.getString(9);
          var macSTD = currentSWRow.getString(10);
          var macPROTOOLS = currentSWRow.getString(11);
          var macADVAUDIO = currentSWRow.getString(12);
          var macAUDIOSUITE = currentSWRow.getString(13);
          var macSAT = currentSWRow.getString(14);


     }

}





function draw() {
     createCanvas(windowWidth, windowHeight); //in draw() so that it adjusts live to window change
     background(255); //lightGray, erases at 60 frames/sec
     // background(242, 242, 242); //lightGray, erases at 60 frames/sec
     textFont('Kanit');

     //LABELS DOM MANIPULATION 'SELECT' ELEMENTS
     noStroke();
     fill(102, 102, 102); //drakGray
     // fill(57, 62, 65); //myblack
     rect(0, 0, windowWidth, 50);
     fill(255);
     textSize(12);
     textAlign(LEFT, CENTER);
     // text("Software Package: ", 50, 15);
     text("OS", 215, 15);
     text("Room Type ", 65, 15);
     text("PCs >= ", 400, 15);
     text("Macs >= ", 570, 15);

     fill(102, 102, 102); //drakGray
     // fill(57, 62, 65); //myblack
     rect(0, windowHeight - 50, windowWidth, 50);

     fill(255);
     text("⇦ Enter the Name of Software", 233, windowHeight - 25);


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


     //Get the data
     for (var i = 0; i < table.getRowCount() - 1; i++) {
          var currentRow = table.getRow(i);
          var roomType = currentRow.getString(0);
          var bldgCode = currentRow.getString(1);
          var roomNum = currentRow.getString(2);
          var OS = currentRow.getString(3);
          var pcQty = currentRow.getNum(4);
          var macQty = currentRow.getNum(5);
          var softwarePackage = currentRow.getString(6);
          // var avDevices = currentRow.getString(7);
          // var ext = currentRow.getString(8);
          // var supportContact = currentRow.getString(9);
          // var specialHardware = currentRow.getString(10);
          // var address = currentRow.getString(11);
          // var bldgName = currentRow.getString(12);
          // var note = currentRow.getString(13);

          var rowV = floor(i % tablingValue);
          var colH = floor(i / tablingValue);

          //ENSURE TEXT IS ALIGNED WITH THE TILE
          textAlign(CENTER, CENTER);
          rectMode(CENTER, CENTER);
          strokeWeight(0.25);
          // stroke(57, 62, 65); //myblack
          fill(102, 102, 102); //drakGray

          //SET CONDITIONAL TO HIGHLIGHT TILES MATCHING SET CONDITION VIA SELECT ELEMENT
          if (OS === selOS.value() && roomType === selb.value() && pcQty >= input.value() && macQty >= rowInput.value()) { //softwarePackage === selc.value()
               fill(233, 79, 55); //myred
               rect(marginH * 1.5 + colH * intervalH, (marginV * 1.5 + rowV * intervalV), intervalH * 0.90, intervalV * 0.90);
               fill(255);
          } else {

               fill(246, 247, 235); //myWhite
               rect(marginH * 1.5 + colH * intervalH, (marginV * 1.5 + rowV * intervalV), intervalH * 0.90, intervalV * 0.90);
               fill(0);

          }

          //draw text (Room ID over the tiles)
          text(bldgCode + roomNum, marginH * 1.5 + colH * intervalH, (marginV * 1.5 + rowV * intervalV));
     }

     //TOOLTIP ---RUN THROUGH THE DATASET!!!!!!!!!!!!!!!!!!!!!!!!!!
     //Get the data
     for (var j = 0; j < table.getRowCount() - 1; j++) {
          var tool_currentRow = table.getRow(j);
          var tool_roomType = tool_currentRow.getString(0);
          var tool_bldgCode = tool_currentRow.getString(1);
          var tool_roomNum = tool_currentRow.getString(2);
          var tool_OS = tool_currentRow.getString(3);
          var tool_pcQty = tool_currentRow.getNum(4);
          var tool_macQty = tool_currentRow.getNum(5);
          var tool_softwarePackage = tool_currentRow.getString(6);
          var tool_avDevices = tool_currentRow.getString(7);
          var tool_ext = tool_currentRow.getString(8);
          var tool_supportContact = tool_currentRow.getString(9);
          var tool_specialHardware = tool_currentRow.getString(10);
          var tool_address = tool_currentRow.getString(11);
          var tool_bldgName = tool_currentRow.getString(12);
          var tool_note = tool_currentRow.getString(13);


          var tool_rowV = floor(j % tablingValue);
          var tool_colH = floor(j / tablingValue);
          var tool_PC = floor(j / 77) + 1;
          var tool_Mac = floor(j / 14) + 1;

          ///tooltip hover condition & display!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          if (mouseX < (marginH * 1.5 + tool_colH * intervalH) + intervalH / 2 && mouseX > (marginH * 1.5 + tool_colH * intervalH) - intervalH / 2 && mouseY < (marginV * 1.5 + tool_rowV * intervalV) + intervalV / 2 && mouseY > (marginV * 1.5 + tool_rowV * intervalV) - intervalV / 2) {
               noFill();
               strokeWeight(3);
               stroke(57, 62, 65); //myblack
               rect(marginH * 1.5 + tool_colH * intervalH, (marginV * 1.5 + tool_rowV * intervalV), intervalH * 0.90, intervalV * 0.90); //highlights current active tile
               if (value === 0) {
                    strokeWeight(0);
                    noStroke();
                    if (tool_rowV >= 4) {
                         // fill(255, 244, 215, 230); //beige
                         fill(57, 62, 65); //myblack
                         rect((marginH * 1.5 + tool_colH * intervalH), (marginV * 1.5 + tool_rowV * intervalV) - intervalV * 2, width * 0.155 + rectGrowX, height * 0.155 + rectGrowY);
                         fill(255);
                         textAlign(CENTER, CENTER);
                         text("Rm: " + tool_bldgCode + tool_roomNum + "\n" + tool_roomType + "\n" + tool_pcQty + " PCs, " + tool_macQty + " Macs" + "\nCol: " + tool_colH + ", Row: " + tool_rowV + "\nX: " + mouseX + ", Y: " + mouseY, (marginH * 1.5 + tool_colH * intervalH), (marginV * 1.5 + tool_rowV * intervalV) - intervalV * 2.5);
                    } else {
                         // fill(255, 244, 215, 230); //beige
                         fill(57, 62, 65); //myblack
                         rect((marginH * 1.5 + tool_colH * intervalH), (marginV * 1.5 + tool_rowV * intervalV) + intervalV * 2, width * 0.155, height * 0.155);
                         fill(255);
                         textAlign(CENTER, TOP);
                         text("Rm: " + tool_bldgCode + tool_roomNum + "\n" + tool_roomType + "\n" + tool_pcQty + " PCs, " + tool_macQty + " Macs" + "\nCol: " + tool_colH + ", Row: " + tool_rowV + "\nX: " + mouseX + "," + "Y: " + mouseY, (marginH * 1.5 + tool_colH * intervalH), (marginV * 1.5 + tool_rowV * intervalV) + intervalV * 1.25);
                    }
               } else {

                    fill(57, 62, 65, 250); //myblack
                    noStroke();
                    rectMode(LEFT, TOP);
                    rect(0, 0, windowWidth * 2, windowHeight * 2);
                    fill(255);
                    textSize(windowHeight * 0.025);
                    textAlign(LEFT, TOP);
                    text(tool_bldgName + "\n" + tool_address + "\n" + tool_OS + " " + tool_note + "\n" + tool_pcQty + " PCs, " + tool_macQty + " Macs" + "\nCol: " + tool_colH + ", Row: " + tool_rowV + "\nSoftware: " + tool_softwarePackage + "\nA/V Devices: " + tool_avDevices + "\nX: " + mouseX + "," + "Y: " + mouseY, marginH, marginV + windowHeight * 0.1);
                    fill(68, 187, 164); //mygreen
                    textSize(intervalV * 2);
                    text(tool_bldgCode + tool_roomNum, marginH, marginV);
               }
          }
     }
     // fill(68, 187, 164); //mygreen
     fill(63, 136, 197); //myBlue
     textSize(windowHeight / 4);
     text(value, windowWidth - 300, 300);

     ///GET SOFTWARE TABLE DATA FOR SOFTWARE SEARCH INPUT
     for (var s = 0; s < swTable.getRowCount(); s++) {
          var currentSWRow = swTable.getRow(s);
          var softwareCat = currentSWRow.getString(0);
          var softwareName = currentSWRow.getString(1);
          var softwareVersion = currentSWRow.getString(2);
          // var winEXP = currentSWRow.getString(3);
          // var winST1 = currentSWRow.getString(3);
          var winSTD = currentSWRow.getString(5);
          var winSAT = currentSWRow.getString(6);
          var macEXP = currentSWRow.getString(7);
          var macHLP = currentSWRow.getString(8);
          // var macST1 = currentSWRow.getString(9);
          var macSTD = currentSWRow.getString(10);
          var macPROTOOLS = currentSWRow.getString(11);
          var macADVAUDIO = currentSWRow.getString(12);
          var macAUDIOSUITE = currentSWRow.getString(13);
          // var macSAT = currentSWRow.getString(14);

          if (swInput.value() === softwareName) {
               fill(57, 62, 65, 250); //myblack
               rectMode(CORNERS);
               rect(0, 0, windowWidth, windowHeight);
               textAlign(LEFT, TOP);
               fill(68, 187, 164);
               textSize(height / 11);
               text(softwareName + " " + softwareVersion, marginH, marginV);
               textSize(height / 33);
               text(softwareCat, marginH, marginV * 3);
               fill(255);
               textSize(33);
               text("\nWindows PC Standard Software: " + winSTD + "\nMac Help Kiosk Software: " + macHLP + "\nMac Standard Software: " + macSTD + "\nMac Standard Software + Pro Tools: " + macPROTOOLS + "\nMac Advanced Audio Software: " + macADVAUDIO + "\nAudio Suite Software: " + macAUDIOSUITE, marginH, marginV * 4);
          }
     }
}



function mySelectEvent() {
}

function mouseReleased() {
     if (value === 0 && mouseY >= 100 && mouseY < windowHeight - 100) {
          value = 1;
     } else {
          value = 0;
          // rectGrowX = 0;
          // rectGrowY = 0;
     }
}