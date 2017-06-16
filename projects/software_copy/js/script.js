var Inputdata;
 
 
function handleClick(event){
  draw(document.getElementById("myVal").value)
  return false;

  d3.select(".tooltip").html(' ')
}
 
function draw(val){
  d3.select("body")
  Inputdata = document.getElementById("myVal").value;
  console.log("Draw var = " + Inputdata.toLowerCase());

  d3.select("body").select("p").text("Input search string: "+Inputdata); 
  // d3.selectAll(".software").style("background-color","green");
  d3.selectAll(".room").style("display","none");
  // d3.selectAll("#selection").html(" ");

  d3.selectAll(".software").style("display", function(d) {
    if(d.Software.toLowerCase().indexOf(Inputdata.toLowerCase()) >= 0){
      return "block"
    } else {
      return "none"
    }
  });
}

var data = d3.csv("data/__software.csv", function(error, data) {  
    data.forEach(function(d) {
    }); 

  var tiles = d3.select('#container')//('body')
    .selectAll('.tile')
    .data(data).enter()
    .append('div')
      .attr('id', function(d) {return d.Software;})
      .attr('class', 'software')

      .on('mouseover', function() {
        d3.select(this)
        .transition().duration(100)
        .style('background-color', 'red')
      })
      .on('mouseout', function () {
        d3.select(this)
        .transition().duration(500)
        .style('background-color', '#FFF')
      })
      .on('click', showToolTip)

      .append('text')
      .html(function (d) { return d.Software; });

//START TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////
    var tooltip = d3.select('#selection').append('div').attr('class', 'tooltip')
    var roomtip = d3.select('#selection').append('div').attr('class', 'roomtip')
    //SHOW IT///////////////////////////////////////
    function showToolTip(d,i){
      tooltip.classed('showit', true)
      tooltip.html('').html('<h2>'+d.Software+'</h2>')

      var data2 = d3.csv("data/__hardware.csv", function(error, data) {  
          data.forEach(function(d2) {
          }); 
          console.log('data above, data2 below');
          console.log(data);

        var roomB = d3.select('.roomtip')//('body')
          // .remove('.location')
          .selectAll('.roomBs')
          .data(data).enter()
          .append('div')
            .html('')
            .attr('id', function(d2) {return d2.bldg+d2.room;})
            .attr('class', 'location')
            .append('text')
            .html(function (d2) {return d2.bldg+' '+d2.room;});

      roomtip.classed('showit', true)
      // roomtip.html('').html('<h2>'+d2.room+'</h2>')

      });
    }
//END TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////
});