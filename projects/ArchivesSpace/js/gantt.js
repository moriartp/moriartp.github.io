    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function toMilliseconds(minutes) {
        return minutes * 60 * 1000;
      }

    function daysToMilliseconds(days) {
        return days * 24 * 60 * 60 * 1000;
      }
    var startDate = new Date(2018, 11, 1)

    function drawChart() {

      var otherData = new google.visualization.DataTable();
      otherData.addColumn('string', 'Task ID');
      otherData.addColumn('string', 'Task Name');
      otherData.addColumn('string', 'Resource');
      otherData.addColumn('date', 'Start');
      otherData.addColumn('date', 'End');
      otherData.addColumn('number', 'Duration');
      otherData.addColumn('number', 'Percent Complete');
      otherData.addColumn('string', 'Dependencies');

      otherData.addRows([
        ['A01', 'Define Catalog Data Requirements', 'EAD Migration', startDate, null, daysToMilliseconds(7), 0, null],
        ['A02', 'Generate Catalog of EAD Files', 'EAD Migration', null, null, daysToMilliseconds(1.4), 0, 'A01'],
        ['A03', 'ID Issues, Clean up data', 'EAD Migration', null, null, daysToMilliseconds(7), 0, 'A02'],
        ['A04', 'Map Data Elements', 'EAD Migration', null, null, daysToMilliseconds(21), 0, 'A02'],
        ['A05', 'Design Migration/Crosswalk Application', 'EAD Migration', null, null, daysToMilliseconds(14), 0, 'A04'],
        ['A06', 'Develop Migration Application', 'EAD Migration', null, null, daysToMilliseconds(14), 0, 'A05'],
        ['A07', 'Run the import/migration app in TEST/DEV', 'EAD Migration', null, null, daysToMilliseconds(1.4), 0, 'A06'],
        ['A08', 'Define QC Reports Requirements', 'EAD Migration', null, null, daysToMilliseconds(7), 0, 'A07'],
        ['A09', 'Design QC Reports', 'EAD Migration', null, null, daysToMilliseconds(1.4), 0, 'A08'],
        ['A10', 'Create QC Reports', 'EAD Migration', null, null, daysToMilliseconds(7), 0, 'A09'],
        ['A11', 'Assess test migration/Log Issues', 'EAD Migration', null, null, daysToMilliseconds(52), 0, 'A06'],        
        ['A12', 'Refine/Interate Import application', 'EAD Migration', null, null, daysToMilliseconds(52), 0, 'A06'], 
        ['A13', 'Deploy Migration to Prod', 'EAD Migration', null, null, daysToMilliseconds(1.4), 0, 'A12'], 
        ['A14', 'Accept Migrated EADs', 'EAD Migration', null, null, daysToMilliseconds(1.4), 0, 'A13'], 
        
        ['B01', 'Install/Configure Plugin on DEV', 'Processing Workflow Enhancement', new Date(2018, 11, 16), null, daysToMilliseconds(7), 100, null], 
        ['B02', 'Create Plugin Testing Plan', 'Processing Workflow Enhancement', null, null, daysToMilliseconds(14), 0, 'B01'], 
        ['B03', 'Assess Plugin Effectiveness', 'Processing Workflow Enhancement', null, null, daysToMilliseconds(28), 0, 'B02'], 
        ['B04', 'Create Use Guidelines', 'Processing Workflow Enhancement', null, null, daysToMilliseconds(21), 0, 'B02'], 
        ['B05', 'Host Training Session', 'Processing Workflow Enhancement', null, null, daysToMilliseconds(14), 0, 'B04'], 
        ['B06', 'roduction Installation/Configuration', 'Processing Workflow Enhancement', null, null, daysToMilliseconds(7), 0, 'B05'], 

        ['C01', 'Define Data and Functional Requirements', 'Integrated Finding Aid Publication', new Date(2018, 11, 25), null, daysToMilliseconds(7), 0, null], 
        ['CX2', 'Determine Solution Strategy', 'Integrated Finding Aid Publication', null, null, daysToMilliseconds(14), 0, 'C01'], 
        ['C02', 'Design the integration tool', 'Integrated Finding Aid Publication', null, null, daysToMilliseconds(14), 0, 'CX2'], 
        ['C03', 'Develop Initial Ingetration Tool/Solution', 'Integrated Finding Aid Publication', null, null, daysToMilliseconds(14), 0, 'C02'], 
        ['C04', 'Test the Integration tool', 'Integrated Finding Aid Publication', null, null, daysToMilliseconds(21), 0, 'C03'], 
        ['C05', 'Refine Solution Build', 'Integrated Finding Aid Publication', null, null, daysToMilliseconds(21), 0, 'C03'], 
        ['C06', 'Deploy the Integration solution to production', 'Integrated Finding Aid Publication', null, null, daysToMilliseconds(7), 0, 'C05'], 

        ['D01', 'Identify Report Specifications', 'Operational Reporting', new Date(2019, 1, 2), null, daysToMilliseconds(14), 0, null], 
        ['D02', 'Design ArchivesSpace Reports', 'Operational Reporting', null, null, daysToMilliseconds(21), 0, 'D01'], 
        ['D03', 'Develop/Configure initial reports in DEV', 'Operational Reporting', null, null, daysToMilliseconds(14), 0, 'D02'], 
        ['D04', 'Assess testing reports DEV', 'Operational Reporting', null, null, daysToMilliseconds(21), 0, 'D03'], 
        ['D05', 'Refine/Iterate report configurations', 'Operational Reporting', null, null, daysToMilliseconds(21), 0, 'D03'], 
        ['D06', 'Configure validated reports in PROD', 'Operational Reporting', null, null, daysToMilliseconds(7), 0, 'D05'], 

        ['E01', 'Define Audit/File Target Parameters', 'Static File Finding Aid Audit', new Date(2018, 11, 12), null, daysToMilliseconds(7), 0, null], 
        ['E02', 'Audit/Gather Legacy File information', 'Static File Finding Aid Audit', null, null, daysToMilliseconds(7), 0, 'E01'], 
        ['E03', 'Analyze Gathered Information', 'Static File Finding Aid Audit', null, null, daysToMilliseconds(14), 0, 'E02'], 
        ['E04', 'Conduct Impact Analysis (Redirects)', 'Static File Finding Aid Audit', null, null, daysToMilliseconds(14), 0, 'E02'], 
        ['E05', 'Determine solution recommendation', 'Static File Finding Aid Audit', null, null, daysToMilliseconds(7), 0, 'E04'], 
        ['E06', 'Define technical needs for new storage solutions', 'Static File Finding Aid Audit', null, null, daysToMilliseconds(14), 0, 'E05'], 
        ['E07', 'Design storgage solution', 'Static File Finding Aid Audit', null, null, daysToMilliseconds(14), 0, 'E06'], 
        ['E08', 'Configure storage solutions', 'Static File Finding Aid Audit', null, null, daysToMilliseconds(7), 0, 'E07'], 
        ['E09', 'Migrate Files', 'Static File Finding Aid Audit', null, null, daysToMilliseconds(7), 0, 'E08'], 
        ['E10', 'Apply Post-Migration Configurations', 'Static File Finding Aid Audit', null, null, daysToMilliseconds(7), 0, 'E09'], 
      ]);

        var options = {
          height: 1900,
          gantt: {
          	defaultStartDateMillis: new Date(2018, 11, 1),
            criticalPathEnabled: true,
            criticalPathStyle: {
              stroke: '#bada55',
              strokeWidth: 3
            }
          }
        };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));
      chart.draw(otherData, options);
    }



