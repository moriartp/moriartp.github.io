var r1 = 255;
var g1 = 3;
var b1 = 62;
var mover = 0.26;

var Aa = []; // diameter
var Ab = []; // tranparency
var Ac = []; // x movement 
var Ad = []; // y movement
var Ae = []; // fixed max
var Af = []; // fixed min
var Ag = []; //diameter growth
var Ah = []; //fade in
var Ax = []; //x position
var Ay = []; //y position

var aRed = [];
var aGreen = [];
var aBlue = [];





function setup() {
  
  for (var i = 0; i < 20; i++) {//cities.length; i++) {
    Aa[i] = random(windowWidth/3,windowWidth/2); // length or diameter
    Ab[i] = random(22, 111); // tranparency
    Ac[i] = random(-2, 2); // x movement 
    Ad[i] = random(-1, 1); // y movement
    Ae[i] = random(width * 0.3, width * 0.7); // fixed x
    Af[i] = random(height * 0.3, height * 0.7); // fixed y
    Ag[i] = random(0, 255); //diameter growth
    Ah[i] = random(0,windowWidth); //fade in starting point
    // Ax[i] = random(width * 0.36, width * 0.67); //random(0, 255); //x position
    // Ay[i] = random(height * 0.36, height * 0.67); //random(0, 255); //y position
    
    Ax[i] = windowWidth/2; //random(0, 255); //x position
    Ay[i] = windowHeight/2;//windowHeight; //random(0, 255); //y position

    aRed[i] = random(205,255);
    aGreen[i] = random(3,5);//random(0,5);
    aBlue[i] = random(60,65);//random(160,255);        
  }  
  
}

function draw() {
  // background(255,3,62);
  var bg = createCanvas(windowWidth,5555);
  bg.background(255,3,62);
  bg.background(255,3,62);
  bg.position(0,0);
  noStroke();
  // for (var j = 0;j<100;j++){
  //   noStroke();
  //   rect(((10+mover)/j)*random(-0.05,0.06),((10+mover)/j)*random(-0.05,0.06),10,10);
  //   mover = mover +0.25;
  // }
  
  //SHAPE BEHAVIOR
  //GATHER SHAPES AROUND A PRESED MOUSE neds a conditioonal statement for each 'quadrant'
  for (var i = 0; i < 20; i++) {//cities.length; i++) {
    if (mouseIsPressed && mouseX <= Ax[i] && mouseY <= Ay[i]) {
      Ax[i] = Ax[i] + ((mouseX - Ax[i]) / 100);
      Ay[i] = Ay[i] + ((mouseY - Ay[i]) / 100);
      print(mouseIsPressed);
    } else if (mouseIsPressed && mouseX >= Ax[i] && mouseY >= Ay[i]) {
      Ax[i] = Ax[i] - ((Ax[i] - mouseX) / 100);
      Ay[i] = Ay[i] - ((Ay[i] - mouseY) / 100);
      print(mouseIsPressed);
    } else if (mouseIsPressed && mouseX >= Ax[i] && mouseY <= Ay[i]) {
      Ax[i] = Ax[i] - ((Ax[i] - mouseX) / 100);
      Ay[i] = Ay[i] + ((mouseY - Ay[i]) / 100);
      print(mouseIsPressed);
    } else if (mouseIsPressed && mouseX <= Ax[i] && mouseY >= Ay[i]) {
      Ax[i] = Ax[i] + ((mouseX - Ax[i]) / 100);
      Ay[i] = Ay[i] - ((Ay[i] - mouseY) / 100);
      print(mouseIsPressed);
      //STADARD BEHAVIOR, drift and bounce off walls  
    } else {
      Ax[i] = Ax[i] + Ac[i];
      Ay[i] = Ay[i] + Ad[i];
    }
    //BOUNCE OFF SIDE WALLS
    if (Ax[i] >= width - 40 || Ax[i] <= 20) {
      Ac[i] = Ac[i] * -1;
    }
    //BOUNCE OFF TOP AND BOTTOM WALLS
    if (Ay[i] >= height - 40 || Ay[i] <= 20) {
      Ad[i] = Ad[i] * -1;
    }
    //DRAW ACTUAL SHAPE
    // fill(255, Ax[i] / 10 + 50, Ay[i] / 10 + 50, Ab[i]);
    fill(aRed[i], aGreen[i], aBlue[i]);
    rectMode(CENTER, CENTER);
    rect(Ax[i], Ay[i], Aa[i], Aa[i]*2);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(12);
    // text(cities[i], Ax[i], Ay[i]);
  } 

  for (var i = 0; i < 20; i++) {//cities.length; i++) {
    if (mouseIsPressed && mouseX <= Ax[i] && mouseY <= Ay[i]) {
      Ax[i] = Ax[i] + ((mouseX - Ax[i]) / 100);
      Ay[i] = Ay[i] + ((mouseY - Ay[i]) / 100);
      print(mouseIsPressed);
    } else if (mouseIsPressed && mouseX >= Ax[i] && mouseY >= Ay[i]) {
      Ax[i] = Ax[i] - ((Ax[i] - mouseX) / 100);
      Ay[i] = Ay[i] - ((Ay[i] - mouseY) / 100);
      print(mouseIsPressed);
    } else if (mouseIsPressed && mouseX >= Ax[i] && mouseY <= Ay[i]) {
      Ax[i] = Ax[i] - ((Ax[i] - mouseX) / 100);
      Ay[i] = Ay[i] + ((mouseY - Ay[i]) / 100);
      print(mouseIsPressed);
    } else if (mouseIsPressed && mouseX <= Ax[i] && mouseY >= Ay[i]) {
      Ax[i] = Ax[i] + ((mouseX - Ax[i]) / 100);
      Ay[i] = Ay[i] - ((Ay[i] - mouseY) / 100);
      print(mouseIsPressed);
      //STADARD BEHAVIOR, drift and bounce off walls  
    } else {
      Ax[i] = Ax[i] + Ac[i];
      Ay[i] = Ay[i] + Ad[i];
    }
    //BOUNCE OFF SIDE WALLS
    if (Ax[i] >= width - 40 || Ax[i] <= 20) {
      Ac[i] = Ac[i] * -1;
    }
    //BOUNCE OFF TOP AND BOTTOM WALLS
    if (Ay[i] >= height - 40 || Ay[i] <= 20) {
      Ad[i] = Ad[i] * -1;
    }
    //DRAW ACTUAL SHAPE
    // fill(255, Ax[i] / 10 + 50, Ay[i] / 10 + 50, Ab[i]);
    fill(aRed[i], aGreen[i], aBlue[i], 200);
    ellipse(Ax[i], Ay[i],22);
    // text(cities[i], Ax[i], Ay[i]);
  } 





  
  


}
