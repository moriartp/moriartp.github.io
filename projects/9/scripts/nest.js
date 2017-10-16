var apiPROJ = "https://projects.newschool.edu/psa/api.do?function=query&table=db_project&id=593&data-format=json&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";

var data2 = d3.json(apiPROJ, function(data2) { 
	data2 = data2.rows;
	console.log(data2);

	var strPROJ = JSON.stringify(data2);

	strPROJ = strPROJ.replace(/"n":"/g,'"');
	strPROJ = strPROJ.replace(/,"v":/g,':');
	strPROJ = strPROJ.replace(/{/g,'');
	strPROJ = strPROJ.replace(/}/g,'');
	strPROJ = strPROJ.replace(/"\]/g,'"}');
	strPROJ = strPROJ.replace(/\["/g,'{"');

	console.log(strPROJ);

	var objPROJ = JSON.parse(strPROJ);
	console.log(objPROJ);

	var divvyPROJ = d3.select('#header')
		.selectAll('div')
		.data(objPROJ).enter().append('div')
		.attr('id',function(d) { return d.id; })
		// .attr('class',function(d) { return d.schedule_status+" Task branch"+d.folder_id; })
		.style('height','auto')
		.style('margin','1vw')
		// .style('margin-left',function(d) { return 1+d.tree_level*3+"vw"; })		
        .style('width','80vw')
        .style('font-size','1.5em')
        .html(function(d) { return "<h1>"+d.summary+" (" +d.id+")</h1>"+
                 "<br>Planned Finish: "+d.plan_finish+
                 "<br>Deadline: "+d.deadline+ 
                 "<br>Project Lead: "+d.manager_name+ 
                 "<br>Client: "+d.client_name+ 
                 "<br>Progress: "+d.percent_complete+"%"+
                 "<p>"+d.detail+"</p>"+                
                 "<br>Sched: "+d.schedule_status
                ; })

});




////////////////////////////////////////////TASKS/////////////////////

var api = "https://projects.newschool.edu/psa/api.do?function=query&table=db_task&project_id=593&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";

var data = d3.json(api, function(data) { 
	data = data.rows;

	var str = JSON.stringify(data);

	str = str.replace(/"n":"/g,'"');
	str = str.replace(/,"v":/g,':');
	str = str.replace(/{/g,'');
	str = str.replace(/}/g,'');
	str = str.replace(/"\]/g,'"}');
	str = str.replace(/\["/g,'{"');

	// console.log(str);

	var obj = JSON.parse(str);
	// console.log(obj);

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
		.attr("height", '350')
		.attr('viewBox','0 0 600 500')
		.attr('preserveAspectRatio','xMidYMid meet')
		.style('margin','1vw')
		.style('fill','black')
		.style('background-color','seagreen')

	var circle = svgContainer.selectAll('circle')
		.data(obj).enter().append('circle')
		    .attr("cx",function(d) { return d.percent_complete*6; })
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

});








