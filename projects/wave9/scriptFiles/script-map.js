console.log('I AM HERE');
var width = 320,
    height = 580,
    velocity = .003,
    time = Date.now();

var projection = d3.geo.equirectangular()
    .rotate([0, 0, 89])
    .translate([width / 2, height / 2])
    .scale(85)
    .precision(0);

var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule();

d3.select("#viz1")
    // .call(svg, "no resampling", [180].concat(d3.range(-90, 180, 90), [180]).map(function(x) { return [x, 0]; }), 0)
    .call(svg, "uniform resampling", [180].concat(d3.range(-176, 180, 4), [180]).map(function(x) { return [x, 0]; }), 0)
    .call(svg, "adaptive resampling", [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]], .5);

reredraw();

function svg(body, title, coordinates, precision) {
  var svg = body.append("svg")
      .datum({
        type: "LineString",
        coordinates: coordinates,
        precision: precision
      })
      .attr("width", width)
      .attr("height", height);

  svg.append("text")
      .attr("class", "title")
      .attr("x", width / 2)
      .attr("y", height - 50)
      .style("text-anchor", "middle")
      .text(title);

  var g = svg.append("g")
      .attr("transform", "rotate(90 " + projection.translate() + ")");

  g.append("path")
      .attr("class", "resample");

  g.append("path")
      .datum(graticule)
      .attr("class", "graticule");
}

function reredraw() {
  d3.selectAll("svg > g").each(function(d) {
    var g = d3.select(this);

    projection.precision(.3);
    g.selectAll(".graticule").attr("d", path);

    projection.precision(d.precision);
    g.selectAll(".resample").attr("d", path);

    // Override the path context to extract the resampled points.
    path.context(bufferContext());
    path(d);
    var points = path.context().buffer();
    path.context(null);

    var point = g.selectAll(".point").data(points);
    point.exit().remove();
    point.enter().append("circle").attr("class", "point resample").attr("r", 4.5);
    point.attr("transform", function(d) { return "translate(" + d + ")"; });
  });
}

d3.timer(function() {
  var dt = Date.now() - time;
  projection.rotate([velocity * dt, 0, 89]);
  reredraw();
});

function bufferContext() {
  var buffer = [];
  return {
    moveTo: function(x, y) { buffer.push([x, y]); },
    lineTo: function(x, y) { buffer.push([x, y]); },
    closePath: function() {},
    buffer: function() { var _ = buffer; buffer = []; return _; }
  };
}

d3.select(self.frameElement).style("height", height + "px");