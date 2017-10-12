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

	// var dataset = d3.json(obj, function(data) {  
	// 	console.log(dataset);  
	// 	console.log('hello');  
	// });


});