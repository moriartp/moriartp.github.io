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

    // DailyDigest //
    var DailyDigest = data.filter(function(g){ return g.ProcessName === "Daily Digest"})
    console.log(DailyDigest[0]);

    var DailyDigestChip = d3.select('body')
        .select('#DailyDigest')
        .data(DailyDigest).enter()
        d3.select('#DailyDigest').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // EIBImportAccountingJournal//
    var EIBImportAccountingJournal = data.filter(function(g){ return g.ProcessName === "EIB_Import_Accounting_Journal"})
    console.log(EIBImportAccountingJournal[0]);

    var EIBImportAccountingJournalChip = d3.select('body')
        .select('#EIBImportAccountingJournal')
        .data(EIBImportAccountingJournal).enter()
        d3.select('#EIBImportAccountingJournal').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

//FIX PROCESS NAMES BELOW HERE    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // EIB_Student_Supplier_Invoice //
    var EIB_Student_Supplier_Invoice = data.filter(function(g){ return g.ProcessName === "EIB_Student_Supplier_Invoice"})
    console.log(EIB_Student_Supplier_Invoice[0]);

    var EIB_Student_Supplier_InvoiceChip = d3.select('body')
        .select('#EIB_Student_Supplier_Invoice')
        .data(EIB_Student_Supplier_Invoice).enter()
        d3.select('#EIB_Student_Supplier_Invoice').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // // EIB_Student_Suppliers //
    var EIB_Student_Suppliers = data.filter(function(g){ return g.ProcessName === "EIB_Student_Suppliers"})
    console.log(EIB_Student_Suppliers[0]);

    var EIB_Student_SuppliersChip = d3.select('body')
        .select('#EIB_Student_Suppliers')
        .data(EIB_Student_Suppliers).enter()
        d3.select('#EIB_Student_Suppliers').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // EIBAllPositionsforProvisioning //
    var EIBAllPositionsforProvisioning = data.filter(function(g){ return g.ProcessName === "EIB - All Positions for Provisioning"})
    console.log(EIBAllPositionsforProvisioning[0]);

    var EIBAllPositionsforProvisioningChip = d3.select('body')
        .select('#EIBAllPositionsforProvisioning')
        .data(EIBAllPositionsforProvisioning).enter()
        d3.select('#EIBAllPositionsforProvisioning').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })

    // EIBAllSupervisoryandSuperiorOrganizations //
    var EIBAllSupervisoryandSuperiorOrganizations = data.filter(function(g){ return g.ProcessName === "EIB - All Supervisory and Superior Organizations"})
    console.log(EIBAllSupervisoryandSuperiorOrganizations[0]);

    var EIBAllSupervisoryandSuperiorOrganizationsChip = d3.select('body')
        .select('#EIBAllSupervisoryandSuperiorOrganizations')
        .data(EIBAllSupervisoryandSuperiorOrganizations).enter()
        d3.select('#EIBAllSupervisoryandSuperiorOrganizations').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB - Course Subject Academic Units //
    var EIBCourseSubjectAcademicUnits = data.filter(function(g){ return g.ProcessName === "EIB - Course Subject Academic Units"})
    console.log(EIBCourseSubjectAcademicUnits[0]);

    var EIBCourseSubjectAcademicUnitsChip = d3.select('body')
        .select('#EIBCourseSubjectAcademicUnits')
        .data(EIBCourseSubjectAcademicUnits).enter()
        d3.select('#EIBCourseSubjectAcademicUnits').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })   

    // EIBCurrentAcademicAppointments //
    var EIBCurrentAcademicAppointments = data.filter(function(g){ return g.ProcessName === "EIB - Current Academic Appointments"})
    console.log(EIBCurrentAcademicAppointments[0]);

    var EIBCurrentAcademicAppointmentsChip = d3.select('body')
        .select('#EIBCurrentAcademicAppointments')
        .data(EIBCurrentAcademicAppointments).enter()
        d3.select('#EIBCurrentAcademicAppointments').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })        

    // EIBManagePeriodActivityAssignments //
    var EIBManagePeriodActivityAssignments = data.filter(function(g){ return g.ProcessName === "EIB - Manage Period Activity Assignments - Attachment"})
    console.log(EIBManagePeriodActivityAssignments[0]);

    var EIBManagePeriodActivityAssignmentsChip = d3.select('body')
        .select('#EIBManagePeriodActivityAssignments')
        .data(EIBManagePeriodActivityAssignments).enter()
        d3.select('#EIBManagePeriodActivityAssignments').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOActiveUnionMembers//
    var EIBOActiveUnionMembers = data.filter(function(g){ return g.ProcessName === "EIB-O-Active Union Members"})
    console.log(EIBOActiveUnionMembers[0]);

    var EIBOActiveUnionMembersChip = d3.select('body')
        .select('#EIBOActiveUnionMembers')
        .data(EIBOActiveUnionMembers).enter()
        d3.select('#EIBOActiveUnionMembers').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOCancelledCourseAssignments //
    var EIBOCancelledCourseAssignments = data.filter(function(g){ return g.ProcessName === "EIB-O-Cancelled-Course-Assignments"})
    console.log(EIBOCancelledCourseAssignments[0]);

    var EIBOCancelledCourseAssignmentsChip = d3.select('body')
        .select('#EIBOCancelledCourseAssignments')
        .data(EIBOCancelledCourseAssignments).enter()
        d3.select('#EIBOCancelledCourseAssignments').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // XEIBOFinanceINT055AcadLevofStudy //
    var EIBOFinanceINT055AcadLevofStudy = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Acad_Lev_of_Study"})
    console.log(EIBOFinanceINT055AcadLevofStudy[0]);

    var EIBOFinanceINT055AcadLevofStudyChip = d3.select('body')
        .select('#EIBOFinanceINT055AcadLevofStudy')
        .data(EIBOFinanceINT055AcadLevofStudy).enter()
        d3.select('#EIBOFinanceINT055AcadLevofStudy').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    


    // EIBOFinanceINT055AcademicTerms //
    var EIBOFinanceINT055AcademicTerms = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Academic_Terms"})
    console.log(EIBOFinanceINT055AcademicTerms[0]);

    var EIBOFinanceINT055AcademicTermsChip = d3.select('body')
        .select('#EIBOFinanceINT055AcademicTerms')
        .data(EIBOFinanceINT055AcademicTerms).enter()
        d3.select('#EIBOFinanceINT055AcademicTerms').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055BankAccounts //
    var EIBOFinanceINT055BankAccounts = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Bank_Accounts"})
    console.log(EIBOFinanceINT055BankAccounts[0]);

    var EIBOFinanceINT055BankAccountsChip = d3.select('body')
        .select('#EIBOFinanceINT055BankAccounts')
        .data(EIBOFinanceINT055BankAccounts).enter()
        d3.select('#EIBOFinanceINT055BankAccounts').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055Bonds //
    var EIBOFinanceINT055Bonds = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Bonds"})
    console.log(EIBOFinanceINT055Bonds[0]);

    var EIBOFinanceINT055BondsChip = d3.select('body')
        .select('#EIBOFinanceINT055Bonds')
        .data(EIBOFinanceINT055Bonds).enter()
        d3.select('#EIBOFinanceINT055Bonds').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055CostCenterHierarc //
    var EIBOFinanceINT055CostCenterHierarc = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Cost_Center_Hierarc"})
    console.log(EIBOFinanceINT055CostCenterHierarc[0]);

    var EIBOFinanceINT055CostCenterHierarcChip = d3.select('body')
        .select('#EIBOFinanceINT055CostCenterHierarc')
        .data(EIBOFinanceINT055CostCenterHierarc).enter()
        d3.select('#EIBOFinanceINT055CostCenterHierarc').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055CostCenters //
    var EIBOFinanceINT055CostCenters = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Cost_Centers"})
    console.log(EIBOFinanceINT055CostCenters[0]);

    var EIBOFinanceINT055CostCentership = d3.select('body')
        .select('#EIBOFinanceINT055CostCenters')
        .data(EIBOFinanceINT055CostCenters).enter()
        d3.select('#EIBOFinanceINT055CostCenters').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055FundHierarc //
    var EIBOFinanceINT055FundHierarc = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Fund_Hierarc"})
    console.log(EIBOFinanceINT055FundHierarc[0]);

    var EIBOFinanceINT055FundHierarcChip = d3.select('body')
        .select('#EIBOFinanceINT055FundHierarc')
        .data(EIBOFinanceINT055FundHierarc).enter()
        d3.select('#EIBOFinanceINT055FundHierarc').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055Funds //
    var EIBOFinanceINT055Funds = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_ Funds"})
    console.log(EIBOFinanceINT055Funds[0]);

    var EIBOFinanceINT055FundsChip = d3.select('body')
        .select('#EIBOFinanceINT055Funds')
        .data(EIBOFinanceINT055Funds).enter()
        d3.select('#EIBOFinanceINT055Funds').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055GiftHierarc //
    var EIBOFinanceINT055GiftHierarc = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Gift_Hierarc"})
    console.log(EIBOFinanceINT055GiftHierarc[0]);

    var EIBOFinanceINT055GiftHierarcChip = d3.select('body')
        .select('#EIBOFinanceINT055GiftHierarc')
        .data(EIBOFinanceINT055GiftHierarc).enter()
        d3.select('#EIBOFinanceINT055GiftHierarc').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    


    // EIBOFinanceINT055Gifts//
    var EIBOFinanceINT055Gifts = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Gifts"})
    console.log(EIBOFinanceINT055Gifts[0]);

    var EIBOFinanceINT055GiftsChip = d3.select('body')
        .select('#EIBOFinanceINT055Gifts')
        .data(EIBOFinanceINT055Gifts).enter()
        d3.select('#EIBOFinanceINT055Gifts').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055GrantHierarc //
    var EIBOFinanceINT055GrantHierarc = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Grant_Hierarc"})
    console.log(EIBOFinanceINT055GrantHierarc[0]);

    var EIBOFinanceINT055GrantHierarcChip = d3.select('body')
        .select('#EIBOFinanceINT055GrantHierarc')
        .data(EIBOFinanceINT055GrantHierarc).enter()
        d3.select('#EIBOFinanceINT055GrantHierarc').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // XEIBOFinanceINT055Grants //
    var EIBOFinanceINT055Grants = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Grants"})
    console.log(EIBOFinanceINT055Grants[0]);

    var EIBOFinanceINT055GrantsChip = d3.select('body')
        .select('#EIBOFinanceINT055Grants')
        .data(EIBOFinanceINT055Grants).enter()
        d3.select('#EIBOFinanceINT055Grants').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055LedgerAccounts //
    var EIBOFinanceINT055LedgerAccounts = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Ledger_Accounts"})
    console.log(EIBOFinanceINT055LedgerAccounts[0]);

    var EIBOFinanceINT055LedgerAccountsChip = d3.select('body')
        .select('#EIBOFinanceINT055LedgerAccounts')
        .data(EIBOFinanceINT055LedgerAccounts).enter()
        d3.select('#EIBOFinanceINT055LedgerAccounts').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055LedgerAcctSummar //
    var EIBOFinanceINT055LedgerAcctSummar = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Ledger_Acct_Summar"})
    console.log(EIBOFinanceINT055LedgerAcctSummar[0]);

    var EIBOFinanceINT055LedgerAcctSummarChip = d3.select('body')
        .select('#EIBOFinanceINT055LedgerAcctSummar')
        .data(EIBOFinanceINT055LedgerAcctSummar).enter()
        d3.select('#EIBOFinanceINT055LedgerAcctSummar').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIBOFinanceINT055ProgramHierarc //
    var EIBOFinanceINT055ProgramHierarc = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Program_Hierarc"})
    console.log(EIBOFinanceINT055ProgramHierarc[0]);

    var EIBOFinanceINT055ProgramHierarcChip = d3.select('body')
        .select('#EIBOFinanceINT055ProgramHierarc')
        .data(EIBOFinanceINT055ProgramHierarc).enter()
        d3.select('#EIBOFinanceINT055ProgramHierarc').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

///INSERT PROCESS NAME TO BELOW FILTERS

    // EIB-O-Finance_INT055_Programs //
    var EIBOFinance_INT055_Programs = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Programs"})
    console.log(EIBOFinance_INT055_Programs[0]);

    var EIBOFinance_INT055_ProgramsChip = d3.select('body')
        .select('#EIBOFinance_INT055_Programs')
        .data(EIBOFinance_INT055_Programs).enter()
        d3.select('#EIBOFinance_INT055_Programs').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Finance_INT055_Project_Hierarc //
    var EIBOFinance_INT055_Project_Hierarc = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Project_Hierarc"})
    console.log(EIBOFinance_INT055_Project_Hierarc[0]);

    var EIBOFinance_INT055_Project_HierarcChip = d3.select('body')
        .select('#EIBOFinance_INT055_Project_Hierarc')
        .data(EIBOFinance_INT055_Project_Hierarc).enter()
        d3.select('#EIBOFinance_INT055_Project_Hierarc').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Finance_INT055_Projects //
    var EIBOFinance_INT055_Projects = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Projects"})
    console.log(EIBOFinance_INT055_Projects[0]);

    var EIBOFinance_INT055_ProjectsChip = d3.select('body')
        .select('#EIBOFinance_INT055_Projects')
        .data(EIBOFinance_INT055_Projects).enter()
        d3.select('#EIBOFinance_INT055_Projects').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Finance_INT055_Rev_Categry_Hierar //
    var EIBOFinance_INT055_Rev_Categry_Hierar = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Rev_Categry_Hierar"})
    console.log(EIBOFinance_INT055_Rev_Categry_Hierar[0]);

    var EIBOFinance_INT055_Rev_Categry_HierarChip = d3.select('body')
        .select('#EIBOFinance_INT055_Rev_Categry_Hierar')
        .data(EIBOFinance_INT055_Rev_Categry_Hierar).enter()
        d3.select('#EIBOFinance_INT055_Rev_Categry_Hierar').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Finance_INT055_Revenue_Categories//
    var EIBOFinance_INT055_Revenue_Categories = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Revenue_Categories"})
    console.log(EIBOFinance_INT055_Revenue_Categories[0]);

    var EIBOFinance_INT055_Revenue_CategoriesChip = d3.select('body')
        .select('#EIBOFinance_INT055_Revenue_Categories')
        .data(EIBOFinance_INT055_Revenue_Categories).enter()
        d3.select('#EIBOFinance_INT055_Revenue_Categories').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Finance_INT055_Spend_Categories //
    var EIBOFinance_INT055_Spend_Categories = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055_Spend_Categories"})
    console.log(EIBOFinance_INT055_Spend_Categories[0]);

    var EIBOFinance_INT055_Spend_CategoriesChip = d3.select('body')
        .select('#EIBOFinance_INT055_Spend_Categories')
        .data(EIBOFinance_INT055_Spend_Categories).enter()
        d3.select('#EIBOFinance_INT055_Spend_Categories').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Finance_INT055WD_Stud_AR_Detl_Code //
    var EIBOFinance_INT055WD_Stud_AR_Detl_Code = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_INT055WD_Stud_AR_Detl_Code"})
    console.log(EIBOFinance_INT055WD_Stud_AR_Detl_Code[0]);

    var EIBOFinance_INT055WD_Stud_AR_Detl_CodeChip = d3.select('body')
        .select('#EIBOFinance_INT055WD_Stud_AR_Detl_Code')
        .data(EIBOFinance_INT055WD_Stud_AR_Detl_Code).enter()
        d3.select('#EIBOFinance_INT055WD_Stud_AR_Detl_Code').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Finance_NT055_Spend_Categry_Hier //
    var EIBOFinance_NT055_Spend_Categry_Hier = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance_NT055_Spend_Categry_Hier"})
    console.log(EIBOFinance_NT055_Spend_Categry_Hier[0]);

    var EIBOFinance_NT055_Spend_Categry_HierChip = d3.select('body')
        .select('#EIBOFinance_NT055_Spend_Categry_Hier')
        .data(EIBOFinance_NT055_Spend_Categry_Hier).enter()
        d3.select('#EIBOFinance_NT055_Spend_Categry_Hier').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })      

    // EIB-O-Finance-Student_Suppliers //
    var EIBOFinanceStudent_Suppliers = data.filter(function(g){ return g.ProcessName === "EIB-O-Finance-Student_Suppliers"})
    console.log(EIBOFinanceStudent_Suppliers[0]);

    var EIBOFinanceStudent_SuppliersChip = d3.select('body')
        .select('#EIBOFinanceStudent_Suppliers')
        .data(EIBOFinanceStudent_Suppliers).enter()
        d3.select('#EIBOFinanceStudent_Suppliers').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-PartTimeFaculty-2TermsAhead //
    var EIBOPartTimeFaculty2TermsAhead = data.filter(function(g){ return g.ProcessName === "EIB-O-PartTimeFaculty-2TermsAhead"})
    console.log(EIBOPartTimeFaculty2TermsAhead[0]);

    var EIBOPartTimeFaculty2TermsAheadChip = d3.select('body')
        .select('#EIBOPartTimeFaculty2TermsAhead')
        .data(EIBOPartTimeFaculty2TermsAhead).enter()
        d3.select('#EIBOPartTimeFaculty2TermsAhead').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-PartTimeFaculty-3TermsAhead //
    var EIBOPartTimeFaculty3TermsAhead = data.filter(function(g){ return g.ProcessName === "EIB-O-PartTimeFaculty-3TermsAhead"})
    console.log(EIBOPartTimeFaculty3TermsAhead[0]);

    var EIBOPartTimeFaculty3TermsAheadChip = d3.select('body')
        .select('#EIBOPartTimeFaculty3TermsAhead')
        .data(EIBOPartTimeFaculty3TermsAhead).enter()
        d3.select('#EIBOPartTimeFaculty3TermsAhead').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-PartTimeFaculty-CurrentTerm //
    var EIBOPartTimeFacultyCurrentTerm  = data.filter(function(g){ return g.ProcessName === "EIB-O-PartTimeFaculty-CurrentTerm"})
    console.log(EIBOPartTimeFacultyCurrentTerm[0]);

    var EIBOPartTimeFacultyCurrentTermChip = d3.select('body')
        .select('#EIBOPartTimeFacultyCurrentTerm')
        .data(EIBOPartTimeFacultyCurrentTerm).enter()
        d3.select('#EIBOPartTimeFacultyCurrentTerm').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-PartTimeFaculty-NextTerm //
    var EIBOPartTimeFacultyNextTerm = data.filter(function(g){ return g.ProcessName === "EIB-O-PartTimeFaculty-NextTerm"})
    console.log(EIBOPartTimeFacultyNextTerm[0]);

    var EIBOPartTimeFacultyNextTermChip = d3.select('body')
        .select('#EIBOPartTimeFacultyNextTerm')
        .data(EIBOPartTimeFacultyNextTerm).enter()
        d3.select('#EIBOPartTimeFacultyNextTerm').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-PartTimeFaculty-PriorTerm //
    var EIBOPartTimeFacultyPriorTerm = data.filter(function(g){ return g.ProcessName === "EIB-O-PartTimeFaculty-PriorTerm"})
    console.log(EIBOPartTimeFacultyPriorTerm[0]);

    var EIBOPartTimeFacultyPriorTermChip = d3.select('body')
        .select('#EIBOPartTimeFacultyPriorTerm')
        .data(EIBOPartTimeFacultyPriorTerm).enter()
        d3.select('#EIBOPartTimeFacultyPriorTerm').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Period-Activity-Pay-Assignments //
    var EIBOPeriodActivityPayAssignments = data.filter(function(g){ return g.ProcessName === "EIB-O-Period-Activity-Pay-Assignments"})
    console.log(EIBOPeriodActivityPayAssignments[0]);

    var EIBOPeriodActivityPayAssignmentsChip = d3.select('body')
        .select('#EIBOPeriodActivityPayAssignments')
        .data(EIBOPeriodActivityPayAssignments).enter()
        d3.select('#EIBOPeriodActivityPayAssignments').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Period Activity Rates Assignments //
    var EIBOPeriodActivityRatesAssignments = data.filter(function(g){ return g.ProcessName === "EIB-O-Period Activity Rates Assignments"})
    console.log(EIBOPeriodActivityRatesAssignments[0]);

    var EIBOPeriodActivityRatesAssignmentsChip = d3.select('body')
        .select('#EIBOPeriodActivityRatesAssignments')
        .data(EIBOPeriodActivityRatesAssignments).enter()
        d3.select('#EIBOPeriodActivityRatesAssignments').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-Period Activity Tasks //
    var EIBOPeriodActivityTasks = data.filter(function(g){ return g.ProcessName === "EIB-O-Period Activity Tasks"})
    console.log(EIBOPeriodActivityTasks[0]);

    var EIBOPeriodActivityTasksChip = d3.select('body')
        .select('#EIBOPeriodActivityTasks')
        .data(EIBOPeriodActivityTasks).enter()
        d3.select('#EIBOPeriodActivityTasks').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB-O-UAW and Jazz Contractual Detail //
    var EIBOUAWandJazzContractualDetail = data.filter(function(g){ return g.ProcessName === "EIB-O-UAW and Jazz Contractual Detail"})
    console.log(EIBOUAWandJazzContractualDetail[0]);

    var EIBOUAWandJazzContractualDetailChip = d3.select('body')
        .select('#EIBOUAWandJazzContractualDetail')
        .data(EIBOUAWandJazzContractualDetail).enter()
        d3.select('#EIBOUAWandJazzContractualDetail').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB - Person Classification Report //
    var EIBPersonClassificationReport = data.filter(function(g){ return g.ProcessName === "EIB - Person Classification Report"})
    console.log(EIBPersonClassificationReport[0]);

    var EIBPersonClassificationReportChip = d3.select('body')
        .select('#EIBPersonClassificationReport')
        .data(EIBPersonClassificationReport).enter()
        d3.select('#EIBPersonClassificationReport').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // EIB - Person Classification Report - Future Hires //
    var EIBPersonClassificationReportFutureHires = data.filter(function(g){ return g.ProcessName === "EIB - Person Classification Report - Future Hires"})
    console.log(EIBPersonClassificationReportFutureHires[0]);

    var EIBPersonClassificationReportFutureHiresChip = d3.select('body')
        .select('#EIBPersonClassificationReportFutureHires')
        .data(EIBPersonClassificationReportFutureHires).enter()
        d3.select('#EIBPersonClassificationReportFutureHires').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // Import BAI2 Bank Statement Post-Processor //
    var ImportBAI2BankStatementPostProcessor = data.filter(function(g){ return g.ProcessName === "Import BAI2 Bank Statement Post-Processor"})
    console.log(ImportBAI2BankStatementPostProcessor[0]);

    var ImportBAI2BankStatementPostProcessorhip = d3.select('body')
        .select('#ImportBAI2BankStatementPostProcessor')
        .data(ImportBAI2BankStatementPostProcessor).enter()
        d3.select('#ImportBAI2BankStatementPostProcessor').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // Pay Input- EIB //
    var PayInputEIB = data.filter(function(g){ return g.ProcessName === "Pay Input- EIB"})
    console.log(PayInputEIB[0]);

    var PayInputEIBChip = d3.select('body')
        .select('#PayInputEIB')
        .data(PayInputEIB).enter()
        d3.select('#PayInputEIB').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // Print Service Retrieve Report And Generate PDF //
    var PrintServiceRetrieveReportAndGeneratePDF = data.filter(function(g){ return g.ProcessName === "Print Service Retrieve Report And Generate PDF"})
    console.log(PrintServiceRetrieveReportAndGeneratePDF[0]);

    var PrintServiceRetrieveReportAndGeneratePDFChip = d3.select('body')
        .select('#PrintServiceRetrieveReportAndGeneratePDF')
        .data(PrintServiceRetrieveReportAndGeneratePDF).enter()
        d3.select('#PrintServiceRetrieveReportAndGeneratePDF').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // Solution Publish //
    var SolutionPublish = data.filter(function(g){ return g.ProcessName === "Solution Publish"})
    console.log(SolutionPublish[0]);

    var SolutionPublishChip = d3.select('body')
        .select('#SolutionPublish')
        .data(SolutionPublish).enter()
        d3.select('#SolutionPublish').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // STD-I-Contingent-Worker-Update-IDs //
    var STDIContingentWorkerUpdateIDs = data.filter(function(g){ return g.ProcessName === "STD-I-Contingent-Worker-Update-IDs"})
    console.log(STDIContingentWorkerUpdateIDs[0]);

    var STDIContingentWorkerUpdateIDsChip = d3.select('body')
        .select('#STDIContingentWorkerUpdateIDs')
        .data(STDIContingentWorkerUpdateIDs).enter()
        d3.select('#STDIContingentWorkerUpdateIDs').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // STD-I-PreHire-Get-IDs //
    var STDIPreHireGetIDs = data.filter(function(g){ return g.ProcessName === "STD-I-PreHire-Get-IDs"})
    console.log(STDIPreHireGetIDs[0]);

    var STDIPreHireGetIDsChip = d3.select('body')
        .select('#STDIPreHireGetIDs')
        .data(STDIPreHireGetIDs).enter()
        d3.select('#STDIPreHireGetIDs').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // STD-I-PTF-Inactivate-PeriodActivityTasks//
    var STDIPTFInactivatePeriodActivityTasks = data.filter(function(g){ return g.ProcessName === "STD-I-PTF-Inactivate-PeriodActivityTasks"})
    console.log(STDIPTFInactivatePeriodActivityTasks[0]);

    var STDIPTFInactivatePeriodActivityTasksChip = d3.select('body')
        .select('#STDIPTFInactivatePeriodActivityTasks')
        .data(STDIPTFInactivatePeriodActivityTasks).enter()
        d3.select('#STDIPTFInactivatePeriodActivityTasks').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // STD-I-PTF-UpdateCreate-PeriodActivityTasks //
    var STDIPTFUpdateCreatePeriodActivityTasks = data.filter(function(g){ return g.ProcessName === "STD-I-PTF-UpdateCreate-PeriodActivityTasks"})
    console.log(STDIPTFUpdateCreatePeriodActivityTasks[0]);

    var STDIPTFUpdateCreatePeriodActivityTasksChip = d3.select('body')
        .select('#STDIPTFUpdateCreatePeriodActivityTasks')
        .data(STDIPTFUpdateCreatePeriodActivityTasks).enter()
        d3.select('#STDIPTFUpdateCreatePeriodActivityTasks').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // STD-I-Worker-Update-IDs //
    var STDIWorkerUpdateIDs = data.filter(function(g){ return g.ProcessName === "STD-I-Worker-Update-IDs"})
    console.log(STDIWorkerUpdateIDs[0]);

    var STDIWorkerUpdateIDsChip = d3.select('body')
        .select('#STDIWorkerUpdateIDs')
        .data(STDIWorkerUpdateIDs).enter()
        d3.select('#STDIWorkerUpdateIDs').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

    // Update Local Tax EIB //
    var UpdateLocalTaxEIB = data.filter(function(g){ return g.ProcessName === "Update Local Tax EIB"})
    console.log(UpdateLocalTaxEIB[0]);

    var UpdateLocalTaxEIBChip = d3.select('body')
        .select('#UpdateLocalTaxEIB')
        .data(UpdateLocalTaxEIB).enter()
        d3.select('#UpdateLocalTaxEIB').attr("class",function(g) { return g.Status; })
            .html(function (g) { return "<h1>"+g.ProcessName+"</h1>"+g.Status+": "+g.StartTime; })    

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
