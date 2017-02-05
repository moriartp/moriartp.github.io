// var px1 = 1;
var moon = 4.063 * 10*-.000000001// * (10 * exp(-3));
lightX = -100000000;

function setup() {
   createCanvas(windowWidth,windowHeight);
   background(0);  
}

function draw() {
   // createCanvas(windowWidth,windowHeight);
   fill(223);
   // text("XXX",30,30);
   
   // for(var i = 0; i<50;i++){
   //    fill(222,22,222);
   //    rect(5,5+25*i,(i*1*exp(i))/1,8)
   //    fill(255);
   //    text("10xExp: "+i,5,5+25*i);
   // }
   
   // 4.063 * 10*exp(-8);
   fill(22,222,222);
   text("moon",111,111);
   text(moon*lightX,111,311);
   text(4.3*-lightX,111,411);
   
   rect(1,200,moon*lightX,100);
   rect(1,350,4.3*-lightX,100);
  
}