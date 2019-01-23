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
  
var svg = d3.select("body").append("svg")
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
      return "translate(" + x(d.content.alignment) + "," + y(d.content.value) +")"; 
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