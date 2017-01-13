var textString = d3.text("db_status/coursedb_status.csv", function(text) {  
  console.log("Course db is down: "+(text.indexOf("not") !== -1));

  var courseTile = d3.select('#container')
    .select('#courses_DB_table')
    .data(text[0]).enter()
    // .append('div')
    //   .attr('class', function(d) {return "course-tile "+"course-catalog";})
    //   .attr('id', 'course-catalog')
    //   .append('text')
    //   .html(function (d) { return "<p class='instanceName'>COURSES</p><br>"; });   

    var course_db_status = (text.indexOf("not") !== -1);
    var db_status_indicator; 
    console.log("db down? " + course_db_status) 
      if(course_db_status === true){
        var db_display_status =  "INACTIIVE";
        var db_status_indicator = "&#9888;"

      } else {
        var db_display_status =  "ACTIVE";
        var db_status_indicator = '✔';
      }
      console.log(db_display_status);

      d3.select("#courses_DB_table").attr("class",function(d) { return "database factor server- "+course_db_status;})
      .html(function (d) { return "<br><i class='fa fa-table'></i><br>Database: " + db_status_indicator; })
  }
);  