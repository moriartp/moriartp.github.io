var bugX = [];
var bugY = [];
var dirX = [];
var dirY = [];
var bool = [];
var vel = 190;
var decel = 0.4;
var repel = 100;
var on = 0;

var rr = [];
var gg = [];
var bb = [];

var counter = 0;
var imgRobot;
var imgServer;
var systems = [];
var dataFlow = [];
var diagnosticPrograms = [];
var sysX = [];
var sysY = [];
var sysFade = 0;
var sysFadeB = 0;
var dataX = [];
var dataY = [];
var diagX = [];
var diagY = [];
var dirX = [];
var dirY = [];

function preload() {
  imgRobot = loadImage("assets/robot02.gif");
  imgServer = loadImage("assets/server02.gif");
}


function setup() {
  // createCanvas(windowWidth, windowHeight);
  textFont('Orbitron');
  // textSize(33);

  for (var i = 0; i < 300; i++) {
    bugX[i] = random(0, windowWidth);
    bugY[i] = random(0, windowHeight);
    dirX[i] = random(-0.5, 0.5);
    dirY[i] = random(-0.5, 0.5);
    bool[i] = 0;
    rr[i] = random(0, 255);
    gg[i] = random(0, 255);
    bb[i] = random(0, 255);
  }

}

function draw() {
  createCanvas(windowWidth, windowHeight);
  image(imgRobot, width / 2, height / 2);
  image(imgServer, 0, 0);
  background(255);
  textSize(33);
  textFont('Orbitron');
  fill(60, 110, 113);
  //text(counter, 110, 110);

  if (counter === 0) {
    text("...ready...", 450, 500);

  } else if (counter === 1) {
    text("<status?>", 700, 500);

  } else if (counter === 2) {
    text("<...evolving sysfiles>", 450, 500);

  } else if (counter === 3) {

    for (var j = 0; j < 30; j++) {
      noStroke();
      fill(rr[j], gg[j], bb[j], sysFade);
      rectMode(CENTER, CENTER);
      rect(bugX[j], bugY[j], 2222, 222);
    }
    fill(random(0, 255), random(0, 255), random(0, 255));
    text("systems coming on-line", 400, 200);
    sysFade = sysFade + 0.15;

  } else if (counter === 4 || 5 || 6) {
    noStroke();
    for (var i = 0; i < 300; i++) {
      fill(rr[i], gg[i], bb[i], sysFadeB);
      ellipse(bugX[i], bugY[i], 22, 22);
      bugX[i] = bugX[i] + dirX[i] * (vel / 2);
      bugY[i] = bugY[i] + dirY[i] * (vel / 2);
      if (bugX[i] > windowWidth || bugX[i] < 0) {
        dirX[i] = dirX[i] * (-1);
      }
      if (bugY[i] > windowHeight || bugY[i] < 0) {
        dirY[i] = dirY[i] * (-1);
      }
    }
    sysFadeB = sysFadeB + 0.15;

    if (counter === 4) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      text("initiating data flow...", 200, 100);
    } else if (counter === 5) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      text("accessing diagnostic programs... \nrunning through postjump protocols... \nchecking entangled states... \ntroubleshooting Sharifi transforms... \ncomparing pre- and postjump file sizes", 100, 100);
    } else if (counter === 6) {
      vel = 1;
      fill(60, 110, 113);
      text("all systems operational", 450, 500);
    }
  }

  image(imgRobot, 500, 0);
  image(imgServer, 0, windowHeight - 500, 500, 500, 0, 0, 100, 100);
}

function mouseReleased() {
  counter = counter + 1;

}