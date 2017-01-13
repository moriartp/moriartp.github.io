
var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var report_server_data = data.filter(function(d){ return d.SERVER_NAME === "banrep01-lip.newschool.edu"})
  // console.log(report_server_data);

  var report_tiles = d3.select('#container')
    .select('#reports_DB_server')
    .data(report_server_data).enter()
      d3.select('#reports_DB_server').attr("class",function(d) { return "factor "+"server- "+d.SERVER_STATUS; })
      .html(function (d) { 
      	if (d.SERVER_STATUS === 'UP'){
          return "<br><i class='fa fa-database'></i> <br>DB Server: ✔"; 
        } else {
          return "<br><i class='fa fa-database'></i> <br>DB Server: &#9888;"; 
        }
      }
    )
  }
); 