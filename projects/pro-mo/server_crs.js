var course_db_server_1;
var course_db_server_2;

var data = d3.csv("server-status/server_status.csv", function(error, data) {  
  var course_server_data = data.filter(function(d){ return d.SERVER_NAME === "coursedb01-lip.newschool.edu" || d.SERVER_NAME === "coursedb02-lip.newschool.edu"})
  console.log(course_server_data);

  var text_string = d3.text(course_server_data, function(text) {  
    console.log(text_string);
    console.log(text);
    console.log("Course db is down: "+(text.indexOf("not") !== -1));
  }
)

  // var course_tile = d3.select('#container')
  //   .select('#courses')
  //   .data(course_server_data).enter()
  //     d3.select('#courses').append("div").attr("class",function(d) { 
  //       if (d.SERVER_NAME === "coursedb01-lip.newschool.edu"){
  //         course_db_server_1 = d.SERVER_STATUS;
  //       } else if (d.SERVER_NAME === "coursedb02-lip.newschool.edu"){
  //          course_db_server_2 = d.SERVER_STATUS;
  //       }
  //       console.log("db1 = " + course_db_server_1);        
  //       console.log("db2 = " + course_db_server_2);
  //       return "factor "+"server- "+d.SERVER_STATUS; })
  //     .html(function (d) { return "<br><i class='fa fa-server'></i> <br>Courses DB Server: "+d.SERVER_STATUS; })
  // }
// ); 