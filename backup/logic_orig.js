// Scales for semimajor axis, planet radius, and planet period.
var x = d3.scale.linear().range([0, 400]),
    r = d3.scale.linear().domain([4, 40]).range([4 * .5, 40 * .5]).clamp(true),
    t = d3.scale.linear().range([0, 1]);

var padding = 16;

// Detect the appropriate vendor prefix.
var prefix = "-webkit-transform" in document.body.style ? "-webkit-"
    : "-moz-transform" in document.body.style ? "-moz-"
    : "";

d3.csv("planets.csv", type, function(error, planets) {
  var systems = d3.nest()
      .key(function(d) { return d.id; })
      .entries(planets);

console.log("planets = ", planets)
console.log("systems = ", systems)

  systems.forEach(function(s) {
    s.values.forEach(function(p) { p.system = s; });
    s.radius = d3.max(s.values, function(p) { return x(p.semimajor_axis) + r(p.planet_radius); }) + padding;
  });


  
  systems.sort(function(a, b) {
    return a.radius - b.radius;
  });

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
      .attr("r", function(d) { return x(d.semimajor_axis); });

  system.selectAll(".planet")
      .data(function(d) { return d.values; })
    .enter().append("svg")
      .attr("class", "planet")
      .attr("width", function(d) { return d.system.radius * 2; })
      .attr("height", function(d) { return d.system.radius * 2; })
      .style(prefix + "animation-duration", function(d) { return t(d.period) + "s"; })
      .style(prefix + "transform-origin", function(d) { return d.system.radius + "px " + d.system.radius + "px"; })
    .append("circle")
      .attr("transform", function(d) { return "translate(" + d.system.radius + "," + d.system.radius + ")"; })
      .attr("cx", function(d) { return x(d.semimajor_axis); })
      .attr("r", function(d) { return r(d.planet_radius); });
});

function type(d) {
  d.period = +d.period;
  d.planet_radius = +d.planet_radius;
  d.semimajor_axis = +d.semimajor_axis;
  d.stellar_radius = +d.stellar_radius;
  return d;
}

