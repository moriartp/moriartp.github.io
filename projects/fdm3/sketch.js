var fader = 255;
var H1;
var W1;
var nada = null;
var divvy;
var getHelp;
var orgAlert;


function preload() {
        tableF = loadTable("fdm_data/f.csv", "csv", "header");
        tableO = loadTable("fdm_data/o.csv", "csv", "header");
        tableA = loadTable("fdm_data/a.csv", "csv", "header");
        tableP = loadTable("fdm_data/p.csv", "csv", "header");
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

        labelF = createP('FUND');
        labelO = createP('ORG');
        labelA = createP('ACCOUNT');
        labelP = createP('PROGRAM');

        labelF2 = createP('FUND');
        labelO2 = createP('COST CENTER');
        labelA2 = createP('SPEND CATEGORY / EXPENSE ITEM');
        labelP2 = createP('PROGRAM');


        getHelp = createA('mailto:mydayhelp@newschol.edu', 'HELP');
        divvy = createDiv('<h1>FOAP to MyDay Worktag Converter</h1><p>MyDay Finance has replaced Banner for key finance functions. One of the most significant changes is the MyDay Financial Data Model (FDM). The FDM is further broken down into MyDay ”Worktags” that have replaced the University’s traditional chart of accounts and the rigid FOAP structure. To easily convert your old FOAPs to MyDay Worktags simply enter your old FOAPs to convert them to MyDay Worktags. For additional resources about MyDay Finance, please visit the <a href="https://myday-project.newschool.edu/training/finance/" target="_blank">MyDay Finance Training</a> page.</p>');
        conflictAlert = createDiv("The value you entered above does not match the related value for this Fund. Please use the below code and notify <a href='mailto:mydayhelp.newschool.edu'>MyDayHelp</a> of the conflict.");
        expenseAlert = createDiv("If your purchase doesn't match a spencategory / expense item from the list below, please contact <a href='mailto:mydayhelp.newschool.edu'>MyDayHelp</a>.");
        noMatch = createDiv("No match found.");

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
        image(logo, 0, 0, windowWidth * 0.07, windowWidth * 0.05);

        noStroke();
        fill(255, 255, 255, 229);
        rect(0, windowHeight * 0.25, windowWidth, windowHeight * 0.65);

        ///HTML ELEMENTS
        divvy.position(windowWidth / 7, windowHeight * 0.01);
        divvy.size(windowWidth - windowWidth / 3);
        conflictAlert.hide();
        noMatch.hide();
        expenseAlert.hide();
        getHelp.position(windowWidth * 0.99 - (windowWidth * 0.06), 0);
        getHelp.size(windowWidth * 0.07, windowWidth * 0.025);
        getHelp.style("font-size", windowWidth * 0.015 + "px");

        ///RESPONSIVE CSS FONT-SIZES
        if (windowWidth >= windowHeight) {
                divvy.style("font-size", windowWidth * 0.01 + "px");
                conflictAlert.style("font-size", windowWidth * 0.0075 + "px");
                expenseAlert.style("font-size", windowWidth * 0.0075 + "px");
                noMatch.style("font-size", windowWidth * 0.0075 + "px");
                labelF.style("font-size", windowWidth * 0.0075 + "px");
                labelO.style("font-size", windowWidth * 0.0075 + "px");
                labelA.style("font-size", windowWidth * 0.0075 + "px");
                labelP.style("font-size", windowWidth * 0.0075 + "px");
                labelF2.style("font-size", windowWidth * 0.0075 + "px");
                labelO2.style("font-size", windowWidth * 0.0075 + "px");
                labelA2.style("font-size", windowWidth * 0.0075 + "px");
                labelP2.style("font-size", windowWidth * 0.0075 + "px");
        } else {
                divvy.style("font-size", windowHeight * 0.01 + "px");
                conflictAlert.style("font-size", windowHeight * 0.0075 + "px");
                expenseAlert.style("font-size", windowHeight * 0.0075 + "px");
                noMatch.style("font-size", windowHeight * 0.0075 + "px");
                labelF.style("font-size", windowHeight * 0.0075 + "px");
                labelO.style("font-size", windowHeight * 0.0075 + "px");
                labelA.style("font-size", windowHeight * 0.0075 + "px");
                labelP.style("font-size", windowHeight * 0.0075 + "px");
                labelF2.style("font-size", windowHeight * 0.0075 + "px");
                labelO2.style("font-size", windowHeight * 0.0075 + "px");
                labelA2.style("font-size", windowHeight * 0.0075 + "px");
                labelP2.style("font-size", windowHeight * 0.0075 + "px");
        }

        //INPUT ELEMENTS

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

        //CANVAS/P5 RESPONSIVE TEXT SIZING FOR INPUT LABELS
        if (windowWidth >= windowHeight) {
                textSize(windowWidth * 0.01);
        } else {
                textSize(windowHeight * 0.01);
        }

        //INPUT LABELS
        fill(102, 102, 102);
        textStyle(BOLD);

        labelF.position((windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight * 0.3);
        labelO.position((windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.3);
        labelA.position((windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.3);
        labelP.position((windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.3);

        labelF.style('font-weight', 'bold');
        labelO.style('font-weight', 'bold');
        labelA.style('font-weight', 'bold');
        labelP.style('font-weight', 'bold');

        labelF2.style('font-weight', 'bold');
        labelO2.style('font-weight', 'bold');
        labelA2.style('font-weight', 'bold');
        labelP2.style('font-weight', 'bold');

        labelF2.position((windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight * 0.5);
        labelO2.position((windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.5);
        labelA2.position((windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.5);
        labelP2.position((windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.5);

        labelF2.size(windowWidth * 0.15);
        labelO2.size(windowWidth * 0.15);
        labelA2.size(windowWidth * 0.15);
        labelP2.size(windowWidth * 0.15);

        //GENERAL TEXT SIZING
        if (windowWidth >= windowHeight) {
                textSize(windowWidth * 0.0075);
        } else {
                textSize(windowHeight * 0.0075);
        }
        fill(0);
        textStyle(NORMAL);
        textAlign(LEFT, CENTER);

        ///INPUT CODE VALIDATION
        var F_input = tableF.findRows(inputF.value(), 0);
        var O_input = tableO.findRows(inputO.value(), 0);
        var A_input = tableA.findRows(inputA.value(), 0);
        var P_input = tableP.findRows(inputP.value(), 0);

        ///MATCH INPUTS TO TABLE DATA
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
                        text(F_TP + "\n" + F_ID + "\n" + F_DS, (windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight / 1.85);
                } else {
                        noMatch.show();
                        noMatch.position((windowWidth / 5) * 1 - (windowWidth * 0.075), windowHeight * 0.37);
                        noMatch.size((windowWidth / 5) * 1 - (windowWidth * 0.06));
                }
        }

        ////ORG -> COSTCENTER
        if (inputO.value().length === 5 && inputF.value().length === 5) {
                if (F_input.length > 0 && O_input.length > 0) {
                        var F_CC = F_.getString(9);
                        var F_CC_DS = F_.getString(10);
                        var O_CC = O_.getString(2);
                        var O_CC_DS = O_.getString(3);
                        if (F_CC !== 'null') {
                                text(F_CC + "\n" + F_CC_DS, (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 1.8);
                        } else if (O_CC !== 'null') {
                                text(O_CC + "\n" + O_CC_DS, (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight / 1.8);
                        }
                } else {
                        noMatch.show();
                        noMatch.position((windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.37);
                        noMatch.size((windowWidth / 5) * 1 - (windowWidth * 0.06));
                }
        } else if (inputO.value().length > inputF.value().length) {
                text("Please first enter a valid FUND value", (windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.39);
        }

        ///FUND/ORG COST CENTER MISMATCH ALERT!!!!!!!!!!!!!!!!
        if (inputO.value().length === 5 && F_CC !== O_CC && F_CC !== 'null') {
                fill(0);
                conflictAlert.show();
                conflictAlert.position((windowWidth / 5) * 2 - (windowWidth * 0.075), windowHeight * 0.37);
                conflictAlert.size((windowWidth / 5) * 1 - (windowWidth * 0.06));
        }

        ///ACCOUNT -> SPEND CATEGORY/RELATED EXPENSE ITEM
        if (inputA.value().length === 5) { // && inputF.value().length === 5) {
                if (A_input.length > 0) {
                        // var F_SC = F_.getString(9);
                        // var F_SC_DS = F_.getString(10);
                        var A_SC = A_.getString(2);
                        var A_SC_DS = A_.getString(3);

                        if (A_SC !== 'null') {
                                text(A_SC + "\n" + A_SC_DS + "\n\nRelated Expense Items:", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 1.8);
                                // text("Related Expense Items:", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 1.8 + (windowHeight * 0.035));
                        }
                } else {
                        noMatch.show();
                        noMatch.position((windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.37);
                        noMatch.size((windowWidth / 5) * 1 - (windowWidth * 0.06));
                }
        } else if (inputA.value().length > inputF.value().length) {
                text("Please first enter a valid FUND value", (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.39);
        }

        ///ITERATION OF SPEND CATEGORY/RELATED EXPENSE ITEMS
        var rows = tableA.findRows(inputA.value(), 0);

        if (rows.length === 0 && inputA.value().length === 5) {
                noMatch.show();
                noMatch.position((windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.37);
                noMatch.size((windowWidth / 5) * 1 - (windowWidth * 0.06));
        }

        var found = tableA.findRow(inputA.value(), 0);
        var matches = tableA.matchRows(inputA.value(), 0);
        // text("Related Expense Items:",(windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 1.8);

        for (var i = 0; i < rows.length; i++) {
                text(matches[i].getString(8), (windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight / 1.8 + i * (windowHeight * 0.0175) + (windowHeight * 0.0175) * 5);
        }

        if (rows.length > 0) {
                expenseAlert.show();
                expenseAlert.position((windowWidth / 5) * 3 - (windowWidth * 0.075), windowHeight * 0.37);
                expenseAlert.size((windowWidth / 5) * 1 - (windowWidth * 0.06));
        }

        ///PROGRAM -> PROGRAM
        if (inputP.value().length === 4 && inputF.value().length === 5) {
                if (F_input.length > 0 && P_input.length > 0) {
                        var F_PG = F_.getString(11);
                        var F_PG_DS = F_.getString(12);
                        var P_PG = P_.getString(1);
                        var P_DS = P_.getString(2);
                        if (F_PG !== 'null') {
                                text(F_PG + "\n" + F_PG_DS, (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 1.8);
                        } else if (P_PG !== 'null') {
                                text(P_PG + "\n" + P_DS, (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight / 1.8);
                        }
                } else {
                        noMatch.show();
                        noMatch.position((windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.37);
                        noMatch.size((windowWidth / 5) * 1 - (windowWidth * 0.06));
                }
        } else if (inputP.value().length > inputF.value().length) {
                text("Please first enter a valid FUND value", (windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.39);
        }

        // ///PROGRAM MISMATCH ALERT!!!!!!!!!!!!!!!!
        if (inputP.value().length === 4 && F_PG !== P_PG && F_CC !== 'null') {
                conflictAlert.show();
                conflictAlert.position((windowWidth / 5) * 4 - (windowWidth * 0.075), windowHeight * 0.37);
                conflictAlert.size((windowWidth / 5) * 1 - (windowWidth * 0.06));
        }
}


function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
}


function mouseMoved() {
        fader = fader - 2;
}