var data = d3.json("https://projects.newschool.edu/psa/api.do?function=query&table=db_task&project_id=593&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json", function(data) { 
    console.log(data.rows);

    var RA = data.rows;


     var taskCHIP = d3.select('#tasks')
         .selectAll('div')
         .data(RA).enter()
         .append('div')
             .style('position','block')
             .style('color','white')
             .style('height','auto')
             .style('width','100vw')
             .style('font-size','1.5em')
             .attr('id', function(d) { return d[4].n; })
             .attr('class', function(d) { return d[4].n + " " + d[108].v; })
             .html(function(d) { return d[11].v+
                 "<br>Progress: "+d[30].v+"% | "+
                 "Due: "+d[19].v+" | "+
                 "Sched: "+d[108].v
                ; })
         .append('p')
         .append('div')
            .attr('display','block')    
            .attr('float','none')    
         .append('div')
            .style('width',function(d) { return  d[30].v+"vw"; })
            .style('height','10px')
            .style('background-color','black')  
});



var dataP = d3.json("https://projects.newschool.edu/psa/api.do?function=query&table=db_project&id=593&data-format=json&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json", function(dataP) { 
    console.log(dataP);

    var RAP = dataP.rows;


     var projectCHIP = d3.select('#header')
         .selectAll('div')
         .data(RAP).enter()
         .append('div')
             .style('position','block')
             .style('color','black')
             // .style('height','130px')
             .style('width','100vw')
             .style('font-size','1.5em')
             .attr('id', function(d) { return d[14].v; })
             .attr('class', function(d) { return d[4].n; })
             .html(function(d) { return "<h1>Project: "+d[14].v+"</h1>"+
                 "<br>Planned Start: "+d[28].v+
                 "<br>Planned End: "+d[29].v+
                 "<br>Schedule Status: "+d[80].v+
                 "<br>Manager: "+d[84].v+
                 "<br>Deadline: "+d[31].v
                ; }) 
});


'https://projects.newschool.edu/psa/api.do?function=query&table=db_project&id=593&data-format=json&token=fa71d5fc-1b40-4512-9eb6-a7b0f8ec828e&data-format=json'
// //WEATHER API
// // var data = d3.json("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9bc8d884e74f1ab2b830ee0edc7539e1", function(data) { 
// var data = d3.json("http://api.openweathermap.org/data/2.5/group?id=5128581,4335045,4644585,4174757,4164047,4380997,4164143,4153188,4407665,5114401,4748050,5110108,5441199,5601615,5207490,5187443&appid=9bc8d884e74f1ab2b830ee0edc7539e1", function(data) { 	
//     console.log(data);
//     // console.log(data.weather);
//     console.log(data.list);

// 	var list = data.list;


// 	var weatherCHIP = d3.select('body')
// 		.selectAll('div')
// 		.data(list).enter()
// 		.append('div')
// 			.attr('id', function (d) { return d.id; })
// 			.style('position','block')
// 			.style('background-color', function (d) { return "#000"; })
// 			.style('color','white')
// 			.style('height','130px')
// 			.style('width','22vw')
// 			.style('font-size','1.5em')
// 			.html(function(d) { return d.name+
// 				"<br>wind speed: "+d.wind.speed+"mph"+
// 				"<br>desc: "+d.weather[0].description+
// 				"<br>hum: "+d.main.humidity+
// 				"<br><img src='http://openweathermap.org/img/w/"+d.weather[0].icon+".png' height='50px' width>"
// 				; });
// });

// //GOOGLE SHEET///
// var JSONURL = 'https://spreadsheets.google.com/feeds/list/1DER_OEs6gIjQ4BY5EXztIl8mqWe99fqn_DopvDPrZLc/1/public/basic?alt=json';

// function callback(data){
    
//     var cells = data.feed.entry;
//     console.log(cells);
    
//     var raw = document.createElement('p');
//     raw.innerText = JSON.stringify(cells);
//     document.body.appendChild(raw);
// }

// $(document).ready(function(){
    
//     $.ajax({
//         url:JSONURL,
//         success: function(data){
//             callback(data);
//         }
//     });

// });


//ANOTHER GOOGLE SHEET
// var JSONURL = 'https://spreadsheets.google.com/feeds/list/1DER_OEs6gIjQ4BY5EXztIl8mqWe99fqn_DopvDPrZLc/1/public/basic?alt=json';

// function callback(data){
//     var rows = [];
//     var cells = data.feed.entry;
    
//     for (var i = 0; i < cells.length; i++){
//         var rowObj = {};
//         rowObj.name = cells[i].title.$t;
//         var rowCols = cells[i].content.$t.split(',');
//         for (var j = 0; j < rowCols.length; j++){
//             var keyVal = rowCols[j].split(':');
//             rowObj[keyVal[0].trim()] = keyVal[1].trim();
//         }
//         rows.push(rowObj);
//     }
    
//     // var raw = document.createElement('p');
//     // raw.innerText = JSON.stringify(rows);
//     // document.body.appendChild(raw);
//     // console.log(rows);

//     var data2 = rows;
//     console.log(data2);
// 	var personCHIP = d3.select('#shit')
// 			.selectAll('div')
// 			.data(data2).enter()
// 			.append('div')
// 				.attr('id', function (d) { return d.name; })
// 				.attr('class', 'person')				
// 				.style('background-color', function (d) { return d.favcolor; })
// 				.style('color','coral')
// 				.attr('display','block')

// 			.html(function(d) { return d.name+
// 				"<br>sex: "+d.sex
// 				; });
// }

// $(document).ready(function(){
    
//     $.ajax({
//         url:JSONURL,
//         success: function(data){
//             callback(data);
//         }
//     });

// });
