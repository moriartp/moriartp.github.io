
var data = d3.csv("db_status/db_status.csv", function(error, data) {  
  var rep_db_data = data.filter(function(d){ return d.INSTANCE_NAME === "REPORT"})
  console.log(rep_db_data);


  var dw_tiles = d3.select('#container')
    .select('#report')
    .data(rep_db_data).enter()

      d3.select("#report").append("div").attr("class",function(d) { 
        if(d.INSTANCE_NAME === "REPORT"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.DATABASE_STATUS;
        }
      })
      .html(function (d) { 
        if(d.INSTANCE_NAME === "REPORT"){
          return "<br><i class='fa fa-database'></i> <br>Degreeworks DB: "+d.DATABASE_STATUS; 
      }
    })
  }
); 