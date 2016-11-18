
var data = d3.csv("db_status/db_status.csv", function(error, data) {  
  // console.log(data);  

  var tiles1 = d3.selectAll('.tile1')
    .data(data).enter()

      // d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"server- "+d.server;})
      // .html(function (d) { return "<br><i class='fa fa-server'></i> <br>Server: "+d.server; })

      // d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"network- "+d.network;})
      // .html(function (d) { return "<br><i class='fa fa-connectdevelop'></i><br>Network: "+d.network; })

      d3.selectAll(".tile1").append("div").attr("class",function(d) {return "factor "+"database- "+d.DATABASE_STATUS;})
      .html(function (d) { return "<br><i class='fa fa-database' fa-lg></i><br>Database: "+d.DATABASE_STATUS; })
      console.log("THE CURRENT STATUS IS "+d.DATABASE_STATUS);

      d3.selectAll(".tile1").append("div").attr("class",function(d) {return "factor "+"database- "+d.DATABASE_STATUS;})
      .html(function (d) { return "<br><i class='fa fa-database' fa-lg></i><br>Database: "+d.DATABASE_STATUS; })

      // d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"application- "+d.application;})
      // .html(function (d) { return "<br><i class='fa fa-desktop' fa-lg></i><br>Application: "+d.application; })            

  }
); 
console.log("THE CURRENT STATUS IS "+d.DATABASE_STATUS);
    
