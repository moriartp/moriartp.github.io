////////////////////////////////////////////  APPS   /////////////////////


var project = "https://projects.newschool.edu/psa/api.do?function=query&table=db_project&id=676&id=678&id=684&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";

var objProj = [];

var dataProj = d3.json(project, function(dataProj) { 
	dataProj = dataProj.rows;

	var str4 = JSON.stringify(dataProj);

	str4 = str4.replace(/"n":"/g,'"');
	str4 = str4.replace(/,"v":/g,':');
	str4 = str4.replace(/{/g,'');
	str4 = str4.replace(/}/g,'');
	str4 = str4.replace(/"\]/g,'"}');
	str4 = str4.replace(/\["/g,'{"');

	// console.log(str);

	var objProj = JSON.parse(str4);
	// console.log(objProj)





var state = "https://projects.newschool.edu/psa/api.do?function=query&table=db_state&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";

var objState = [];

var dataState = d3.json(state, function(dataState) { 
	dataState = dataState.rows;

	var str3 = JSON.stringify(dataState);

	str3 = str3.replace(/"n":"/g,'"');
	str3 = str3.replace(/,"v":/g,':');
	str3 = str3.replace(/{/g,'');
	str3 = str3.replace(/}/g,'');
	str3 = str3.replace(/"\]/g,'"}');
	str3 = str3.replace(/\["/g,'{"');

	// console.log(str);

	var objState = JSON.parse(str3);
	console.log(objState);
	for(var z=0;z<objState.length; z++){
		console.log(objState[z].name);
	}
// });







var process_type = "https://projects.newschool.edu/psa/api.do?function=query&table=db_process_type&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";

// var objType = [];

var dataType = d3.json(process_type, function(dataType) { 
	dataType = dataType.rows;

	var str2 = JSON.stringify(dataType);

	str2 = str2.replace(/"n":"/g,'"');
	str2 = str2.replace(/,"v":/g,':');
	str2 = str2.replace(/{/g,'');
	str2 = str2.replace(/}/g,'');
	str2 = str2.replace(/"\]/g,'"}');
	str2 = str2.replace(/\["/g,'{"');

	// console.log(str);

	var objType = JSON.parse(str2);




// });






var api = "https://projects.newschool.edu/psa/api.do?function=query&table=db_process&project_id=684&project_id=678&project_id=676&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";

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

	for(var i = 0;i < obj.length; i++){
		for(var j = 0; j < objType.length; j++){   //Insert App Type Name eg Issue, Risk, etc into
			if(obj[i].type_id === objType[j].id){
				obj[i].typeName = objType[j].name;
			}
		}

		for(var k = 0; k < objState.length; k++){ //Insert state name into object
			if(obj[i].state_id === objState[k].id){
				obj[i].stateName = objState[k].name;
			}
		}

		for(var l = 0; l < objProj.length; l++){ //Insert project name into object
			if(obj[i].project_id === objProj[l].id){
				obj[i].projectName = objProj[l].summary;

			}
		}
		obj[i].custom_field_string = "https://projects.newschool.edu/psa/project.View.wm?p_p_id=";


	}
	console.log(obj);




	var divvy = d3.select('#apps')
		.selectAll('.diver')
		.data(obj).enter().append('div')
		.attr('id',function(d) { return d.id; })
		.attr('class',function(d) { return d.is_delayed+" appContainer type"+d.type_id + " "+d.id; })
		.style('border', '1px double black')

		.style('height','auto')
		// .style('color',function(d) { return "#"+d.state_id+"66"; })
		.style('color','#000')
		.style('margin','1vw')	
        .style('width','95%')
        .style('font-size','1.5em')

        .html(function(d) { return "<div class='projectClass'><b>"+d.projectName+"</b></div>"+ 
        	"<h2>"+d.typeName+": "+d.summary+"</h2>"+
        	"<div style='width:100%'><div class='statusTag "+d.stateName+"'>"+d.stateName +"</div></div>"+
                 "<h4>Planned Finish: "+d.due_date+"</h4>"+
                 "<p>Delayed: "+d.is_delayed+"</p></div>"+
                 "<div class='itemDetails'><p>"+d.detail+"</p></div>"
                ; })





			});
		});
	});
});





