var vid;

var bg;
var imgX;
var imgR;
var imgTNS;
var scaleVal = 3;
var cnv;


function setup() {
   vid = createVideo(['img/code.mov','https://p5js.org/assets/examples/assets/fingers.webm']);
   vid.hide();
   filter(GRAY);
   bg = loadImage("img/bg.jpg");
   imgX = loadImage("img/X.png");
   imgR = loadImage("img/R.png");
   imgTNS = loadImage("img/TNS.png");
}

function draw() {
   cnv = createCanvas(windowWidth, windowHeight);
   cnv.parent("container")
   background(0);
   fill(255);
   imageMode(CENTER);
   if (width > height) {
      image(vid, width / 2, height / 2, bg.width / 2, bg.height / 2);
   } else {
      image(vid, width / 2, height / 2, bg.width*3, bg.height*3);      
   }
   image(imgX, mouseX, mouseY, imgX.width / 4, imgX.height / 4);
   image(imgR, mouseX, mouseY, imgR.width / 4, imgR.height / 4);
   image(imgTNS, mouseX, mouseY, imgTNS.width / 4, imgTNS.height / 4);

}

function mousePressed() {
    vid.loop(); // set the video to loop and start playing
}