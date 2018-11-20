// script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "https://spreadsheets.google.com/feeds/list/1EHLW8ElRHA31H5cW5yzFm0rpSV_Hss4gzyQebs4AR1g/1/public/basic?alt=json";







var $url = "https://spreadsheets.google.com/feeds/list/1NHMAu6QAwiCgdF99Mah3xvK49qXGN_CWFa-17ggTRRY/1/public/basic?alt=json"
$.getJSON($url,function(blob1){

console.log(blob1.feed.entry);
var str = JSON.stringify(blob1.feed.entry);
 str = str.replace(/\"\$t\":\"from: /g,"\"from\":\"");
 str = str.replace(/, to: /g,"\", \"to\":\"");
 str = str.replace(/, progress: /g,"\", \"progress\":"); 
  str = str.replace(/\"},\"link\":/g,"\},\"link\": "); 
// str = str.replace(/{\"type\":\"text\" /g,"");
 console.log(str);
 str = $.parseJSON(str);
 console.log(str);








var parseDate = d3three.time.format("%d-%b-%y").parse;

    var types_of_statuses = ["Completed","Remaining"];
    var statuses_color = ["#45BCFC","#9bddff"];

    str.forEach(function(d) {
        d.content.from = parseDate(d.content.from);
        d.content.to = parseDate(d.content.to);
    });
    console.log(str);
    var margin = {top: 50, right: 50, bottom: 50, left: 250},
        width = window.innerWidth - margin.left - margin.right,
        height = window.innerHeight*0.9 - margin.top - margin.bottom;

    var y = d3three.scale.ordinal()
        .rangeRoundBands([0, height], .2);

    var x = d3three.time.scale().range([0, width]);

    y.domain(str.map(function(d) { return d.title.$t; }));
    x.domain([d3three.min(str,function(d){return d.content.from;}), d3three.max(str,function(d){return d.content.to;})]);

    var xAxis = d3three.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(15)
        // .innerTickSize(-height)
        .tickFormat(d3three.time.format("%d%b"));

    var yAxis = d3three.svg.axis()
        .scale(y)
        .innerTickSize(-width)
        .orient("left");

    var svg = d3three.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("id","gantt")
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
          .data(str)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("y", function(d) { return y(d.title.$t); })
          .attr("height", y.rangeBand())
          .attr("x", function(d) { return x(d.content.from); })
          .attr("rx","2")
          .attr("ry","2")
          .attr("width", function(d) { return x(d.content.to) - x(d.content.from)});

      svg.selectAll(".pending")
          .data(str)
          .enter().append("rect")
          .attr("class", "pending")
          .attr("y", function(d) { return y(d.title.$t); })
          .attr("height", y.rangeBand())
          .attr("x", function(d) { return x(d.content.from) + (x(d.content.to) - x(d.content.from))*d.content.progress/100 })
          .attr("rx","2")
          .attr("ry","2")
          .attr("width", function(d) { return (x(d.content.to) - x(d.content.from))*(1-(d.content.progress/100))});

        svg.selectAll(".depend")
        .data(str)
        .enter()
        .append("path")
        .attr("d", function(d) { return "M "+x(d.content.to)*1+" "+y(d.title.$t)*1+" H "+x(d.content.to)*1.025+" "+
          " V "+y(d.title.$t)*1.25 +" H "+x(d.content.to)*1.05 })
        .style("stroke-width", "0.5px")
        .style("stroke-opacity", ".95")
        .style("stroke", "#222")
        .style("fill", "none");





/////////////DEPEND//////////////////////
        // svg.selectAll(".depend")
        // .data(str)
        // .enter()
        // .append("line")
        // .attr("curve","curveStepBefore")
        // // .attr("curve","step-before")
        // .attr("x1", function(d) { return x(d.content.to) })  //<<== change your code here
        // .attr("y1", function(d) { return y(d.title.$t)+10; })
        // .attr("x2", function(d) { return x(d.content.to)+50 })
        // .attr("y2", function(d) { return y(d.title.$t)+40; })

        // .style("stroke-width", "0.5px")
        // .style("stroke-opacity", ".95")
        // .style("stroke", "#222")
        // .style("fill", "none")
        // .interpolate("step-before");
//////////////DEPEND//////////////////////




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

        //CURRENT DATE INIDICATOR
        var today = new Date();
        var dd = today.getDate();    //<<===== no need
        var mm = today.getMonth()+1; //January is 0!   //<<===== no need
        var yyyy = today.getFullYear();  //<<===== no need


        svg.append("line")
        .attr("x1", x(today))  //<<== change your code here
        .attr("y1", 0)
        .attr("x2", x(today))  //<<== and here
        .attr("y2", height)
        .style("stroke-width", "5px")
        .style("stroke-opacity", ".2")
        .style("stroke", "#FF683C")
        .style("fill", "none");
        //END CURRENT DATE INIDICATOR

        //TASK TOOLTIP
        var tooltip = d3three.select("body")
        .append('div')
        .attr('class', 'tooltip');

        tooltip.append('div').attr('class', 'category');
        tooltip.append('div').attr('class', 'tempRange');
        tooltip.append('div').attr('class', 'progress');

        svg.selectAll(".bar,.pending")
        .on('mouseover', function(d) {

          tooltip.select('.category').html("<b>" + d.title.$t + "</b>");
          tooltip.select('.tempRange').html(d.content.from.toDateString() + " to " + d.content.to.toDateString());
          tooltip.select('.progress').html(d.content.progress + "% completed");

          tooltip.style('display', 'block');
          tooltip.style('opacity',2);

        })
        .on('mousemove', function(d) {
          tooltip.style('top', (d3three.event.layerY + 10) + 'px')
          .style('left', (d3three.event.layerX - 25) + 'px');
        })
        .on('mouseout', function() {
          tooltip.style('display', 'none');
          tooltip.style('opacity',0);
        });

});