

var data = d3.csv("data/workday_prod_status.csv", function(data) { 
	data.forEach(function(d){ 
		d.dateA = new Date(d.dateA); 
		// console.log(d.dateA.getMonth()+"-"+d.dateA.getDate()+"-"+d.dateA.getYear()); 
	});   
	data.sort(function(a,b){
            return b.dateA - a.dateA;
        });

	var print_data = data.filter(function(d){ return d.process === "PrintServiceRetrieveReportAndParmsAndGeneratePDF"})
  	console.log(print_data);

	// var groups = d3.nest()
	// 		.key(function(d) { return d.process; })
 //  			.entries(data);
 //  	console.log(groups[0].values[0].dateA);

	var tiles = d3.select('body')
    	.selectAll('.tile')
    	.data(data).enter()
    	.append('div')
    		// .filter(function(d) { return d.status !== "Completed" })
    		// .style('display', 'inline-block';})
    		.attr('id', function(d) {return d.process;})
    		.attr('class', function(d) {return 'chip '+ d.status;})

    	// .selectAll('.tile')
    	// .data(data).enter()
    	.append('p')
    		.html(function(d) {return d.process + '<br>'+(d.dateA.getMonth()+1)+"/"+d.dateA.getDate()+"/"+(d.dateA.getYear()+1900)+' '+(d.dateA.getHours()+1)+':'+d.dateA.getMinutes()+'<h2>'+d.status+'</h2>';})

});
