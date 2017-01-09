
var data = d3.csv("db_status/db_status.csv", function(error, data) {  
  var mns_db_data = data.filter(function(d){ return d.INSTANCE_NAME === "LUM5PROD"})
  console.log(mns_db_data);


  var mns_db_tiles = d3.select('#container')
    .select('#mynewschool')
    .data(mns_db_data).enter()

      d3.select("#mynewschool").append("div").attr("class",function(d) { 
        if(d.INSTANCE_NAME === "LUM5PROD"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.DATABASE_STATUS;
        }
      })
      .html(function (d) { 
        if(d.INSTANCE_NAME === "LUM5PROD"){
          return "<br><i class='fa fa-database'></i> <br>Database: "+d.DATABASE_STATUS; 
      }
    })
  }
); 