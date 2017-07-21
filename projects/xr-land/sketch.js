var vid;


var bg;
var imgX;
var imgR;
var imgTNS;
var scaleVal = 3;
var cnv;
var xr_sizer;

function setup() {
   vid = createVideo(['img/keyboard.mp4','https://p5js.org/assets/examples/assets/keyboard.mp4']);
   vid.hide();
   vid.loop(); 
   filter(GRAY);
   bg = loadImage("img/bg.jpg");
   imgX = loadImage("img/X.png");
   imgR = loadImage("img/R.png");
   imgTNS = loadImage("img/TNS.png");
   xr_sizer = 1;
}

function draw() {
   cnv = createCanvas(windowWidth, windowHeight);
   cnv.parent("container")
   background(0);
   fill(255);
   imageMode(CENTER,CENTER);
   if (width > height) {
      image(vid, width / 2, height / 2, width, height);
      image(imgX, width/2, height/2, (imgX.width / 4)*xr_sizer, (imgX.height / 4)*xr_sizer);
      image(imgX, width/2, height/2, (imgX.width / 4), (imgX.height / 4));
      image(imgR, width/2, height/2, imgR.width / 4, imgR.height / 4);
      image(imgTNS, width/2, height/2, imgTNS.width / 4, imgTNS.height / 4);

   } else {
      image(vid, width / 2, height / 2, width*2,width*2);      
      image(imgX, width/2, height/2, (imgX.width / 2)*xr_sizer, (imgX.height /2)*xr_sizer);
      image(imgX, width/2, height/2, (imgX.width /2), (imgX.height /2));
      image(imgR, width/2, height/2, imgR.width /2, imgR.height /2);
      image(imgTNS, width/2, height/2, imgTNS.width /2, imgTNS.height /2);

   }   

}

// function mouseWheel() {
//    if(mouseX >width/2){
//       xr_sizer = xr_sizer + 0.0025;      
//    } else {
//       xr_sizer = xr_sizer - 0.0025;
//    }
// }

function mouseWheel() {
      xr_sizer = xr_sizer + 0.065;      

}