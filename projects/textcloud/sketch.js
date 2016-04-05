// text arrays
var goal = ["No Poverty", "Zero Hunger", "Good Health\nand Well-Being", "Quality Education", "Gender Equality", "Clean Water\nand Sanitation", "Affordable\nClean Energy", "Decent Work and\nEconomic Growth", "Industry, Innovation\nand Infrastructure", "Reduced Inequalities", "Sustainable Cities\nand Communities", "Responsible Consumption\nand Production", "Climate Action", "Life Below Water", "Life on Land", "Peace, Justice, and\nStrong Institutions", "Partnerships\nfor the Goals"];
var cloud = ["No Poverty", "Zero Hunger", "Good Health\nand Well-Being", "Quality Education", "Gender Equality", "Clean Water\nand Sanitation", "Affordable\nClean Energy", "Decent Work and\nEconomic Growth", "Industry, Innovation\nand Infrastructure", "Reduced Inequalities", "Sustainable Cities\nand Communities", "Responsible Consumption\nand Production", "Climate Action", "Life Below Water", "Life on Land", "Peace, Justice, and\nStrong Institutions", "Partnerships\nfor the Goals"];
var blurb = ["End poverty in all its forms everywhere.", "End hunger, achieve food security and improved nutrition,\nand promote sustainable agriculture.", "Ensure healthy lives and promote well-being for all ages.", "Ensure inclusive and quality education for all\nand promote lifelong learning.", "Achieve gender equality and empower all women and girls.", "Ensure access to water and sanitation for all.", "Ensure access to affordable, reliable, sustainable,\nand modern energy for all.", "Promote inclusive and sustainable economic growth,\nemployment, and decent work for all.", "Build resilient infrastructure, promote sustainable industrialization,\nand foster innovation.", "Reduce inequality within and among countries.", "Make cities inclusive, safe, resilient, and sustainable.", "Ensure sustainable consumption and production patterns.", "Take urgent action to combat climate change and its impacts.", "Conserve and sustainably use the oceans, seas, and marine resources.", "Sustainably manage forests, combat desertification, halt and reverse\nland degradation, halt biodiversity loss.", "Promote just, peaceful, and inclusive societies.", "Revitalize the global partnership for sustainable development."];

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
var r = 28;
var g = 117;
var b = 186;


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
  textFont('Fredericka the Great');

  //draw the active text clouds
  for (var i = 0; i < goal.length; i++) {
    x[i] = x[i] + s[i];
    noStroke();
    fill(255, 255, 255, t[i]);
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
    fill(255, 255, 255, bt[j]); //sets tranparency to randomly assigned value
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
    fill(255, 255, 255, blurbOpacity[k]);
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
    fill(255, 255, 255);
    text("United Nations", width / 2, height * 0.33);
    textSize(height * 0.04);
    text("Sustainable Development Goals\nBringing a sustainable future into view", width / 2, height * 0.4);    
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
