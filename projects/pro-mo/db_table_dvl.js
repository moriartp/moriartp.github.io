
var data = d3.tsv("db_status/devl_status.csv", function(error, data) {  
  var dv_db_data = data.filter(function(d){ return d.INSTANCE_NAME === "DEVL"})
  console.log(data);


  var dv_tiles = d3.select('#container')
    .select('#devl_DB_table')
    .data(dv_db_data).enter()

      d3.select("#devl_DB_table").attr("class",function(d) { 
        // if(d.INSTANCE_NAME === "DWPROD"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.DATABASE_STATUS;
        // }
      })
      .html(function (d) { 
        if(d.INSTANCE_NAME === "DWPROD"){

          if(d.DATABASE_STATUS === "ACTIVE"){
            return "<br><i class='fa fa-table'></i> <br>Database: ✔";
          } else {
            return "<br><i class='fa fa-table'></i> <br>Database: &#9888;"; 
        }
      }
    })





  }
); 