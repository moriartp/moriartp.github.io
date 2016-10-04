var roomID = ["A100", "B200", "C300", "D400", "E500", "A120B", "B220B", "C320B", "D420B", "E520B", "A311C", "B333C", "C333C", "D411C", "E533C", "A120Z", "B220X", "C320X", "D420X", "E520X"];
var roomType = ["Classroom", "Event Space", "Technology Lab", "Classroom", "Classroom", "Classroom", "Event Space", "Technology Lab", "Classroom", "Classroom", "Classroom", "Event Space", "Technology Lab", "Classroom", "Classroom", "Classroom", "Event Space", "Technology Lab", "Classroom", "Classroom"];
var roomTools = [
   ["Projector", "DVD"],
   ["CD Player", "DVD"],
   ["I/O Device", "DVD"],
   ["Projector", "DVD"],
   ["Projector", "DVD"],
   ["Projector", "DVD"],
   ["CD Player", "DVD"],
   ["I/O Device", "DVD"],
   ["Projector", "DVD"],
   ["Projector", "DVD"],
   ["Projector", "DVD"],
   ["CD Player", "DVD"],
   ["I/O Device", "DVD"],
   ["Projector", "DVD"],
   ["Projector", "DVD"],
   ["Projector", "DVD"],
   ["CD Player", "DVD"],
   ["I/O Device", "DVD"],
   ["Projector", "DVD"],
   ["Projector", "DVD"]

];
var buildAddress = ["66 W12th Street", "65 W11th Street", "63 Fifth Avenue", "6 E16th Street", "25 E13th Street", "66 W12th Street", "65 W11th Street", "63 Fifth Avenue", "6 E16th Street", "25 E13th Street", "66 W12th Street", "65 W11th Street", "63 Fifth Avenue", "6 E16th Street", "25 E13th Street", "66 W12th Street", "65 W11th Street", "63 Fifth Avenue", "6 E16th Street", "25 E13th Street"];
var tile = [];
var selectType;
var headerDiv;
var hover;

var xpose = [];


function setup() {
   createCanvas(windowWidth, 210);


   for (var i = 0; i < 300; i++) { //roomID.length; i++) {
      tile = createDiv(roomID[i]);
      tile.html(roomID[i] + "<br>" + roomType[i] + "<br>" + roomTools[i] + "<br>" + buildAddress[i]);
      tile.size(115, 115);
      tile.style("background-color", "green");
      tile.style("border-radius", "25px");
      tile.style("padding", "10px");
      tile.style("display", "inline-block");
      tile.style("margin", "10px");

      tile.mouseOver(hoverShow);
      tile.mouseOut(hoverHide);
   }
      hover = createDiv();
      hover.class('tooltip');
      hover.position(mouseX,mouseY);
      hover.html(roomID[i] + "<br>" + roomType[i] + "<br>" + roomTools[i] + "<br>" + buildAddress[i]);
      hover.size(300, 115);
      hover.style('background-color', 'red');
      hover.style('display', 'inline-block');
}

function draw() {
   background(0);
   fill(22, 222, 22, 51);
   textSize(12);
   text("data objects rendered in DOM below", random(windowWidth / 2 - 2, windowWidth / 2 + 2), random(160, 161));
   for (var j = 0; j < 151; j++) {
      fill(22, 222, 22, 111);
      textSize(13);
      text("0", random(0, windowWidth), random(0, windowHeight));
      text("1", random(0, windowWidth), random(0, windowHeight));
      fill(22, 222, 22, 1);
      textSize(73);
      textAlign(CENTER, CENTER);
      text("CANVAS AREA", random(windowWidth / 2 - 5, windowWidth / 2 + 5), random(90, 105));
   }
}

function hoverShow() {
   hover.show();
   // hover.size(400, 400);
   tile.style("background-color", "red");
}


function hoverHide() {
   hover.hide();
}