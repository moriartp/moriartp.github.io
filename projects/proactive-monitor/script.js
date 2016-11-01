var data = d3.csv("proactive-monitor.csv", function(error, data) {
    // data.forEach(function(d) {
    // });   

  var tiles = d3.select('#container')//('body')
    .selectAll('.tile')
    .data(data).enter()
    .append('div')
      .attr('class', function(d) {return "tile "+"server-"+d.server+ " network-"+d.network+ " database"+d.database+ " application"+d.application;})
      // .attr('id', function(d) {return d.type;})
      .attr('id', function(d) {return d.service;})
      // .on('mouseover', function() {
      //   d3.select(this)
      //   .transition().duration(100)
      //   .style('background-color', '#54A5B0')
      // })


      .append('text')
      .html(function (d) { return "<h2>"+d.service+"</h2><br>"; });   

      // d3.selectAll("text").append("mac")
      // .filter( function(d) {return d.macQty > 0; })

      d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"server- "+d.server;})
      .html(function (d) { return "<br><i class='fa fa-server'></i> <br>Server: "+d.server; })

      d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"network- "+d.network;})
      .html(function (d) { return "<br><i class='fa fa-connectdevelop'></i><br>Network: "+d.network; })

      d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"database- "+d.database;})
      .html(function (d) { return "<br><i class='fa fa-database' fa-lg></i><br>Database: "+d.database; })

      d3.selectAll(".tile").append("div").attr("class",function(d) {return "factor "+"application- "+d.application;})
      .html(function (d) { return "<br><i class='fa fa-desktop' fa-lg></i><br>Application: "+d.application; })            

  }
);      