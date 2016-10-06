var data = d3.csv("dummyRoomData.csv", function(error, data) {
    data.forEach(function(d) {
    });

var body = d3.select('body')
  .selectAll('div')
  .data(data).enter()
  .append('div')
    .attr('class', "tile")//function (d) { return d.class; })
    // .style('position','absolute')
    .style('display','inline-block')
    .style('padding','10px')
    .style('margin','10px')        
    // .style('top', function (d) { return d.top; })
    // .style('left', function (d) { return d.left; })
    .style('width', "100px")
    .style('height', "100px")
    .style('background-color', "WhiteSmoke")//function (d) { return d.backgroundColor; })
    // .html('background-color', function (d) { return d.class; })
    // add mouseover effect to change background color to black
    .on('mouseover', function() {
      d3.select(this)
      .transition().duration(100)
      .style('background-color','red')
      .style("height","110px")
      .style("width","110px")
    })
    .on('mouseout', function () {
      d3.select(this)
      .transition().duration(900)
      .style('background-color', 'WhiteSmoke')//function (d) { return d.backgroundColor; })
      .style("height","100px")
      .style("width","100px")
    })
    .append('text')
    .html(function (d) { return "<font size='5'>"+d.roomID+"</font><br>"+d.type+"<br>"+d.location+"<br>"+d.platform; });    


    });
