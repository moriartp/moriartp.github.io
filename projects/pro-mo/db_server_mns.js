
var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var lp5_server_data = data.filter(function(d){ return d.SERVER_NAME === "lum5prod-db01-lip.newschool.edu"})
  // console.log(lp5_server_data);


  var mns_tiles = d3.select('#container')
    .select('#mynewschool_DB_server')
    .data(lp5_server_data).enter()

      d3.select('#mynewschool_DB_server').attr("class",function(d) { 
        if(d.SERVER_NAME === "lum5prod-db01-lip.newschool.edu"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.SERVER_STATUS;
        }
      })
      .html(function (d) { 
        if(d.SERVER_NAME === "lum5prod-db01-lip.newschool.edu"){
          return "<br><i class='fa fa-database'></i> <br>DB Server: ✔"; 
        } else {
          return "<br><i class='fa fa-database'></i> <br>DB Server: &#9888;"; 
        }
      }
    )
  }
); 