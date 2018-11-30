  //THIS SCRIPT CAPTURES AND REstrUCTURES THE SPREADSHEET DATA
var $url = "https://spreadsheets.google.com/feeds/list/176CDbtZ2Daa5Z1FRdkh62Fy0jC3vrPhgIE8SjGPXhfg/1/public/basic?alt=json"
$.getJSON($url,function(blob){

    ///STRINGIFY AND MUNGE SPREADSHEET DATA INTO A USABLE STRUCTURE
    var str = JSON.stringify(blob.feed.entry);
    str = str.replace(/description:/g,"XXXXXXX\",\"description\":\"");
    str = str.replace(/, responsiblestakeholder:/g,"\", \"responsiblestakeholder\":\"");
    str = str.replace(/, probability: /g,"\", \"probability\":\"");
    str = str.replace(/\%/g,'');
    str = str.replace(/, severity: /g,"\", \"severity\":\"");
    str = str.replace(/, risklevel: /g,"\", \"risklevel\":\"");
    str = str.replace(/, responsestrategy: /g,"\", \"responsestrategy\":\"");
    str = str.replace(/, responseplan: /g,"\", \"responseplan\":\""); 
    str = str.replace(/, approved: /g,"\", \"approved\":\""); 
    str = str.replace(/, contingencyplan: /g,"\", \"contingencyplan\":\""); 

    ///PARSE RESTRUCTURED DATA INTO JSON 
    var reme = JSON.parse(str);
    // console.log(reme);

    var charter = d3.select('#charter')
    .data(reme)
    .enter()
    .append('div')
    .attr('class','risky')
    .text(function(d) { return d.content.description; })
    .style('background-color', function(d) { return "rgb(" + d.content.severity*d.content.probability + ", " + d.content.severity + ", "+ d.content.severity + ")"; }) ;

var margin = {top: 100, right: 150, bottom: 150, left: 100},
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight*.9 - margin.top - margin.bottom;

var x = d3.scaleLinear()
    .range([0, width]);

var y = d3.scaleLinear()
    .range([height, 0]);

var color = d3.scaleOrdinal(d3.schemeCategory10);

var xAxis = d3.axisBottom(x);

var yAxis = d3.axisLeft(y);

var svg = d3.select("#charter").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        // gridlines in x axis function
        function make_x_gridlines() {   
            return d3.axisBottom(x)
                .ticks(20)
        }

        // gridlines in y axis function
        function make_y_gridlines() {   
            return d3.axisLeft(y)
                .ticks(20)
        }


                // add the X gridlines
        svg.append("g")     
            .attr("class", "grid")
            .attr("transform", "translate(0," + height + ")")
            .call(make_x_gridlines()
                .tickSize(-height)
                .tickFormat("")
            )

        // add the Y gridlines
        svg.append("g")     
            .attr("class", "grid")
            .call(make_y_gridlines()
                .tickSize(-width)
                .tickFormat("")
            )




// Define the div for the tooltip
var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

  x.domain([0,100]);
  y.domain([0,100]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)


  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)


  svg.selectAll(".dot")
      .data(reme)
    .enter().append("circle")
      .attr("class", function(d) { return d.content.risklevel; })
      .attr("r", function(d) { return d.content.severity*1; })
      .attr("cx", function(d) { return x(d.content.probability); })
      .attr("cy", function(d) { return y(d.content.severity); })
      // .style("fill", "coral")
          .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("<h2>"+d.title.$t+"</h2><p><b>Severity:</b> "  + d.content.severity+"%<br><b>Probaility:</b> "+d.content.probability+"%</p><p><b>Description:</b> "+d.content.description+"</p><p><b>Response Plan: "+d.content.responsestrategy+"</b> "+d.content.responseplan+"</p><p><b>Contingency Plan: </b>"+d.content.contingencyplan+"</p>")  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);   
        });

    svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top) + ")")
      .style("text-anchor", "middle")
      .style("font-size", "2em")
      .text("Probaility");

    svg.append("g")
        .call(d3.axisLeft(y));

    // text label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-size", "2em")
        .text("Severity");  

  // var legend = svg.selectAll("div")
  //     .data(color.domain())
  //   .enter().append("g")
  //   // console.log("hello")
  //     .attr("class", "legend")
  //     .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // legend.append("rect")
  //     .attr("x", width - 18)
  //     .attr("width", 18)
  //     .attr("height", 18)
  //     // .style("fill", color);

  // legend.append("text")
  //     .attr("x", width - 24)
  //     .attr("y", 9)
  //     .attr("dy", ".35em")
  //     .style("text-anchor", "end")
  //     // .text(function(d) { return d.content.title; });
  //     .text("function(d) { return d.content.title; }");





/////////////?END SCATTER


});