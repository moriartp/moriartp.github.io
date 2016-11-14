


// var data = d3.csv("dummyRoomDataX.csv", function(error, data) {
var data = d3.csv("data/supported-spaces.csv", function(error, data) {  
    data.forEach(function(d) {
    });   

  var tiles = d3.select('#container')//('body')
    .selectAll('.tile')
    .data(data).enter()
    .append('div')
      .attr('id', function(d) {return d.BuildingCode + d.RoomNumber;})
      .attr('class', function(d) { return "tile " + d.RoomType })
      //     if(d.type==="Conference Room"){
      //       var CONFcode = "1";
      //     } esle {
      //       CONFcode = "0";
      //     }
      //     if (d.Projection === true){
      //       var PROcode = "1";
      //     } else {
      //       var PROcode = "0";
      //     }
      //     if (d.DVD === true){
      //       var DVDcode = "1";
      //     } else {
      //       var PROcode = "0";
      //     }
      //   return CLRMCode+CONFcode+PROcode+DVDcode
      //   })
      // .attr('class', function(d) {return "tile "+d.type+ " dvd"+d.DVD+ " projector"+d.Projection+ " vhs"+d.VHS+ " cd"+d.CD;})
      .on('mouseover', function() {
        d3.select(this)
        .transition().duration(100)
        .style('background-color', '#54A5B0')
      })
      .on('mouseout', function () {
        d3.select(this)
        .transition().duration(500)
        .style('background-color', 'WhiteSmoke')
      })
      .on('click', showToolTip)

      .append('text')
      .html(function (d) { return "<font size='3'>"+d.RoomNumber+"</font><br>"+d.RoomType+"<br>"+d.BuildingCode+"; Rm. "+d.RoomNumber+"<br>"; });   

      d3.selectAll("text").append("mac")
      .filter( function(d) {return d.MacStationQty > 0; })

      d3.selectAll("text").append("mac")
      .filter( function(d) {return d.MacStationQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-apple' fa-lg></i> Mac Stations: "+d.MacStationQty; })

      d3.selectAll("text").append("wins")
      .filter( function(d) {return d.PCStationQty > 0; })
        .html(function (d) { return "<br><i class='fa fa-windows' fa-lg></i> Windows Stations: "+d.PCStationQty})
  //////////////ADD FILTER LINKS///////////////////////////////////////////////////////////////// 

  ////////      |||||||   ///   ///    //////////   ///////   //////////  ///////     //////// 
  ////////      |||       ///   ///       ///       ///_      ///   ///   ///___      //////// 
  ////////      |||||||   ///   ///       ///       ///       ///////         ///     //////// 
  ////////      |||       ///   //////    ///       ///////   ///   ///   ///////     //////// 

  ////////START CLASSROOM FILTER/////////////////////////////////////////////////////////////////
  var showClass = 0;
  console.log(showClass);
  d3.selectAll("#showClassrooms").append("text").html("CLASSROOMS")
    .on("click", function(d) {
      if (showClass%2){
                  d3.selectAll("#showClassrooms").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".Classroom").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showClass = (showClass + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showClassrooms").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".Classroom").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showClass = (showClass + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER/////////////////////////////////////////////////////////////////

  ////////START CONFERENCE FILTER/////////////////////////////////////////////////////////////////
  var showCONF = 0;
  console.log(showCONF);
  d3.selectAll("#showConference").append("text").html("CONFERENCE ROOMS")
    .on("click", function(d) {
      if (showCONF%2){
                  d3.selectAll("#showConference").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".Conference").style("display", 'block')
                  // d3.selectAll(".Conference").attr("class", ' dontKILLme')
                  showCONF = (showCONF + 1);
                  // console.log(showCONF);
                } else {
                  d3.selectAll("#showConference").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".Conference").style("display", 'none')
                  // d3.selectAll(".Conference").attr("id", ' KILL')
                  showCONF = (showCONF + 1);
                  // console.log(showCONF);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CONFERENCE FILTER/////////////////////////////////////////////////////////////////  

  ////////START CONFERENCE FILTER/////////////////////////////////////////////////////////////////
  var showTECHLABS = 0;
  console.log(showTECHLABS);
  d3.selectAll("#showLabs").append("text").html("TECHNOLOGY LABS")
    .on("click", function(d) {
      if (showTECHLABS%2){
                  d3.selectAll("#showLabs").style("background-color", 'white').style("color", 'black');
                  // d3.selectAll(".Technology").style("display", 'block')
                  // d3.selectAll(".Technology").attr("class", ' dontKILLme')
                  showTECHLABS = (showTECHLABS + 1);
                  // console.log(showTECHLABS);
                } else {
                  d3.selectAll("#showLabs").style("background-color", 'lightgray').style("color", 'gray');
                  // d3.selectAll(".Technology").style("display", 'none')
                  // d3.selectAll(".Technology").attr("id", ' KILL')
                  showTECHLABS = (showTECHLABS + 1);
                  // console.log(showTECHLABS);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CONFERENCE FILTER/////////////////////////////////////////////////////////////////  

// END FILTER LINKS // // END FILTER LINKS //  // END FILTER LINKS //  // END FILTER LINKS //  // END FILTER LINKS //  


  ////////START DVD FILTER/////////////////////////////////////////////////////////////////
  var showDVD = 1;
  console.log(showDVD);
  d3.selectAll("#showDVD").append("text").html("DVD")
    .on("click", function(d) {
      if (showDVD%2) {
                  d3.selectAll("#showDVD").style("box-shadow", '0px 0px 40px 12px rgba(255,234,0,1)').style("color", 'black');
                  d3.selectAll(".dvdTRUE").style("visibility", 'visible')
                  // d3.selectAll(".dvdTRUE").style("position", 'auto')
                  // d3.selectAll(".dvdTRUE").style("top", 'auto')
                  // d3.selectAll(".dvdTRUE").attr("class", ' dontKILLme')
                  showDVD = (showDVD + 1);
                  // console.log(showDVD);
      } else {
                  d3.selectAll("#showDVD").style("box-shadow", 'none')//.style("color", 'gray');
                  d3.selectAll(".dvdTRUE").style("visibility", 'hidden')
                  // d3.selectAll(".dvdTRUE").style("position", 'absolute')
                  // d3.selectAll(".dvdTRUE").style("top", '-9999999px')
                  // d3.selectAll(".dvdTRUE").attr("id", ' KILL')
                  showDVD = (showDVD + 1);
                  // console.log(showDVD);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END DVD FILTER/////////////////////////////////////////////////////////////////  

  ////////START DVD FILTER/////////////////////////////////////////////////////////////////
  var showPROJ = 1;
  console.log(showPROJ);
  d3.selectAll("#showPROJ").append("text").html("PROJECTOR")
    .on("click", function(d) {
      if (showPROJ%2) {
                  d3.selectAll("#showPROJ").style("box-shadow", '0px 0px 40px 12px rgba(255,234,0,1)').style("color", 'black');
                  d3.selectAll(".projectorTRUE").style("visibility", 'visible')
                  // d3.selectAll(".projectorTRUE").style("opacity", '1')
                  // d3.selectAll(".projectorTRUE").style("position", 'auto')
                  // d3.selectAll(".projectorTRUE").style("top", 'auto')
                  showPROJ = (showPROJ + 1);
                  // console.log(showPROJ);
      } else {
                  d3.selectAll("#showPROJ").style("box-shadow", 'none')//.style("color", 'gray');
                  d3.selectAll(".projectorTRUE").style("visibility", 'hidden')
                  // d3.selectAll(".projectorTRUE").style("opacity", '0')
                  // d3.selectAll(".projectorTRUE").style("position", 'absolute')
                  // d3.selectAll(".projectorTRUE").style("top", '-9999999px')
                  showPROJ = (showPROJ + 1);
                  // console.log(showPROJ);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })


  var displayME = showClass.toString()+showCONF.toString()+showTECHLABS.toString()+showDVD.toString()+showPROJ.toString();
  console.log(displayME);
  // d3.selectAll("."+CLRMCode+CONFcode+TLABcode+PROcode+DVDcode)
////////END DVD FILTER///////////////////////////////////////////////////////////////// 

d3.selectAll("#submit").append("text").html("SUBMIT")
    .on("click", function(d) {})
d3.selectAll("#reset").append("text").html("RESET")
    .on("click", function(d) {})    

//////////|||||||||||///|||||||||//////|||||||||///|||///////|||||||||||////|||////|||||||||/////////////////////////////////
//////////////|||///////||/////||//////||/////||///|||///////////|||////////|||////|||///|||/////////////////////////////////
//////////////|||///////||/////||//////||/////||///|||///////////|||////////|||////|||||||||/////////////////////////////////
//////////////|||///////|||||||||//////|||||||||///||||||||//////|||////////|||////|||///////////////////////////////////////

//START TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////
    var tooltip = d3.select('#container').append('div').attr('class', 'tooltip')


    //SHOW IT///////////////////////////////////////
    function showToolTip(d,i){
      tooltip.classed('showit', true)
      tooltip.html('').html('<h2><b>'+d.RoomNumber+'</h2><iframe width=100% height="200" src="https://www.youtube.com/embed/oYZGGDK3kUg?autoplay=1" frameborder="0" allowfullscreen volume="0"></iframe><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1376991648503!2d-73.99441544876213!3d40.736995479227645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a2868a69e1%3A0x79b19a0b47c6d645!2s6+E+16th+St%2C+New+York%2C+NY+10003!5e0!3m2!1sen!2sus!4v1477595809186" width=100% height="100" frameborder="1" style="border:1" allowfullscreen></iframe><br>Location: '+d.location+'<br>Macs: '+d.macQty+'<br>Windows: '+d.winQty+'<br>Projector: '+d.Projection+'<br>DVD: '+d.DVD+'</b><p><i>This might also include a more verbose description of the room that details the general function, purpose and access to the room, whether that be specialized, designated to specific parties, etc...</i></p><div class="closer"><i class="fa fa-times-circle" fa-lg></div>')
      // tooltip.html("<i class='fa fa-times-circle' fa-lg>").on('click',hideToolTip)  
    }

    d3.select('.fa-times-circle').on('click', hideToolTip);

    //HIDE IT///////////////////////////////////////
    function hideToolTip(d,i){
      tooltip.classed('showit', false)
      console.log('HIDEIT')
    }
//END TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////
  }
);




  
