var fader = 255;
var H1;
var W1;
nada = null;


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

        var divvy = createDiv(' ');
        divvy.html('<a href="mailto:mydayhelp@newschool.edu">Get Help</a>');
        //      divvy.position(width - 200, 0);
        //      divvy.size(200, 150);






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
        image(logo, 0, 0, logo.width / 15, logo.height / 15);

        noStroke();
        fill(255, 255, 255, 229);
        rect(0, windowHeight * 0.25, windowWidth, windowHeight * 0.65);

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
                textSize(windowHeight * 0.015);
        }

        fill(0);
        text("FUND", (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 3.1);
        text("ORGANIZATION", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 3.1);
        text("ACCOUNT", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 3.1);
        text("PROGRAM", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 3.1);

        text("FUND", (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 2);
        text("COST CENTER", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 2);
        text("SPEND CATEGORY", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 2);
        text("PROGRAM", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 2);

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
                        text(F_TP + "\n" + F_ID, (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 1.9);
                } else {
                        text("Fund not found.\nPlease enter a valid fund.", (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight * 0.4);
                }
        }

        ////ORG -> COSTCENTER
        if (inputO.value().length === 5 && inputF.value().length === 5) {
                if (F_input.length > 0 && O_input.length > 0) {
                        var F_CC = F_.getString(9);
                        var O_CC = O_.getString(2);
                        if (F_CC !== null) {
                                text(F_CC, (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 1.9);
                        } else if (O_CC !== null) {
                                text(O_CC, (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 1.9);
                        }
                } else {
                        text("This Org is not found.\nPlease enter a valid Org.", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.4);
                }
        } else if (inputO.value().length > inputF.value().length) {
                text("Please first enter a valid FUND value", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.4);
        }

        ///FUND/ORG COST CENTER MISMATCH ALERT!!!!!!!!!!!!!!!!
        if (inputO.value().length === 5 && F_CC !== O_CC) {
                fill(0);
                text("The derived Cost Center doesnot match\nthe related Cost Center for this Org. \nPlease contact mydayhelp@newschool.edu\nto resolve this.", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.4);
        }

        ///ACCOUNT -> SPEND CAT
        var rows = tableA.findRows(inputA.value(), 0);

        if (rows.length === 0 && inputA.value().length === 5) {
                text("Account not found.\nPlease enter a valid Account.", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.4);

        }



        var matches = tableA.matchRows(inputA.value(), 0);

        for (var i = 0; i < rows.length; i++) {
                text(matches[i].getString(7) + " " + matches[i].getString(8), (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 1.9 + i * (windowHeight * 0.0175));
        }

        if (rows.length > 0) {
                // textSize(windowWidth * 0.0075);
                // fill(232, 46, 33);
                text("Use the 'Related Expense Item'" + "\nappropriate to your purchase." + "\nIf your purchase does not match," + "\ncall...so and so.", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 3 + 50);
        }


        ///PROGRAM -> PROGRAM
        if (inputP.value().length === 4) {
                if (F_input.length > 0 && P_input.length > 0) {
                        var F_PG = F_.getString(11);
                        var P_PG = P_.getString(1);
                        if (F_CC !== null) {
                                text(F_PG, (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 1.9);
                        } else if (P_PG !== null) {
                                text(P_PG, (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 1.9);
                        }
                } else {
                        text("NO MATCHES ON RECORD!!!", 333, 355);
                }
        } else if (inputP.value().length > inputF.value().length) {
                text("Please first enter a valid FUND value", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.4);
        }


        // ///PROGRAM MISMATCH ALERT!!!!!!!!!!!!!!!!
        if (inputP.value().length === 4 && F_PG !== P_PG) {
                fill(0);
                text("The Program you specified does\nnot match the record.\nPlease contact _______________\nto resolve this.", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.4);
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