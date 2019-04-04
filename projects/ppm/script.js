var URL = "https://app.celoxis.com/psa/api/v2/projects";
var projects;
var token = "xxx" // <==== Insert auth token here

$.ajax({
	url: URL,
	method: "GET",
	headers: {
		"Authorization":
		"Bearer " + token,
	},
}).then(function(response) {
	projects = response;
	console.log(projects.data);

	var list = d3.select("body")
	d3.select("body").selectAll("div").data(projects.data).enter().append("div").html(function (d) { return "______________________________________________________________________________"+
		"<h3>"+d.name+"</h3>"+
		"<h5>deadline: "+d.deadline+"</h5>"+
		"<h5>planned finish: "+d.plannedFinish+"</h5>"+
		"<h5>state: "+d.state+"</h5>"+ 
		"<h5>type: "+d.type +"</h5>"+
		"<h5>%complete: "+d.actualPercentComplete+"%</h5>"+	
		"<h5>sched health: "+d.scheduleHealth+"</h5>"+ 
		"<h5>budget: "+d.budgetHealth+"</h5>"+
		"<h5>risk: "+d.risk+"</h5>"+
		"<h5>team: "+d.team+"</h5>"+ 
		"<p>"+d.description +"</p>" 
	})

	// list.selectAll("li").data(projects).enter().append("li").html(" hello, world")


}).catch(function(err) {
	console.error(err);
});