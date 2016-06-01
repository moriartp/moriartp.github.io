var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 860 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom

var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width*0.8], .1)

var x1 = d3.scale.ordinal()

var y = d3.scale.linear()
    .range([height, 0])

var color = d3.scale.ordinal()
    .range(["#e31a1c", "#fb9a99", "#33a02c", "#b2df8a", "#1f78b4", "#a6cee3"])

var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"))

var svg = d3.select("#grouped1").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

d3.csv("data/student1.csv", function(error, data) {
  if (error) throw error

  console.log(data)

  var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "State" })

  data.forEach(function(d) {
    d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]} })
  })

  x0.domain(data.map(function(d){ return d.State }))
  x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()])
  y.domain(
    [
      0, 
      d3.max(data, function(d){ 
        return d3.max(d.ages, function(d){ 
            return d.value 
          }) 
      })
    ]
  )

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Enrollment")

  var stategroups = svg.selectAll(".state").data(data)
    .enter().append("g")
      .attr("class", "state")
      .attr("transform", function(d){ return "translate(" + x0(d.State) + ",0)" })

  stategroups.selectAll("rect")
      .data(function(d){ return d.ages })
    .enter().append("rect")
      .attr("width", x1.rangeBand())
      .attr("x", function(d){ return x1(d.name) })
      .attr("y", function(d){ return y(d.value) })
      .attr("height", function(d) { return height - y(d.value) })
      .style("fill", function(d) { return color(d.name) })

  var legend = svg.selectAll(".legend")
      .data(ageNames.slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(-20," + i * 20 + ")" })

    legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color)

    legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d })



    //////////////////////////////////////////////////////////
    //// Adding a tooltip to follow the mouse
    //////////////////////////////////////////////////////////
    var tooltip = d3.select('body').append('div').attr('class', 'tooltip')
    var comma = d3.format('0,000')

    stategroups.on('mouseenter', showToolTip)
              .on('mousemove', moveTooltip)
              .on('mouseleave', hideToolTip)

    var decimal = d3.format(".1f")
    
    function showToolTip(d,i){
      tooltip.classed('show', true)
    }


    function moveTooltip(d,i){

      ////Add the class `reced` if the data of a `stategroup` is not the same as `d`
      ////`d` is the data bound to the element that triggered the event 
      stategroups.classed('reced', function(state_data){return state_data != d })

      ////Get the mouse X position 
      var mouseX = d3.event.clientX
      var mouseY = d3.event.clientY
      
      ////Put the state initial and all age group data in the tooltip HTML
      tooltip.html('').html('<h4>'+d.State+'</h4>')
      var reversed = d.ages.slice().reverse()
      reversed.forEach(function(group){
        tooltip.append('p').html(
          '<span class="color_'+color(group.name).replace(/[#]/g,'')+'">'+group.name+'</span>: '+comma(group.value)
          )
      })

      ////Calculate positioning and move tooltip
      var ttBCR = tooltip.node().getBoundingClientRect()
      var topPosition = mouseY - ttBCR.height + pageYOffset - 14
      var leftPosition = ( mouseX - ttBCR.width*0.5 ) + pageXOffset
      
      tooltip
        .style({
          top: topPosition+'px', 
          left: leftPosition+'px'
        })
    }

    
    function hideToolTip(d,i){
      tooltip.classed('show', false)
      stategroups.classed('reced', false)
    }
    //////////////////////////////////////////////////////////


})