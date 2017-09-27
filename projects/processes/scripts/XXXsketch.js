var table;

function preload() {
  table = loadTable("data/workday_prod_status.csv", "csv");
}


function setup() {

  //count the columns
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");

  //cycle through the table
  for (var r = 0; r < table.getRowCount(); r++)
    for (var c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }
}

function draw() {
	createCanvas(windowWidth,windowHeight);
	background(0);

	fill('#bada55');

	ellipse(50, 50, 80, 80);
}