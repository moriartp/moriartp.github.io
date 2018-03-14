var artists = "https://gist.githubusercontent.com/planetoftheweb/98f35786733c8cccf81e/raw/f3dad774ed1fe20b36011b1261bb392ee759b867/data.json";
var author = "http://celoxis02-wit.tns.newschool.edu:8888/psa/api.do?function=login&username=itprojectmanagement&password=pr0ject$1701&company-code=newschool&data-format=json";

var monkeyToken;
var monkey = d3.text(author, function(monkey) { 
	// console.log(monkey);
	// console.log(monkeyString);
	// d3.JSON(monkeyString);
	// var monkeyString = "[ "+monkey+" ]";
	// d3.JSON(monkeyString);
	// var monkeyJSON = JSON.parse(monkeyString);
	// console.log(monkeyJSON[0].result);
	// monkey = monkey.rows;
	// var monkeyString = JSON.stringify(monkey);
	// console.log(monkeyString);
	monkeyToken = monkey;
	monkeyToken = monkeyToken.replace('{"result":{"user_id":198,"token":"',"");
	monkeyToken = monkeyToken.replace('"}}',"");
	console.log(monkeyToken);
// });

////////////////////////////////////////////  APPS   /////////////////////
//var project = "https://projects.newschool.edu/psa/api.do?function=query&table=db_project&id=676&id=678&id=684&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";
var project = "http://celoxis02-wit.tns.newschool.edu:8888/psa/api.do?function=query&table=db_project&id=676&id=678&id=684&token="+monkeyToken+"&data-format=json";
// console.log(project);
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
	console.log(objProj)





//var state = "https://projects.newschool.edu/psa/api.do?function=query&table=db_state&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";
var state = "http://celoxis02-wit.tns.newschool.edu:8888/psa/api.do?function=query&table=db_state&token="+monkeyToken+"&data-format=json";

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
	// console.log(objState);
	for(var z=0;z<objState.length; z++){
		// console.log(objState[z].name);
	}
	console.log(objState);
// });







//var process_type = "https://projects.newschool.edu/psa/api.do?function=query&table=db_process_type&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";
var process_type = "http://celoxis02-wit.tns.newschool.edu:8888/psa/api.do?function=query&table=db_process_type&token="+monkeyToken+"&data-format=json";

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
	console.log(objType);




// });






//var api = "https://projects.newschool.edu/psa/api.do?function=query&table=db_process&project_id=684&project_id=678&project_id=676&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json";
var api = "http://celoxis02-wit.tns.newschool.edu:8888/psa/api.do?function=query&table=db_process&project_id=684&project_id=678&project_id=676&token="+monkeyToken+"&data-format=json";

var data = d3.json(api, function(data) { 
	data = data.rows;

	var str = JSON.stringify(data);
	// console.log(str);
	str = str.replace(/"n":"/g,'"');
	str = str.replace(/,"v":/g,':');
	str = str.replace(/{/g,'');
	str = str.replace(/}/g,'');
	str = str.replace(/"\]/g,'"}');
	str = str.replace(/\["/g,'{"');

	// console.log(str);

	var obj = JSON.parse(str);
	console.log(obj);

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
				obj[i].projectName = objProj[l].name;

			}
		}
		obj[i].projectName = obj[i].projectName.replace("Dining Services || ","");		
		// obj[i].custom_field_string = "https://projects.newschool.edu/psa/project.View.wm?p_p_id=";
		obj[i].due_date = Date(obj[i].due_date);
		// obj[i].formattedDate = Date(obj[i].due_date).getMonth();		
		// console.log(obj[i].due_date);
	}
	console.log(obj);





	var divvy = d3.select('#apps')
		.selectAll('.diver')
		.data(obj).enter().append('div')
		.attr('id',function(d) { return d.id; })
		.attr('class',function(d) { return d.is_delayed+" appContainer type"+d.type_id + " "+d.id; })
		// .style('border', '1px double black')

		.style('height','auto')
		// .style('color',function(d) { return "#"+d.state_id+"66"; })
		.style('color','#000')
		.style('margin','1vw')	
        .style('width','95%')
        .style('font-size','1.5em')

        .html(function(d) { return "<div class='projectClass'><b>"+d.projectName+"</b></div>"+ 
        	"<h2>"+d.typeName+": "+d.name+"</h2>"+
        	"<div style='width:100%'><div class='statusTag "+d.stateName+"'>"+d.stateName +"</div></div>"+
                 "<h4>Planned Finish: "+d.due_date+"</h4>"+
                 // "<p>Delayed: "+d.is_delayed+"</p></div>"+
                 "<div class='itemDetails'><h3><b>Details:</b></h3><p>"+d.description+"</p></div>"
                ;})


			});
		});
	});
});
});





/////////////////////////

////////////////// LINEUP
// 1. 	Gardner		LF	L
// 2. 	Sanchez		C 	R
// 3. 	Judge		RF	R
// 4. 	Bird		1B 	L 
// 5. 	Stanton 	DH 	R
// 6. 	Gregorius	SS 	L 
// 7. 	Hicks 		CF 	S
// 8. 	Drury		3B 	R  
// 9. 	Walker		2B 	S

/////////////////// BENCH
// 10. 	Ellsbury 	OF 	L
// 11. 	Torreyes	IF 	R 
// 12. 	Wade		UT 	L
// 13. 	Romine		C 	R

//////////////// ROTATION
// 1. 	Serverino 	SP	R
// 2. 	Tanaka		SP 	R
// 3. 	Gray		SP	R
// 4. 	Sabathia	SP	R
// 5. 	Montgomery	SP	L

///////////////// BULLPEN
// 6. 	Chapman		CL 	L
// 7. 	Robertson 	RP 	R
// 8. 	Betances	RP 	R
// 9. 	Kahnle		RP 	R
// 10.	Green		RP 	R
// 11.	Shreve		RP 	L
// 12.	Warren		RP 	R

/////////////////////////

//////////////////////////////
////////////////////////// OBP
// 1.	Hicks		.372	CF
// 2.	Walker		.409	2B
// 3.	Judge		.422	RF
// 4.	Stanton		.376	DH
// 5.	Sanchez		.345	C
// 6.	Gregorius	.318	SS
// 7.	Drury		.317	1B
// 9.	Torreyes	.314	3B
// 1.	Gardner		.350	LF
//////////////////////////////

// http://celoxis02-wit.tns.newschool.edu:8888/psa/api.do?function=login&username=itprojectmanagement&password=pr0ject$1701&company-code=newschool

// http://yourservername:portnumber/psa/api.do?function=login&username=username&password=password&company-code=company code


