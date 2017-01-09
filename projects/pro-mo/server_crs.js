var crs_dbserver_status;

var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var crs_dbserver_data = data.filter(function(d){ return d.SERVER_NAME === "coursedb01-lip.newschool.edu" || d.SERVER_NAME === "coursedb02-lip.newschool.edu"})
  console.log(crs_dbserver_data[0].SERVER_STATUS);
  console.log(crs_dbserver_data[1].SERVER_STATUS);
  db1 = crs_dbserver_data[0].SERVER_STATUS;
  db2 = crs_dbserver_data[1].SERVER_STATUS;


  if(db1 === "DOWN" && db2 === "DOWN"){
    crs_dbserver_status = "DOWN";
  } else {
    crs_dbserver_status = "UP";
  };
  console.log(crs_dbserver_status);

  var report_tiles = d3.select('#container')
      d3.select('#courses').append("div").attr("class",function(d) { return "factor server- " + crs_dbserver_status; })
      .html(function (d) { return "<br><i class='fa fa-server'></i> <br>DB Server: "+crs_dbserver_status; })
  }
); 