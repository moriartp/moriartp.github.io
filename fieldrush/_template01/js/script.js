$( document ).ready(function() { 
    //d3.select("#cont01").append("p").text("This is a loaded js script from the file directory, unsing remotely loaded d3 library");   
    console.log('this confirms the d3 script ran');

/////////////////////


  d3.csv("/data/data.csv").then(function(data) {
    console.log(data);

    d3.select("#cont01").selectAll("p")
    .data(data)
    .enter()
    .append("p")
    .text(function(d,i){
                    return d.player;
                })

    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scaleBand()
              .range([0, width*.5])
              .padding(0.1);
    var y = d3.scaleLinear()
              .range([height, 0]);
              
    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#cont02").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

    // get the data
    d3.csv("data/data.csv").then(function(data) {

      // format the data
      data.forEach(function(d) {
        d.stat = +d.stat;
      });

      // Scale the range of the data in the domains
      x.domain(data.map(function(d) { return d.player; }));
      y.domain([0, d3.max(data, function(d) { return d.stat; })]);

      // append the rectangles for the bar chart
      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.player); })
          .attr("width", x.bandwidth())
          .attr("y", function(d) { return y(d.stat); })
          .attr("height", function(d) { return height - y(d.stat); });

      // add the x Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // add the y Axis
      svg.append("g")
          .call(d3.axisLeft(y));

    });


  });	
///////////////////////





});