var $url = "https://spreadsheets.google.com/feeds/list/1eewMgqHDN-fIrjZrYBuRaWztac2_Wvv4XZLnlkUpP5M/1/public/basic?alt=json"
$.getJSON($url,function(blob1){
console.log("hello");
// console.log(blob1.feed.entry);


// REGEX CLEANUP TO SET JSON KEY/VALUE PAIRS
var str = JSON.stringify(blob1.feed.entry);
 str = str.replace(/\"\$t\":\"sponsor: /g,"\"sponsor\":\"");
 str = str.replace(/, businessowner: /g,"\", \"businessowner\":\"");
 str = str.replace(/, projectname: /g,"\", \"projectname\":\"");
 str = str.replace(/, description: /g,"\", \"description\":\"");
 str = str.replace(/, link: /g,"\", \"link\":\"");
 str = str.replace(/, type: /g,"\", \"type\":\"");
 str = str.replace(/, state: /g,"\", \"state\":\"");
 str = str.replace(/, manager: /g,"\", \"manager\":\"");
 str = str.replace(/, start: /g,"\", \"projectStart\":\"");
 str = str.replace(/, plannedend: /g,"\", \"plannedend\":\""); 
 str = str.replace(/, deadline: /g,"\", \"deadline\":\"");
 str = str.replace(/, progress: /g,"\", \"progress\":\"");
 str = str.replace(/, state: /g,"\", \"state\":\"");
 str = str.replace(/, alignment: /g,"\", \"alignment\":\"");
 str = str.replace(/, value: /g,"\", \"orgvalue\":\"");
 str = str.replace(/, complexity: /g,"\", \"complexity\":\""); 
 str = str.replace(/, budgetestimate: /g,"\", \"budgetestimate\":\"");
 str = str.replace(/, actualcost: /g,"\", \"actualcost\":\""); 
 str = str.replace(/, fteestimate: /g,"\", \"fteestimate\":\"");
 str = str.replace(/, fteactual: /g,"\", \"fteactual\":\"");
 str = str.replace(/, additionalinfo: /g,"\", \"additionalinfo\":\""); 

// CONVERT TO JSON
 ppm = $.parseJSON(str);
 console.log(ppm);

// REFORMAT QUANT DATA ELEMENT (DATES,NUMBERS)
 var dateParser = d3.timeParse("%d-%b-%y");

     ppm.forEach(function(d) {
        d.content.deadline = dateParser(d.content.deadline);
        d.content.projectStart = dateParser(d.content.projectStart);
        d.content.plannedend = dateParser(d.content.plannedend);
        d.content.fteestimate = +d.content.fteestimate; 
        d.content.fteactual = +d.content.fteactual; 
        d.content.fteestimate = +d.content.fteestimate; 
        d.content.fteestimate = +d.content.fteestimate;
        d.content.progress = +d.content.progress;
        d.content.alignment = +d.content.alignment;
        d.content.complexity = +d.content.complexity;
        d.content.orgvalue = +d.content.orgvalue;
        d.content.budgetestimate = +d.content.budgetestimate;
        d.content.actualcost = +d.content.actualcost;
        d.content.progress = +d.content.progress;
    });


	// Define the div for the tooltip
	var div = d3.select("body").append("div")	
	    .attr("class", "tooltip")				
	    .style("opacity", 0);


   var formatDate = d3.timeFormat("%B %d, %Y");  
   var formatPercentage = d3.format(",.0%");  
   var formatDollars = d3.format("($,.2f");
   var formatIntegers = d3.format(".2f");

	var table = d3.select('tbody')
	var tr = table.selectAll('tr')
	    .data(ppm).enter()
	    .append('tr')
	    .attr('class',function(d) {	return d.content.state; });

	tr.append('td').html(function(d) { return '<b><a href="'+d.content.link+'">'+d.content.projectname+'<i class="fa fa-external-link-square" aria-hidden="true"></i></a></b>'; })
		.on("mouseover", function(d) {		
		            div.transition()		
		                .duration(200)		
		                .style("opacity", .9);		
		            div	.html("<b>"+d.content.projectname+"</b><br/>"  + d.content.description)	
		                .style("left", (d3.event.pageX) + "px")		
		                .style("top", (d3.event.pageY - 28) + "px");	
		            })					
		        .on("mouseout", function(d) {		
		            div.transition()		
		                .duration(500)		
		                .style("opacity", 0);	
		        });
	tr.append('td').html(function(d) { return d.content.sponsor; }).attr('class','sponsor');
	tr.append('td').html(function(d) { return d.content.manager; }).attr('class','pm');
	// tr.append('td').html(function(d) { return formatPercentage(d.content.complexity); });
	// tr.append('td').html(function(d) { return formatPercentage(d.content.alignment); });
	// tr.append('td').html(function(d) { return formatPercentage(d.content.orgvalue); });
	tr.append('td').html(function(d) { return d.content.businessowner; }).attr('class','businessowner');
	tr.append('td')
		// .attr('class',function(d) { return d.content.state; })
		.html(function(d) { return "<div class='"+d.content.state+"'>"+d.content.state+"<div>"; });
	// tr.append('td').html(function(d) { return '<a href="'+d.content.link+'">'+d.content.projectname+'<i class="fa fa-external-link-square" aria-hidden="true"></i></a>'; });
	tr.append('td').html(function(d) { return d.content.type; }).attr('class','type');
	tr.append('td').html(function(d) { 
		if(d.content.projectStart != null){
			return formatDate(d.content.projectStart);
		}
	})
		.attr('class','start');
	tr.append('td').html(function(d) { 
		if(d.content.plannedend != null){
			return formatDate(d.content.plannedend);
		}
	})
		.attr('class','end')
		.attr("class", function(d) { 
			if(d.content.plannedend >= d.content.deadline && d.content.plannedend != null){
				return "risky";
			} else {
				return "end";
			}
		});	
	tr.append('td').html(function(d) { 
		if(d.content.deadline != null){
			return formatDate(d.content.deadline);
		}
	})
		.attr('class','deadline');	
	tr.append('td').html(function(d) { 
		if(d.content.progress > 0){
			return formatPercentage(d.content.progress); 
		}
	})
		.attr('class','progress');
	tr.append('td').html(function(d) { return formatDollars(d.content.budgetestimate); }).attr('class','budget');
	tr.append('td').html(function(d) {
			if(d.content.actualcost > d.content.budgetestimate && d.content.budgetestimate != null){
				return "<div class='risky'>"+formatDollars(d.content.actualcost)+"</div>";
			} else {
				return  "<div class='cost'>"+formatDollars(d.content.actualcost)+"</div>";;
			}
		});

		// .attr("class", function(d) { 
		// 	if(d.content.actualcost > d.content.budgetestimate && d.content.budgetestimate != null){
		// 		return "risky";
		// 	} else {
		// 		return "cost";
		// 	}
		// });	
	tr.append('td').html(function(d) { return formatIntegers(d.content.fteestimate); }).attr('class','fte');	
	tr.append('td').html(function(d) { return formatIntegers(d.content.fteactual); }).attr('class','fte');	
	tr.append('td').html(function(d) { return "<!-- d.content.additionalinfo-->" 
		+ "<div style='height:13px; border-radius: .35em; margin-bottom:5px; background-color:#B9DAEB;width:"+d.content.complexity*100+"%'>Complexity</div>"
		+ "<div style='height:13px; border-radius: .35em; margin-bottom:5px; background-color:#8AB9D2;width:"+d.content.alignment*100+"%'>Alignment</div>"		
		+ "<div style='height:13px; border-radius: .35em; margin-bottom:5px; background-color:#5C92AF;width:"+d.content.orgvalue*100+"%'>Value</div>"
		;})
		.attr('class','addinfo')	
		.attr('width','300px');




//////////////////////////
// THIS IS THE SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT
// THIS IS THE SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT
// THIS IS THE SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT
// THIS IS THE SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT
// THIS IS THE SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear()
    .range([0, width]);

var y = d3.scaleLinear()
    .range([height, 0]);

var r = d3.scaleSqrt()
		.range([2,10]);
  
var xAxis = d3.axisBottom()
		.scale(x);

var yAxis = d3.axisLeft()
		.scale(y);
  
var color = d3.scaleOrdinal(d3.schemeCategory20);
  //Lorsque d3 construit un color scale, il y a un range et un domaine
  //on construit ici un range de 20 couleurs et les domaines sont automatiquement   //attribuées. color.domain() renverra la liste des domaines attriuées au range
  //on peut passer un tableau à couleur.domaine()
var symbols = d3.scaleOrdinal(d3.symbols);

// creates a generator for symbols
var symbol = d3.symbol().size(100);  
  
var svg = d3.select("svg").select("#scatter")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var tooltip = d3.select("body").append("div")
					.attr("class", "tooltip")
					.style("opacity", 0);

	x.domain(d3.extent(ppm, function(d){
		return d.content.alignment;
	})).nice();

	y.domain(d3.extent(ppm, function(d){
		return d.content.orgvalue;
	})).nice();

	r.domain(d3.extent(ppm, function(d){
		return d.content.complexity;
	})).nice();
  
  svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('class', 'x axis')
    .call(xAxis);

  svg.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'y axis')
    .call(yAxis);

	svg.append('text')
		.attr('x', 10)
		.attr('y', 10)
		.attr('class', 'label')
		.text('VERT LABEL');

	svg.append('text')
		.attr('x', width)
		.attr('y', height - 10)
		.attr('text-anchor', 'end')
		.attr('class', 'label')
		.text('HORIZONTAL LABEL');
  	
  // we use the ordinal scale symbols to generate symbols
  // such as d3.symbolCross, etc..
  // -> symbol.type(d3.symbolCross)()
    svg.selectAll(".symbol")
    .data(ppm)
 		.enter().append("path")
    .attr("class", "symbol")
    //.attr("class",function(d){return d.species})
    .attr("d", function(d, i) { return symbol.type(symbols(d.content.type))(); })
    .style("fill", function(d) { return color(d.content.type); })
    //Attribution des domaines, le mapping entre le domaine et le range se fait  			//lors du premier appel
    .attr("transform", function(d) { 
      return "translate(" + x(d.content.alignment) + "," + y(d.content.orgvalue) +")"; 
    });
  
  var legend = svg.selectAll(".legend")
    .data(color.domain())
  	.enter().append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
var clicked=null;
  legend.append("path")
    .style("fill", function(d) { return color(d); })
    	.attr("d", function(d, i) { return symbol.type(symbols(d))(); })
	    .attr("transform", function(d, i) { 
    		return "translate(" + (width -10) + "," + 10 + ")"; 
  		})
  		.on("click", function(d) {
    	console.log("test " + d);
       d3.selectAll(".symbol").style("opacity",1)
       
       if (clicked !==d){
       d3.selectAll(".symbol")
       .filter(function(e){return e.species !== d})
       .transition().duration(500).style("opacity", "0");
       clicked=d;
       }
				else {
          clicked=null;
        }
        });
 
  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

// THIS IS THE END OF SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT     
// THIS IS THE END OF SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT     
// THIS IS THE END OF SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT     
// THIS IS THE END OF SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT     
// THIS IS THE END OF SCRIPT FOR THE SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT | SCATTER PLOT      


}); 
// LEAVE THIS END BRACKET