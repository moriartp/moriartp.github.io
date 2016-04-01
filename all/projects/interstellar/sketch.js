var table;
var shrinker = 100;
var isLoaded = false;
var mi = 19170000000000; //miles in a parsec... used to convert parsecs to miles
var slide = 0;
var fade = 167;
var grow = 1;
var zoom = 0.015;
var slideStartRange = 0;
var slideEndRange = 5000;
var topSpeed = [25, 200, 2000, 100000, 670600000, 1000000000000];
var displaySpeed = ["25", "200", "2,000", "100,000", "670.6 million", "1 trillion"];
var vehicle = 0;
var vehicleDesc = ["Bike", "Car", "Jet ", "Juno", "Light", "Enterprise"];


//starwarsification
var bx = []; //x position
var by = []; //y position
var bs = []; //sets/resets the size of passing stars to 0
var bi = []; //rate of increase in star size
var bj = []; //moves star along X & Y


function preload() {
  img1 = loadImage("assets/sphere.jpg");
  img2 = loadImage("assets/dark.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Orbitron');
  image(img1, width / 2, height * 0.667);
  image(img2, 0, 0);
  table = loadTable("https://raw.githubusercontent.com/astronexus/HYG-Database/master/hygdata_v3.csv", "csv", "header", parseData);

  var txt = createDiv('');
  txt.id("top-bg");
  txt.position(width - 80, 0);


  //starwarsification
  for (var j = 0; j < 250; j++) {
    bx[j] = random(0, width); //start position X
    by[j] = random(0, height); //start position Y
    bs[j] = random(0, width * 0.00005); // resets size of passing stars
    bi[j] = random(0.03, 0.09); //increase rate of size of star
    bj[j] = random(3, 16); //rate of movement alongf X & Y

  }

}

function parseData() {
  //count the rows & columns
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");
  print(table.getColumn("dist"));

  //cycle through the table
  for (var r = 0; r < 119614; r++) //4665; r++) //< 119614; r++)
    for (var c = 7; c < 9; c++) {
    print(table.getString(r, c));
  }
  isLoaded = true; //star drawing only after setup is complete
}

function draw() {
    noStroke();
    if (isLoaded) {

      background(0);
      ///SET SLIDE RANGE
      if (slide === 0) {
        slideStartRange = 0;
        slideEndRange = 2343;

      } else if (slide === 0.5) {
        slideStartRange = 2344;
        slideEndRange = 4665;

      } else if (slide === 1) {
        slideStartRange = 4665;
        slideEndRange = 6977;

      } else if (slide === 1.5) {
        slideStartRange = 6977;
        slideEndRange = 9329;

      } else if (slide === 2) {
        slideStartRange = 9329;
        slideEndRange = 11600;

      } else if (slide === 2.5) {
        slideStartRange = 11600;
        slideEndRange = 13941;

      } else if (slide === 3) {
        slideStartRange = 13941;
        slideEndRange = 16251;

      } else if (slide === 3.5) {
        slideStartRange = 16251;
        slideEndRange = 18632;

      } else if (slide === 4) {
        slideStartRange = 18632;
        slideEndRange = 20930;

      } else if (slide === 4.5) {
        slideStartRange = 20930;
        slideEndRange = 23128;


      } else if (slide === 5) {
        slideStartRange = 23128;
        slideEndRange = 25692;

      } else if (slide === 5.5) {
        slideStartRange = 25692;
        slideEndRange = 28337;

      } else if (slide === 6) {
        slideStartRange = 28337;
        slideEndRange = 30894;

      } else if (slide === 6.5) {
        slideStartRange = 30894;
        slideEndRange = 33605;

      } else if (slide === 7) {
        slideStartRange = 33605;
        slideEndRange = 36343;

      } else if (slide === 7.5) {
        slideStartRange = 36343;
        slideEndRange = 38997;

      } else if (slide === 8) {
        slideStartRange = 38997;
        slideEndRange = 41577;

      } else if (slide === 8.5) {
        slideStartRange = 41577;
        slideEndRange = 44055;

      } else if (slide === 9) {
        slideStartRange = 44055;
        slideEndRange = 46453;

      } else if (slide === 9.5) {
        slideStartRange = 46453;
        slideEndRange = 48878;

      } else if (slide === 10) {
        slideStartRange = 48878;
        slideEndRange = 51264;

      } else if (slide === 10.5) {
        slideStartRange = 51264;
        slideEndRange = 53608;

      } else if (slide === 11) {
        slideStartRange = 53608;
        slideEndRange = 55937;

      } else if (slide === 11.5) {
        slideStartRange = 55937;
        slideEndRange = 58341;

      } else if (slide === 12) {
        slideStartRange = 58341;
        slideEndRange = 60795;

      } else if (slide === 12.5) {
        slideStartRange = 60795;
        slideEndRange = 63239;


      } else if (slide === 13) {
        slideStartRange = 63239;
        slideEndRange = 65656;

      } else if (slide === 13.5) {
        slideStartRange = 65656;
        slideEndRange = 68173;


      } else if (slide === 14) {
        slideStartRange = 68173;
        slideEndRange = 70682;

      } else if (slide === 14.5) {
        slideStartRange = 70682;
        slideEndRange = 73172;

      } else if (slide === 15) {
        slideStartRange = 73172;
        slideEndRange = 75656;

      } else if (slide === 15.5) {
        slideStartRange = 75656;
        slideEndRange = 78137;

      } else if (slide === 16) {
        slideStartRange = 78137;
        slideEndRange = 80560;

      } else if (slide === 16.5) {
        slideStartRange = 80560;
        slideEndRange = 82924;

      } else if (slide === 17) {
        slideStartRange = 82924;
        slideEndRange = 85374;

      } else if (slide === 17.5) {
        slideStartRange = 85374;
        slideEndRange = 87854;

      } else if (slide === 18) {
        slideStartRange = 87854;
        slideEndRange = 90390;

      } else if (slide === 18.5) {
        slideStartRange = 90390;
        slideEndRange = 92985;

      } else if (slide === 19) {
        slideStartRange = 92985;
        slideEndRange = 95581;

      } else if (slide === 19.5) {
        slideStartRange = 95581;
        slideEndRange = 98124;

      } else if (slide === 20) {
        slideStartRange = 98124;
        slideEndRange = 100808;

      } else if (slide === 20.5) {
        slideStartRange = 100808;
        slideEndRange = 103317;

      } else if (slide === 21) {
        slideStartRange = 103317;
        slideEndRange = 105803;

      } else if (slide === 21.5) {
        slideStartRange = 105803;
        slideEndRange = 108256;

      } else if (slide === 22) {
        slideStartRange = 108256;
        slideEndRange = 110717;

      } else if (slide === 22.5) {
        slideStartRange = 110717;
        slideEndRange = 113198;

      } else if (slide === 23) {
        slideStartRange = 113198;
        slideEndRange = 115624;
      } else if (slide === 23.5) {
        slideStartRange = 115624;
        slideEndRange = 119614;
      }


      //GET THE DATA FROM THE STAR TABLE
      for (var r = slideStartRange; r < slideEndRange; r++) //4966; r++)
        for (var c = 7; c < 9; c++) {
        //        var id = table.getString(r, 0);
        var ra = table.getNum(r, 7);
        var dec = table.getNum(r, 8);
        var distance = table.getNum(r, 9);
        //        var magnitude = table.getNum(r, 13);

        //draw stars by subtracting slide value and using propotional remainder as percent value along the x axis. y positiong rendered with +/- vertical units from middle 
        fill(177, 177, 177, random(111, 222));
        var rau = width / (1 / 2); //right ascention units --THIS COULD BE REMOVED IF SLIDE RANGES ARE SET
        if (distance < 100000) {
          ellipse(width - ((ra - slide) * rau), (height / 2) - ((height / 2) * (dec / 90)), (4 - (distance / 250)) / 2, (4 - (distance / 250)) / 2);
          //feed star info based on user interaction (slide and vehilcle selection)
          if (mouseX <= width - (ra - slide) * rau + 3 && mouseX >= width - (ra - slide) * rau - 3 && mouseY <= ((height / 2) - ((height / 2) * (dec / 90)) + 3) && mouseY >= ((height / 2) - ((height / 2) * (dec / 90))) - 3) {
            fill(0, 222, 0, 111);
            textSize(height * 0.05);
            textFont("Orbitron");
            textAlign(CENTER);
            if (vehicle === 5) {
              text(nf((((distance * mi) / topSpeed[vehicle]) / 24), 2, 2) + " days", width / 2, height * 0.95);
            } else if (vehicle === 4) {
              text(nf((((distance * mi) / topSpeed[vehicle]) / (24 * 365.25)), 2, 2) + " years", width / 2, height * 0.95);
            } else if (vehicle <= 3 && vehicle >= 2) {
              text(nf((((distance * mi) / topSpeed[vehicle]) / (24 * 365.25 * 1000000)), 2, 2) + " million years", width / 2, height * 0.95);
            } else {
              text(nf((((distance * mi) / topSpeed[vehicle]) / (24 * 365.25 * 1000000000)), 2, 2) + " billion years", width / 2, height * 0.95);
            }
            textSize(height * 0.02);
            textFont("Orbitron");
            if (mouseX <= width * 0.05 || mouseX >= width - width * 0.05 || mouseY <= height * 0.111 || mouseY >= height - height * 0.05) {
              text("RA: " + nf(ra, 2, 2) + " hours " + "\nDEC: " + nf(dec, 2, 2) + " degrees", width / 2, height / 2); /// + "\nDistance/250: " + nf(distance/250,3,3) if wanting to check size variable
              line(mouseX, mouseY, width / 2, height / 2);
            } else {
              text("RA: " + nf(ra, 2, 2) + " hours" + "\nDEC: " + nf(dec, 2, 2) + " degrees", width - (ra - slide) * rau, (height / 2) - ((height / 2) * (dec / 90)) - height * 0.1); /// + "\nDistance/250: " + nf(distance/250,3,3) if wanting to check size variable

            }
            textFont("Roboto");
            textSize(height * 0.025);
            text("Travel time at top speed:", width / 2, height * 0.9);
            textFont("Orbitron");
          }
        }
        if (shrinker <= 30 && mouseX <= width - (ra - slide) * rau + 3 && mouseX >= width - (ra - slide) * rau - 3 && mouseY <= ((height / 2) - ((height / 2) * (dec / 90)) + 3) && mouseY >= ((height / 2) - ((height / 2) * (dec / 90))) - 3) {
          fill(random(222, 233), random(222, 233), random(44, 55));
          ellipse(mouseX, mouseY, grow, grow);
          grow = grow + zoom * width;
          if (grow >= width * 0.3) {
            zoom = 0;
            if (width > height) {
              textSize(height * 0.02);
            } else {
              textSize(width * 0.02);
            }
            textAlign(CENTER);
            fill(0);
            if (distance * mi < 999999999999999.9999) {
              text("Distance Travelled:\n" + nf((distance * mi) / 1000000000000, 3, 2) + "\ntrillion miles", mouseX, mouseY + height * 0.05);
            } else {
              text("Distance Travelled:\n" + nf((distance * mi) / 1000000000000000, 2, 2) + "\nquadrillion miles", mouseX, mouseY + height * 0.05);
            }
          }
        }
      }



      ///visualization title
      fill(0, 255, 0, fade); //fade is a shifting value based on mouse movement, will increase transparency of text
      if (height > width) {
        textSize(width * 0.0677);
      } else {
        textSize(height * 0.0677);
      }
      textAlign(CENTER);
      textFont("Orbitron");
      text("the interstellar traveller", width / 2, height * 0.333); // * 0.8);


      //crosshairs set to mouseX & mouseY 
      strokeWeight(0.5);
      stroke(22, 222, 22);
      fill(0, 255, 0);
      line(mouseX - 67, mouseY, mouseX + 67, mouseY);
      line(mouseX, mouseY - 67, mouseX, mouseY + 67);
      rectMode(CENTER);


      //UI zoom in crosshairs box to trigger star action
      noFill();
      rect(mouseX, mouseY, shrinker, shrinker);
      if (mouseIsPressed) {
        if (shrinker > 30) {
          shrinker = shrinker - 10;
        }
        //starwarsify
        if (shrinker <= 30 && grow < width * 0.2) {
          for (var j = 0; j < 100; j++) {
            bs[j] = bs[j] + bi[j]; //increases size of star as it passes
            noStroke();
            fill(222); // sets star color
            // textAlign(CENTER, CENTER);
            // textSize(bh[j]); //sets text size to randomlyu assigned value
            //text(place[i],bx[j],by[j]);
            ellipse(bx[j], by[j], bs[j], bs[j]);
            //explode, reset
            if (bx[j] >= width + 100 || bx[j] <= 0 - 100, by[j] >= height + 100 || by[j] <= 0 - 100) { //wider range b/c inactive text can run well off screen befor reversing course.
              bs[j] = 0;
              bx[j] = random(0, width); //start position for x
              by[j] = random(0, height); //verticle positioning of text
            }
            ///animate passign motion of stars
            if (bx[j] <= width / 2) {
              bx[j] = bx[j] - bj[j];
            } else {
              bx[j] = bx[j] + bj[j];
            }
            if (by[j] <= height / 2) {
              by[j] = by[j] - bj[j];
            } else {
              by[j] = by[j] + bj[j];
            }
          }
        }
      }

      ///SLIDE COUNTER & UI ELEMENTS
      ///slide counter
      textAlign(LEFT);
      fill(255);
      noStroke();
      textSize(height * 0.0225);
      textFont("Orbitron");

      //Slide advace UI element (TRIANGLES)
      fill(0, 222, 0);
      text("HOUR(S): " + nf(slide, 2, 2), 25, 25);
      noStroke();
      fill(0, 222, 0, 111);
      triangle(5, height / 2, 50, height / 2 - 50, 50, height / 2 + 50); //slide shifter -
      triangle(width - 5, height / 2, width - 50, height / 2 - 50, width - 50, height / 2 + 50); //slide shifter +    

      //Language/definitions of RA & DEC
      fill(0, 222, 0, 111);
      ellipse(width * 0.9, height * 0.90, width * 0.07, height * 0.075); //height * 0.04, height * 0.04);
      fill(0, 222, 0);
      textAlign(CENTER);
      textSize(height * 0.0222);
      textFont("Orbitron");
      text("?", width * 0.9, height * 0.91);
      if (mouseX <= width * 0.90 + width * 0.035 && mouseY <= height * 0.90 + height * 0.035 && mouseX >= width * 0.90 - width * 0.035 && mouseY >= height * 0.90 - height * 0.035) {
        textSize(height * 0.0165);
        textFont("Roboto");
        text("Right ascension (abbreviated RA) is the angular distance measured eastward along\nthe celestial equator from the vernal equinox to the hour circle of the point in question.\n\nDeclination (abbreviated dec) is measured north or south of the celestial equator.", width / 2, height * 0.1);
        imageMode(CENTER);
        image(img1, width / 2, height * 0.6, width * 0.333, width * 0.333, width * 0.333, height * 0.333, width * 0.333, width * 0.333);
        textFont("Orbitron");
      }

      //mode of transport
      fill(0, 222, 0, 111);
      ellipse(width * 0.1, height * 0.9, width * 0.07, height * 0.075);
      triangle(width * 0.05, height * 0.9, width * 0.06, height * 0.875, width * 0.06, height * 0.925); //slide shifter -
      triangle(width * 0.15, height * 0.9, width * 0.14, height * 0.875, width * 0.14, height * 0.925); //slide shifter -
      fill(0, 222, 0);
      textAlign(CENTER, CENTER);
      if (vehicle === 5) {
        textSize(height * 0.0165);
      } else {
        textSize(height * 0.0222);
      }
      textFont("Orbitron");
      text(vehicleDesc[vehicle], width * 0.1, height * 0.905);
      textFont("Roboto");
      textSize(height * 0.0165);
      text("At speed:\n" + displaySpeed[vehicle] + " mph", width * 0.1, height * 0.95);

      ///LOADING... PAGE. This is what people will see while awaiting the completion of the parse function
    } else {
      background(0);
      imageMode(CORNER, 0, 0, width, height);
      image(img2, 0, 0, width, height);
      if (height > width) {
        textSize(width * 0.0333);
      } else {
        textSize(height * 0.0333);
      }
      textAlign(CENTER);
      fill(0, 222, 0);
      textFont("Orbitron");
      text("Loading...\n119,615 stars into your browser.\n This could take up to 15 seconds.", width / 2, height * 0.4);
    }
  }
  //}

//UI TRIGGERS
function mouseReleased() {
  shrinker = 100;
  //trigger slide change down
  if (mouseX >= width - 50 && mouseY >= height / 2 - 40 && mouseY <= height / 2 + 40) {
    slide = slide - 0.5;
    if (slide < 0) {
      slide = 23.5;
    }
  }
  //trigger slide change up
  if (mouseX <= 40 && mouseY >= height / 2 - 40 && mouseY <= height / 2 + 40) {
    slide = slide + 0.5;
    if (slide > 23.5) {
      slide = 0;
    }
  }

  //toggle left through vehicle list
  if (mouseX >= width * 0.05 && mouseX <= width * 0.06 && mouseY >= height * 0.875 && mouseY <= height * 0.925) {
    vehicle = vehicle - 1;
    if (vehicle < 0) {
      vehicle = 5;
    }
  }
  //toggle right through vehicle list  
  if (mouseX >= width * 0.14 && mouseX <= width * 0.15 && mouseY >= height * 0.875 && mouseY <= height * 0.925) {
    vehicle = vehicle + 1;
    if (vehicle > 5) {
      vehicle = 0;
    }
  }
  zoom = 0.015;
  grow = 0;
}

function mouseClicked(){
          if (shrinker > 30) {
          shrinker = shrinker - 10;
        }
  
}

//fade out branding elements
function mouseMoved() {
  fade = fade - 6;
}