var data = d3.json("https://projects.newschool.edu/psa/api.do?function=query&table=db_task&project_id=593&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json", function(data) { 
    console.log(data);
});


//WEATHER
// var data = d3.json("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9bc8d884e74f1ab2b830ee0edc7539e1", function(data) { 
var data = d3.json("http://api.openweathermap.org/data/2.5/group?id=5128581,4335045,4644585,4174757,4164047,4380997,4164143,4153188,4407665,5114401,4748050,5110108,5441199,5601615,5207490,5187443&appid=9bc8d884e74f1ab2b830ee0edc7539e1", function(data) { 	
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
			.style('background-color', function (d) { return "#000"; })
			.style('color','white')
			.style('height','130px')
			.style('width','22vw')
			.style('font-size','1.5em')
			.html(function(d) { return d.name+
				"<br>wind speed: "+d.wind.speed+"mph"+
				"<br>desc: "+d.weather[0].description+
				"<br>hum: "+d.main.humidity+
				"<br><img src='http://openweathermap.org/img/w/"+d.weather[0].icon+".png' height='50px' width>"



				; });
});

//GOOGLE SHEET///
var JSONURL = 'https://spreadsheets.google.com/feeds/list/1DER_OEs6gIjQ4BY5EXztIl8mqWe99fqn_DopvDPrZLc/1/public/basic?alt=json';

function callback(data){
    
    var cells = data.feed.entry;
    // console.log(data);
    console.log(cells);
    
    var raw = document.createElement('p');
    raw.innerText = JSON.stringify(cells);
    document.body.appendChild(raw);
}

$(document).ready(function(){
    
    $.ajax({
        url:JSONURL,
        success: function(data){
            callback(data);
        }
    });

});