var fader = 255;
var H1;
var W1;

function preload() {
  tableF = loadTable("data/F.csv", "csv", "header");
  tableO = loadTable("data/O.csv", "csv", "header");
  tableA = loadTable("data/A.csv", "csv", "header");
  tableP = loadTable("data/P.csv", "csv", "header");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("assets/foap_bg.jpg"); // Load the image
  logo = loadImage("assets/tns.png"); // Load the image

  //F
  inputF = createInput();
  // inputF.position((windowWidth / 5) * 1-165, windowHeight / 3);

  //O
  inputO = createInput();
  // inputO.position((windowWidth / 5) * 2-165, windowHeight / 3);

  //A
  inputA = createInput();
  // inputA.position((windowWidth / 5) * 3-165, windowHeight / 3);

  //P
  inputP = createInput();
  // inputP.position((windowWidth / 5) * 4-165, windowHeight / 3);



}

function parseData() {
  for (var f = 0; f < tableF.getRowCount(); f++) {
    var currentFRow = tableF.getRow(f);
  }
  for (var o = 0; o < tableO.getRowCount(); o++) {
    var currentORow = tableO.getRow(o);
  }
  for (var a = 0; a < tableA.getRowCount(); a++) {
    var currentARow = tableA.getRow(a);
  }
  for (var p = 0; p < tableP.getRowCount(); p++) {
    var currentPRow = tableP.getRow(p);
  }
}





function draw() {
  background(img);
  image(logo, 0, 0, logo.width / 12, logo.height / 12);
  noStroke();
  fill(255, 255, 255, 229);
  rect(0, windowHeight * 0.25, windowWidth, windowHeight * 0.33);
  // rect((windowWidth / 5) * 1, (windowHeight / 3.1),165, 22);

  //F
  inputF.position((windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 3);
  inputF.size(windowWidth * 0.15, windowHeight * 0.0175);

  //O
  inputO.position((windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 3);
  inputO.size(windowWidth * 0.15, windowHeight * 0.0175);

  //A
  inputA.position((windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 3);
  inputA.size(windowWidth * 0.15, windowHeight * 0.0175);

  //P
  inputP.position((windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 3);
  inputP.size(windowWidth * 0.15, windowHeight * 0.0175);





  fill(0);
  textSize(windowWidth*0.015);
  text("FUND", (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 3.1);
  text("ORG", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 3.1);
  text("ACCOUNT", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 3.1);
  text("PROGRAM", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 3.1);

  for (var f = 0; f < tableF.getRowCount(); f++) {
    var currentFRow = tableF.getRow(f);
    var fund = currentFRow.getString(0);
    var wd_fund = currentFRow.getString(1);

    if (fund === inputF.value()) {
      text(wd_fund, (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 2.5);
    }




  }
  for (var o = 0; o < tableO.getRowCount(); o++) {
    var currentORow = tableO.getRow(o);
    var org = currentORow.getString(0);
    var wd_org = currentORow.getString(1);

    if (org === inputO.value()) {
      text(wd_org, (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 2.5);
    }



  }
  for (var p = 0; p < tableP.getRowCount(); p++) {
    var currentPRow = tableP.getRow(p);
    var program = currentPRow.getString(0);
    var wd_program = currentPRow.getString(1);

    if (program === inputP.value()) {
      text(wd_program, (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 2.5);
    }
  }
  for (var a = 0; a < tableA.getRowCount(); a++) {
    var currentARow = tableA.getRow(a);
    var account = currentARow.getString(0);
    var wd_spendCat = currentARow.getString(1);
    var desc = currentARow.getString(2);

    // if(account === inputA.value()){
    //   text(wd_spendCat,(windowWidth / 5) * 3, windowHeight / 3 + 50);
    // }
  }
  var rows = tableA.findRows(inputA.value(), 0);
  // textSize(windowWidth*0.025);
  text("Spend Cats: " + rows.length, (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 2.6);
  if (rows.length > 0) {
    // textSize(18);
    // text("Use the Spending Category most appropriate to your purchase.", (windowWidth / 5) * 3-(windowWidth*0.075), windowHeight / 3 + 50);
  }

  var matches = tableA.matchRows(inputA.value(), 0);
  for (var i = 0; i < rows.length; i++) {
    textSize(18);
    text(matches[i].getString(1) + " " + matches[i].getString(2), (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 2.6 + 25 + i * 25);
  }
  fill(0, 0, 0, fader);
  textSize(windowWidth * 0.075);
  textAlign(CENTER, CENTER);
  text("What is my FDM?", width / 2, height / 9);
  textSize(windowWidth * 0.025);
  text("Enter your FOAP in the below fields", width / 2, height / 4.75);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  fader = fader - 2;
}