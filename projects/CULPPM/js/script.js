var $url = "https://spreadsheets.google.com/feeds/list/1eewMgqHDN-fIrjZrYBuRaWztac2_Wvv4XZLnlkUpP5M/1/public/basic?alt=json"
$.getJSON($url,function(blob1){
console.log("hello");
// console.log(blob1.feed.entry);


var str = JSON.stringify(blob1.feed.entry);
// console.log(str);
 str = str.replace(/\"\$t\":\"sponsor: /g,"\"sponsor\":\"");
 str = str.replace(/, businessowner: /g,"\", \"businessowner\":\"");
 str = str.replace(/, projectname: /g,"\", \"projectname\":\"");
 str = str.replace(/, description: /g,"\", \"description\":\"");
 str = str.replace(/, link: /g,"\", \"link\":\"");
 str = str.replace(/, type: /g,"\", \"type\":\"");
 str = str.replace(/, state: /g,"\", \"state\":\"");
 str = str.replace(/, manager: /g,"\", \"manager\":\"");

 str = str.replace(/, start: /g,"\", \"start\":\"");
 str = str.replace(/, plannedend: /g,"\", \"plannedend\":\""); 
 str = str.replace(/, deadline: /g,"\", \"deadline\":\"");

 str = str.replace(/, progress: /g,"\", \"progress\":\"");
 str = str.replace(/, state: /g,"\", \"state\":\"");
 str = str.replace(/, alignment: /g,"\", \"alignment\":\"");
 str = str.replace(/, value: /g,"\", \"value\":\"");
 str = str.replace(/, complexity: /g,"\", \"complexity\":\""); 
 str = str.replace(/, budgetestimate: /g,"\", \"budgetestimate\":\"");
 str = str.replace(/, actualcost: /g,"\", \"actualcost\":\""); 
 str = str.replace(/, fteestimate: /g,"\", \"fteestimate\":\"");
 str = str.replace(/, fteactual: /g,"\", \"fteactrual\":\"");
 str = str.replace(/, additionalinfo: /g,"\", \"additionalinfo\":\""); 

 // console.log(str);
 ppm = $.parseJSON(str);
 // console.log(str);

var parseDate = d3three.time.format("%d-%b-%y").parse;

    var types_of_statuses = ["Completed","Remaining"];
    var statuses_color = ["#45BCFC","#9bddff"];

    ppm.forEach(function(d) {
        d.content.deadline = parseDate(d.content.deadline);

    });
    console.log(ppm);     

   var svg = d3.select('#container').append("svg")
        .attr("width", "500px")
        .attr("height", "500px")
        .attr("id","mySVG");

    svg.selectAl('div')
    .data(ppm)
    .enter().append('div')


});