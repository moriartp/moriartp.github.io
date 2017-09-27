// var data = d3.json("https://projects.newschool.edu/psa/api.do?function=query&table=db_task&project_id=593&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json", function(data) { 
//     console.log(data);
// });


//WEATHER
// var data = d3.json("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9bc8d884e74f1ab2b830ee0edc7539e1", function(data) { 
var data = d3.json("http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&appid=9bc8d884e74f1ab2b830ee0edc7539e1", function(data) { 	
    console.log(data);
    // console.log(data.weather);
    console.log(data.list);

	var list = data.list;

	var weatherCHIP = d3.select('body')
		.selectAll('div')
		.data(list).enter()
		.append('div')
			.attr('id', function (d) { return d.id; })
			.style('position','block')
			.style('background-color', function (d) { return "#0000FF"; })
			.style('color','white')
			.html(function(d) { return d.name+
				"<br>wind speed: "+d.wind.speed+"mph"+
				"<br>desc: "+d.weather[0].description+
				"<br>hum: "+d.main.humidity



				; });
	










});

//GOOGLE SHEET///
// var data = d3.json("https://spreadsheets.google.com/feeds/list/1qD7mNvmee6r4lSvqyVQvJI4ffoHWGTS6q5LbzcJsDTk/1/public/basic?alt=json", function(data) { 
//     console.log(data);
// });