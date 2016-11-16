


// var data = d3.csv("dummyRoomDataX.csv", function(error, data) {
var data = d3.csv("data/supported-spaces.csv", function(error, data) {  
    data.forEach(function(d) {
    });   

  var tiles = d3.select('#container')//('body')
    .selectAll('.tile')
    .data(data).enter()
    .append('div')
      .attr('id', function(d) {return d.BuildingCode + d.RoomNumber;})
      .attr('class', function(d) { return "tile " + d.RoomType + " location " + d.BuildingCode })
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
      .on('mouseenter', showToolTip)
      .on('mousemove', moveTooltip)
      .on('mouseleave', hideToolTip)
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

      // d3.selectAll("text").append("devices")
      // .filter( function(d) {return d.SpecialtyHardware != null; })
      //   .html(function (d) { return "<br>Hardware: "+d.SpecialtyHardware })
  //////////////ADD FILTER LINKS///////////////////////////////////////////////////////////////// 

  ////////      |||||||   ///   ///    //////////   ///////   //////////  ///////     //////// 
  ////////      |||       ///   ///       ///       ///_      ///   ///   ///___      //////// 
  ////////      |||||||   ///   ///       ///       ///       ///////         ///     //////// 
  ////////      |||       ///   //////    ///       ///////   ///   ///   ///////     //////// 

  ////////START CLASSROOM FILTER/////////////////////////////////////////////////////////////////
  var showA = 0;
  console.log(showA);
  d3.selectAll("#showA").append("text").html("Alvin Johnson/J.M. Kaplan Hall<br><font size='0.5'>66 West 12th Street")
    .on("click", function(d) {
      if (showA%2){
                  d3.selectAll("#showA").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".A").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showA = (showA + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showA").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".A").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showA = (showA + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER/////////////////////////////////////////////////////////////////

  ////////START CLASSROOM FILTER/////////////////////////////////////////////////////////////////
  var showB = 0;
  console.log(showB);
  d3.selectAll("#showB").append("text").html("Eugene Lang College Building<br><font size='0.5'>65 West 11th Street")
    .on("click", function(d) {
      if (showB%2){
                  d3.selectAll("#showB").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".B").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showB = (showB + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showB").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".B").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showB = (showB + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER/////////////////////////////////////////////////////////////////

  var showD = 0;
  console.log(showD);
  d3.selectAll("#showD").append("text").html("Albert and Vera List Academic Center<br><font size='0.5'>6 East 16th Street")
    .on("click", function(d) {
      if (showD%2){
                  d3.selectAll("#showD").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".D").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showD = (showD + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showD").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".D").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showD = (showD + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER/////////////////////////////////////////////////////////////////

  var showE = 0;
  console.log(showE);
  d3.selectAll("#showE").append("text").html("Parsons East Building<br><font size='0.5'>25 East 13th Street")
    .on("click", function(d) {
      if (showE%2){
                  d3.selectAll("#showE").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".E").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showE = (showE + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showE").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".E").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showE = (showE + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER/////////////////////////////////////////////////////////////////

  var showG = 0;
  console.log(showG);
  d3.selectAll("#showG").append("text").html("Administrative Offices<br><font size='0.5'>80 Fifth Avenue")
    .on("click", function(d) {
      if (showG%2){
                  d3.selectAll("#showG").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".G").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showG = (showG + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showG").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".G").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showG = (showG + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER/////////////////////////////////////////////////////////////////  

  var showH = 0;
  console.log(showH);
  d3.selectAll("#showH").append("text").html("Fanton Hall/Welcome Center<br><font size='0.5'>72 Fifth Avenue")
    .on("click", function(d) {
      if (showH%2){
                  d3.selectAll("#showH").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".H").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showH = (showH + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showH").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".H").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showH = (showH + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER///////////////////////////////////////////////////////////////// 

  var showI = 0;
  console.log(showI);
  d3.selectAll("#showI").append("text").html("Arnhold Hall<br><font size='0.5'>55 West 13th Street")
    .on("click", function(d) {
      if (showI%2){
                  d3.selectAll("#showI").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".i").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showI = (showI + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showI").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".i").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showI = (showI + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER///////////////////////////////////////////////////////////////// 

  var showL = 0;
  console.log(showL);
  d3.selectAll("#showL").append("text").html("Sheila C. Johnson Design Center<br><font size='0.5'>2 West 13th Street (L)")
    .on("click", function(d) {
      if (showL%2){
                  d3.selectAll("#showL").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".L").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showL = (showL + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showL").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".L").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showL = (showL + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER///////////////////////////////////////////////////////////////// 

  var showM = 0;
  console.log(showM);
  d3.selectAll("#showM").append("text").html("Sheila C. Johnson Design Center <br><font size='0.5'>66 Fifth Avenue (M)")
    .on("click", function(d) {
      if (showM%2){
                  d3.selectAll("#showM").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".M").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showM = (showM + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showM").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".M").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showM = (showM + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER///////////////////////////////////////////////////////////////// 

  var showN = 0;
  console.log(showN);
  d3.selectAll("#showN").append("text").html("Sheila C. Johnson Design Center <br><font size='0.5'>66 Fifth Avenue (N)")
    .on("click", function(d) {
      if (showN%2){
                  d3.selectAll("#showN").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".N").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showN = (showN + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showN").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".N").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showN = (showN + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER///////////////////////////////////////////////////////////////// 

  var showU = 0;
  console.log(showU);
  d3.selectAll("#showU").append("text").html("University Center<br><font size='0.5'>63 Fifth Avenue")
    .on("click", function(d) {
      if (showU%2){
                  d3.selectAll("#showU").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".U").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showU = (showU + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showU").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".U").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showU = (showU + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER///////////////////////////////////////////////////////////////// 
  var showW = 0;
  console.log(showW);
  d3.selectAll("#showW").append("text").html("Administrative Offices<br><font size='0.5'>71 Fifth Avenue")
    .on("click", function(d) {
      if (showW%2){
                  d3.selectAll("#showW").style("background-color", 'white').style("color", 'black');
                  d3.selectAll(".W").style("display", 'block')
                  // d3.selectAll(".Classroom") .attr("class", ' dontKILLme')
                  showW = (showW + 1);
                  // console.log(showClass);
                } else {
                  d3.selectAll("#showW").style("background-color", 'lightgray').style("color", 'gray');
                  d3.selectAll(".W").style("display", 'none')
                  // d3.selectAll(".Classroom").attr("id", ' KILL')
                  showW = (showW + 1);
                  // console.log(showClass);
                }
                var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
                console.log(displayME)
              })
  ////////END CLASSROOM FILTER///////////////////////////////////////////////////////////////// 















//   ////////START CONFERENCE FILTER/////////////////////////////////////////////////////////////////
//   var showCONF = 0;
//   console.log(showCONF);
//   d3.selectAll("#showConference").append("text").html("CONFERENCE ROOMS")
//     .on("click", function(d) {
//       if (showCONF%2){
//                   d3.selectAll("#showConference").style("background-color", 'white').style("color", 'black');
//                   d3.selectAll(".Conference").style("display", 'block')
//                   // d3.selectAll(".Conference").attr("class", ' dontKILLme')
//                   showCONF = (showCONF + 1);
//                   // console.log(showCONF);
//                 } else {
//                   d3.selectAll("#showConference").style("background-color", 'lightgray').style("color", 'gray');
//                   d3.selectAll(".Conference").style("display", 'none')
//                   // d3.selectAll(".Conference").attr("id", ' KILL')
//                   showCONF = (showCONF + 1);
//                   // console.log(showCONF);
//                 }
//                 var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
//                 console.log(displayME)
//               })
//   ////////END CONFERENCE FILTER/////////////////////////////////////////////////////////////////  

//   ////////START CONFERENCE FILTER/////////////////////////////////////////////////////////////////
//   var showTECHLABS = 0;
//   console.log(showTECHLABS);
//   d3.selectAll("#showLabs").append("text").html("TECHNOLOGY LABS")
//     .on("click", function(d) {
//       if (showTECHLABS%2){
//                   d3.selectAll("#showLabs").style("background-color", 'white').style("color", 'black');
//                   // d3.selectAll(".Technology").style("display", 'block')
//                   // d3.selectAll(".Technology").attr("class", ' dontKILLme')
//                   showTECHLABS = (showTECHLABS + 1);
//                   // console.log(showTECHLABS);
//                 } else {
//                   d3.selectAll("#showLabs").style("background-color", 'lightgray').style("color", 'gray');
//                   // d3.selectAll(".Technology").style("display", 'none')
//                   // d3.selectAll(".Technology").attr("id", ' KILL')
//                   showTECHLABS = (showTECHLABS + 1);
//                   // console.log(showTECHLABS);
//                 }
//                 var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
//                 console.log(displayME)
//               })
//   ////////END CONFERENCE FILTER/////////////////////////////////////////////////////////////////  

// // END FILTER LINKS // // END FILTER LINKS //  // END FILTER LINKS //  // END FILTER LINKS //  // END FILTER LINKS //  


//   ////////START DVD FILTER/////////////////////////////////////////////////////////////////
//   var showDVD = 1;
//   console.log(showDVD);
//   d3.selectAll("#showDVD").append("text").html("DVD")
//     .on("click", function(d) {
//       if (showDVD%2) {
//                   d3.selectAll("#showDVD").style("box-shadow", '0px 0px 40px 12px rgba(255,234,0,1)').style("color", 'black');
//                   d3.selectAll(".dvdTRUE").style("visibility", 'visible')
//                   // d3.selectAll(".dvdTRUE").style("position", 'auto')
//                   // d3.selectAll(".dvdTRUE").style("top", 'auto')
//                   // d3.selectAll(".dvdTRUE").attr("class", ' dontKILLme')
//                   showDVD = (showDVD + 1);
//                   // console.log(showDVD);
//       } else {
//                   d3.selectAll("#showDVD").style("box-shadow", 'none')//.style("color", 'gray');
//                   d3.selectAll(".dvdTRUE").style("visibility", 'hidden')
//                   // d3.selectAll(".dvdTRUE").style("position", 'absolute')
//                   // d3.selectAll(".dvdTRUE").style("top", '-9999999px')
//                   // d3.selectAll(".dvdTRUE").attr("id", ' KILL')
//                   showDVD = (showDVD + 1);
//                   // console.log(showDVD);
//                 }
//                 var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
//                 console.log(displayME)
//               })
//   ////////END DVD FILTER/////////////////////////////////////////////////////////////////  

//   ////////START DVD FILTER/////////////////////////////////////////////////////////////////
//   var showPROJ = 1;
//   console.log(showPROJ);
//   d3.selectAll("#showPROJ").append("text").html("PROJECTOR")
//     .on("click", function(d) {
//       if (showPROJ%2) {
//                   d3.selectAll("#showPROJ").style("box-shadow", '0px 0px 40px 12px rgba(255,234,0,1)').style("color", 'black');
//                   d3.selectAll(".projectorTRUE").style("visibility", 'visible')
//                   // d3.selectAll(".projectorTRUE").style("opacity", '1')
//                   // d3.selectAll(".projectorTRUE").style("position", 'auto')
//                   // d3.selectAll(".projectorTRUE").style("top", 'auto')
//                   showPROJ = (showPROJ + 1);
//                   // console.log(showPROJ);
//       } else {
//                   d3.selectAll("#showPROJ").style("box-shadow", 'none')//.style("color", 'gray');
//                   d3.selectAll(".projectorTRUE").style("visibility", 'hidden')
//                   // d3.selectAll(".projectorTRUE").style("opacity", '0')
//                   // d3.selectAll(".projectorTRUE").style("position", 'absolute')
//                   // d3.selectAll(".projectorTRUE").style("top", '-9999999px')
//                   showPROJ = (showPROJ + 1);
//                   // console.log(showPROJ);
//                 }
//                 var displayME = (showClass%2).toString()+(showCONF%2).toString()+(showTECHLABS%2).toString()+(showDVD%2).toString()+(showPROJ%2).toString();
//                 console.log(displayME)
//               })


//   var displayME = showClass.toString()+showCONF.toString()+showTECHLABS.toString()+showDVD.toString()+showPROJ.toString();
//   console.log(displayME);
//   // d3.selectAll("."+CLRMCode+CONFcode+TLABcode+PROcode+DVDcode)
// ////////END DVD FILTER///////////////////////////////////////////////////////////////// 

// d3.selectAll("#submit").append("text").html("SUBMIT")
//     .on("click", function(d) {})
// d3.selectAll("#reset").append("text").html("RESET")
//     .on("click", function(d) {})    

//////////|||||||||||///|||||||||//////|||||||||///|||///////|||||||||||////|||////|||||||||/////////////////////////////////
//////////////|||///////||/////||//////||/////||///|||///////////|||////////|||////|||///|||/////////////////////////////////
//////////////|||///////||/////||//////||/////||///|||///////////|||////////|||////|||||||||/////////////////////////////////
//////////////|||///////|||||||||//////|||||||||///||||||||//////|||////////|||////|||///////////////////////////////////////

//START TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////
    var tooltip = d3.select('#container').append('div').attr('class', 'tooltip')


    //SHOW IT///////////////////////////////////////
    function showToolTip(d,i){
      tooltip.classed('showit', true)
      tooltip.html('').html('<p><img src="https://static.dezeen.com/uploads/2014/02/University-Center-The-New-School-by-SOM-_dezeen_ss_15.jpg"></p><h2>Room '+d.RoomNumber+' Details</h2><p><i class="fa fa-building"></i> <b>Location</b><br>'+d.BuildingCode+' Room: '+d.RoomNumber+'</p><p><i class="fa fa-video-camera"></i><b> Presentation Devices</b><br>This '+d.RoomType+' comes equiped with '+d.PresentationDevicesInstructions+' devices for presentation.</p><p><i class="fa fa-life-ring"></i><b> Support</b><br>If you require support please contact '+d.SupportContact+'.</p><p><i class="fa fa-desktop"></i><b> Available Platforms</b><br>Offering '+d.StationPlatform+' workstation(s), this '+d.RoomType+' is equipped with ('+d.PCStationQty+') Windows workstation(s), and ('+d.MacStationQty+') Mac workstation(s)</p><p><i class="fa fa-info-circle"></i><b> Additional Info</b><br><i>This might also include a more verbose description of the room that details the general function, purpose and access to the room, whether that be specialized, designated to specific parties, etc...</i></p>')
      // tooltip.html("<i class='fa fa-times-circle' fa-lg>").on('click',hideToolTip)  
    }

    function moveTooltip(d,i){

      ////Get the mouse X position 
      var mouseX = d3.event.clientX + 275
      var mouseY = d3.event.clientY + 350
      
      ////Put the name in the tooltip HTML
      // tooltip.html('').html('<b>'+d.Agencies+'</b><br>Total Respondents: '+d.TotalEnrollment)


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

    //HIDE IT///////////////////////////////////////
    function hideToolTip(d,i){
      tooltip.classed('showit', false)
      console.log('HIDEIT')
    }
//END TOOLTIP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////
  }
);




  
