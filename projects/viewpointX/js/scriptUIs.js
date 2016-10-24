var depend = document.getElementById("dep").value;
var indep = document.getElementById("ind").value;
var sliderValue = $("#slider").val();


$(document).ready(function()  {
  
  var margin = {
    top : 20,
    right : 20,
    bottom : 30,
    left : 40
  }, 
  width = 825 - margin.left - margin.right, 
  height = 625 - margin.top - margin.bottom;

  var x = d3.scale.linear()
    .range([0, width]);
  
  var y = d3.scale.linear()
    .range([height, 0]);

  var formatCurrency = d3.format(",");

  var div = d3.select("body")
    .append("div")
      .attr("id", "agencyinfo")
      .style("opacity", 0.5);

  //var color = d3.scale.category10();
  var color = d3.scale.ordinal()
    .domain([1, 2, 3])
    .range(["rgb(233,79,55)", "rgb(63, 163, 197)", "rgb(68, 187, 164)"]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  var svg = d3.select("#chart")
    .append("svg")
      // .attr("class", "chart")
      // .attr("preserveAspectRatio", "xMinYMin meet")
      // .attr("viewBox", "0 0 725 600")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  var agencyData     

  d3.csv("data/agencyRatingsTrend.csv", function(error, data) {
    agencyData = data
    chartSetup(agencyData)
  });

  function chartSetup(data){

    x.domain([40, 90]).nice();
    y.domain([40, 90]).nice();

    //x axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
        .attr("class", "label")
        .attr("x", width)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text("Independent Variable");

    //y axis
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Dependent Variable")

    //circles
    var dots = svg.selectAll(".dot")
      .data(data.sort(
        function(a, b) {
          return b.TotalEnrollment - a.TotalEnrollment;
        }))
      .enter()          
      .append("circle")
        .attr("class", "dot")
        .attr("r", 
          function(d) {
            return (4 + (d.TotalEnrollment * .0008));
          })
        .style("fill", function(d) {
            if (d.type == 3) {
              return "rgb(68, 187, 164)"
            } else if (d.type == 2) {
              return "rgb(63, 163, 197)"
            } else {
              return "rgb(152,206,0)"
            }
          })

    ///ADD A TOOLTIP TOOLTIP TOOLTIP////
    var tooltip = d3.select('body').append('div').attr('class', 'tooltip')

    dots.on('mouseenter', showToolTip)
              .on('mousemove', moveTooltip)
              .on('mouseleave', hideToolTip)
              .on('click', focusDot)

    // var decimal = d3.format(".1f")

    function focusDot (d,i){
      var selection = d3.select(this)
      var test = selection.classed('highlight')
      selection.classed('highlight', !test)

      var highlighted = []

      dots.classed('recede', function (dot){
        var dotSel = d3.select(this)
        var hightlightTest = dotSel.classed('highlight')
        if (hightlightTest) {
          highlighted.push(dot)
        }
        return !hightlightTest
      })

      if (highlighted.length == 0){
        dots.classed('recede', false)
      }

    }
    
    function showToolTip(d,i){
      tooltip.classed('showit', true)
      
    }


    function moveTooltip(d,i){

      ////Get the mouse X position 
      var mouseX = d3.event.clientX + 82.5
      var mouseY = d3.event.clientY
      
      ////Put the name in the tooltip HTML
      tooltip.html('').html('<b>'+d.Agencies+'</b><br>Total Respondents: '+d.TotalEnrollment)


      ////Calculate positioning and move tooltip
      var ttBCR = tooltip.node().getBoundingClientRect()
      var topPosition = mouseY - ttBCR.height + pageYOffset - 14
      var leftPosition = ( mouseX - ttBCR.width*1 ) + pageXOffset
      
      tooltip
        .style({
          top: topPosition+'px', 
          left: leftPosition+'px'
        })
    }

    function hideToolTip(d,i){
      tooltip.classed('showit', false)
    }
    //////////////////////////////////////////////////////////



        
    var running = false;
    var timer;
    
    $("button").on("click", function() {
    
      var duration = 3000,
        maxstep = 2015,
        minstep = 2011;
      
      if (running == true) {
      
        $("button").html("Play");
        running = false;
        clearInterval(timer);
        
      } 
      
      else if (running == true && $("#slider").val() == maxstep) {
         running = true;
         $("button").html("Play1");
         
      
      } 

      else if (running == false) {
      
        $("button").html("Pause");
        
        sliderValue = $("#slider").val();
        
        timer = setInterval( function(){
            if (sliderValue < maxstep){
              sliderValue++;
              $("#slider").val(sliderValue);
              $('#range').html(sliderValue);
            }
            $("#slider").val(sliderValue);
            update();
          
        }, duration);
        running = true;
        
        
      }

    });




  
    $("#slider").on("change", function(){
      console.log('sliderChange')
      sliderValue = $("#slider").val();
      update();
      $("#range").html($("#slider").val());
      clearInterval(timer);
      $("button").html("Play");
    });

    $("#dep").on("change", function(){
      depend = document.getElementById("dep").value;
      update();
    });

    $("#ind").on("change", function(){
      indep = document.getElementById("ind").value;
      update();
    });

    update()

}////chartSetup end


  
var update = function() {
    
      var positions = []
      d3.selectAll(".dot")

        .transition()
        .duration(1000)
        .attr("cx", function(d) {
          return x( d[indep+sliderValue] )
        })
        .attr("cy", function(d) {
          return y( d[depend+sliderValue] )
        })        
        .each(function (d){
          positions.push( [ x( d[indep+sliderValue] ),  y( d[depend+sliderValue] ) ] )
        })
        positions.sort(function (a,b) {
          return a[0] - b[0]
        })
        var regression = ss.linearRegression(positions)
        var regline = ['M', positions[0][0], (regression.b+regression.m*positions[0][0]),  'L', positions[positions.length - 1][0], (regression.b+regression.m*positions[positions.length-1][0]) ].join(' ')

        d3.select('.regline').remove()

        svg.append('path')
          .attr('class', 'regline')
          .attr('d', regline)
          .style('stroke', '#3F88C5')
          .style('stroke-width', 2)
    };

    
  // });
