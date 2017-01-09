
var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var report_server_data = data.filter(function(d){ return d.SERVER_NAME === "banrep01-lip.newschool.edu"})
  // console.log(report_server_data);

  var report_tiles = d3.select('#container')
    .select('#report')
    .data(report_server_data).enter()
      d3.select('#report').append("div").attr("class",function(d) { return "factor "+"server- "+d.SERVER_STATUS; })
      .html(function (d) { return "<br><i class='fa fa-server'></i> <br>Report DB Server: "+d.SERVER_STATUS; })
  }
); 