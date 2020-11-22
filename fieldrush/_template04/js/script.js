$( document ).ready(function() { 
    //d3.select("#cont01").append("p").text("This is a loaded js script from the file directory, unsing remotely loaded d3 library");   
    console.log('this confirms the d3 script ran');

////////////////////////START NEW PAGE



d3.json("data/secTalent.json", function(error, data) {
  if (error) throw error;

  console.log(data);

//   d3.select("#chart")
//     .attr("width","400")
//     .attr("height","20")
//     .style("background-color","white")
//     .selectAll('rect')
//       .data(data)         
//       .enter()          
//       .append('circle')
//       .attr('r', function(d) {  return d.totalRating/5; })
//       .attr('cx', function(d) {  return (5-d.averageStars)*(5-d.averageStars) * 100; })
//       .attr('cy', "150")
//       .style("opacity", ".2")
//       .style('fill','seagreen')

  let group = data.reduce((r, a) => {
    console.log("a", a);
    console.log('r', r);
    r[a.team] = [...r[a.team] || [], a];
    return r;
    }, {});
    
    // console.log("group", group);

////////////////////
  console.log("Defensive Back Rating: "+group.Alabama[0].averageStars);
////////////////////////////

  });
});