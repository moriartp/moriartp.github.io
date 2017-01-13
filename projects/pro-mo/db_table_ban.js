
var data = d3.csv("db_status/db_status.csv", function(error, data) {  

  var tiles = d3.select('#container')
    .select('#banner_DB_table')
    .data(data).enter()

      d3.select("#banner_DB_table").attr("class",function(d) {
        if(d.INSTANCE_NAME === "NSPB"){
          return "factor "+"db- "+d.DATABASE_STATUS;
        }
      })
      .html(function (d) { 
        if(d.INSTANCE_NAME === "NSPB"){
          // return "<br><i class='fa fa-table'></i> <br>Database: "+d.DATABASE_STATUS; 

          if(d.DATABASE_STATUS === "ACTIVE"){

          return "<br><i class='fa fa-table'></i> <br>Database: ✔"; 
        } else {
          return "<br><i class='fa fa-table'></i> <br>Database: &#9888;"; 
        }
      }
    })
  }
); 