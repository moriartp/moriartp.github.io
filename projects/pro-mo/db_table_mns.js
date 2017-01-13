
var data = d3.csv("db_status/db_status.csv", function(error, data) {  
  var mns_db_data = data.filter(function(d){ return d.INSTANCE_NAME === "LUM5PROD"})
  console.log(mns_db_data);


  var mns_db_tiles = d3.select('#container')
    .select('#mynewschool_DB_table')
    .data(mns_db_data).enter()

      d3.select("#mynewschool_DB_table").attr("class",function(d) { 
        if(d.INSTANCE_NAME === "LUM5PROD"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.DATABASE_STATUS;
        }
      })
      .html(function (d) { 
        if(d.INSTANCE_NAME === "LUM5PROD"){
          if(d.DATABASE_STATUS === "ACTIVE"){
            return "<br><i class='fa fa-table'></i> <br>Database: ✔";
          } else {
            return "<br><i class='fa fa-table'></i> <br>Database: &#9888;"; 
        }
      }
    })
  }
); 