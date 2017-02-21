var exampleA = 4000;
var exampleB = 40000;//80000;
var mar = 10;


function setup() {
  createCanvas(windowWidth,windowHeight);
//  for (var i = 0;i<example/4;i++){
     
//  }
   
}

function draw() {
  createCanvas(windowWidth,windowHeight);
//  background(233,79,55);
  background("#fbd682");
 stroke(random(11,222),random(11,222),random(11,222));
  for (var j = 0;j<exampleA;j++){
  
   //  stroke(random(246,255),random(247,255),random(235,255));
     stroke(9,8,20);
   //  point(random(mar,windowWidth/2-mar),random(mar,windowHeight-mar));
     point(windowWidth*0.25+(random(mar,windowWidth/2-mar))*(random(-1,1)*random(-1,1)/3),windowHeight*0.5+(random(mar,windowHeight-mar))*(random(-1,1)*random(-1,1))/3);
     
  }
//  ellipse(random(windowWidth/2+mar, windowWidth-mar),random(mar,windowHeight-mar),11);
//  point(random(windowWidth/2+mar, windowWidth-mar),random(mar,windowHeight-mar));

 for (var k = 0;k<exampleB;k++){
   //  fill(0);
   // stroke(random(246,255),random(247,255),random(235,255));
   stroke(9,8,20);
   point(windowWidth/2+windowWidth*0.25+(random(mar,windowWidth/2-mar))*(random(-1,1)*random(-1,1)/3),windowHeight*0.5+(random(mar,windowHeight-mar))*(random(-1,1)*random(-1,1))/3);
     
 } 
 textFont('Andale Mono');
//  fill(246,247,235);//white
 fill(9,8,20);///black
 textAlign(CENTER,CENTER);
 textSize(12);
 noStroke();
 text("briarcliff manor, ny",windowWidth*0.25, windowHeight*0.90);
 text("upper east side, new york, ny",windowWidth*0.75, windowHeight*0.90);
 textSize(30);
 fill(9,8,20,111);///black
 text("numerosity display of populations",windowWidth/2,windowHeight*0.075);
 stroke(9,8,20);
 strokeWeight(0.5);
 noFill();
 ellipse(windowWidth*0.25,windowHeight/2,((windowWidth/2-mar)*2.5)/3);
 ellipse(windowWidth*0.75,windowHeight/2,((windowWidth/2-mar)*2.5)/3);
 textSize(82);
 noStroke();
 textStyle('bold');
 fill(9,8,20,25);///black
 text('hive',windowWidth/2,windowHeight*0.15);
  
  
}