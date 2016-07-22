var dayRange;

function preload() {
        tableA = loadTable("data/LabA_Hours.csv", "csv", "header");
        tableB = loadTable("data/LabB_Hours.csv", "csv", "header");
}

function setup() {
        createCanvas(windowWidth, windowHeight);
        textAlign(CENTER, CENTER);

        imgIC = loadImage("assets/innocationcenter.jpeg"); // Load the image
        imgAH = loadImage("assets/arnholdHall.png"); // Load the image
        imgPE = loadImage("assets/parsonsEast.png"); // Load the image
        imgPC = loadImage("assets/printcenter.jpg"); // Load the image



        inputMonth = createInput();
        inputDay = createInput();
        inputYear = createInput();

}

function parseData() {
        for (var a = 0; a < tableA.getRowCount(); a++) {
                var currentARow = tableA.getRow(a);
        }
        for (var b = 0; b < tableB.getRowCount(); b++) {
                var currentBRow = tableB.getRow(b);
        }
}

function draw() {
        createCanvas(windowWidth, windowHeight);
        background(11);

        inputMonth.position((windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight * 0.033);
        inputDay.position((windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.033);
        inputYear.position((windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.033);

        if (inputMonth.value().lenth > 0 && +inputDay.value().length > 0 && inputYear.value().length === 4) {

                fill('green');
                textSize(22);
                text(inputMonth.value() + "/" + inputDay.value() + "/" + inputYear.value(), 333, 99);
        }



        fill(244);
        textSize(9);
        var da = day();
        text("Current day: " + da, 5, 50);
        var hr = hour();
        text("Current hour: " + hr, 5, 60);
        var mt = minute();
        text("Current minute: " + mt, 5, 70);
        var ms = millis();
        text("Milliseconds: " + ms, 5, 80);
        var mn = month();
        text("Current month: " + mn, 5, 90);
        var sc = second();
        text("Current second: " + sc, 5, 100);
        var yr = year();
        text("Current year: " + yr, 5, 110);
        var dayRange = windowWidth / 24;



        for (var a = 0; a < tableA.getRowCount(); a++) {
                var currentARow = tableA.getRow(a);
                var labName = currentARow.getString(0);
                var monthOpen = currentARow.getNum(1);
                var dayOpen = currentARow.getNum(2);
                var yearOpen = currentARow.getNum(3);
                var hourOpen = currentARow.getNum(4);
                var minOpen = currentARow.getNum(5);
                var minOpenDec = minOpen / 60;
                var monthClose = currentARow.getNum(6);
                var dayClose = currentARow.getNum(7);
                var yearClose = currentARow.getNum(8);
                var hourClose = currentARow.getNum(9);
                var minClose = currentARow.getNum(10);
                var minCloseDec = minClose / 60;

                // var dayRange = windowWidth/24;
                var dayStart = dayRange * hourOpen + dayRange * minOpenDec;
                var dayEnd = (dayRange * hourClose + dayRange * minCloseDec) - (dayRange * hourOpen + dayRange * minOpenDec);
                // if(dayClose !== day){
                //         dayEnd = 24;
                // }else{
                //         dayEnd = (dayRange*hourclose + dayRange*minCloseDec)-(dayRange*hourOpen + dayRange*minOpenDec);
                // }

                if (monthOpen === mn && dayOpen === da && yearOpen === yr) {
                        if (mouseX > dayStart && mouseX < dayStart + dayEnd) {
                                fill(22, 222, 22, 255);
                        } else {
                                fill(122, 122, 222, 125);

                        }
                        rect(dayStart, 500, dayEnd, 60, 11);
                        text(hourOpen + ":" + minOpen, dayRange * hourOpen + dayRange * minOpenDec, 575);
                        text(hourClose + ":" + minClose, dayRange * hourClose + dayRange * minCloseDec, 575);

                        fill('white');
                        textAlign(LEFT, CENTER);
                        textSize(15);
                        if (mouseY > 500 && mouseY < 560) {
                                text("Lab: " + labName + "\nOpen: " + hourOpen + ":" + minOpen + "\nClose: " + hourClose + ":" + minClose, mouseX + 50, 530);
                                image(imgAH, 0, 600,111,111);
                        }
                }
        }

        for (var b = 0; b < tableB.getRowCount(); b++) {
                var currentBRow = tableB.getRow(b);
                var labNameB = currentBRow.getString(0);
                var monthOpenB = currentBRow.getNum(1);
                var STRINGmonthOpenB = currentBRow.getString(1);
                var dayOpenB = currentBRow.getNum(2);
                var STRINGdayOpenB = currentBRow.getString(2);
                var yearOpenB = currentBRow.getNum(3);
                var STRINGyearOpenB = currentBRow.getString(3);
                var hourOpenB = currentBRow.getNum(4);
                var minOpenB = currentBRow.getNum(5);
                var minOpenDecB = minOpenB / 60;
                var monthCloseB = currentBRow.getNum(6);
                var dayCloseB = currentBRow.getNum(7);
                var yearCloseB = currentBRow.getNum(8);
                var hourCloseB = currentBRow.getNum(9);
                var minCloseB = currentBRow.getNum(10);
                var minCloseDecB = minCloseB / 60;

                var dayStartB = dayRange * hourOpenB + dayRange * minOpenDecB;
                var dayEndB = (dayRange * hourCloseB + dayRange * minCloseDecB) - (dayRange * hourOpenB + dayRange * minOpenDecB);
                // if(dayClose !== day){
                //         dayEnd = 24;
                // }else{
                //         dayEnd = (dayRange*hourclose + dayRange*minCloseDec)-(dayRange*hourOpen + dayRange*minOpenDec);
                // }

                if (STRINGmonthOpenB === inputMonth.value() && STRINGdayOpenB === inputDay.value() && STRINGyearOpenB === inputYear.value()) {


                        textSize(9);
                        text("Month: " + monthOpenB + " === " + inputMonth.value() + "\nDay: " + dayOpenB + " === " + inputDay.value() + "\nYear: " + yearOpenB + " === " + inputYear.value(), 222, b * 35);
                }

                // if (monthOpenB === mn && dayOpenB === da && yearOpenB === yr) {
                if (STRINGmonthOpenB === inputMonth.value() && STRINGdayOpenB === inputDay.value() && STRINGyearOpenB === inputYear.value()) {
                        textSize(9);
                        if (mouseX > dayStartB && mouseX < dayStartB + dayEndB) {
                                fill(22, 222, 22, 255);
                        } else {
                                fill(122, 122, 222, 125);

                        }
                        rect(dayStartB, 400, dayEndB, 60, 11);
                        text(hourOpenB + ":" + minOpenB, dayRange * hourOpenB + dayRange * minOpenDecB, 475);
                        text(hourCloseB + ":" + minCloseB, dayRange * hourCloseB + dayRange * minCloseDecB, 475);
                        fill('white');
                        textAlign(LEFT, CENTER);
                        textSize(15);
                        if (mouseY > 400 && mouseY < 460) {
                                text("Lab: " + labNameB + "\nOpen: " + hourOpenB + ":" + minOpenB + "\nClose: " + hourCloseB + ":" + minCloseB, mouseX + 50, 430);
                                image(imgIC, 0, 625,111,111);
                        }

                        if (mouseX > dayStartB && mouseX < dayStartB + dayEndB) {
                                fill(22, 222, 22, 255);
                        } else {
                                fill(122, 122, 222, 125);

                        }

                        /////THIS IS AL JUNK, DELETE//////////
                        if (mouseX > dayStartB - dayRange && mouseX < dayStartB + dayEndB + dayRange) {
                                fill(22, 222, 22, 255);
                        } else {
                                fill(122, 122, 222, 125);
                        }

                        textSize(9);
                        rect(dayStartB - dayRange, 300, dayEndB + dayRange * 2, 60, 11);
                        text(hourOpenB - 1 + ":" + minOpenB, dayRange * hourOpenB - dayRange + dayRange * minOpenDecB, 375);
                        text(hourCloseB + 1 + ":" + minCloseB, dayRange * hourCloseB + dayRange + dayRange * minCloseDecB, 375);
                        fill('white');
                        textAlign(LEFT, CENTER);
                        textSize(15);
                        if (mouseY > 300 && mouseY < 360) {
                                text("Lab: Print Center" + "\nOpen: " + (hourOpenB - 1) + ":" + minOpenB + "\nClose: " + (hourCloseB + 1) + ":" + minCloseB, mouseX + 50, 330);
                                image(imgPC, 0, 625,111,111);
                        }
                        /////END OF JUNK, DELETE//////////

                        /////THIS IS AL JUNK, DELETE//////////
                        if (mouseX > dayStartB - dayRange * 2 && mouseX < dayStartB + dayEndB) {
                                fill(22, 222, 22, 255);
                        } else {
                                fill(122, 122, 222, 125);
                        }

                        textSize(9);
                        rect(dayStartB - dayRange * 2, 200, dayEndB + dayRange * 2, 60, 11);
                        text(hourOpenB - 2 + ":" + minOpenB, dayRange * hourOpenB - dayRange * 2 + dayRange * minOpenDecB, 275);
                        text(hourCloseB + ":" + minCloseB, dayRange * hourCloseB + dayRange * minCloseDecB, 275);
                        fill('white');
                        textAlign(LEFT, CENTER);
                        textSize(15);
                        if (mouseY > 200 && mouseY < 260) {
                                text("Lab: Parsons East" + "\nOpen: " + (hourOpenB - 2) + ":" + minOpenB + "\nClose: " + (hourCloseB + 1) + ":" + minCloseB, mouseX + 50, 230);
                                image(imgPE, 0, 625,111,111);
                        }
                        /////END OF JUNK, DELETE//////////                        


                }
                // if (monthOpenB === mn && dayOpenB === da && yearOpenB === yr) {
                //         rect(dayStartB, 400, dayEndB, 60, 11);
                //         text(hourOpenB + ":" + minOpenB, dayRange * hourOpenB + dayRange * minOpenDecB, 455);
                //         text(hourCloseB + ":" + minCloseB, dayRange * hourCloseB + dayRange * minCloseDecB, 455);
                // }


        }
        fill('green');
        textSize(12);
        for (var i = 0; i <= 24; i++) {
                textAlign(CENTER, CENTER);
                if (i <= 12) {
                        noStroke();
                        fill('green');
                        text(i + ":00", i * dayRange, 599);
                } else {
                        noStroke();
                        fill('green');
                        text(i - 12 + ":00", i * dayRange, 599);
                }
                // fill(22,222,22,0);
                stroke(22, 222, 22, 42);
                line(i * dayRange, 150, i * dayRange, 590);
        }

        // fill(222, 222, 22, 122);
        // noStroke();
        // rect(hr * dayRange, 0, dayRange, windowHeight);
        noFill();
        strokeWeight(1);
        stroke('green');
        rect(mouseX, 150, 1, 590 - 150);
        rect(0, 150, windowWidth, 590 - 150);

        fill('green');
        textSize(22);
        var minuteCalc = floor((((mouseX * 24) / windowWidth) - floor((mouseX * 24) / windowWidth)) * 60);

        if (floor((mouseX * 24) / windowWidth) <= 12) {
                noStroke();
                text("Time: " + floor((mouseX * 24) / windowWidth) + ":" + nf(minuteCalc, 2), mouseX, 140);
        } else {
                noStroke();
                text("Time: " + (floor((mouseX * 24) / windowWidth) - 12) + ":" + nf(minuteCalc, 2), mouseX, 140);
        }




}