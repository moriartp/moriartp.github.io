// LEAFLET.JS EARTHQUAKE VISUALIZATION
// USGS DATA - SOURCE UPDATED EVERY 5 MINUTES
// JavaScript library available at http://leafletjs.org/

var map; // global
var canvas; // p5 canvas
var quakes = []; // array of earthquakes 
var mags = []; // array of magnitudes
var depths = []; //// array of depths
var types = []; //// array of types
var recency = []; //array of dates
var date = [];

var checkbox; //UI checkbox
var slider; // UI for setting minimum magnitude
var significant;//div for storing sigficance
var magnitude; // div for storing min magnitude from slider 


function setup() {
  canvas = createCanvas(windowWidth, windowHeight); // full window p5 canvas
  canvas.parent('map'); // make p5 and leaflet use the same canvas (and z-index)
  initLeaflet(); // load leaflet functions and creat map and defined view
  loadStrings("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv", parseSource); // load source, parse when done
  
  // title context
  var div = createDiv('<b>Earthquakes in the last 30 days</b>');
  div.id("top");
  div.position(30, 35);

  // differentiate legend from map
  var txt = createDiv('');
  txt.id("top-bg");
  txt.position(0, 0);

}

function draw() {
  // hide and show individual quakes by checking against slider threshold
  for (var i = 1; i < mags.length; i++) {
      console.log(new Date(row[0]).getMonth());
      console.log(month());
    if ((new Date(row[0]).getMonth()+1) < 11){
      quakes[i].setRadius(0);
    } else {
      quakes[i].setRadius(mags[i]);
    }
  }
  //magnitude.html("Magnitude > " + slider.value() + " RS");
}

function setColor(_recency) {
  var startColor = color(255, 51, 0);//(0, 204, 255);
  var endColor = color(0, 204, 255)//color(255, 51, 0);//(0, 175, 175);//(255, 51, 0);
  var interpolatedColor = lerpColor(startColor, endColor, _recency / 30);
  return interpolatedColor;
}

function parseSource(data) { 
  for (var i = 1; i < data.length-1; i++) {    
    var row = split(data[i], ","); // split every row by the comma
    mags[i] = row[4] * row[4];
    date[i] = row[0];
    recency[i] = row[3];//day() - (new Date(row[0]).getDate());
    // create custom leaflet marker
    quakes[i] = L.circleMarker([row[1], row[2]], {
      stroke: true,
      color: '#232323',
      weight: 1,
      opacity: 0.0,
      fillOpacity: 1 - (row[3] / 200),
      fillColor: setColor(recency[i]),
    });

    var place = row[13].substr(1);

    quakes[i].addTo(map).setRadius(mags[i]).bindPopup("Magnitude: " +
      row[4] + "<br>Depth: " + row[3] + "km<br>" + "Type: " + row[15] + "<br>Date: " + (new Date(row[0]).getMonth()+1) +"/" + (new Date(row[0]).getDay()) +"/" + (new Date(row[0]).getYear()+1900)); // make new labeled markers at lat, lon, 
  }
}

// init leaflet using a custom mapbox
function initLeaflet() {
  // your access token here
  L.mapbox.accessToken = 'pk.eyJ1IjoibW9yaWFydHAiLCJhIjoiY2lnYmp0a3l3MG1kbDl6a25hZXd4dHkwbyJ9.ZVNYrqj-QYxuB03ZYpgUBQ';
  map = L.mapbox.map('map', 'moriartp.o17hnoh4').setView([39.810221, -98.557151], 5);

  function onMapClick(e) {
    // leaflet needs this function, no need to do anything here
  }

  map.on('click', onMapClick);
}

function myCheckedEvent() {
  if (this.checked()) {
    console.log("Unchecking!");
  } else {
    console.log("Checking!");
  }
}

