        <script type="text/javascript">
        
        
        

var formatPercent = d3.format(".0%"); 
var formatNumber = d3.format(".0f");

        

// 			var color1 = d3.scale.ordinal()
// 			    .domain([1, 2, 3, 4])
// 			    .range(["rgb(26,150,65)", "rgb(166,217,106)", "rgb(253,174,97)", "rgb(215,25,28)"]); 
//             var legend_l1 = ["4 or fewer", "5 - 6", "7 - 9", "10 or more"]                 


//                 Legend           

var dataleg_fa = 
[
{lab: "< 4", len: 0.701009, col: "rgb(26,150,65)"},
{lab: "5 - 6", len: 0.2501328, col: "rgb(166,217,106)"},
{lab: "7 - 9", len: 0.0244291, col: "rgb(253,174,97)"},
{lab: "10+", len: 0.0244291, col: "rgb(215,25,28)"}
];

var dataleg_fb = 
[
{lab: "< 4", len: 0.620689655, col: "rgb(26,150,65)"},
{lab: "5 - 6", len: 0.275862069, col: "rgb(166,217,106)"},
{lab: "7 - 9", len: 0.068965517, col: "rgb(253,174,97)"},
{lab: "10+", len: 0.034482759, col: "rgb(215,25,28)"}
];

var dataleg_ya = 
[
{lab: "< 1900", len: 0.206024744, col: "#bcbddc"},
{lab: "1900-39", len: 0.731038193, col: "#9e9ac8"},
{lab: "1940-69", len: 0.047337278, col: "#756bb1"},
{lab: "1970 +", len: 0.015599785, col: "#54278f"}
];

var dataleg_yb = 
[
{lab: "1970s", len: 0.074074074, col: "#bcbddc"},
{lab: "1980s", len: 0.666666667, col: "#9e9ac8"},
{lab: "1990s", len: 0.148148148, col: "#756bb1"},
{lab: "2000s", len: 0.111111111, col: "#54278f"}
];

  var legend = svg.selectAll("g.legend")
  .data(dataleg_fa)
  .enter().append("g")
  .attr("class", "legend");
  
  var ls_w = 20, ls_h = 20;
  
  legend.append("rect")
  .attr("x", 725)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - 2*ls_h;})
  .attr("width", function(d, i){ return 250 * d.len;})
  .attr("height", ls_h)
  .style("fill", function(d, i) { return d.col; });
//   .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 695)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return d.lab; })
  .style("font-size", "12");
//   .style("align", "right");
  
  legend.append("text")
  .attr("x", function(d, i){ return 730 + 250 * d.len;})
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return Math.round(d.len * 100) + "%"; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", 685)
  .attr("y", 100)
  .text("Percentage of buildings, by # floors")
  .style("font-size", "14");


// TRANSITIONS


            
	d3.select("#after_hd")
		.on("click", function(d) {
                svg.selectAll("path")
                .transition()
                .duration(1)
                .attr("fill", function(d) { 
                    if (color_now == "floors") {
                        if (d.properties.HistDist != "Greenwich Village") { return "#FFFFFF"; }
                        else if (d.properties.YearBuilt > 1969) { return color1(d.properties.all); }
                        else { return "rgb(247,247,247)"; }
                    }
                    else {
                        if (d.properties.HistDist != "Greenwich Village") { return "#FFFFFF"; }
                        else if (d.properties.YearBuilt > 1969) { return colort2(d.properties.YearBuilt); } 
                        else { return "rgb(247,247,247)"; }                   
                    }
                        })

						d3.select(this).attr("class", "selected")
			d3.select("#all_b").attr("class", "notselected")
			show_now = "since"; 
			
// 			insert legend transitions here
    svg.selectAll(".legend")
    .remove();
        if (color_now == "floors") {
  var legend = svg.selectAll("g.legend")
  .data(dataleg_fb)
  .enter().append("g")
  .attr("class", "legend");
  
  var ls_w = 20, ls_h = 20;
  
  legend.append("rect")
  .attr("x", 725)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - 2*ls_h;})
  .attr("width", function(d, i){ return 250 * d.len;})
  .attr("height", ls_h)
  .style("fill", function(d, i) { return d.col; });
//   .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 695)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return d.lab; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", function(d, i){ return 730 + 250 * d.len;})
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return Math.round(d.len * 100) + "%"; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", 685)
  .attr("y", 100)
  .text("Percentage of buildings, by # floors")
  .style("font-size", "14");
}
else {
  var legend = svg.selectAll("g.legend")
  .data(dataleg_yb)
  .enter().append("g")
  .attr("class", "legend");
  
  var ls_w = 20, ls_h = 20;
  
  legend.append("rect")
  .attr("x", 725)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - 2*ls_h;})
  .attr("width", function(d, i){ return 250 * d.len;})
  .attr("height", ls_h)
  .style("fill", function(d, i) { return d.col; });
//   .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 685)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return d.lab; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", function(d, i){ return 730 + 250 * d.len;})
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return Math.round(d.len * 100) + "%"; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", 685)
  .attr("y", 100)
  .text("Percentage of buildings, by year built")
  .style("font-size", "14");

}

    }) 
			
	d3.select("#all_b")
		.on("click", function(d) {
                svg.selectAll("path")
                .transition()
                .duration(1)
                .attr("fill", function(d) { 
                    if (color_now == "floors") {
                        if (d.properties.HistDist != "Greenwich Village") { return "rgb(247,247,247)"; }
                        else { return color1(d.properties.all); } ;
                    }
                    else {
                        if (d.properties.HistDist != "Greenwich Village") { return "rgb(247,247,247)"; }
                        else { return colort1(d.properties.YearBuilt); }                         
                    }
                   })
						d3.select(this).attr("class", "selected")
			d3.select("#after_hd").attr("class", "notselected")
			show_now = "all"; 
// 			insert legend transitions here
    svg.selectAll(".legend")
    .remove();
    if (color_now == "floors") {
  var legend = svg.selectAll("g.legend")
  .data(dataleg_fa)
  .enter().append("g")
  .attr("class", "legend");
  
  var ls_w = 20, ls_h = 20;
  
  legend.append("rect")
  .attr("x", 725)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - 2*ls_h;})
  .attr("width", function(d, i){ return 250 * d.len;})
  .attr("height", ls_h)
  .style("fill", function(d, i) { return d.col; });
//   .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 695)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return d.lab; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", function(d, i){ return 730 + 250 * d.len;})
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return Math.round(d.len * 100) + "%"; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", 685)
  .attr("y", 100)
  .text("Percentage of buildings, by # floors")
  .style("font-size", "14");
}
else {
  var legend = svg.selectAll("g.legend")
  .data(dataleg_ya)
  .enter().append("g")
  .attr("class", "legend");
  
  var ls_w = 20, ls_h = 20;
  
  legend.append("rect")
  .attr("x", 725)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - 2*ls_h;})
  .attr("width", function(d, i){ return 250 * d.len;})
  .attr("height", ls_h)
  .style("fill", function(d, i) { return d.col; });
//   .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 678)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return d.lab; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", function(d, i){ return 730 + 250 * d.len;})
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return Math.round(d.len * 100) + "%"; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", 685)
  .attr("y", 100)
  .text("Percentage of buildings, by year built")
  .style("font-size", "14");

}
    }) 			

	d3.select("#y_const")
		.on("click", function(d) {
                svg.selectAll("path")
                .transition()
                .duration(1)
                .attr("fill", function(d) { 
                    if (show_now=="all") {
                        if (d.properties.HistDist != "Greenwich Village") { return "rgb(247,247,247)"; }
                        else { return colort1(d.properties.YearBuilt); } 
                    }
                    else if (show_now=="since") {
                        if (d.properties.HistDist != "Greenwich Village") { return "#FFFFFF"; }
                        else if (d.properties.YearBuilt > 1969) { return colort2(d.properties.YearBuilt); }
                                                else { return "rgb(247,247,247)"; }
                    }
                   })
						d3.select(this).attr("class", "selected")
			d3.select("#num_floors").attr("class", "notselected")
			color_now = "year"; 
// 			insert legend transitions here
    svg.selectAll(".legend")
    .remove();
 if (show_now=="all") {
      var legend = svg.selectAll("g.legend")
  .data(dataleg_ya)
  .enter().append("g")
  .attr("class", "legend");
  
  var ls_w = 20, ls_h = 20;
  
  legend.append("rect")
  .attr("x", 725)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - 2*ls_h;})
  .attr("width", function(d, i){ return 250 * d.len;})
  .attr("height", ls_h)
  .style("fill", function(d, i) { return d.col; });
//   .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 678)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return d.lab; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", function(d, i){ return 730 + 250 * d.len;})
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return Math.round(d.len * 100) + "%"; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", 685)
  .attr("y", 100)
  .text("Percentage of buildings, by year built")
  .style("font-size", "14");
}
else {
      var legend = svg.selectAll("g.legend")
  .data(dataleg_yb)
  .enter().append("g")
  .attr("class", "legend");
  
  var ls_w = 20, ls_h = 20;
  
  legend.append("rect")
  .attr("x", 725)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - 2*ls_h;})
  .attr("width", function(d, i){ return 250 * d.len;})
  .attr("height", ls_h)
  .style("fill", function(d, i) { return d.col; });
//   .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 685)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return d.lab; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", function(d, i){ return 730 + 250 * d.len;})
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return Math.round(d.len * 100) + "%"; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", 685)
  .attr("y", 100)
  .text("Percentage of buildings, by year built")
  .style("font-size", "14");

}

    }) 	
    
	d3.select("#num_floors")
		.on("click", function(d) {
                svg.selectAll("path")
                .transition()
                .duration(1)
                .attr("fill", function(d) { 
                    if (show_now=="all") {
                        if (d.properties.HistDist != "Greenwich Village") { return "rgb(247,247,247)"; }
                        else { return color1(d.properties.all); }
                    }
                    else if (show_now=="since") {
                        if (d.properties.HistDist != "Greenwich Village") { return "#FFFFFF"; }
                        else if (d.properties.YearBuilt > 1969) { return color1(d.properties.all); }
                                                else { return "rgb(247,247,247)"; }
                    }
                   })
						d3.select(this).attr("class", "selected")
			d3.select("#y_const").attr("class", "notselected")
			color_now = "floors"; 
    svg.selectAll(".legend")
    .remove();
    if (show_now == "all") {
  var legend = svg.selectAll("g.legend")
  .data(dataleg_fa)
  .enter().append("g")
  .attr("class", "legend");
  
  var ls_w = 20, ls_h = 20;
  
  legend.append("rect")
  .attr("x", 725)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - 2*ls_h;})
  .attr("width", function(d, i){ return 250 * d.len;})
  .attr("height", ls_h)
  .style("fill", function(d, i) { return d.col; });
//   .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 695)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return d.lab; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", function(d, i){ return 730 + 250 * d.len;})
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return Math.round(d.len * 100) + "%"; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", 685)
  .attr("y", 100)
  .text("Percentage of buildings, by # floors")
  .style("font-size", "14");
}
else{
  var legend = svg.selectAll("g.legend")
  .data(dataleg_fb)
  .enter().append("g")
  .attr("class", "legend");
  
  var ls_w = 20, ls_h = 20;
  
  legend.append("rect")
  .attr("x", 725)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - 2*ls_h;})
  .attr("width", function(d, i){ return 250 * d.len;})
  .attr("height", ls_h)
  .style("fill", function(d, i) { return d.col; });
//   .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 695)
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return d.lab; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", function(d, i){ return 730 + 250 * d.len;})
  .attr("y", function(d, i){ return 150 + (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return Math.round(d.len * 100) + "%"; })
  .style("font-size", "12")
  .style("float", "center");
  
  legend.append("text")
  .attr("x", 685)
  .attr("y", 100)
  .text("Percentage of buildings, by # floors")
  .style("font-size", "14");
}
// }
    }) 
			}); 
			
			
        
        </script>