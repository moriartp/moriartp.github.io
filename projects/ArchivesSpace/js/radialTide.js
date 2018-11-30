
var height = window.innerHeight*0.95;
var width = window.innerWidth;
  
    
var svg = d3four.select("#req").append("svg")
     .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + 0 + "," + 0 + ")");
    
var circle_size = 6;
    
var colour_scale = d3four.scaleOrdinal(d3four.schemeCategory10);

function flatten(root) {
    var nodes = [],
        i = 0; 

    function recurse(node) {
        if (node.children) node.children.forEach(recurse);
        if (!node.id) node.id = ++i;
        nodes.push(node);
    }

    recurse(root);
    return nodes; 
}
    
function add_label_leaves(csv_data, root) {

  function recurse(tree) {
    if (!(tree.children))  {
      //add to csv data with correct parent id and uniform size. 

      new_record = {}
      new_record["name"] = tree.data.name + "_label"
      new_record["parent"] = tree.data.id 
      new_record["id"] =  tree.data.id + "_label"
      new_record["data"] = 20
      new_record["text"] = tree.data.text
      new_record["priority"] = tree.data.priority


      csv_data.push(new_record)
    } else {
      _.each(tree.children, function(this_tree) {

        recurse(this_tree)
      })
    }
  }
  
  recurse(root) 
  
  
}
    
d3four.csv("data/req.csv", function(csv_data) {

 
    var root_fn = d3four.stratify()
        .id(function(d) {
            return d.id;
        })
        .parentId(function(d) {
            return d.parent;
        })

        
    
    var root = root_fn(csv_data);
  
    //Recurse into root's children, and when we find 
    
  

    var links = root.links()
    var nodes = flatten(root)
  
    add_label_leaves(csv_data, root)
    
    var root = root_fn(csv_data)
     var links = root.links()
    var nodes = flatten(root)
    

    var simulation = d3four.forceSimulation(nodes)
        .force("link",
            d3four.forceLink(links)
            .distance(function(d) {
                //We want the distance to be equal so they are spaced in a circle around the parent
                return Math.pow(d.source.data.priority*200, 0.5)  * circle_size*1.5;
            })
            .strength(function(d) {
                //Strength just needs to be enough so that length is uniform
                return 0.1
            })
        )
        .force("charge", d3four.forceManyBody()
                                .strength(function(d) {

                                    var force = -Math.pow(d.data.data,0.5)*circle_size;

console.log(d)                                    
console.log(d.priority)
console.log(circle_size)
             
                                    return force})
                                .distanceMin(0)
                                .distanceMax(200)
                )
        .force("center", d3four.forceCenter(width / 2, height / 2))
        .force("collide", d3four.forceCollide(function(d) {return Math.pow(d.data.priority*200,0.5)}))
        .velocityDecay(0.05)
        .alphaMin(0.0001)
        .alphaDecay(0.01) 

    .on("tick", ticked)

    function ticked() {

        var selection = svg.selectAll(".my_links")
            .data(links)

        selection.enter()
            .append("line")
            .attr("class", "my_links")
            .merge(selection)
            .attr("x1", function(d) {
                return d.source.x;
            })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            })
            .attr("stroke-width", function(d) {
              if (d.target.children) {
                return 1
                } else {
                  return 0
                }
           
        })

        selection.exit().remove();

        // Update the nodes…
        selection = svg.selectAll(".my_nodes")
            .data(nodes, function(d) {
                return d.id;
            })

        //Entering
        enterSelection = selection
            .enter()
            .append("g")
            .attr("class", "my_nodes")
            

    
        circles = enterSelection.append("circle").attr("class", "req-circ")
        
        rectangles = enterSelection.append("text")
   
      .text(function(d) { return d.data.text; })
  
      .style("font-size", function(d) { 
          var r = Math.pow(d.data.data, 0.5)*circle_size
          return Math.min(2 * r, (2 * r - 8) / this.getComputedTextLength() * 24) + "px"; })
      .attr("dy", ".35em")
      .style("fill", function(d) {
          if (d.children) {
                return "white"
                } else {
                  return "black"
                }
        })
    
       
        //Update
       enterSelection.merge(selection)
          .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")" });
       
      enterSelection.merge(selection).select("circle")
             .attr("r", function(d) {
             return Math.pow(d.data.data, 0.5)*circle_size;
           })
      .attr("fill", function(d,i) {
        
          if (d.children) {
                return colour_scale(i)
                } else {
                  return "white"
                }
      })
   
       
   
    }
  
  

});