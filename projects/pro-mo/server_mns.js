
var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var lp5_server_data = data.filter(function(d){ return d.SERVER_NAME === "lum5prod-db01-lip.newschool.edu"})
  // console.log(lp5_server_data);


  var mns_tiles = d3.select('#container')
    .select('#mynewschool')
    .data(lp5_server_data).enter()

      d3.select('#mynewschool').append("div").attr("class",function(d) { 
        if(d.SERVER_NAME === "lum5prod-db01-lip.newschool.edu"){
          // console.log(d.SERVER_NAME);
          return "factor "+"server- "+d.SERVER_STATUS;
        }
      })
      .html(function (d) { 
        if(d.SERVER_NAME === "lum5prod-db01-lip.newschool.edu"){
          return "<br><i class='fa fa-server'></i> <br>MNS Server: "+d.SERVER_STATUS; 
      }
    })
  }
); 