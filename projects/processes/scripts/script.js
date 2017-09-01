var arr = [];
// arr.push({ key1: 0, key2: 1 });
// arr.push({ key1: 2, key2: 3 });
// console.log(arr);



var data = d3.csv("data/workday_prod_status.csv", function(data) { 
	data.forEach(function(d){ 
		d.dateA = new Date(d.dateA); 
	});   
	data.sort(function(a,b){
            return b.dateA - a.dateA;
    });

	// DATA LOAD PROCESS //
    var dataLoad = data.filter(function(d){ return d.process === "Data Load"})
	console.log(dataLoad[0]);

    var dataLoadChip = d3.select('body')
        .select('#dataLoad')
        .data(dataLoad).enter()
        d3.select('#dataLoad').attr("class",function(d) { return d.status; })
            .html(function (d) { return "<h1>"+d.process+"</h1>"+d.status+": "+d.dateA; })
        
    // DOCUMENT DELIVERY //
    var documentDelivery = data.filter(function(e){ return e.process === "Document Delivery"})
    console.log(documentDelivery[0]);

    var documentDeliveryChip = d3.select('body')
        .select('#documentDelivery')
        .data(documentDelivery).enter()
        d3.select('#documentDelivery').attr("class",function(e) { return e.status; })
            .html(function (e) { return "<h1>"+e.process+"</h1>"+e.status +": "+e.dateA; })

    // DOCUMENT RETRIEVAL //
    var documentRetrieval = data.filter(function(f){ return f.process === "Document Retrieval"})
    console.log(documentRetrieval[0]);

    var documentRetrievalChip = d3.select('body')
        .select('#documentRetrieval')
        .data(documentRetrieval).enter()
        d3.select('#documentRetrieval').attr("class",function(f) { return f.status; })
            .html(function (f) { return "<h1>"+f.process+"</h1>"+f.status+": "+f.dateA; })

    // IMPORT ERROR AGGREGATION //
    var importErrorAggregation = data.filter(function(g){ return g.process === "Import Error Aggregation"})
    console.log(importErrorAggregation[0]);

    var importErrorAggregation = d3.select('body')
        .select('#importErrorAggregation')
        .data(importErrorAggregation).enter()
        d3.select('#importErrorAggregation').attr("class",function(g) { return g.status; })
            .html(function (g) { return "<h1>"+g.process+"</h1>"+g.status+": "+g.dateA; })

    // printServiceRetrieveReportAndParmsAndGeneratePDF //
    var printServiceRetrieveReportAndParmsAndGeneratePDF = data.filter(function(g){ return g.process === "PrintServiceRetrieveReportAndParmsAndGeneratePDF"})
    console.log(printServiceRetrieveReportAndParmsAndGeneratePDF[0]);

    var printServiceRetrieveReportAndParmsAndGeneratePDFChip = d3.select('body')
        .select('#printServiceRetrieveReportAndParmsAndGeneratePDF')
        .data(printServiceRetrieveReportAndParmsAndGeneratePDF).enter()
        d3.select('#printServiceRetrieveReportAndParmsAndGeneratePDF').attr("class",function(g) { return g.status; })
            .html(function (g) { return "<h1>"+g.process+"</h1>"+g.status+": "+g.dateA; })

    // RETRIEVAL //
    var retrieval = data.filter(function(g){ return g.process === "Retrieval"})
    console.log(retrieval[0]);

    var retrieval = d3.select('body')
        .select('#retrieval')
        .data(retrieval).enter()
        d3.select('#retrieval').attr("class",function(g) { return g.status; })
            .html(function (g) { return "<h1>"+g.process+"</h1>"+g.status+": "+g.dateA; })

    // SCHEDULE LARGE REPORTS //
    var scheduleLargeReports = data.filter(function(g){ return g.process === "Schedule Large Reports"})
    console.log(scheduleLargeReports[0]);

    var scheduleLargeReports = d3.select('body')
        .select('#scheduleLargeReports')
        .data(scheduleLargeReports).enter()
        d3.select('#scheduleLargeReports').attr("class",function(g) { return g.status; })
            .html(function (g) { return "<h1>"+g.process+"</h1>"+g.status+": "+g.dateA; })

    // TRANSFORMATION //
    var transformation = data.filter(function(g){ return g.process === "Transformation"})
    console.log(transformation[0]);

    var transformation = d3.select('body')
        .select('#transformation')
        .data(transformation).enter()
        d3.select('#transformation').attr("class",function(g) { return g.status; })
            .html(function (g) { return '<h1>'+g.process+"</h1>"+g.status+": "+g.dateA; })



// //////////////////////////////////////////////////////////////////////////////
// 	var tiles = d3.select('body')
//     	.selectAll('.tile')
//     	.data(data).enter()
//     	.append('div')
//     		.attr('id', function(d) {return d.process;})
//     		.attr('class', function(d) {return 'chip '+ d.status;})
//     	.append('p')
//     		.html(function(d) {return d.process + '<br>'+(d.dateA.getMonth()+1)+"/"+d.dateA.getDate()+"/"+(d.dateA.getYear()+1900)+' '+(d.dateA.getHours()+1)+':'+d.dateA.getMinutes()+'<h2>'+d.status+'</h2>';})

});
