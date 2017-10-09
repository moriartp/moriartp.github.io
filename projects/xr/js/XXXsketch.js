var vid;


var bg;
var imgX;
var imgR;
var imgTNS;
// var downer;
var scaleVal = 3;
var cnv;
var xr_sizer;


var dotNumerator;
var dotx = [];
var doty = [];
var dotsx = [];
var dotsy = [];

// Constants
var X_AXIS = 2;
var c1, c2;



function setup() {
   // vid = createVideo(['img/keyboard.mp4','https://p5js.org/assets/examples/assets/keyboard.mp4']);
   // vid.hide();
   // vid.loop(); 
   filter(GRAY);
   bg = loadImage("img/bg.jpg");
   imgX = loadImage("img/X.png");
   imgR = loadImage("img/R.png");
   imgTNS = loadImage("img/TNS.png");
   // downer = loadImage("img/down.png");
   xr_sizer = 1;

   dotNumerator = windowWidth/40;


   for (var j = 0; j<=dotNumerator;j++){
      dotx[j] = random(0,windowWidth);
      doty[j] = random(0,windowHeight);
      dotsx[j] = random(-0.5,0.5);
      dotsy[j] = random(-0.5,0.5);
   } 

   // c1 = color('#000');
   c1 = color('#e42a1d');
   // c2 = color('#000');
   c2 = color('#000');








}

function draw() {
   cnv = createCanvas(windowWidth, windowHeight);
   cnv.parent("container")
   background(0); 
   // setGradient(width*0.6, 0, width*0.5, height, c2, c1, X_AXIS);
   fill(255);
   imageMode(CENTER,CENTER);
   // if (width > height) {
   //    image(vid, width / 2, height / 2, width, height);
   // } else {
   //    image(vid, width / 2, height / 2, width*2,width*2);      
   // }   


   noStroke();
   fill(255,255,255,155);
   for (var i = 0; i<=dotNumerator;i++){
      dotx[i] = dotx[i]+dotsx[i];
      doty[i] = doty[i]+dotsy[i];
      ellipse(dotx[i],doty[i],3);

      if(dotx[i]<= -50 || dotx[i]>= windowWidth+5){
         dotsx[i] = dotsx[i] * -1;
      }

      if(doty[i]<= -50 || doty[i]>= windowHeight+50){
         dotsy[i] = dotsy[i] * -1;
      }

      for (var k = 0;k<=dotNumerator;k++){
         dotx[0] = mouseX;
         doty[0] = mouseY;
         // stroke(222,222,222,(333 -    (( abs(dotx[i]-dotx[k])   +   abs(doty[i]-doty[k]))      )));
         stroke(255,255,255,(288 -    (( abs(dotx[i]-dotx[k])   +   abs(doty[i]-doty[k]))      )));
         strokeWeight(2);
         line(dotx[i],doty[i],dotx[k],doty[k]);

      }
   }


   if (width > height) {
      image(imgX, width/2, height/2, (imgX.width / 3)*xr_sizer, (imgX.height / 3)*xr_sizer);
      image(imgX, width/2, height/2, (imgX.width / 3), (imgX.height / 3));
      image(imgR, width/2, height/2, imgR.width / 3, imgR.height / 3);
      image(imgTNS, width/2, height/2, imgTNS.width / 3, imgTNS.height / 3);

   } else {    
      image(imgX, width/2, height/2, (imgX.width / 5)*xr_sizer, (imgX.height /5)*xr_sizer);
      image(imgX, width/2, height/2, (imgX.width /5), (imgX.height /5));
      image(imgR, width/2, height/2, imgR.width /5, imgR.height /5);
      image(imgTNS, width/2, height/2, imgTNS.width /5, imgTNS.height /5);
   }  

}



function mouseWheel() {
      xr_sizer = xr_sizer + 1;      
}

function touchMoved() {
      xr_sizer = xr_sizer + 1;
}


function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  // if (axis == Y_AXIS) {  // Top to bottom gradient
  //   for (var i = y; i <= y+h; i++) {
  //     var inter = map(i, y, y+h, 0, 1);
  //     var c = lerpColor(c1, c2, inter);
  //     stroke(c);
  //     line(x, i, x+w, i);
  //   }
  // }  
  // else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  // }
}