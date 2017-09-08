var arr = [];
// arr.push({ key1: 0, key2: 1 });
// arr.push({ key1: 2, key2: 3 });
// console.log(arr);



var data = d3.csv("data/workday_prod_status.csv", function(data) { 
	data.forEach(function(d){ 
		d.StartTime = new Date(d.StartTime); 
	});   
	data.sort(function(a,b){
            return b.StartTime - a.StartTime;
    });
    // console.log(data);

	// CC-I-Finance-BankOfAmericaStatements_BAI2 //
    var dataLoad = data.filter(function(d){ return d.ProcessName === "CC-I-Finance-BankOfAmericaStatements_BAI2"})
	console.log(dataLoad[0]);

    var dataLoadChip = d3.select('body')
        .select('#dataLoad')
        .data(dataLoad).enter()
        d3.select('#dataLoad').attr("class",function(d) { return d.Status; })
            .html(function (d) { return "<h1>"+d.ProcessName+"</h1>"+d.Status+": "+d.StartTime; })
        
    // CC-I-HCM-Photos //
    var documentDelivery = data.filter(function(e){ return e.ProcessName === "CC-I-HCM-Photos"})
    console.log(documentDelivery[0]);

    var documentDeliveryChip = d3.select('body')
        .select('#documentDelivery')
        .data(documentDelivery).enter()
        d3.select('#documentDelivery').attr("class",function(e) { return e.Status; })
            .html(function (e) { return "<h1>"+e.ProcessName+"</h1>"+e.Status +": "+e.StartTime; })

    // DOCUMENT RETRIEVAL //
    var documentRetrieval = data.filter(function(f){ return f.ProcessName === "CC-O-Benefits-UnitedHealthcare"})
    console.log(documentRetrieval[0]);

    var documentRetrievalChip = d3.select('body')
        .select('#documentRetrieval')
        .data(documentRetrieval).enter()
        d3.select('#documentRetrieval').attr("class",function(f) { return f.Status; })
            .html(function (f) { return "<h1>"+f.ProcessName+"</h1>"+f.Status+": "+f.StartTime; })

    // CC-O-Finance-ACH-PPD//
    var importErrorAggregation = data.filter(function(g){ return g.ProcessName === "CC-O-Finance-ACH-PPD"})
    console.log(importErrorAggregation[0]);

    var importErrorAggregation = d3.select('body')
        .select('#importErrorAggregation')
        .data(importErrorAggregation).enter()
        d3.select('#importErrorAggregation').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // CC-O-Finance-PaymodeX-Extract //
    var printServiceRetrieveReportAndParmsAndGeneratePDF = data.filter(function(g){ return g.ProcessName === "CC-O-Finance-PaymodeX-Extract"})
    console.log(printServiceRetrieveReportAndParmsAndGeneratePDF[0]);

    var printServiceRetrieveReportAndParmsAndGeneratePDFChip = d3.select('body')
        .select('#printServiceRetrieveReportAndParmsAndGeneratePDF')
        .data(printServiceRetrieveReportAndParmsAndGeneratePDF).enter()
        d3.select('#printServiceRetrieveReportAndParmsAndGeneratePDF').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // CC-O-Finance-PaymodeX-Transport//
    var retrieval = data.filter(function(g){ return g.ProcessName === "CC-O-Finance-PaymodeX-Transport"})
    console.log(retrieval[0]);

    var retrieval = d3.select('body')
        .select('#retrieval')
        .data(retrieval).enter()
        d3.select('#retrieval').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // // SCHEDULE LARGE REPORTS //
    // var scheduleLargeReports = data.filter(function(g){ return g.process === "Schedule Large Reports"})
    // console.log(scheduleLargeReports[0]);

    // var scheduleLargeReports = d3.select('body')
    //     .select('#scheduleLargeReports')
    //     .data(scheduleLargeReports).enter()
    //     d3.select('#scheduleLargeReports').attr("class",function(g) { return g.status; })
    //         .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // XXX //
    var CCOPayrollADPTaxFilingPeriodic = data.filter(function(g){ return g.ProcessName === "CC-O-Payroll-ADP-Tax-Filing-Periodic"})
    console.log(CCOPayrollADPTaxFilingPeriodic[0]);

    var CCOPayrollADPTaxFilingPeriodicChip = d3.select('body')
        .select('#CCOPayrollADPTaxFilingPeriodic')
        .data(CCOPayrollADPTaxFilingPeriodic).enter()
        d3.select('#CCOPayrollADPTaxFilingPeriodic').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // CC-O-Payroll-ADP-WagePayments //
    var CCOPayrollADPWagePayments = data.filter(function(g){ return g.ProcessName === "CC-O-Payroll-ADP-WagePayments"})
    console.log(CCOPayrollADPWagePayments[0]);

    var CCOPayrollADPWagePaymentsChip = d3.select('body')
        .select('#CCOPayrollADPWagePayments')
        .data(CCOPayrollADPWagePayments).enter()
        d3.select('#CCOPayrollADPWagePayments').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // // XXX //
    // var XXX = data.filter(function(g){ return g.ProcessName === "XXX})
    // console.log(transformation[0]);

    // var XXXChip = d3.select('body')
    //     .select('#XXX')
    //     .data(XXX).enter()
    //     d3.select('#XXX').attr("class",function(g) { return g.Status; })
    //         .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // // XXX //
    // var XXX = data.filter(function(g){ return g.ProcessName === "XXX})
    // console.log(transformation[0]);

    // var XXXChip = d3.select('body')
    //     .select('#XXX')
    //     .data(XXX).enter()
    //     d3.select('#XXX').attr("class",function(g) { return g.Status; })
    //         .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // // XXX //
    // var XXX = data.filter(function(g){ return g.ProcessName === "XXX})
    // console.log(transformation[0]);

    // var XXXChip = d3.select('body')
    //     .select('#XXX')
    //     .data(XXX).enter()
    //     d3.select('#XXX').attr("class",function(g) { return g.Status; })
    //         .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // // XXX //
    // var XXX = data.filter(function(g){ return g.ProcessName === "XXX})
    // console.log(transformation[0]);

    // var XXXChip = d3.select('body')
    //     .select('#XXX')
    //     .data(XXX).enter()
    //     d3.select('#XXX').attr("class",function(g) { return g.Status; })
    //         .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // // XXX //
    // var XXX = data.filter(function(g){ return g.ProcessName === "XXX})
    // console.log(transformation[0]);

    // var XXXChip = d3.select('body')
    //     .select('#XXX')
    //     .data(XXX).enter()
    //     d3.select('#XXX').attr("class",function(g) { return g.Status; })
    //         .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })


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
