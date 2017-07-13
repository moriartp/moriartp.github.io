// text arrays
var goal = ["Infrastructure", "Enable", "Service", "Innovation", "Empower"];
var cloud = ["Infrastructure", "Enable", "Service", "Innovation", "Empower","Infrastructure", "Enable", "Service", "Innovation", "Empower","Infrastructure", "Enable", "Service", "Innovation", "Empower"];
var blurb = ["Ensure the core structure is stable, secure, and reliable", "Enable academic initiative of the university", "Provide best customer support.", "Provide platform for innovation.", "Recruit and maintain the best team of people"];

///declare active cloud attribute containers
var x = []; //x position
var y = []; //y position
var s = []; //speed of movement
var h = []; //height... textSize
var w = []; //not used yet
var t = []; //transparency

//declare inactive cloud  attribute containters
var bx = []; //x position
var by = []; //y position
var bs = []; //speed of movement
var bh = []; //height... textSize
var bw = []; //not used yet
var bt = []; //transparency

//declare blurb attribute containers for verbose goal descriptions
var blurbOpacity = [];
var blurbX = [];
var blurbSpeed = [];

//additional variables
var trigger = 0; //mouse relase counter

//COLOR00, setting global rgb values
var r = 255;
var g = 255;
var b = 255;


///////SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //randomly assign attributes for active text clouds
  for (var i = 0; i < goal.length; i++) {
    x[i] = random(width * 0.31, width * 0.69); //start position for x
    y[i] = random(height * 0.05, height * 0.7); //verticle positioning
    t[i] = random(5, 10); //transparency range
    s[i] = random((width * 0.0005) * -1, width * 0.0005); //speed of text movement
    if (width > height) { //make text size responsive to wwidth OR height based on which is greater
      h[i] = random(height * 0.11, height * 0.12);
    } else {
      h[i] = random(width * 0.11, width * 0.12);
    }
    w[i] = random(width * 0.2, width * 0.5); //still not used
  }
  //randomly assign attributes for inactive text clouds
  for (var j = 0; j < cloud.length; j++) {
    bx[j] = random(0, width); //start position for x
    by[j] = random(0, height); //verticle positioning of text
    bt[j] = random(9, 19); //transparency range
    bs[j] = random((width * 0.0005) * -1, width * 0.0005); // range of speed of movement
    bh[j] = random(height * 0.05, height * 0.6); //range of text size (can be a wider range since this text will never be made 'active')
    bw[j] = random(0, width); //still not used
  }
  //assign attribute value for the verbose blurb descriptions
  for (var k = 0; k < blurb.length; k++) {
    blurbOpacity[k] = 0;
    blurbX[k] = width * 0.01;
    blurbSpeed = width * 0.1;
  }
}

//DRAW
function draw() {
  background(r, g, b); //erase 60x/sec
  textFont('Arial');

  //draw the active text clouds
  for (var i = 0; i < goal.length; i++) {
    x[i] = x[i] + s[i];
    noStroke();
    fill(0, 0, 0, t[i]);
    textAlign(CENTER, CENTER);
    textSize(h[i]);
    text(goal[i], x[i], y[i]);
    //reverse course if cloud runs off screen
    if (x[i] >= width * 0.7 || x[i] <= width * 0.3) { //limits range of movement so that text is alows visible on the canvas
      s[i] = s[i] * -1; //inverts direct of movement when exceeds x range limit
    }
    //draw...remove transparency from selected goal and increase text size until transparency = 255
    if (t[i] >= 21 && t[i] < 255) { //sets transparency beyond assignable range
      t[i] = t[i] + 5; //fade in by ever increasing transparency value (increases opacity)
      h[i] = h[i] + height * 0.0002; //slightly increases text sixe
    }
  }

  //draw the inactive text clouds
  for (var j = 0; j < cloud.length; j++) {
    bx[j] = bx[j] + bs[j]; //repositions on x axis to create movement
    noStroke();
    fill(0, 0, 0, bt[j]); //sets tranparency to randomly assigned value
    textAlign(CENTER, CENTER);
    textSize(bh[j]); //sets text size to randomlyu assigned value
    text(cloud[j], bx[j], by[j]);
    //reverse course if cloud runs off screen
    if (bx[j] >= width + width * 0.25 || bx[j] <= 0 - width * 0.25) { //wider range b/c inactive text can run well off screen befor reversing course.
      bs[j] = bs[j] * -1;
    }
  }
  //add blurbs to the bottom of the page at a slow fade
  for (var k = 0; k < blurb.length; k++) {
    textSize(width * 0.025);
    textAlign(LEFT);
    fill(0, 0, 0, blurbOpacity[k]);
    text(blurb[k], blurbX[k], height * 0.9);
    if (blurbOpacity[k] >= 21 && blurbOpacity[k] < 222) {
      blurbOpacity[k] = blurbOpacity[k] + 0.5; //very slow fade to allow audience to first experience the activated text cloud, then reveal for additional context
    }
  }
  //Set Landing Text
  if (trigger === 0) {
    textSize(height * 0.1);
    fill(0, 173, 237, 99); //(171, 194, 43), color00 (0,173,237,99);
    textAlign(CENTER, CENTER);
    fill(0, 0, 0);
    text("About IT", width / 2, height * 0.33);
    textSize(height * 0.04);
    text("What we do", width / 2, height * 0.4);    
    textSize(width * 0.01);
    textFont('Varela Round');    
    text("Click the screen to begin", width / 2, height * 0.95);
  }
  //Count off the goals in the corner
  if (trigger > 0) {
    textSize(height * 0.025);
    textFont('Varela Round');
    fill(250, 250, 250, 133);
    text("Goal: " + trigger, width * 0.03, height * 0.03);
  }
}

///goals emerge/recede by mouse trigger
function mouseReleased() {
  //return previous goal to the cloudscape
  t[trigger - 1] = random(10, 20);
  ///bring next goal to clear view
  t[trigger] = 21; //value >20 will initiate fade in via conditional
  blurbOpacity[trigger - 1] = 0;
  ///bring next goal to clear view
  blurbOpacity[trigger] = 21;

  trigger++;
  //reset trigger count
  if (trigger >= goal.length + 1) {
    trigger = 0;
  }
}
