// ////////////////////////AAAAAAAAAAAAAAAAAAAAA
// $.getJSON(
//   "https://docs.google.com/a/columbia.edu/spreadsheets/d/e/2PACX-1vQywdd3hj490T4WucH0rZKndYv_YU67ZpEa7Pk6M1jr-41BYog9viDZw7T0uiotQfOrVO8TBH66mU0K/pubhtml",
//   function(json) { console.log(json); }
// );


/////////////////////////BBBBBBBBBBBBBBBBBBBBBB
// var script = $("<script />", {
//     src: "http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-1.json",
//     type: "application/json"
//   }
// );

// $("head").append(script);



///////////////////////CCCCCCCCCCCCCCCCCCCCCC
function jsonCallback(json){
  console.log(json);
}

$.ajax({
  url: "https://docs.google.com/a/columbia.edu/spreadsheets/d/e/2PACX-1vQywdd3hj490T4WucH0rZKndYv_YU67ZpEa7Pk6M1jr-41BYog9viDZw7T0uiotQfOrVO8TBH66mU0K/pubhtml",
  dataType: "jsonp"
});