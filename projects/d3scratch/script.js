var data = d3.csv("dummyRoomData.csv", function(error, data) {
    data.forEach(function(d) {
    });

var body = d3.select('body')
  .selectAll('div')
  .data(data).enter()
  .append('div.tile')
    .attr('class', "tile")//function (d) { return d.class; })
    .attr('class', function (d) { return d.type; })
    // .attr('data-filter', function (d) { return d.type; })
    // .attr('class', function (d) { return d.platform; })
    .style('display','inline-block')
    .style('padding','10px')
    .style('margin','10px')
    .style('width', "100px")
    .style('height', "100px")
    .style('background-color', "WhiteSmoke")//function (d) { return d.backgroundColor; })
    .on('mouseover', function() {
      d3.select(this)
      .transition().duration(100)
      .style('background-color','#E82E21')
      .style("height","100px")
      .style("width","100px")
    })
    .on('mouseout', function () {
      d3.select(this)
      .transition().duration(1500)
      .style('background-color', 'WhiteSmoke')//function (d) { return d.backgroundColor; })
      .style("height","100px")
      .style("width","100px")
    })
    .append('text')
    .html(function (d) { return "<font size='5'>"+d.roomID+"</font><br>"+d.type+"<br>"+d.location+"<br>"+d.platform; });    


    });

// }



