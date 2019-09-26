// Scales for semimajor axis, planet radius, and planet period.
var x = d3.scaleLinear().range([0, 400]),
    // r = d3.scaleLinear().domain([0, 4]).range([2, 10]).clamp(true),
    r = d3.scaleLinear().domain([0, 4]).range([2, 10]),
    t = d3.scaleLinear().range([0, 1]);

    // console.log("r1", r(1))
    // console.log("r2",r(15))
    // console.log("r2",r(1100))

var padding = 16;

// Detect the appropriate vendor prefix.
var prefix = "-webkit-transform" in document.body.style ? "-webkit-"
    : "-moz-transform" in document.body.style ? "-moz-"
    : "";

console.log('Current directory: ' + window.location.pathname)


var buttonName = d3.select('#filter-Name');
var buttonRadius = d3.select('#filter-Radius');
var buttonScrape = d3.select('#scrape-Nasa');

d3.select("#chartArea1").append("svg")

// console.log("File present ?? " , d3.csv("DataForD3.csv"))

d3.csv("DataForD3.csv")
.then(function( planets) {
    
// d3.csv("data.csv", type, function(error, planets) {
  var systems = d3.nest()
      .key(function(d) { return d.pl_hostname; })
      .entries(planets);

 console.log("planets = ", planets)
 console.log("systems = ", systems)

  systems.forEach(function(s) {
    
    s.values.forEach(function(p) { p.system = s; });
    
    s.radius = d3.max(s.values, function(p) { 
      // console.log("max", p.pl_orbsmax , "" , x(p.pl_orbsmax))
      // console.log("rad", p.pl_radj, "", r(p.pl_radj))
      return x(p.pl_orbsmax) + r(p.pl_radj); }) + padding;
    // console.log("radius = ", s.radius)
  });


  
  systems.sort(function(a, b) {
    return a.radius - b.radius;
  });

  renderSystems()

  // systems.sort(function(a, b) {
  //   return a.st_teff - b.st_teff;
  // });


  // systems.sort(function(a, b) {
  //   return a.key - b.key;
  // });

  function renderSystems(){

      console.log("Render")
        // d3.select("body").selectAll(".system").empty()
        var system = d3.select("body").selectAll(".system")
            .data(systems)
          .enter().append("div")
            .attr("class", "system")
            .style("width", function(d) { return d.radius * 2 + "px"; })
            .style("height", function(d) { return d.radius * 2 + "px"; });

        system.append("svg")
            .attr("class", "orbit")
            .attr("width", function(d) { return d.radius * 2; })
            .attr("height", function(d) { return d.radius * 2; })
          .append("g")
            .attr("transform", function(d) { return "translate(" + d.radius + "," + d.radius + ")"; })
          .selectAll("circle")
            .data(function(d) { return d.values; })
          .enter().append("circle")
            .attr("r", function(d) { return x(d.pl_orbsmax); });

            system.selectAll(".planet")
            .data(function(d) { return d.values; })
          .enter().append("svg")
            .attr("class", "planet")
            .attr("width", function(d) { return d.system.radius * 2; })
            .attr("height", function(d) { return d.system.radius * 2; })
            .style(prefix + "animation-duration", function(d) { return t(d.pl_orbper) + "s"; })
            .style(prefix + "transform-origin", function(d) { return d.system.radius + "px " + d.system.radius + "px"; })
          .append("circle")
            .attr("transform", function(d) { return "translate(" + d.system.radius + "," + d.system.radius + ")"; })
            .attr("cx", function(d) { return x(d.pl_orbsmax); })
            .attr("fill", function(d) { return getColor(d.st_teff); } )
            //.attr("opacity", "1.75")
            .attr("r", function(d) { 
              // console.log("Plane radius = ", r(d.pl_radj) )
              return r(d.pl_radj)   ; });



              var toolTip = d3.select("body").append("div")
              .attr("class", "tooltip");
            
              system.on("mouseover", function(d, i) {
                //console.log('TTip')
                toolTip.style("display", "block");
                toolTip.html(`<strong>${d.key} </strong> <hr> ${d.values.length} Planets <hr> Radius  ${Math.round(d.radius*100)/100} `)
                  .style("left", d3.event.pageX + "px")
                  .style("top", d3.event.pageY + "px");
              })
                // Step 3: Add an onmouseout event to make the tooltip invisible
                .on("mouseout", function() {
                  toolTip.style("display", "none");
                });

                

            }
  
  

            
   
  buttonName.on("click", function() {
    console.log("button click1")
    systems.sort(function(a, b) {
      return a.key - b.key;
    });
    renderSystems()
  })
          

  buttonRadius.on("click", function() {
    console.log("button click")
    systems.sort(function(a, b) {
      return a.radius - b.radius;
    });
    renderSystems()
  })
  
    });

    
// function type(d) {
//   d.pl_orbper = +d.pl_orbper;
//   d.pl_radj = +d.pl_radj;
//   d.pl_orbsmax = +d.pl_orbsmax;
//   d.stellar_radius = +d.stellar_radius;
//   d.st_teff = +d.st_teff
//   return d;
// }


function getColor(d) {
  return d > 7000 ? '#F30' :
  d > 6000  ? '#F60' :
  d > 5000  ? '#F90' :
  d > 4000  ? '#FC0' :
  d > 3000   ? '#FF0' :
            '#9F3';
}

