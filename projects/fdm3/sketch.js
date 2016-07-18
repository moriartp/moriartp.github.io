var fader = 255;
var H1;
var W1;
nada = null;
var divvy;
var getHelp;

function preload() {
        tableF = loadTable("data2/f.csv", "csv", "header");
        tableO = loadTable("data2/o.csv", "csv", "header");
        tableA = loadTable("data2/a.csv", "csv", "header");
        tableP = loadTable("data2/p.csv", "csv", "header");
}


function setup() {
        createCanvas(windowWidth, windowHeight);
        img = loadImage("assets/foap_bg.jpg"); // Load the image
        logo = loadImage("assets/tns.png"); // Load the image

        //CREATE FOAP INPUTS
        inputF = createInput();
        inputO = createInput();
        inputA = createInput();
        inputP = createInput();

        getHelp = createA('mailto:mydayhelp@newschol.edu', 'Help');
}

function parseData() {
        for (var f = 0; f < tableF.getRowCount(); f++) {
                var currentFRow = tableF.getRow(f);
        }
        for (var o = 0; o < tableO.getRowCount(); o++) {
                var currentORow = tableO.getRow(o);
        }
        for (var a = 0; a < tableA.getRowCount(); a++) {
                var currentARow = tableA.getRow(a);
        }
        for (var p = 0; p < tableP.getRowCount(); p++) {
                var currentPRow = tableP.getRow(p);
        }
}





function draw() {
        background(img);
        image(logo, 0, 0, windowWidth*0.07, windowWidth*0.05);


        noStroke();
        fill(255, 255, 255, 229);
        rect(0, windowHeight * 0.25, windowWidth, windowHeight * 0.65);

        ///HELP BUTTON
        getHelp.position(windowWidth/2,0);
        getHelp.size(windowWidth * 0.05, windowHeight * 0.01);
        getHelp.style("font-size", windowWidth * 0.015+"px");
        
        //F
        inputF.position((windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 3);
        inputF.size(windowWidth * 0.15, windowHeight * 0.0175);

        //O
        inputO.position((windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 3);
        inputO.size(windowWidth * 0.15, windowHeight * 0.0175);

        //A
        inputA.position((windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 3);
        inputA.size(windowWidth * 0.15, windowHeight * 0.0175);

        //P
        inputP.position((windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 3);
        inputP.size(windowWidth * 0.15, windowHeight * 0.0175);



        if (windowWidth >= windowHeight) {
                textSize(windowWidth * 0.01);
        } else {
                textSize(windowHeight * 0.01);
        }

        fill(102, 102, 102);
        textStyle(BOLD);
        text("FUND", (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 3.1);
        text("ORG", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 3.1);
        text("ACCOUNT", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 3.1);
        text("PROGRAM", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 3.1);

        text("FUND", (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 2);
        text("COST\nCENTER", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 2);
        text("SPEND CAT/\nEXPENSE ITEM", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 2);
        text("PROGRAM", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 2);



        if (windowWidth >= windowHeight) {
                textSize(windowWidth * 0.0075);
        } else {
                textSize(windowHeight * 0.0075);
        }
        fill(0);
        textStyle(NORMAL);
        textAlign(LEFT, CENTER);
        ///validate inputs
        var F_input = tableF.findRows(inputF.value(), 0);
        var O_input = tableO.findRows(inputO.value(), 0);
        var A_input = tableA.findRows(inputA.value(), 0);
        var P_input = tableP.findRows(inputP.value(), 0);

        ///MATCH INPUTS TO TABLE
        var F_ = tableF.matchRow(inputF.value(), 0);
        var O_ = tableO.matchRow(inputO.value(), 0);
        var A_ = tableA.matchRow(inputA.value(), 0);
        var P_ = tableP.matchRow(inputP.value(), 0);

        ///FUND -> FUND
        if (inputF.value().length === 5) {
                if (F_input.length > 0) {
                        var F_TP = F_.getString(2);
                        var F_ID = F_.getString(3);
                        var F_DS = F_.getString(4);
                        text(F_TP + "\n" + F_ID, (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 1.8);
                } else {
                        text("Fund not found.\nPlease enter a valid fund.", (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight * 0.39);
                }
                if (mouseX > (windowWidth / 5) * 1 - (windowWidth * 0.075) && mouseX < (windowWidth / 5) * 1 + (windowWidth * 0.075) && mouseY > windowHeight / 1.8 - windowHeight * 0.1 && mouseY < windowHeight / 1.8 + windowHeight * 0.1) {
                        rectMode(CENTER, CENTER);
                        textAlign(CENTER, BOTTOM);
                        fill(222, 55, 55, 244);
                        rect(mouseX, mouseY, (windowWidth / 5) * 1 + (windowWidth * 0.025), windowHeight * 0.1, 5);
                        fill(255);
                        text("Desc: " + F_DS, mouseX, mouseY);
                }

        }



        ////ORG -> COSTCENTER
        if (inputO.value().length === 5 && inputF.value().length === 5) {
                if (F_input.length > 0 && O_input.length > 0) {
                        var F_CC = F_.getString(9);
                        var O_CC = O_.getString(2);
                        if (F_CC !== 'null') {
                                text(F_CC, (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 1.8);
                        } else if (O_CC !== null) {
                                text(O_CC, (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 1.8);
                        }
                } else {
                        text("This Org is not found.\nPlease enter a valid Org.", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.39);
                }
        } else if (inputO.value().length > inputF.value().length) {
                text("Please first enter a valid FUND value", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.39);
        }

        ///FUND/ORG COST CENTER MISMATCH ALERT!!!!!!!!!!!!!!!!
        if (inputO.value().length === 5 && F_CC !== O_CC) {
                fill(0);
                text("The derived Cost Center does not match\nthe related Cost Center for this Org. \nPlease contact mydayhelp@newschool.edu\nto resolve this.", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.39);
        }

        ///ACCOUNT -> SPEND CAT
        var rows = tableA.findRows(inputA.value(), 0);

        if (rows.length === 0 && inputA.value().length === 5) {
                text("Account not found.\nPlease enter a valid Account.", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.39);

        }



        var matches = tableA.matchRows(inputA.value(), 0);

        for (var i = 0; i < rows.length; i++) {
                text(matches[i].getString(7) + "      " + matches[i].getString(8), (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 1.8 + i * (windowHeight * 0.0175));
        }

        if (rows.length > 0) {
                // textSize(windowWidth * 0.0075);
                // fill(232, 46, 33);
                text("If your purchase doesn't match\na 'Related Expense Item' please" + "\ncontact mydayhelp@newschool.edu.", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.39);
        }


        ///PROGRAM -> PROGRAM

        if (inputP.value().length === 4 && inputF.value().length === 5) {
                if (F_input.length > 0 && P_input.length > 0) {
                        var F_PG = F_.getString(11);
                        var P_PG = P_.getString(1);
                        if (F_PG !== 'null') {
                                text(F_PG, (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 1.8);
                        } else if (P_PG !== 'null') {
                                text(P_PG, (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 1.8);
                        }
                } else {
                        text("This Program is not found.\nPlease enter a valid Program.", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.39);
                }
        } else if (inputP.value().length > inputF.value().length) {
                text("Please first enter a valid FUND value", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.39);
        }


        // ///PROGRAM MISMATCH ALERT!!!!!!!!!!!!!!!!
        if (inputP.value().length === 4 && F_PG !== P_PG) {
                fill(0);
                textAlign(LEFT, BOTTOM);
                text("The derived Program does not match\nthe related Program worktag. \nPlease contact mydayhelp@newschool.edu\nto resolve this.", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.39);
        }





        fill(0, 0, 0, fader);
        textSize(windowWidth * 0.05);
        textAlign(CENTER, CENTER);
        text("FOAP to MyDay Worktag Converter", width / 2, height / 7);
        textSize(windowWidth * 0.025);
        text("Enter your FOAP in the below fields", width / 2, height / 4.75);
}


function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
}


function mouseMoved() {
        fader = fader - 2;
}