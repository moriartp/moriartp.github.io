var data = d3.csv("http://countryapi.gear.host/v1/Country/getCountries", function(data) { 

	 console.log(data);

	 // var teams = d3.select('body')
  //       .selectAll('.team')
  //       .data(data).enter()
  //       .append('div')
		// 	.attr("class",function(d) { return "team "+d.subdivision+" "+d.conference; })
		// 	.style("background-color", function(d) { return d.color1; })
		// 	.style("background-image", function(d) { return "url("+d.logo+")"; })
		// 	.style("color", function(d) { return d.color3; })
		// 	.style("border", function(d) { return "0.5vw solid "+d.color2; })							
  //           .html(function (d) { return "<span class='teamname'>"+d.team+"</span><br><p class='notteamname'>"+d.nickname+"<br>"+d.conference+"<br>"+d.subdivision+"</p>"; })        


});    