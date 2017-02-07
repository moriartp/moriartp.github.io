// var dist1 = [1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000,10000000000];
var dist1 = [10000000000,1000000000,100000000,10000000,1000000,100000,10000,1000,100,10,1];
var gg = [0,22,44,66,88,111,133,155,177,199,211];
var slideMe;


function setup() {
  slideMe = createSlider(1,10000000,0.1);
  slideMe.position(20,80);
 slideMe.size(windowWidth*0.95);
}

function draw() {
  createCanvas(windowWidth,windowHeight);
  background(0);
//  text(dist1,222,222);
  text(slideMe.value(),111,111);
  var scaleMe = slideMe.value();
  
 for(var i = 0; i <= 10; i++){
    fill(gg[i],gg[i],255);
    text(gg[i],5,55*i)
    stroke(233);
    rect(50, windowHeight*0.25, dist1[i]/scaleMe, 320);
 }
}