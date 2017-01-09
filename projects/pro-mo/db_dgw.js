
var data = d3.csv("db_status/db_status.csv", function(error, data) {  
  var dw_db_data = data.filter(function(d){ return d.INSTANCE_NAME === "DWPROD"})
  console.log(dw_db_data);


  var dw_tiles = d3.select('#container')
    .select('#degreeworks')
    .data(dw_db_data).enter()

      d3.select("#degreeworks").append("div").attr("class",function(d) { 
        if(d.INSTANCE_NAME === "DWPROD"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.DATABASE_STATUS;
        }
      })
      .html(function (d) { 
        if(d.INSTANCE_NAME === "DWPROD"){
          return "<br><i class='fa fa-database'></i> <br>Database: "+d.DATABASE_STATUS; 
      }
    })
  }
); 