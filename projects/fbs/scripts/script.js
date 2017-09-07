var data = d3.csv("data/fbs.csv", function(data) { 
	// data.forEach(function(d){ 
	// 	d.dateA = new Date(d.dateA); 
	// });   
	// data.sort(function(a,b){
 //            return b.dateA - a.dateA;
 //    });
	 console.log(data);

	 var teams = d3.select('body')
        .selectAll('.team')
        .data(data).enter()
        .append('div')
			.attr("class",function(d) { return "team "+d.subdivision+" "+d.conference; })
			.style("background-color", function(d) { return d.color1; })
			.style("color", function(d) { return d.color3; })
			.style("border", function(d) { return "0.5vw solid "+d.color2; })			
            .html(function (d) { return "<span class='teamname'>"+d.team+"</span><br><p class='notteamname'>"+d.nickname+"<br>"+d.conference+"<br>"+d.subdivision+"</p>"; })        


        // d3.selectAll('.team').attr("class",function(d) { return d.conference; })
        //     .html(function (d) { return "<h1>"+d.team+"</h1>"+d.nickname+": "+d.conference; })




});    