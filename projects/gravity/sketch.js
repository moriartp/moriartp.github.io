//junk
var toggle1 = 0;
var toggle2 = 0;

var heads = 255; ///experimental value
var counter = 0; //can be used to create a pulse animation
var cities = ["Hydrogen", "Helium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus"];
var elementType = ["Nonmetal", "Noble Gas", "Alkaklai Metal", "Alkaline Earth Metal", "Metalloid", "Nonmetal", "Nonmetal", "Nonmetal", "Halogen", "Noble Gas", "Alkaklai Metal", "Alkaline Earth Metal", "Post-Transition Metal", "Metalloid", "Nonmetal", "Nonmetal", "Halogen", "Noble Gas"];
var tableRatings = [];

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


function preload() {
  tableRatings = loadTable("tableA.txt", "csv", "header");
}

function setup() {
  // bg = loadImage("http://www.intrawallpaper.com/static/images/Alien_Ink_2560X1600_Abstract_Background_AgLbDjN.jpg")
  createCanvas(windowWidth, windowHeight); //canvas
  textFont("Helvetica");

  //junk
  for (var i = 0; i < cities.length; i++) {
    Aa[i] = random(133, 134); // length or diameter
    Ab[i] = random(22, 111); // tranparency
    Ac[i] = random(-1, 1); // x movement 
    Ad[i] = random(-1, 1); // y movement
    Ae[i] = random(width * 0.3, width * 0.7); // fixed x
    Af[i] = random(height * 0.3, height * 0.7); // fixed y
    Ag[i] = random(0, 255); //diameter growth
    Ah[i] = 0; //fade in starting point
    Ax[i] = random(width * 0.36, width * 0.67); //random(0, 255); //x position
    Ay[i] = random(height * 0.36, height * 0.67); //random(0, 255); //y position

    aRed[i] = random(0,255);
    aGreen[i] = random(0,255);
    aBlue[i] = random(0,255);        
  }

}

function draw() {
  //basics
  // background(bg);
  noStroke();
  fill(5, 144, 144);
  textFont("Helvetica");
  textSize(11);

  //SHAPE BEHAVIOR
  //GATHER SHAPES AROUND A PRESED MOUSE neds a conditioonal statement for each 'quadrant'
  for (var i = 0; i < cities.length; i++) {
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
    rect(Ax[i], Ay[i], Aa[i], Aa[i], 11);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(12);
    text(cities[i], Ax[i], Ay[i]);
  }
}

function mouseReleased() {
  counter = counter + 1;
  if (counter > 10) {
    counter - 0;
  }
}