
var data = d3.csv("db_status/db_status.csv", function(error, data) {  
  var rep_db_data = data.filter(function(d){ return d.INSTANCE_NAME === "REPORT"})
  console.log(rep_db_data);


  var dw_tiles = d3.select('#container')
    .select('#reports_DB_table')
    .data(rep_db_data).enter()

      d3.select("#reports_DB_table").attr("class",function(d) { 
        if(d.INSTANCE_NAME === "REPORT"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.DATABASE_STATUS;
        }
      })
      .html(function (d) { 
        if(d.INSTANCE_NAME === "REPORT"){
          if(d.DATABASE_STATUS === "ACTIVE"){
            return "<br><i class='fa fa-table'></i> <br>Database: ✔";
          } else {
            return "<br><i class='fa fa-table'></i> <br>Database: &#9888;"; 
        }
      }
    })
  }
); 