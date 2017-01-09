
var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var dw_server_data = data.filter(function(d){ return d.SERVER_NAME === "dwweb01-lip.newschool.edu"})
  // console.log(dw_server_data);


  var dw_tiles = d3.select('#container')
    .select('#degreeworks')
    .data(dw_server_data).enter()

      d3.select("#degreeworks").append("div").attr("class",function(d) { 
        if(d.SERVER_NAME === "dwweb01-lip.newschool.edu"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.SERVER_STATUS;
        }
      })
      .html(function (d) { 
        if(d.SERVER_NAME === "dwweb01-lip.newschool.edu"){
          return "<br><i class='fa fa-server'></i> <br>Degreeworks Server: "+d.SERVER_STATUS; 
      }
    })
  }
); 