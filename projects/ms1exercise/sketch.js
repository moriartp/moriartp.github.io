var data;

 function preload() {
 var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json';
 data = loadJSON(url);
 }

function setup() {
  createCanvas(windowWidth,windowHeight*20);
}
console.log('data');
function draw() {
  background(0);
  textSize(20);
  fill(222);
  for (var i = 0; i < data.colors.length; i++){
     fill(data.colors[i].hex)
     text(data.colors[i].hex, 10, 48+i*80);
     text(data.colors[i].hex[1], 240, 48+i*80);
     rect(10,50+i*80,800,40);
     
     if (mouseY> 48+i*80 && mouseY < 48+i*80+40){
        fill(255);
        text(data.colors[i].color, mouseX, mouseY);
     }
  }
}