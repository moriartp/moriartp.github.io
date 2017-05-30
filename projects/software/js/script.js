var Inputdata;
 
 
function handleClick(event){
  draw(document.getElementById("myVal").value)
  return false;

  // d3.selectAll(".software").style("background-color","green")
}
 
function draw(val){
  d3.select("body")
  Inputdata = document.getElementById("myVal").value;
  console.log("Draw var = " + Inputdata.toLowerCase());

  d3.select("body").select("p").text("Input search string: "+Inputdata); 
  // d3.selectAll(".software").style("background-color","green");
  d3.selectAll(".room").style("display","none");
  // d3.selectAll("#selection").style("display","none");

  d3.selectAll(".software").style("display", function(d) {
    if(d.Software.toLowerCase().indexOf(Inputdata.toLowerCase()) >= 0){
      return "block"
    } else {
      return "none"
    }
  });
}





var data = d3.csv("data/software.csv", function(error, data) {  
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
      .html(function (d) { return d.Software+" "+d.Version; });

      

//START TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////
    var tooltip = d3.select('#selection').append('div').attr('class', 'tooltip')


    //SHOW IT///////////////////////////////////////
    function showToolTip(d,i){
      tooltip.classed('showit', true)
      tooltip.html('').html('<h2>'+d.Category+' '+d.Software+' '+d.Version+' '+' '+' '+' '+'</h2>')
      d3.select("#rooms").html("Available in teh following rooms... ")

      var data2 = d3.csv("data/supported-spaces.csv", function(error, data2) {  
        data2.forEach(function(f) {
          console.log(f)
          // d3.select(#rooms).html("HI");
        }); 
        var room_tiles = d3.select('#rooms')//('body')
          .selectAll('.room')
          .data(data2).enter()
          .append('div')
            .attr('id', function(f) {return f.RoomNumber;})
            .attr('class', 'room')
            .style("display","inline-block")
            // .style("border-width","3px")
            // .style("border-color","gray")

            .on('mouseover', function() {
                d3.select(this)
                .transition().duration(100)
                .style('background-color', 'red')
                .style('cursor','pointer')
              })
              .on('mouseout', function () {
                d3.select(this)
                .transition().duration(500)
                .style('background-color', '#FFF')
              })


            .append('text')
            .html(function (f) { return f.BuildingCode[0]+f.RoomNumber; });
      });
    

    }

//END TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////

});