  var resp = {
    "name": "Top Level",
    "children": [
      { 
        "name": "I. EAD Migration",
        "children": [
          { "name": "I. EAD File Audit", "children": [
            { "name": "File Data Requirements" },
            { "name": "EAD Catalog" }            
          ] },
          { "name": "Migration QC Reports",
          "children":[
            { "name": "QC Report Requirements" },
            { "name": "QC Report Design" },            
            { "name": "QC Report" }            
          ] },
          { "name": "Defined Migration Tool",
          "children":[
            { "name": "Mapping Document" },
            { "name": "Technical Process Design" },            
            { "name": "Initial Migration Tool" },            
            { "name": "Migration Issues Log" },            
            { "name": "Validated Migration Tool" }                        
          ] },
          { "name": "~130 Migrated EADs",
          "children": [
            { "name": "Production Migration" },
            { "name": "Closed Procurement" }            
          ] }          
        ]
      },
      { 
        "name": "II. Improved Processing Workflow",
        "children": [
          { "name": "Plugin Configuration",
          "children":[
            { "name": "Testing Plan" },
            { "name": "Dev Instance Configuration" },            
            { "name": "Plugin Assessment" },            
            { "name": "Production Configuration" }                                  
          ] },
          { "name": "Workflow Training",
          "children":[
            { "name": "Use Guidelines Documentation" },
            { "name": "Archivist Training Session" }                                
          ] },
        ]
      },
      { 
        "name": "III. Integration (Fin Aid)",
        "children": [
          { "name": "Solution Design",
          "children":[
            { "name": "Data Requirements" },
            { "name": "Technical Strategy" },            
            { "name": "Functional Design" },            
            { "name": "Initial Integration Solution" },            
            { "name": "Buglist/Issues Log" },                        
            { "name": "Validated Solution" }                                  
          ] },
          { "name": "Live Integration",
          "children":[
            { "name": "Deployed Solution" }                                
          ] },
        ]
      },

     { 
        "name": "IV. Operational Reports",
        "children": [
          { "name": "Operational Reporting",
          "children":[
            { "name": "Report Specifcations" },
            { "name": "Technical Design" }, 
            { "name": "Initial Test Reports" },            
            { "name": "Report Issues Log" },            
            { "name": "Report Config Validation" },                        
            { "name": "Production Configuration" }                                  
          ] },
        ]
      },
      { 
        "name": "V. Static File Fin Aid Audit",
        "children": [
          { "name": "File Needs Report",
          "children":[
            { "name": "Extract Parameters" },
            { "name": "File Info Extract" }, 
            { "name": "Extract Analysis" },            
            { "name": "Impact Analysis" },            
            { "name": "Recommendation Proposal" }                                  
          ] },

          { "name": "Storage Solution(s)",
          "children":[
            { "name": "Storage Specifcations" },
            { "name": "Storage Solution Strategy" }, 
            { "name": "Storage Configuration" },            
            { "name": "File Management (move)" },            
            { "name": "Applied Redirects" }                                  
          ] },

        ]
      },
      // { 
      //   "name": "VI. Information Security",
      //   "children": [
      //     { "name": "Vulnerability Analysis" },
      //     { "name": "Needs Reprot" }
      //   ]
      // }
    ]
  };

var treeData;

// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 390},
    width = 960 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;
 var i = 0,
    duration = 750,
    rectH=30,
    rectW=30,
    root;


var svg = d3.select("#wbs").append("svg")
    .attr("width","100%")
    .attr("height", "800")
    .call(d3.zoom()
    .scaleExtent([1 / 2, 8])
    .on("zoom", zoomed))
  .append("g")
    .attr("transform", "translate("
          + (margin.right) + "," + margin.top + ")");
function zoomed() {
  svg.attr("transform", d3.event.transform);
}


function collapse(d) {
  if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}

  
// declares a tree layout and assigns the size
var treemap = d3.tree().nodeSize([170, 170]);
treeData = resp;
// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
  
//form x and y axis
root.x0 = width/2;
root.y0 = height/2;


// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all it's children
  
  
  function getText(node) {
        var textsize = 12;
        var maxChar = (rectW / textsize);

        var text = node.name;

        if (node.node_id == "dummy_node") {
            return "";
        } else {
            return text;
        }



    }
function wrap(text, width) {
        text.each(function () {
            var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = 1.1, // ems
                    x = text.attr("x"),
                    y = text.attr("y"),
                    dy = 0, //parseFloat(text.attr("dy")),
                    tspan = text.text(null)
                            .append("tspan")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("dy", ++lineNumber * lineHeight + dy + "em")
                            .text(word);
                }
            }
        });
    }
  

function update(source) {

  // Assigns the x and y position for the nodes
  var treeData = treemap(root);

  // Compute the new tree layout.
  var rootNode = treeData.descendants()[0];
  var nodes = treeData.descendants().slice(1),
      links = treeData.descendants().slice(rootNode.children.length+1);

  // Normalize for fixed-depth.
  nodes.forEach(function(d){ 
    console.log(d);
    //if(d.depth == 1){
        d.y = d.depth * 180;  
    //}else{
    //  d.y = d.depth * 40;
    //}
    
  });

  // ****************** Nodes section ***************************

  // Update the nodes...
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {console.log(d);return d.id || (d.id = ++i); });

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function(d) {
        return "translate(" + source.x + "," + source.y + ")";
    })
    .on('click', click);

  // Add Rectangle for the nodes
  nodeEnter.append("rect")
                            .attr('x',-70)
                            .attr('y',-120)
                .attr("width", 100)
                .attr("height", 100)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .style("fill", function(d) {
          return d._children ? "#45BCFC" : "#fff";
      });

  // Add labels for the nodes
  
  nodeEnter.append("text").attr("x", 0).attr("y", -40).attr("width",150 + 20)
                .attr("dy", ".35em").attr("text-anchor", "middle").text(function(d) { return d.data.name; }).call(wrap, 80);
  /*nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; });
*/
  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function(d) { 
        return "translate(" + d.x + "," + d.y + ")";
     });

  // Update the node attributes and style
  nodeUpdate.select("rect").attr("width", 150).attr("height", 150)
                .attr("stroke", "black")
                .attr("stroke-width",1)
                .style("fill", function(d) {
        return d._children ? "#45BCFC" : "#fff";
    })
    .attr('cursor', 'pointer');
 
    nodeUpdate.select("text").style("fill-opacity", 1);


  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
          return "translate(" + source.x + "," + source.y + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  
    nodeExit.select("rect")
                .attr('x',-70)
                            .attr('y',-70)
                .attr("width", 150).attr("height", 150)
                .attr("stroke", "black")
                .attr("stroke-width", 1);
 

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function(d) {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      .remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x * 2;
    d.y0 = d.y * 2;
  });
}

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

    path = `M ${s.x} ${s.y}
            C ${(s.x + d.x)/2} ${s.y},
              ${(s.x + d.x) / 2} ${d.y},
              ${d.x} ${d.y}`

    return path
  }

  // Toggle children on click.
  function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    update(d);
  }