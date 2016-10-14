// // Define the div for the tooltip
// var div = d3.select("body").append("div") 
//     .attr("class", "tooltip")       
//     .style("opacity", 0);   

var data = d3.csv("dummyRoomDataX.csv", function(error, data) {
    data.forEach(function(d) {
      d.macQty = +d.macQty;
      d.winQty = +d.winQty;
    });   

  var body = d3.select('body')
    .selectAll('div')
    .data(data).enter()
    // .append('div.tile')
    .append('div')
      .attr('class', "tile")//function (d) { return d.class; })
      .attr('class', function (d) { return d.type; })
      // .attr('data-filter', function (d) { return d.type; })
      // .attr('class', function (d) { return d.platform; })
      .style('float','left')
      .style('padding','5px')
      .style('margin','2px')
      .style('width', "200px")
      .style('height', "250px")
      .style('background-color', "WhiteSmoke")//function (d) { return d.backgroundColor; })
      .style('border',"2px solid #F9F9F7")

      .on('mouseover', function() {
        d3.select(this)
        .transition().duration(100)
        .style('background-color','#E82E21')
        // .style("width","1250px")
      })

      .on('mouseout', function () {
        d3.select(this)
        .transition().duration(500)
        .style('background-color', 'WhiteSmoke')//function (d) { return d.backgroundColor; })
        // .style("width","150px")
      })

      .append('text')
      // .html(function (d) { return "<font size='5'>"+d.roomID+"</font><br>"+d.type+"<br>"+d.location+"<br>Macs: "+d.macQty+"<br>Wins: "+d.winQty; });
      .html(function (d) { return "<font size='5'>"+d.roomID+"</font><br>"+d.type+"<br>"+d.location+"<hr>"; });   
      

      d3.selectAll("div").append("tile")
        // .text(function (d) { return d.macQty})
      .filter( function(d) {return d.macQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-apple' fa-lg></i> Mac Stations: "+d.macQty; })

      d3.selectAll("div").append("tile")
      .filter( function(d) {return d.winQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-windows' fa-lg></i> Windows Stations: "+d.winQty})

      d3.selectAll("div").append("tile")
      .filter( function(d) {return d.Projection === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-video-camera' fa-lg></i> Projector" })

      d3.selectAll("div").append("tile")
      .filter( function(d) {return d.scanQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-clipboard' fa-lg></i> Scanners: "+d.scanQty; })

      d3.selectAll("div").append("tile")
      .filter( function(d) {return d.DVD === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-play-circle-o' fa-lg></i> DVD Playback" })

      d3.selectAll("div").append("tile")
      .filter( function(d) {return d.VHS === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-film' fa-lg></i> VHS Playback" })

      d3.selectAll("div").append("tile")
      .filter( function(d) {return d.CD === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-music' fa-lg></i> CD Playback" })
});



