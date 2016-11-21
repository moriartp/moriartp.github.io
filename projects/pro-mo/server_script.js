
var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  // console.log(data);  

  var tiles = d3.select('#container')
    .selectAll('.tile')
    .data(data).enter()
    .append('div')
      .attr('class', function(d) {return "tile ";})
      .attr('id', function(d) {return d.SERVER_NAME;})
      .append('text')
      .html(function (d) { return "<p class='serverName'>"+d.SERVER_NAME+"</p><br>"; });   

      d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"server- "+d.SERVER_STATUS;})
      .html(function (d) { return "<br><i class='fa fa-server'></i> <br>Server: "+d.SERVER_STATUS; })

      // d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"network- "+d.network;})
      // .html(function (d) { return "<br><i class='fa fa-connectdevelop'></i><br>Network: "+d.network; })

      // d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"database- "+d.DATABASE_STATUS;})
      // .html(function (d) { return "<br><i class='fa fa-database' fa-lg></i><br>Database: "+d.DATABASE_STATUS; })

      // d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"application- "+d.application;})
      // .html(function (d) { return "<br><i class='fa fa-desktop' fa-lg></i><br>Application: "+d.application; })            

  }
); 