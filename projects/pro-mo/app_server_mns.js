console.log("THIS IS THE BANNER APP SEVER SCRIPT");
var mns_appserver_status;
var mns_appserver_indicator;

var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var mns_appserver_data = data.filter(function(d){ return d.SERVER_NAME === "lum5prod-web02-lip.newschool.edu" || d.SERVER_NAME === "lum5prod-web03-lip.newschool.edu" || d.SERVER_NAME === "lum5prod-web04-lip.newschool.edu"})
  console.log(mns_appserver_data[0].SERVER_STATUS);
  console.log(mns_appserver_data[1].SERVER_STATUS);
  console.log(mns_appserver_data[2].SERVER_STATUS);
  mns_app_server_1 = mns_appserver_data[0].SERVER_STATUS;
  mns_app_server_2 = mns_appserver_data[1].SERVER_STATUS;
  mns_app_server_3 = mns_appserver_data[2].SERVER_STATUS;


  if(mns_app_server_1 === "DOWN" && mns_app_server_2 === "DOWN" && mns_app_server_3 === "DOWN"){
    mns_appserver_status = "DOWN";
    mns_appserver_indicator = "&#9888";
  } else {
    mns_appserver_status = "UP";
    mns_appserver_indicator = "✔";
  };
  console.log(mns_appserver_status);

  var mns_tiles = d3.select('#container')
      d3.select('#mynewschool_app_server').attr("class",function(d) { return "factor server- " + mns_appserver_status; })
      .html(function (d) { 
        return "<br><i class='fa fa-server'></i> <br>App Server: "+mns_appserver_indicator; })
  }
); 