var bX = 999;
var bY = 666;
var bRadius = 222;

var cX = 1111;
var cY = 444;
var cRadius = 222;

var dX = 555;
var dY = 333;
var dRadius = 222;

var diagBuf = 111; //diagonal buffer to allow to push just up, or just left...
var counter = 0;

var pusher = false; //conditional display of text based on mouse interaction


function setup() {

}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(246, 247, 235);
  noStroke();

  textAlign(CENTER,CENTER);
  textSize(dRadius/5);

  //BLUE CIRCLE
  fill(63, 136, 197);
  ellipse(dX, dY, cRadius, cRadius);
  if (mouseIsPressed && mouseX > dX - 50 && mouseX < dX + 50 && mouseY > dY - 50 && mouseY < dY + 50) {
    dX = mouseX;
    dY = mouseY;
    pusher = true;
  }
  if (pusher === false){
    fill(255,255,255);
    text("Grab Me",dX,dY);
  }


  //RED CIRCLE
  fill(233, 78, 55);
  ellipse(cX, cY, cRadius, cRadius);

  ///push left
  if (dX >= cX + 11 && dX < cX + cRadius / 1.33 && dY >= cY - cRadius / 1.33 && dY <= cY + cRadius / 1.33) {
    cX = cX - 4;
  }
  ///push right
  if (dX <= cX - 11 && dX > cX - cRadius / 1.33 && dY >= cY - cRadius / 1.33 && dY <= cY + cRadius / 1.33) {
    cX = cX + 4;
  }
  ///push up
  if (dX <= cX + cRadius / 1.33 && dX > cX - cRadius / 1.33 && dY <= cY + cRadius / 1.33 && dY >= cY + 11) {
    cY = cY - 4;
  }
  ///push down
  if (dX <= cX + cRadius / 1.33 && dX >= cX - cRadius / 1.33 && dY <= cY - 11 && dY >= cY - cRadius / 1.33) {
    cY = cY + 4;
  }
  if (pusher === true){
  fill(255,255,255);
  text("Push Me",cX,cY);
  }


  ///GREEN Circle 'b'
  fill(68, 187, 164);
  ellipse(bX, bY, bRadius, bRadius);

  ///push left
  if (dX >= bX + 11 && dX < bX + dRadius / 1.33 && dY >= bY - dRadius / 1.33 && dY <= bY + dRadius / 1.33) {
    bX = bX - 5;
  }
  ///push right
  if (dX <= bX - 11 && dX > bX - bRadius / 1.33 && dY >= bY - bRadius / 1.33 && dY <= bY + bRadius / 1.33) {
    bX = bX + 5;
  }
  ///push up
  if (dX <= bX + bRadius / 1.33 && dX > bX - bRadius / 1.33 && dY <= bY + bRadius / 1.33 && dY >= bY + 11) {
    bY = bY - 5;
  }
  ///push down
  if (dX <= bX + bRadius / 1.33 && dX >= bX - bRadius / 1.33 && dY <= bY - 11 && dY >= bY - bRadius / 1.33) {
    bY = bY + 5;
  }
  if (pusher === true){
  fill(255,255,255);
  text("Push Me",bX,bY);
  }
}

function mouseReleased() {
  counter = counter + 1;
  fill(111);
  rect(bX, bY, 2222, 2222);
  pusher = false;
}