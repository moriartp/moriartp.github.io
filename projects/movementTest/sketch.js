var dot = 1000;
var startX = [];
var startY = [];
var Xrate = [];
var Yrate = [];
var party = [
   [233, 79, 55],
   [63, 136, 197],
   [255, 111, 255],
   [111, 111, 255]
];
var partyColor = [];
var counter = 0;
var slideMe;


function setup() {
   slideMe = createSlider(0,1000000,20);
   for (var i = 0; i < dot; i++) {
      startX[i] = random(0, windowWidth);
      startY[i] = random(0, windowHeight);
      Xrate[i] = random(0.9,11.1);
      Yrate[i] = random(0.9,11.1);
      partyColor[i] = floor(random(0, 4));

   }

}

function draw() {
   createCanvas(windowWidth, windowHeight)
      // background(246,247,235);
   background(255);
   
   fill(0);
   text(slideMe.value(),222,222);
   stroke(255);
   // text(slider.value(),222,222);
   for (var i = 0; i < dot; i++) {
      // Xrate[i] = random(slider.value()+21, slider.value()+31);
      // Yrate[i] = random(slider.value()+21, slider.value()+31);
      
      
      stroke(party[i % 2]);
      fill(party[i % 2]);
      point(startX[i],startY[i]);
      ellipse(startX[i], startY[i], 4);
      startX[i] = (startX[i] - Xrate[i]);
      startY[i] = (startY[i] - Yrate[i]);
      if (startX[i] < 0 && startY[i] < 0) {
         startX[i] = windowWidth;
         startY[i] = windowHeight;
         counter = counter + 1;
      }
   }
      fill(22);
      noStroke();
      textSize(44)
      textAlign(CENTER,CENTER);
      text(counter, windowWidth / 2, windowHeight / 2);


}