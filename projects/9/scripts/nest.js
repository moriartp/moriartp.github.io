var api = "https://projects.newschool.edu/psa/api.do?function=query&table=db_task&project_id=593&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";
// var obj = [];
var data = d3.json(api, function(data) { 
	// console.log(data.rows[0][0].n);
	// console.log(data.rows[0][0].v);
	// console.log(data.rows[0]);
	data = data.rows;
	// console.log(data);

	// console.log(JSON.stringify(data));



	var str = JSON.stringify(data);
	// console.log(str);

	str = str.replace(/"n":"/g,'"');
	str = str.replace(/,"v":/g,':');
	str = str.replace(/{/g,'');
	str = str.replace(/}/g,'');
	str = str.replace(/"\]/g,'"}');
	str = str.replace(/\["/g,'{"');



	console.log(str);

	var obj = JSON.parse(str);
	console.log(obj);

	var divvy = d3.select('#tasks')
		.selectAll('div')
		.data(obj).enter().append('div')
		.attr('id',function(d) { return d.id; })
		.attr('class',function(d) { return d.schedule_status+" Task branch"+d.tree_level; })
		.style('height','auto')
		// .style('background-color','coral')
		.style('margin','1vw')
		.style('margin-left',function(d) { return 1+d.tree_level*3+"vw"; })		
        .style('width','80vw')
        .style('font-size','1.5em')
        .html(function(d) { return "<b>"+d.summary+" (" +d.id+")</b>"+
                 "<br>Progress: "+d.percent_complete+"% | "+
                 "Planned Finish: "+d.plan_finish+" | "+
                 "Parent: "+d.plan_finish+" | "+                
                 "Sched: "+d.schedule_status
                ; })

	var svgContainer = d3.select("body").append("svg")
		.attr("id", 'svgContainer')
		.attr("width", '600')
		.attr("height", '400')
		.attr('viewBox','0 0 600 500')
		.attr('preserveAspectRatio','xMidYMid meet')
		.style('margin','1vw')
		.style('fill','black')
		.style('background-color','seagreen')

	var circle = svgContainer.selectAll('circle')
		.data(obj).enter().append('circle')
		    .attr("cx",function(d) { return d.percent_complete*8; })
		    .attr("cy",function(d) { return d.local_key*100; })
			.attr("r",function(d) { return d.priority*20; })

	var chart = $("#svgContainer"),
	    aspect = chart.width() / chart.height(),
	    container = chart.parent();
	$(window).on("resize", function() {
	    var targetWidth = container.width()*0.975;
	    chart.attr("width", targetWidth);
	    chart.attr("height", Math.round(targetWidth / aspect));
	}).trigger("resize");



			// .attr("cx", 30)
			// .attr("cy", 30)
			// .attr("r", 20);
			// .attr("stroke", 'black');
			// .style('background-color','black')                                    

	// var circles = select('svg')
	// 	.selectAll('.circL')
	// 	.data(obj).enter().append("circle")
		 //    .attr("cx",function(d) { return d.percent_complete; })
		 //    .attr("cy",function(d) { return d.local_key*10; })
			// .attr("r",function(d) { return d.priority; })




	// var dataset = d3.json(obj, function(data) {  
	// 	console.log(dataset);  
	// 	console.log('hello');  
	// });


});