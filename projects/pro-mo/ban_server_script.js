
var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  // console.log(data);  

  var tiles = d3.select('#banner')
    // .selectAll('.server_indicator')
    // .data(data).enter()
    .append('div')
      .attr('class', "ban_server";})
      .append('text')
      .html("<p>HERE</p>")
  }
); 