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
			.attr("class",function(d) { return "team "+d.conference; })
            .html(function (d) { return d.team+" "+d.nickname+"<br>"+d.conference+" "+d.subdivision; })        


        // d3.selectAll('.team').attr("class",function(d) { return d.conference; })
        //     .html(function (d) { return "<h1>"+d.team+"</h1>"+d.nickname+": "+d.conference; })




});    