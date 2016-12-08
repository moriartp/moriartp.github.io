var data = d3.csv("db_status/db_status.csv", function(error, data) {  
  // console.log(data);  

  var tiles = d3.select('#container')
    .selectAll('.tile')
    .data(data).enter()
    .append('div')
      .attr('class', function(d) {return "tile "+"service- "+d.INSTANCE_NAME+ " network-"+d.network+ " database"+d.DATABASE_STATUS+ " application"+d.application;})
      .attr('id', function(d) {return d.INSTANCE_NAME;})
      .append('text')
      .html(function (d) { return "<p class='instanceName'>"+d.INSTANCE_NAME+"</p><br>"; });   


      d3.selectAll(".tile").append("div").attr("class",function(d) {
        if(d.INSTANCE_NAME === "NSPB"){
          return "factor "+"database- banner";
        } else {
          return "factor "+"database- other"
        }
      // .html(function (d) { return "<br><i class='fa fa-database' fa-lg></i><br>Database: "+d.DATABASE_STATUS; })

  }
); 

///////////////////////ticker script//////////////////
var d = new Date();
var n = (d.getHours()<10?'0':'') + d.getHours();
var m = (d.getMinutes()<10?'0':'') + d.getMinutes();
var s = (d.getSeconds()<10?'0':'') + d.getSeconds();

var lastUpdate = d3.select(".box.fade-in.two")
      .append('text').html(function (d) {
        if(n==12){
          return "<i>...last update: " + n  + ":" + m +":" + s + " p.m.</i>";
        }else if (n<12){
          return "<i>...last update: " + n  + ":" + m +":" + s + " a.m.</i>";
        } else {
          return "<i>...last update: " + (n - 12) + ":" + m +":" + s + " p.m.</i>";
        }
      ;})
    
