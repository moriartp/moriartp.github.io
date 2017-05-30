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
      tooltip.html('').html('<h2>'+d.Category+' '+d.Software+' '+d.Version+' : CLASSROOMS HERE'+' '+' '+' '+'</h2>')
      d3.select("#rooms").html("ADD ROOM LIST PJ")
    }
//END TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////








});      

