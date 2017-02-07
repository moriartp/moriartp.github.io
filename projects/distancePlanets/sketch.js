var scaler;
var earthTo = ["The Moon","Venus","Mars","Mercury","Jupiter","Saturn","Uranus","Neptune"];
var mi = [238900,25724767,48678219,56974146,390674710,792248270,1692662530,2703959960];
var planetHex = ["#FFFFF1","#f4f235","#BE0000","#c0c0c0","#FF7400","#FFC949","#49FFFF","#5F7EFF"];
var starX = [];
var starY = [];
var transp = [];
var scaleIncrements = [3000000000,2000000000,1000000000];
var diam = [3474,12104,6780,4780,139822,116464,50724,49248];
var venus;
var jupiter;

function preload(){
  // table = loadTable("data/distanceX.txt", "csv", "header");
  // venus = loadImage("assets/galpic_venus.png");
  // jupiter = loadImage("assets/galpic_jupiter.png");
}


function setup() {
  // create canvas
  createCanvas(windowWidth,windowHeight);
  textSize(15)
  noStroke();
  textFont('Orbitron');

  // create slider
  scaler = createSlider(24000, 1300000, .01);
  scaler.position(windowWidth*0.05, 20);
  scaler.size(windowWidth*0.9, 20);
  
  for (var j=0;j<=1000;j++){
   starX[j] = random(0,windowWidth);
   starY[j] = random(0,windowHeight);
  }  
  
  
  
}

function draw() {
  
  background(0);
  
  // fill(255,255,0,66);
  // ellipse(-695680000/500,windowWidth/2,1391400000/500);
  
  for (var j=0;j<=1000;j++){
    transp[j] = random(100,185);
    fill(255,255,255,transp[j]);
    ellipse(starX[j],starY[j],2.5);
  }
  fill(255);
  imageMode(CENTER);
  
  
  var scaleVal = scaler.value();
  textAlign(LEFT,CENTER);
  text("One px width = "+scaler.value()+" miles",155,55);  
  
  for(var i = 0; i <= 7; i++){
    text(earthTo[i]+"\n"+mi[i]+" miles",100,250+i*150);
    // text(mi[i]+" miles",150,250+i*150);
    noStroke();
    rect(300,240+i*150,mi[i]/scaler.value(),0.25);
    fill(planetHex[i]);
    ellipseMode(CENTER);
    ellipse(300+mi[i]/scaler.value(),240+i*150,diam[i]/500);
    fill(255);
    if(mouseY <= (240+i*150 + diam[i]/500) && mouseY >= (240+i*150 - diam[i]/500) && mouseX >= 300+mi[i]/scaler.value()-diam[i]/500 && mouseX <= 300+mi[i]/scaler.value() + diam[i]/500){
      textAlign(CENTER);
      fill(255);
      text("Distance equal to\n"+round(mi[i]/10353)+" flights from\nNYC to Melbourne.", mouseX,mouseY-45);
      fill(255);
      textAlign(LEFT);
    }
  }
  // image(venus,300+25724767/scaler.value(),240+1*150,12104*3.3/500,12104*3.3/500);
  // image(jupiter,300+390674710/scaler.value(),240+4*150,139822*1.155/500,139822*1.155/500);
  ellipse(300+792248270/scaler.value(),240+5*150,122200*2/500,5);
  
  
  fill(255,255,255);
  rect(300,height-100,3000000000/scaler.value(),5);
  textAlign(CENTER);
  text("Three Billion Miles", (300+3000000000/scaler.value()),height-75);
  text("Two Billion Miles", (300+2000000000/scaler.value()),height-75);
  text("One Billion Miles",(300+1000000000/scaler.value()),height-75);  

  rect(300+3000000000/scaler.value(),200,0.25,2115);
  rect(300+2000000000/scaler.value(),200,0.25,2115);
  rect(300+1000000000/scaler.value(),200,0.25,2115);  
  
  noStroke();
  fill(22,222,22,111);
  // rect(300,height-50,3000000000/scaler.value(),20);
  rect(300,height-50,3000000000/1300000,20);
  rect(300,height-50,scaler.value()/563,20);


  text("Distance from Earth",300,150);

  // ellipse("One Billion Miles", (3000000000/scaler.value())*0.333,700);
  // ellipse("Two Billion Miles", (3000000000/scaler.value())*0.667,700);
  // ellipse("Three Billion Miles",(3000000000/scaler.value())*1,700);     

  
  
  
}





// var table;
// var scaler;
// var rSlider, gSlider, bSlider;

// function preload(){
//   table = loadTable("data/distanceX.txt", "csv", "header");
// }


// function setup() {
//   createCanvas(windowWidth,windowHeight);
//   for (var r = 0; r < table.getRowCount(); r++)
//     for (var c = 0; c < table.getColumnCount(); c++) {
//       print(table.getString(r, c));
//     }
    
//   scaler = createSlider(1, 1000000, 1);
//   scaler.position(20, 20);
  
//   // create sliders
//   rSlider = createSlider(0, 255, 100);
//   rSlider.position(20, 20);
//   gSlider = createSlider(0, 255, 0);
//   gSlider.position(20, 50);
//   bSlider = createSlider(0, 255, 255);
//   bSlider.position(20, 80);  
  
  
  
// }

// function draw() {

//   var rr = rSlider.value();
//   var g = gSlider.value();
//   var b = bSlider.value();
//   background(rr, g, b);
//   text("red", 165, 35);
//   text("green", 165, 65);
//   text("blue", 165, 95);

//   // background(0);
//   fill(255);
  
//   var scaleVal = scaler.value();
//   text(scaler.value(),222,10);
  
//   for (var r = 0; r <= table.getRowCount()+1; r++) {
//     var currentRow = table.getRow(r);
//     var earthTo = currentRow.getString(0);
//     var mi = currentRow.getNum(1);
    
//     text (earthTo,20,100+r*30);
//     text (mi,200,100+r*30);
//     rect(20, 100+r*30, mi/1000000,15);

//   }
  
  
  
  
// }