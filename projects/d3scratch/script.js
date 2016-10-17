// // Define the div for the tooltip
// var div = d3.select("body").append("div") 
//     .attr("class", "tooltip")       
//     .style("opacity", 0);   

var data = d3.csv("dummyRoomDataX.csv", function(error, data) {
    data.forEach(function(d) {
      d.macQty = +d.macQty;
      d.winQty = +d.winQty;
    });   

  var tiles = d3.select('body')
    .selectAll('div')
    .data(data).enter()
    // .append('div.tile')
    .append('div')
      .attr('class', "tile")//function (d) { return d.class; })
      // .attr('class', function (d) { return d.type; })
      // .attr('data-filter', function (d) { return d.type; })
      // .attr('class', function (d) { return d.platform; })
      .style('float','left')
      .style('padding','5px')
      .style('margin','2px')
      .style('width', "200px")
      .style('height', "225px")
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
      .html(function (d) { return "<font size='5'>"+d.roomID+"</font><br>"+d.type+"<br>"+d.location+"; Rm. "+d.roomID+"<br>"; });   
      

      d3.selectAll("div").append("macs")
        // .text(function (d) { return d.macQty})
      .filter( function(d) {return d.macQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-apple' fa-lg></i> Mac Stations: "+d.macQty; })

      d3.selectAll("div").append("wins")
      .filter( function(d) {return d.winQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-windows' fa-lg></i> Windows Stations: "+d.winQty})

      d3.selectAll("div").append("projector")
      .filter( function(d) {return d.Projection === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-video-camera' fa-lg></i> Projector" })

      d3.selectAll("div").append("scan")
      .filter( function(d) {return d.scanQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-clipboard' fa-lg></i> Scanners: "+d.scanQty; })

      d3.selectAll("div").append("dvd")
      .filter( function(d) {return d.DVD === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-play-circle-o' fa-lg></i> DVD Playback" })

      d3.selectAll("div").append("vhs")
      .filter( function(d) {return d.VHS === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-film' fa-lg></i> VHS Playback" })

      d3.selectAll("div").append("cd")
      .filter( function(d) {return d.CD === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-music' fa-lg></i> CD Playback" })


/////////////////////////TOOLTIP TRIAL; IF ERR DELETE EVERYTHING FROM HERE..........

    ///ADD A TOOLTIP TOOLTIP TOOLTIP////
    var tooltip = d3.select('body').append('div').attr('class', 'tooltip')

    tiles.on('mouseenter', showToolTip)
              .on('mousemove', moveTooltip)
              .on('mouseleave', hideToolTip)
    //           .on('click', focusTile)

    // // var decimal = d3.format(".1f")

    // function focusDot (d,i){
    //   var selection = d3.select(this)
    //   var test = selection.classed('highlight')
    //   selection.classed('highlight', !test)

    //   var highlighted = []

    //   tiles.classed('recede', function (tile){
    //     var tileSel = d3.select(this)
    //     var hightlightTest = tileSel.classed('highlight')
    //     if (hightlightTest) {
    //       highlighted.push(tile)
    //     }
    //     return !hightlightTest
    //   })

    //   if (highlighted.length == 0){
    //     tiless.classed('recede', false)
    //   }

    // }
    
    function showToolTip(d,i){
      tooltip.classed('showit', true)
      
    }


    function moveTooltip(d,i){

      ////Get the mouse X position 
      var mouseX = d3.event.clientX// + 82.5
      var mouseY = d3.event.clientY
      
      ////Put the name in the tooltip HTML
      tooltip.html('').html('<b>'+d.roomID+'</b><br>Location: '+d.location)


      // ////Calculate positioning and move tooltip THIS IS THE ORIGINAL
      var ttBCR = tooltip.node().getBoundingClientRect()
      var topPosition = mouseY - ttBCR.height + pageYOffset - 14
      var leftPosition = ( mouseX - ttBCR.width*1 ) + pageXOffset
      
      ////Calculate positioning and move tooltip
      var ttBCR = tooltip.node().getBoundingClientRect()
      var topPosition = mouseY - ttBCR.height + pageYOffset - 14
      var leftPosition = ( mouseX - ttBCR.width*1 ) + pageXOffset + 100



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





//////////////////////////////////////////////////////////////TO HERE (DO NOT DELETE BELOW THIS LINE)
});



