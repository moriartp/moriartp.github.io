
var data = d3.csv("db_status/db_status.csv", function(error, data) {  

  var tiles = d3.select('#container')
    .select('#banner')
    .data(data).enter()

      d3.select("#banner").append("div").attr("class",function(d) {
        if(d.INSTANCE_NAME === "NSPB"){
          return "factor "+"db- "+d.DATABASE_STATUS;
        }
      })
      .html(function (d) { 
        if(d.INSTANCE_NAME === "NSPB"){
          return "<br><i class='fa fa-database'></i> <br>Database: "+d.DATABASE_STATUS; 
      }
    })
  }
); 