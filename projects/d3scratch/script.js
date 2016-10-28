
// var roomType = document.getElementById("roomType").value;

// $(document).ready(function()  {
// }
  //////////////live input//////////

var data = d3.csv("dummyRoomDataX.csv", function(error, data) {
    data.forEach(function(d) {
      d.macQty = +d.macQty;
      d.winQty = +d.winQty;
    });   

  var tiles = d3.select('#container')//('body')
    .selectAll('.tile')
    .data(data).enter()
    .append('div')
    // .filter( function(d) {return d.type === document.getElementById("roomType").value; })
      .attr('class', function(d) {return "tile "+d.type+ " dvd"+d.DVD+ " projector"+d.Projection;})
      .attr('id', function(d) {return d.type;})
      .on('mouseover', function() {
        d3.select(this)
        .transition().duration(100)
        .style('background-color', '#54A5B0')
      })
      // .on('mouseenter', showToolTip)
      .on('click', showToolTip)
      .on('mousemove', moveTooltip)
      .on('mouseleave', hideToolTip)
      .on('mouseout', function () {
        d3.select(this)
        .transition().duration(500)
        .style('background-color', 'WhiteSmoke')//function (d) { return d.backgroundColor; })\
      //   .style("opacity", 1)
      //   .style("stroke-width", 0 );
      //     tooltip.transition().duration(300)
      //           .style("opacity", 0);
      })

      .append('text')
      .html(function (d) { return "<font size='5'>"+d.roomID+"</font><br>"+d.type+"<br>"+d.location+"; Rm. "+d.roomID+"<br>"; });   

      d3.selectAll("text").append("mac")
      .filter( function(d) {return d.macQty > 0; })

      d3.selectAll("text").append("mac")
      .filter( function(d) {return d.macQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-apple' fa-lg></i> Mac Stations: "+d.macQty; })

      d3.selectAll("text").append("wins")
      .filter( function(d) {return d.winQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-windows' fa-lg></i> Windows Stations: "+d.winQty})

      d3.selectAll("text").append("projector")
      .filter( function(d) {return d.Projection === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-video-camera' fa-lg></i> Projector" })

      d3.selectAll("text").append("scan")
      .filter( function(d) {return d.scanQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-clipboard' fa-lg></i> Scanners: "+d.scanQty; })

      d3.selectAll("text").append("dvd")
      .filter( function(d) {return d.DVD === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-play-circle-o' fa-lg></i> DVD Playback" })

      d3.selectAll("text").append("vhs")
      .filter( function(d) {return d.VHS === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-film' fa-lg></i> VHS Playback" })

      d3.selectAll("text").append("cd")
      .filter( function(d) {return d.CD === 'TRUE'; })
        .html(function (d) { return "<br><i class='fa fa-music' fa-lg></i> CD Playback" })

    //////////////ADD FILTER LINKS/////////////////
    ////////START CLASSROOM FILTER
        // Add the Classroom line title
    d3.select("#clicker")
      .append("text")
      // .attr("x", 0)             
      // .attr("y", height + margin.top + 10)           
      .on("click", function(){
        // Determine if current line is visible
        var active   = Classroom.active ? false : true,
        //   newOpacity = active ? 0 : 1;
        // // Hide or show the elements
        // d3.selectAll(".Classroom").style("opacity", newOpacity);
        // d3.selectAll(".Classroom").style("opacity", newOpacity);
          newOpacity = active ? "block" : "none";
        // Hide or show the elements
        d3.selectAll(".Classroom").style("display", newOpacity);
        d3.selectAll(".Classroom").style("display", newOpacity);



        // Update whether or not the elements are active
        Classroom.active = active;
      })
      .text(" Classroom |");
      ////////END CLASSROOM FILTER

    ////////START Conference ROOM FILTER
        // Add the Classroom line title
    d3.select("#clicker")
      .append("text")
       
      .on("click", function(){
        // Determine if current line is visible
        var active   = Classroom.active ? false : true,
          newOpacity = active ? "block" : "none";
        // Hide or show the elements
        d3.selectAll(".Conference").style("display", newOpacity);
        d3.selectAll(".Conference").style("display", newOpacity);



        // Update whether or not the elements are active
        Classroom.active = active;
      })
      .text(" Conference |");
      ////////END CONF ROOM FILTER    

    ////////START Technology ROOM FILTER
        // Add the Tech line title
    d3.select("#clicker")
      .append("text")
       
      .on("click", function(){
        // Determine if current line is visible
        var active   = Classroom.active ? false : true,
          newOpacity = active ? "block" : "none";
        // Hide or show the elements
        d3.selectAll(".Technology").style("display", newOpacity);
        d3.selectAll(".Technology").style("display", newOpacity);
        // Update whether or not the elements are active
        Classroom.active = active;
      })
      .text(" Tech Lab |");

      ////////END TECH LAB ROOM FILTER          
    //////////////END ADD FILTER LINKS////////////

///////////////////////PLATFORM/////////////////////
   //////////////ADD FILTER LINKS/////////////////
    ////////START DVD FILTER
        // Add the line title
    d3.select("#hardwareClicker")
      .append("text")
      // .attr("x", 0)             
      // .attr("y", height + margin.top + 10)    
      .attr("class", "legend")        
      .on("click", function(){
        // Determine if current line is visible
        var active   = Classroom.active ? false : true,
        //   newOpacity = active ? 0 : 1;
        // // Hide or show the elements
        // d3.selectAll(".Classroom").style("opacity", newOpacity);
        // d3.selectAll(".Classroom").style("opacity", newOpacity);
          newOpacity = active ? "block" : "none";
        // Hide or show the elements
        d3.selectAll(".dvdTRUE").style("display", newOpacity);
        d3.selectAll(".dvdTRUE").style("display", newOpacity);



        // Update whether or not the elements are active
        Classroom.active = active;
      })
      .text(" DVD |");
      ////////END DVD FILTER

    ////////START PROJ FILTER
        // Add the Classroom line title
    d3.select("#hardwareClicker")
      .append("text")
       
      .on("click", function(){
        // Determine if current line is visible
        var active   = Classroom.active ? false : true,
          newOpacity = active ? "block" : "none";
        // Hide or show the elements
        d3.selectAll(".projectorTRUE").style("display", newOpacity);
        d3.selectAll(".projectorTRUE").style("display", newOpacity);



        // Update whether or not the elements are active
        Classroom.active = active;
      })
      .text(" Projector |");
      ////////END PROJ FILTER    

    ////////START VHS FILTER
        // Add the line title
    d3.select("#hardwareClicker")
      .append("text")
       
      .on("click", function(){
        // Determine if current line is visible
        var active   = Classroom.active ? false : true,
          newOpacity = active ? "block" : "none";
        // Hide or show the elements
        d3.selectAll(".vhsTRUE").style("display", newOpacity);
        d3.selectAll(".vhsTRUE").style("display", newOpacity);
        // Update whether or not the elements are active
        Classroom.active = active;
      })
      .text(" VHS |");

      ////////END TECH LAB ROOM FILTER          
    //////////////END ADD FILTER LINKS////////////

    ///ADD A TOOLTIP TOOLTIP TOOLTIP////
    var tooltip = d3.select('body').append('div').attr('class', 'tooltip')

    function showToolTip(d,i){
      tooltip.classed('showit', true)
      tooltip.html('').html('<h2><b>'+d.roomID+'</h2><iframe width=100% height="200" src="https://www.youtube.com/embed/oYZGGDK3kUg?autoplay=1" frameborder="0" allowfullscreen volume="0"></iframe><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1376991648503!2d-73.99441544876213!3d40.736995479227645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a2868a69e1%3A0x79b19a0b47c6d645!2s6+E+16th+St%2C+New+York%2C+NY+10003!5e0!3m2!1sen!2sus!4v1477595809186" width=100% height="100" frameborder="1" style="border:1" allowfullscreen></iframe><br>Location: '+d.location+'<br>Macs: '+d.macQty+'<br>Windows: '+d.winQty+'<br>Projector: '+d.Projection+'<br>DVD: '+d.DVD+'</b><p><i>This might also include a more verbose description of the room that details the general function, purpose and access to the room, whether that be specialized, designated to specific parties, etc...</i></p><div class="closer"><i class="fa fa-times-circle" fa-lg></div>')
      
      ////Get the mouse X position 
      var mouseX = d3.event.clientX// + 82.5
      var mouseY = d3.event.clientY

      ////Calculate positioning and move tooltip
      var ttBCR = tooltip.node().getBoundingClientRect()
      var topPosition = mouseY - ttBCR.height + pageYOffset + 10
      var leftPosition = ( mouseX - ttBCR.width*1 ) + pageXOffset + 300

      tooltip
        .style({
          top: topPosition+'px', 
          left: leftPosition+'px'
        })
      console.log('SHOWIT')
      
    }




    function moveTooltip(d,i){

      ////Get the mouse X position 
      var mouseX = d3.event.clientX// + 82.5
      var mouseY = d3.event.clientY
      console.log('MOVEIT')
      
      // ////Put the name in the tooltip HTML
      // tooltip.html('').html('<b>'+d.roomID+'</b><br>Location: '+d.location+'</b><br>Macs: '+d.macQty+'</b><br>Windows: '+d.winQty+'</b><br>Projector: '+d.Projection+'</b><br>DVD: '+d.DVD)

      
      ////Calculate positioning and move tooltip
      var ttBCR = tooltip.node().getBoundingClientRect()
      var topPosition = mouseY - ttBCR.height + pageYOffset + 10
      var leftPosition = ( mouseX - ttBCR.width*1 ) + pageXOffset + 300



      tooltip
        .style({
          top: topPosition+'px', 
          left: leftPosition+'px'
        })
    }

    function hideToolTip(d,i){
      tooltip.classed('showit', false)
      console.log('HIDEIT')
    }



    // //////////////////////////////////////////////////////////

    // $("#roomType").on("change", function(){
    //   roomType = document.getElementById("roomType").value;


    //   update();
    // });

    // update()
  }


);

// var update = function() {
//       // d3.selectAll(".tile")
//       //   .attr("background-color", 'red')
//         // .attr("cy", function(d) {
//         //   return y( d[depend+sliderValue] )
//         // })        

//       console.log(roomType);    
//     };


  
