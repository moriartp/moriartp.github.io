var earth = 10;
var compSize = 0;
var xplot;
// var inp;
var xplot = 111;


function setup() {
   inp = createInput();
   slider = createSlider(0,1000000000,1);
   var xplot = windowWidth/2;
}

function draw() {
     createCanvas(windowWidth,windowHeight);
     background(0);
     fill('#44BBA4');
     
   //  inp.align(CENTER,CENTER);
     inp.position(width*0.2,height*0.25);
     slider.position(width*0.2,height*0.05);
     
     text(inp.value(),111,111);
     ellipse(windowWidth,windowHeight/2,earth*inp.value());
   //  ellipse(windowWidth*0.667,windowHeight/2,earth*inp.value());


   // var xplot = windowWidth/2;
   //  var xplot = windowWidth/2;
   //  var xplot = xplot + 1;
     ellipse(windowWidth*0.05,windowHeight/2,earth);
}