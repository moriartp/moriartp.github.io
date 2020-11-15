$( document ).ready(function() { 
    //d3.select("#cont01").append("p").text("This is a loaded js script from the file directory, unsing remotely loaded d3 library");   
    console.log('this confirms the d3 script ran');

// /////////////////////

//   d3.csv("/data/data.csv").then(function(data) {
//     console.log(data);
//   });	
// ///////////////////////

      // Initialize a SVG area. Note that the width is not specified yet, since unknown
      var Svg = d3.select("#div_basicResize")
        .append("svg")
        .attr("height", 200)

      // Create dummy data
      //var data = [19, 13, 54, 78, 98, 120, 138]

      d3.csv("data/data1.csv").then(function(data) {
          console.log(data);

      // Add X axis. Note that we don't know the range yet, so we cannot draw it.
      var x = d3.scaleLinear()
        .domain([0, 700])
      var xAxis = Svg.append("g")
        .attr("transform", "translate(0,150)")

      // Initialize circles. Note that the X scale is not available yet, so we cannot draw them
      var myCircles = Svg
        .selectAll("circles")
        .data(data)
        .enter()
        .append("circle")
          .style("fill", "#0EAD69")
          .style("stroke-width", ".25")
          .style("stroke", "#0EAD69")
          .style("opacity", ".5")
          .attr("r", 5)
          .attr("cy", 100)


      // A function that finishes to draw the chart for a specific device size.
      function drawChart() {

        // get the current width of the div where the chart appear, and attribute it to Svg
        currentWidth = parseInt(d3.select('#div_basicResize').style('width'), 10)
        Svg.attr("width", currentWidth)

        // Update the X scale and Axis (here the 20 is just to have a bit of margin)
        x.range([ 20, currentWidth-20 ]);
        xAxis.call(d3.axisBottom(x))

        // Add the last information needed for the circles: their X position
        myCircles
          .attr("cx", function(d){ return x(d.stat)})
          // .html("<div>hello</div>")

        myText
          .attr("x", function(d){ return x(d.stat)})
          // .html("<div>hello</div>")

        }




      // Initialize the chart
      drawChart()

      // Add an event listener that run the function when dimension change
      window.addEventListener('resize', drawChart );

  });  

});