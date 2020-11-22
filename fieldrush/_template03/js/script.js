$( document ).ready(function() { 
    //d3.select("#cont01").append("p").text("This is a loaded js script from the file directory, unsing remotely loaded d3 library");   
    console.log('this confirms the d3 script ran');

////////////////////////START NEW PAGE

var margin = {top: 40, right: 40, bottom: 40, left: 40},
    dim = Math.min(parseInt(d3.select("#chart").style("width")), parseInt(d3.select("#chart").style("height"))),
    width = dim - margin.left - margin.right,
    height = dim - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var r = d3.scale.linear()
    .range([7, 18]);

var color = d3.scale.ordinal()
      // .range(["#8c510a", "#dfc27d", "#35978f"]);
      .range(["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("#chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dollarFormatter = d3.format(",.0f")

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<div><span>Player:</span> <span style='color:white'>" + d.Player + "</span></div>" +
             "<div><span>School: </span><span style='color:white'>" + d.school + "</span></div>" +
             "<div><span>Conf: </span><span style='color:white'>"+ d.conf + "</span></div>" +
             "<div><span>Rushing:</span> <span style='color:white'>" + d.rush + " yards</span></div>" +
             "<div><span>Receiving:</span> <span style='color:white'>" + d.rec + " yards</span></div>";
    })

svg.call(tip);

d3.csv("data/data3.csv", function(error, data) {
  if (error) throw error;

  var subset = data.filter(function(el){return el.Pos === "RB" });

  subset.forEach(function(d) {
    d.rush = +d.RushYds;
    d.rec = +d.RecYds;
    d.G = +d.G;
    // d.G = +d.G;
  });

  x.domain([0, 1000]);
  y.domain([0, 500]);
  r.domain(d3.extent (subset, function (d)  {return d.G;}));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Rushing Yards");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Receiving Yards")

  svg.selectAll(".dot")
      .data(subset)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", function(d) {return r(d.G)})
      .attr("cx", function(d) { return x(d.RushYds); })
      .attr("cy", function(d) { return y(d.RecYds); })
      .style("fill", function(d) { return color(d.conf); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

});

function resize() {

  var dim = Math.min(parseInt(d3.select("#chart").style("width")), parseInt(d3.select("#chart").style("height"))),
  width = dim - margin.left - margin.right,
  height = dim - margin.top - margin.bottom;

  console.log(dim);

  // Update the range of the scale with new width/height
  x.range([0, width]);
  y.range([height, 0]);

  // Update the axis and text with the new scale
  svg.select('.x.axis')
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  svg.select('.x.axis').select('.label')
      .attr("x",width);

  svg.select('.y.axis')
    .call(yAxis);

  // Update the tick marks
  xAxis.ticks(dim / 75);
  yAxis.ticks(dim / 75);

  // Update the circles
  r.range([dim / 90, dim / 35])

  svg.selectAll('.dot')
    .attr("r", function(d) {return r(d.G)})
    .attr("cx", function(d) { return x(d.RushYds); })
    .attr("cy", function(d) { return y(d.RecYds); })
}

d3.select(window).on('resize', resize);

resize();



});