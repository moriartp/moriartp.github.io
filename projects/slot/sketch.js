var services = [
  "Adobe Creative Cloud",
  "Apple Discounts",
  "AGI Software",
  "Amazon Web Services",
  "Dell Discounts",
  "Mathematica",
  "Microsoft Office",
  "Rhino Modeling Software",
  "SketchUp Pro",
  "Symantec Antivirus",
  "VMware Services",
  "Wireless Print",
  "Google Storage"
];

var blurbs = [
  "You have won a subscription for the full \nAdobe Creative Cloud suite of applications.",
  "You have won special pricing on Apple products.",
  "You have won free AGI-32 software",
  "You have won a free AWS Educate grant",
  "You have won 30% off Dell consumer line products.",
  "You have won free Mathematica licensing",
  "You have won the Microsoft Office suite, \ninstallable on your personal device.",
  "You have won deep discounts on \nRhino/Flamingo/Penguin/Bongo software bundles.",
  "You have won a free SketchUp Pro Educator's License.",
  "You have won Symantec AntiVirus Corporate Edition.",
  "You have won something related to VMware",
  "You have won an installable wireless print driver.",
  "You have won unlimited cloud storage on Google Drive."  
];

// var brewer = [
//   "#9e0142",
//   "#d53e4f",
//   "#f46d43",
//   "#fdae61",
//   "#fee08b",
//   "#ffffbf",
//   "#e6f598",
//   "#abdda4",
//   "#66c2a5",
//   "#3288bd",
//   "#5e4fa2",
//   "#FFFFFE"  
// ];

var brewer = [
"#8dd3c7",
"#ffffb3",
"#bebada",
"#fb8072",
"#80b1d3",
"#fdb462",
"#b3de69",
"#fccde5",
"#d9d9d9",
"#bc80bd",
"#ccebc5",
"#ffed6f",
"#fffddd"
];

// var brewer = [
// "#a6cee3",
// "#1f78b4",
// "#b2df8a",
// "#33a02c",
// "#fb9a99",
// "#e31a1c",
// "#fdbf6f",
// "#ff7f00",
// "#cab2d6",
// "#6a3d9a",
// "#ffff99",
// "#b15928",
// "#fffddd"
// ];

var icons = [
  "fa fa-paint-brush fa-5x",
  "fa fa-apple fa-5x",
  "fa fa-sun-o fa-5x",
  "fa fa-amazon fa-5x",
  "fa fa-laptop fa-5x",
  "fa fa-calculator fa-5x",
  "fa fa-file-text fa-5x",
  "fa fa-cubes fa-5x",
  "fa fa-linode fa-5x",
  "fa fa-shield fa-5x",
  "fa fa-cloud fa-5x",
  "fa fa-print fa-5x",
  "fa fa-google fa-5x"
];

var slotPull;

var color1;
var color2;
var color3;

var slot1;
var slot2;
var slot3;

var slot1dur;
var slot2dur;
var slot3dur;

var spin1;
var spin3;
var spin2;

var cnv;
var d;
var g;

var icon1;
var icon2;
var icon3;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  textSize(44);
  textAlign(CENTER, CENTER);
  
  var millisecond = millis();

  //SET DEFAULT VALUES
  slot1 = services[0];
  slot2 = services[1];
  slot3 = services[2];

  color1 = brewer[0];
  color2 = brewer[1];
  color3 = brewer[2];

  blurb1 = blurbs[0];
  blurb2 = blurbs[1];
  blurb3 = blurbs[2];

  //CREATE ICON ELEMENT PLACEHOLDERS
  icon1 = createElement('i', ' ');
  icon1.class(icons[0]);
  icon1.position((width / 6) * 0.77, height*0.4);

  icon2 = createElement('i', ' ');
  icon2.class(icons[1]);
  icon2.position((width / 6) * 2.77, height*0.4);
  
  icon3 = createElement('i', ' ');
  icon3.class(icons[2]);
  icon3.position((width / 6) * 4.77, height*0.4);  

}

function draw() {
  background(255);

  slot1dur = millis();
  
  ///RANDOMIZER
  if (slot1dur < slotPull + 1000) {
    spin1 = floor(random(0, 13));
    slot1 = services[spin1];
    color1 = brewer[spin1];
    blurb1 = blurbs[spin1];
    icon1.class(icons[spin1]);
    fill(color1);
  }

  if (slot1dur < slotPull + 2000) {
    spin2 = floor(random(0, 13));
    slot2 = services[spin2];
    color2 = brewer[spin2];
    blurb2 = blurbs[spin2];
    icon2.class(icons[spin2]);
    fill(color2);
  }

  if (slot1dur < slotPull + 3000) {
    spin3 = floor(random(0, 13));
    slot3 = services[spin3];
    color3 = brewer[spin3];
    blurb3 = blurbs[spin3];
    icon3.class(icons[spin3]);
    fill(color3);
  }

  // SLOT1
  stroke(0);
  strokeWeight(24);  
  fill(color1);
  rect((width / 3) * 0, height / 3, width / 3, height / 3);
  noStroke();
  fill(0);
  text(slot1, (width / 6) * 1, height*0.625);

  // SLOT2
  stroke(0);
  strokeWeight(24);
  fill(color2);
  rect((width / 3) * 1, height / 3, width / 3, height / 3);
  noStroke();
  fill(0);
  text(slot2, (width / 6) * 3, height*0.625);

  // SLOT3
  stroke(0);
  strokeWeight(24);  
  fill(color3);
  rect((width / 3) * 2, height / 3, width / 3, height / 3);
  noStroke();  
  fill(0);
  text(slot3, (width / 6) * 5, height*0.62);


  //DETERMINE IF A WINNER
  if ((slot1dur > slotPull + 3500) && (slot1 === slot2 && slot1 === slot3)) {
    fill(random(0, 255), random(0, 55), random(200, 255));
    textSize(188);
    text("JACKPOT!", width / 2, height * 0.2);
    fill(0);
    textSize(44);

    text(blurb1, width / 2, height * 0.75);
  } else if ((slot1dur > slotPull + 3500) && (slot1 === slot2 || slot1 === slot3 || slot2 === slot3)) {
    fill(random(0, 255), random(0, 55), random(200, 255));
    textSize(111);
    text("WINNER!", width / 2, height * 0.2);
    fill(0);
    textSize(44);
    if (slot1 === slot2 || slot1 === slot3) {
      text(blurb1, width / 2, height * 0.75);
    } else {
      text(blurb2, width / 2, height * 0.75);
    }
    
  } else if ((slot1dur > slotPull + 3500)) {
    text("SORRY\nNOT A WINNER", width / 2, height * 0.2);
    text("TRY AGAIN", width / 2, height * 0.75);
  }
}

// this function fires after the mouse has been
// released, resets starting point of slot duration
function mouseReleased() {
  slotPull = millis();
}