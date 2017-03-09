

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background('#3F88C5');
  ambientLight('#E94F37');
  orbitControl();
  camera(0, 0, sin(frameCount * 0.005) * -500);
  var dirY = (mouseY / height - 0.05) * 3;
  var dirX = (mouseX / width - 0.05) * 3;
  directionalLight(275, 275, 275, dirX, -dirY, 0.25);
  for (var i = 0; i < 2500; i++) {
    translate(100*i/3,100*i/3,-500-i);
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    box(255, 255, 255);         
  }
}