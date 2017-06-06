console.log("THIS IS THE BANNER APP SEVER SCRIPT");
var ban_appserver_status;
var ban_appserver_indicator;

var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var ban_appserver_data = data.filter(function(d){ return d.SERVER_NAME === "banss04.newschool.edu" || d.SERVER_NAME === "banweb01-lip.newschool.edu" || d.SERVER_NAME === "banself01-lip.newschool.edu"})
  console.log(ban_appserver_data[0].SERVER_STATUS);
  console.log(ban_appserver_data[1].SERVER_STATUS);
  console.log(ban_appserver_data[2].SERVER_STATUS);
  ban_app_server_1 = ban_appserver_data[0].SERVER_STATUS;
  ban_app_server_2 = ban_appserver_data[1].SERVER_STATUS;
  ban_app_server_3 = ban_appserver_data[2].SERVER_STATUS;


  if(ban_app_server_1 === "DOWN" || ban_app_server_2 === "DOWN" || ban_app_server_3 === "DOWN"){
    ban_appserver_status = "DOWN";
    ban_appserver_indicator = "&#9888";
  } else {
    ban_appserver_status = "UP";
    ban_appserver_indicator = "✔";
  };
  console.log(ban_appserver_status);

  var report_tiles = d3.select('#container')
      d3.select('#banner_app_server').attr("class",function(d) { return "factor server- " + ban_appserver_status; })
      .html(function (d) { 
        return "<br><i class='fa fa-server'></i> <br>App Server: "+ban_appserver_indicator; })
  }
); 