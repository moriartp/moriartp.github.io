// var data = d3.csv("dummyRoomDataX.csv", function(error, data) {
var data = d3.csv("data/software.csv", function(error, data) {  
    data.forEach(function(d) {
    }); 


  var tiles = d3.select('#myTable')//('body')
    .selectAll('td')
    .data(data).enter()
    .append('td')
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
      // tooltip.html("<i class='fa fa-times-circle' fa-lg>").on('click',hideToolTip)  
    }
//END TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////
});      


function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}