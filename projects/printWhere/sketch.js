var step = 0;
var aval = 0;
var bval = 0;


var selectA = ['home','school'];
var selectB = ['bw','color','plotter'];
var resultC = ['email','web','lab'];
var value = 0;
var oo; //one thrid window width
var pp; //one quarter window width


function setup() {
	createCanvas(windowWidth,windowHeight);
	oo = windowWidth*0.33;
	pp = windowWidth*0.25;
}

function draw() {
	background(255);
	textAlign(CENTER,CENTER);
	fill(222);
	text(step+ " " +oo,100,100)
	// ellipse(111,131,111,111);
	// text(selectA[1],111,131);

	for(var i = 0; i <selectA.length; i++){
		fill(value-150);
		ellipse(oo+oo*i,height*0.5,oo,oo);
		fill(255);
		text(selectA[i]+ " " +oo,oo+oo*i,height/2);
	}

	for(var j = 0; j <selectB.length; j++){
		fill(value-150);
		ellipse((width)+200+200*j,400,111,111);
		fill(255);
		text(selectB[j],(width)+200+200*j,400);
	}

	for(var k = 0; k <resultC.length; k++){
		fill(value-150);
		ellipse((width)+200+200*k,600,111,111);
		fill(255);
		text(resultC[k],(width)+200+200*k,600);
	}
}

function mouseReleased() {
	if(step === 0) 
		if(mouseX < width/2){
		step = 1;
		value = 222;
	} else {
		step = 2;
		value = 333;
	}

	// if (value === 0) {
	// 	value = 255;
	// } else {
	// 	value = 0;
	// }
	// console.log(value);
}