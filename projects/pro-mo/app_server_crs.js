var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var course_appserver_data = data.filter(function(d){ return d.SERVER_NAME === "nodejs02-lit.newschool.edu"})
  // console.log(report_server_data);

  var report_tiles = d3.select('#container')
    .select('#courses_app_server')
    .data(course_appserver_data).enter()
      d3.select('#courses_app_server').attr("class",function(d) { return "factor "+"server- "+d.SERVER_STATUS; })
      .html(function (d) { 
        if (d.SERVER_STATUS === 'UP'){
          return "<br><i class='fa fa-server'></i> <br>App Server: ✔"; 
        } else {
          return "<br><i class='fa fa-server'></i> <br>App Server: &#9888;"; 
        }
      }
    )
  }
); 