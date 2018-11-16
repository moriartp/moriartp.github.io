var parseDate = d3.time.format("%d-%b-%y").parse;

    var data=[
     {"category": "Task 1", "from": "1-Jan-17", "to": "15-Jan-17", "progress":100},
     {"category": "Task 2", "from": "13-Jan-17", "to": "1-Feb-17", "progress":60},
     {"category": "Task 3", "from": "1-Feb-17", "to": "15-Feb-17", "progress":70},
     {"category": "Task 4", "from": "10-Feb-17", "to": "1-Mar-17", "progress":10},
     {"category": "Task 5", "from": "1-Mar-17", "to": "12-Mar-17", "progress":90}
    ]

    var types_of_statuses = ["Completed","Remaining"];
    var statuses_color = ["#2ecc71","#e74c3c"];

    data.forEach(function(d) {
        d.from = parseDate(d.from);
        d.to = parseDate(d.to);
    });
    var margin = {top: 50, right: 50, bottom: 50, left: 100},
        width = 900 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var y = d3.scale.ordinal()
        .rangeRoundBands([0, height], .2);

    var x = d3.time.scale().range([0, width]);

    y.domain(data.map(function(d) { return d.category; }));
    x.domain([d3.min(data,function(d){return d.from;}), d3.max(data,function(d){return d.to;})]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(15)
        .tickFormat(d3.time.format("%d%b"));

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var svg = d3.select("#sched").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .append("text")
          .attr("x", width-margin.right)
          .attr("dx", ".71em")
          .attr("dy", "-0.2em")
          .text("Date");

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);

      svg.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("y", function(d) { return y(d.category); })
          .attr("height", y.rangeBand())
          .attr("x", function(d) { return x(d.from); })
          .attr("width", function(d) { return x(d.to) - x(d.from)});

      svg.selectAll(".pending")
          .data(data)
          .enter().append("rect")
          .attr("class", "pending")
          .attr("y", function(d) { return y(d.category); })
          .attr("height", y.rangeBand())
          .attr("x", function(d) { return x(d.from) + (x(d.to) - x(d.from))*d.progress/100 })
          .attr("width", function(d) { return (x(d.to) - x(d.from))*(1-(d.progress/100))});


        // add legend
        var legend = svg.append("g")
          .attr("class", "legend")

        legend.selectAll(".swatch")
          .data(types_of_statuses)
          .enter()
          .append("rect")
          .attr("x", width-margin.left-margin.right-25)
          .attr("y", function(d, i){ return -margin.top/2 + i*20;})
          .attr("width", 10)
          .attr("height", 10)
          .style("fill", function(d,i) {
            return statuses_color[i];
          })

        legend.selectAll(".labels")
          .data(types_of_statuses)
          .enter()
          .append("text")
          .attr("x", width-margin.left-margin.right)
          .attr("y", function(d, i){ return -margin.top/2 + i*20 + 10;})
          .text(function(d,i){return types_of_statuses[i]});


		var tooltip = d3.select("body")
		.append('div')
		.attr('class', 'tooltip');

		tooltip.append('div').attr('class', 'category');
		tooltip.append('div').attr('class', 'tempRange');
		tooltip.append('div').attr('class', 'progress');

		svg.selectAll(".bar,.pending")
		.on('mouseover', function(d) {

			tooltip.select('.category').html("<b>" + d.category + "</b>");
			tooltip.select('.tempRange').html(d.from.toDateString() + " to " + d.to.toDateString());
			tooltip.select('.progress').html(d.progress + "% completed");

			tooltip.style('display', 'block');
			tooltip.style('opacity',2);

		})
		.on('mousemove', function(d) {
			tooltip.style('top', (d3.event.layerY + 10) + 'px')
			.style('left', (d3.event.layerX - 25) + 'px');
		})
		.on('mouseout', function() {
			tooltip.style('display', 'none');
			tooltip.style('opacity',0);
		});

