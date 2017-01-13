var crs_db_status;
var crs_db_indicator;


var data = d3.csv("db_status/coursedb_status.csv", function(error, data) {  
  console.log(data);
  // var crs_dbserver_data = data.filter(function(d){ return d.MongoDBStatus === "coursedb01-lip.newschool.edu" || d.SERVER_NAME === "coursedb02-lip.newschool.edu"})
  console.log(data[0]);
  console.log(data[1]);
  db_1 = data[0];
  db_2 = data[1];
  console.log(db_1);


  if(db_1 === "mongod (pid 8520) is not running..." && db_2 === "mongod (pid 8525) is not running..."){
    crs_dbtable_status = "DOWN";
    crs_dbtable_indicator = "&#9888";

  } else {
    crs_dbtable_status = "UP";
    crs_dbtable_indicator = "✔";
  };
  console.log(crs_dbtable_status);

  var report_tiles = d3.select('#container')
      d3.select('#courses_DB_table').attr("class",function(d) { return "factor server- " + crs_dbtable_status; })
      .html(function (d) { 
        return "<br><i class='fa fa-table'></i> <br>Database: "+crs_dbtable_indicator; })
  }
); 