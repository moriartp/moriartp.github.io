var textString = d3.text("db_status/coursedb_status.csv", function(text) {  
  console.log("Course db is down: "+(text.indexOf("not") !== -1));

  var courseTile = d3.select('#container')
    .selectAll('.course-tile')
    .data(text[0]).enter()
    .append('div')
      .attr('class', function(d) {return "tile "+"course-catalog";})
      .attr('id', 'course-catalog')
      .append('text')
      .html(function (d) { return "<p class='instanceName'>COURSES</p><br>"; });   

    var course_db_status = (text.indexOf("not") !== -1);
    console.log("db down? " + course_db_status) 
      if(course_db_status === true){
        var db_display_status =  "INACTIIVE";
      } else {
        var db_display_status =  "ACTIVE";
      }
      console.log(db_display_status);

      d3.selectAll("#course-catalog").append("div").attr("class",function(d) { return "database"+course_db_status;})
      .html(function (d) { return "<br><i class='fa fa-database'></i><br>Database: " + db_display_status; })
  }
); 

    
