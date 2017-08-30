var dotNumerator;
var dotx = [];
var doty = [];
var dotsx = [];
var dotsy = [];

function setup() {
   dotNumerator = windowWidth/25;

   for (var j = 0; j<=dotNumerator;j++){
      dotx[j] = random(0,windowWidth);
      doty[j] = random(0,windowHeight);
      dotsx[j] = random(-0.5,0.5);
      dotsy[j] = random(-0.5,0.5);
   } 
}

function draw() {
   cnv = createCanvas(windowWidth, windowHeight);
   cnv.parent("container")
   background(0); 

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
}

