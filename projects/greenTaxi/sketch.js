var data;
var currentRow = [];
var pickup_hour_disp = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var opacity;

function preload() { // preload() runs once
  data = loadTable("data/taxi2.csv", "csv", "header");
  opcacity - 88;
}


function setup() {
  var opacity = 111;
  textFont('Lucida Console');
}

function parseData() {
  for (var r = 0; r < data.getRowCount(); r++) {
    currentRow = currentRow.getRow(r);
  }
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(13);
  fill(22, 22, 22, 122);
  for (var r = 0; r < data.getRowCount(); r++) {
    var currentRow = data.getRow(r);
    var pickup_datetime = currentRow.getString(0);
    var pickup_hour = currentRow.getNum(7);
    var trip_distance = currentRow.getNum(6);
    var diry = currentRow.getNum(4) - currentRow.getNum(2);
    var dirx = currentRow.getNum(3) - currentRow.getNum(5);

    if (mouseY < windowHeight / 2 && mouseX > (windowWidth * 0.175) * (pickup_hour - 7) - (windowWidth * 0.1) && mouseX < (windowWidth * 0.175) * (pickup_hour - 7) + (windowWidth * 0.1)) {
      if (trip_distance > 12) {
        textSize(0.1);
        noStroke();
        text(trip_distance + " mi.", (windowWidth * 0.175) * (pickup_hour - 7) + (dirx * 1500), windowHeight * 0.3 + diry * 1500);
      }
      opacity = 255;
      stroke(46, 139, 87, opacity);
      strokeWeight(0.5);
    } else if (mouseY > windowHeight / 2 && mouseX > (windowWidth * 0.175) * (pickup_hour - 12) - (windowWidth * 0.1) && mouseX < (windowWidth * 0.175) * (pickup_hour - 12) + (windowWidth * 0.1)) {
      if (trip_distance > 12) {
        textSize(0.1);
        noStroke();
        text(trip_distance + " mi.", (windowWidth * 0.175) * (pickup_hour - 12) + (dirx * 1500), windowHeight * 0.7 + diry * 1500);
      }
      opacity = 255;
      stroke(46, 139, 87, opacity);
      strokeWeight(0.5);
    } else {
      opacity = 44;
      stroke(11, 13, 17, opacity);
      strokeWeight(0.33);
    }
    // stroke(46, 139, 87, opacity);//////////////////////////////////////////////STROKE
    strokeWeight(0.33);
    // line(windowWidth/2,windowHeight/2,windowWidth/2+dirx*2800,windowHeight/2+diry*2800);
    if (pickup_hour < 13) {
      line((windowWidth * 0.175) * (pickup_hour - 7), windowHeight * 0.3, (windowWidth * 0.175) * (pickup_hour - 7) + (dirx * 1500), windowHeight * 0.3 + diry * 1500);
      // text(trip_distance, (windowWidth * 0.175) * (pickup_hour - 7) + (dirx * 1500), windowHeight * 0.3 + diry * 1500);
    } else if (pickup_hour > 12 && pickup_hour < 18) {
      line((windowWidth * 0.175) * (pickup_hour - 12), windowHeight * 0.7, (windowWidth * 0.175) * (pickup_hour - 12) + (dirx * 1500), windowHeight * 0.7 + diry * 1500);
    }

  }

  for (var j = 0; j <= pickup_hour_disp.length - 1; j++) {
    noStroke();
    // fill(63, 136, 197, 55);
    textAlign(CENTER, CENTER);
    textSize(44);
    if (pickup_hour_disp[j] < 13) {
      text(pickup_hour_disp[j] + ":00:00", (windowWidth * 0.175) * (pickup_hour_disp[j] - 7), windowHeight * 0.4);
    } else {
      text(pickup_hour_disp[j] + ":00:00", (windowWidth * 0.175) * (pickup_hour_disp[j] - 12), windowHeight * 0.8);
    }

  }
    text("green taxis direction of travel", windowWidth/2,windowHeight*0.05);
    ellipse(windowWidth*0.025,windowHeight*0.025,44);
    fill(255);
    text("?",windowWidth*0.025,windowHeight*0.025);
    if(mouseX<windowWidth*0.025+25 && mouseY<windowHeight*0.025+25){
      stroke(22);
      rect(mouseX,mouseY,windowWidth/3, windowHeight/6);
      fill(22);
      textSize(12);
      textAlign(LEFT, TOP);
      text("Line indicates distance as the crow flies\nDirection indicates the crow's path A to B\nLabel indicates actual distance travelled", mouseX+22,mouseY+22);
    }
    


}