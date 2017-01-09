
var data = d3.csv("server-status/server_status.csv", function(error, data) {  

  var tiles = d3.select('#container')
    .select('#banner')
    .data(data).enter()

      d3.select("#banner").append("div").attr("class",function(d) {
        if(d.SERVER_NAME === "bandb01-lip.newschool.edu"){
          return "factor "+"server- "+d.SERVER_STATUS;
        }
      })
      .html(function (d) { 
        if(d.SERVER_NAME === "bandb01-lip.newschool.edu"){
          return "<br><i class='fa fa-server'></i> <br>DB Server: "+d.SERVER_STATUS; 
      }
    })
  }
); 