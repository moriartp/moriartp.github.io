var bugX = [];
var bugY = [];
var dirX = [];
var dirY = [];
var bool = [];
var vel = 1;
var decel = 0.4;
var repel = 100;
var on = 0;

var rr = [];
var gg = []; 
var bb =  [];


function setup() {
  for (var i = 0; i < 100; i++) {
    bugX[i] = random(0, windowWidth);
    bugY[i] = random(0, windowHeight);
    dirX[i] = random(-0.5, 0.5);
    dirY[i] = random(-0.5, 0.5);
    bool[i] = 0;
    rr[i] = random(0,255);
    gg[i] = random(0,255);
    bb[i] = random(0,255);    
  }
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(233, 79, 55);
  textAlign(CENTER, CENTER);
  
  for (var i = 0; i < 100; i++) {
    textSize(111);
    if (on === 1) {
      vel = 90;
      fill(233, 79, 55);
      text("RUN!", windowWidth / 2, windowHeight / 2);
    } else {
      vel = 3;
      textSize(33);
      noStroke();
      fill(233, 79, 55);
      text("walk", windowWidth / 2, windowHeight / 2);
      //fill(255, 137, 102);
    }
    fill(rr[i],gg[i],bb[i]);
    ellipse(bugX[i], bugY[i], 20, 20);
    bugX[i] = bugX[i] + dirX[i] * (vel / 2);
    bugY[i] = bugY[i] + dirY[i] * (vel / 2);
    if (bugX[i] > windowWidth || bugX[i] < 0) {
      dirX[i] = dirX[i] * (-1);
    }
    if (bugY[i] > windowHeight || bugY[i] < 0) {
      dirY[i] = dirY[i] * (-1);
    }
  }
}

function mouseReleased() {
  if (on === 1) {
    on = on - 1;
  } else {
    on = on + 1;
  }
}