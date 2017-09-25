var data = d3.csv("data/workday_prod_status.csv", function(data) { 
  data.forEach(function(d) {
    d.StartTime = new Date(d.StartTime); 
  });
  // console.log(data);

    data.sort(function(a,b){
            return b.StartTime - a.StartTime;
    });

    var dataNest = d3.nest()
    .key(function(d) { return d.ProcessName; })
    .entries(data);

    console.log(dataNest);

    d3.select('body').selectAll('div')
    .data(dataNest).enter().append('div')
    // .attr('class','xyz')
    .attr('id', function(d) { return d.key; })
    .attr('class',function(d) { return d.key +'<br>'+ d.values[0].Status; })
    .html(function(d) { return d.key +'<br>'+ d.values[0].Status + '<br>'+ d.values[0].StartTime; })




});

