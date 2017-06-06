// console.log("data");


var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  console.log(data);


  var dw_server_data = data.filter(function(d){ return d.SERVER_NAME === "degreeaudit.newschool.edu"})
  console.log(dw_server_data);


  var dw_tiles = d3.select('#container')
    .select('#degreeworks_app_server')
    .data(dw_server_data).enter()

      d3.select("#degreeworks_app_server").attr("class",function(d) { 
        if(d.SERVER_NAME === "degreeaudit.newschool.edu"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.SERVER_STATUS;
        }
      })
      .html(function (d) { 
        if(d.SERVER_STATUS === "UP"){
          return "<br><i class='fa fa-server'></i> <br>App Server: ✔"; 
        } else {
          return "<br><i class='fa fa-server'></i> <br>APP Server: &#9888;"; 
        }
    })
  }
); 