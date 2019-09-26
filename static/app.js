var svg = d3.select("body").append("svg");

svg.attr("width", "100px").attr("height", "100px");

svg.append("circle")
    .attr("cx", 50)
    .attr("cy", 25)
    .attr("r", 25)
    .attr("stroke", "gray")
    .attr("stroke-width", "5")
    .attr("fill", "none");

// Part 2
// Binding the SVG to data

var svg = d3.select("body").append("svg");

svg.attr("width", "100px").attr("height", "100px");

var circles = svg.selectAll("circle");

var rValues = [40, 25, 10];

circles.data(rValues)
    .enter()
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", function(d) {
      return d;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "red");


// const API_KEY = "XoJttqfYgYCThtRu5HvFJxAKdblk6zlB9v83jLmF";

// var Plot_data= [];
// var years= [
//     [2000, 2000],
//     [2001, 2001],
//     [2002, 2002],
//     [2003, 2003],
//     [2004, 2004],
//     [2005, 2005],
//     [2006, 2006],
//     [2007, 2007],
//     [2008, 2008],
//     [2009, 2009],
//     [2010, 2010],
//     [2011, 2011],
//     [2012, 2012],
//     [2013, 2013],
//     [2014, 2014],
//     [2015, 2015],
//     [2016, 2016]];


// var asteroid_relative_velocity=[];
// var asteroid_mag=[];
// var year=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];
// for (var nasa_year = 2000 ; nasa_year <= 2016 ; nasa_year ++)
// {   
//     const NeoWs ="https://api.nasa.gov/neo/rest/v1/feed?start_date="+nasa_year+"-01-01&end_date="+nasa_year+"-01-08&api_key="+API_KEY
//     var magnitude=[];
    
//        d3.json(NeoWs, function(data) {
//         Asteriods = data.near_earth_objects;
//         var magnitude =[];
//         var diameter = [];
//         var name = [];
//         var relative_velocity = [];
//         var approach_date = [];
//         var orbiting_body = [];
//         for (key in Asteriods)
//         { 
            
//           for (var i=0 ; i< Asteriods[key].length ; i++)
//           {
//               magnitude = (Asteriods[key][i].absolute_magnitude_h);   
//               diameter = (Asteriods[key][i].estimated_diameter.feet.estimated_diameter_min);
//               name = (Asteriods[key][i].name);
//               relative_velocity = (Asteriods[key][i].close_approach_data[0].relative_velocity.miles_per_hour)/1000;
//               approach_date = (Asteriods[key][i].close_approach_data[0].close_approach_date);
//               orbiting_body.push(Asteriods[key][i].close_approach_data[0].orbiting_body);
//               asteroid_mag.push(magnitude);
//               asteroid_relative_velocity.push(relative_velocity);
//           }
//         }   
        
//       data_asteroid = {
//       "name" : name,
//       "sector" : diameter,
//       "years" : years,
//       "premium":asteroid_mag.splice(17,17),
//       "claims": asteroid_relative_velocity.splice(17,17)
//         }
//         Plot_data.push(data_asteroid);
//       })
// }


// var data = Plot_data;

var testdata = [{
      "name": "(2002 AA29)",
      "sector": "131.9896957704",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
        
      ],
      "premium": [
        [2000, 18000],
        [2001, 22600],
        [2002, 19001],
        [2003, 19150],
        [2004, 25000],
        [2005, 26100],
        [2006, 20700],
        [2007, 32500],
        [2008, 33750],
        [2009, 38650],
        [2010, 43500],
        [2011, 48000],
        [2012, 51600],
        [2013, 53000],
        [2014, 59500],
        [2015, 62600],
        [2016, 65000]
      ],
      "claims": [
        [2000, 6],
        [2001, 8],
        [2002, 9],
        [2003, 12],
        [2004, 15],
        [2005, 18],
        [2006, 11],
        [2007, 23],
        [2008, 22],
        [2009, 29],
        [2010, 32],
        [2011, 26],
        [2012, 34],
        [2013, 47],
        [2014, 69],
        [2015, 72],
        [2016, 81]
      ]
    }, {
      "name": "2017 VU13",
      "sector": "Commericial Insurance",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
      ],
      "premium": [
        [2000, 10200],
        [2001, 13600],
        [2002, 19150],
        [2003, 21550],
        [2004, 26100],
        [2005, 20700],
        [2006, 32500],
        [2007, 33750],
        [2008, 38650],
        [2009, 48500],
        [2010, 51000],
        [2011, 53600],
        [2012, 69000],
        [2013, 73500],
        [2014, 82600],
        [2015, 91000],
        [2016, 99500]
      ],
      "claims": [
        [2000, 2],
        [2001, 3],
        [2002, 3],
        [2003, 2],
        [2004, 4],
        [2005, 7],
        [2006, 11],
        [2007, 16],
        [2008, 12],
        [2009, 15],
        [2010, 23],
        [2011, 18],
        [2012, 26],
        [2013, 36],
        [2014, 47],
        [2015, 36],
        [2016, 56]
      ]
    },{
      "name": "2011 BM45",
      "sector": "Home Insurance",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
      ],
      "premium": [
        [2000, 13600],
        [2001, 19150],
        [2002, 21550],
        [2003, 26100],
        [2004, 20700],
        [2005, 32500],
        [2006, 33750],
        [2007, 38650],
        [2008, 48500],
        [2009, 51000],
        [2010, 53600],
        [2011, 69000],
        [2012, 73500],
        [2013, 82600],
        [2014, 91000],
        [2015, 95500],
        [2015, 99500]
      ],
      "claims": [
        [2000, 5],
        [2001, 8],
        [2002, 11],
        [2003, 16],
        [2004, 11],
        [2005, 17],
        [2006, 19],
        [2007, 27],
        [2008, 12],
        [2009, 39],
        [2010, 45],
        [2011, 51],
        [2012, 62],
        [2013, 47],
        [2014, 70],
        [2015, 69],
        [2016, 87]
      ]
    }
    ,{
      "name": "2002 AA29",
      "sector": "Industrial Insurance",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
      ],
      "premium": [
        [2000, 21550],
        [2001, 26100],
        [2002, 20700],
        [2003, 32500],
        [2004, 33750],
        [2005, 38650],
        [2006, 48500],
        [2007, 51000],
        [2008, 53600],
        [2009, 69000],
        [2010, 73500],
        [2011, 75946],
        [2012, 81000],
        [2013, 85492],
        [2014, 91654],
        [2015, 92640],
        [2016, 97846]
      ],
      "claims": [
        [2000, 4],
        [2001, 5],
        [2002, 8],
        [2003, 11],
        [2004, 16],
        [2005, 11],
        [2006, 17],
        [2007, 19],
        [2008, 27],
        [2009, 12],
        [2010, 39],
        [2011, 45],
        [2012, 51],
        [2013, 62],
        [2014, 47],
        [2015, 70],
        [2016, 69]
      ]
    }
    ,{
      "name": "2018 MY6",
      "sector": "Accident Insurance",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
      ],
      "premium": [
        [2000, 31550],
        [2001, 36100],
        [2002, 30700],
        [2003, 42500],
        [2004, 43750],
        [2005, 58650],
        [2006, 58500],
        [2007, 61000],
        [2008, 73600],
        [2009, 79000],
        [2010, 83500],
        [2011, 85946],
        [2012, 89000],
        [2013, 91492],
        [2014, 93654],
        [2015, 95640],
        [2016, 97106]
      ],
      "claims": [
        [2000, 6],
        [2001, 9],
        [2002, 11],
        [2003, 19],
        [2004, 21],
        [2005, 18],
        [2006, 19],
        [2007, 29],
        [2008, 32],
        [2009, 41],
        [2010, 46],
        [2011, 59],
        [2012, 63],
        [2013, 67],
        [2014, 75],
        [2015, 58],
        [2016, 67]
      ]
    },{
      "name": "2012 FL35",
      "sector": "Workmen Insurance",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
      ],
      "premium": [
        [2000, 24541],
        [2001, 31100],
        [2002, 32700],
        [2003, 43500],
        [2004, 44750],
        [2005, 65650],
        [2006, 56500],
        [2007, 71000],
        [2008, 63600],
        [2009, 69000],
        [2010, 73500],
        [2011, 75946],
        [2012, 79000],
        [2013, 81492],
        [2014, 83654],
        [2015, 85640],
        [2016, 91106]
      ],
      "claims": [
        [2000, 16],
        [2001, 21],
        [2002, 26],
        [2003, 36],
        [2004, 46],
        [2005, 57],
        [2006, 45],
        [2007, 37],
        [2008, 49],
        [2009, 36],
        [2010, 50],
        [2011, 59],
        [2012, 56],
        [2013, 57],
        [2014, 59],
        [2015, 67],
        [2016, 81]
      ]
    },{
      "name": "2017 AZ13",
      "sector": "Marine Insurance",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
      ],
      "premium": [
        [2000, 16541],
        [2001, 23100],
        [2002, 34700],
        [2003, 45500],
        [2004, 34750],
        [2005, 56650],
        [2006, 43500],
        [2007, 61000],
        [2008, 53600],
        [2009, 57000],
        [2010, 67500],
        [2011, 65946],
        [2012, 68900],
        [2013, 85492],
        [2014, 88654],
        [2015, 89640],
        [2016, 96106]
      ],
      "claims": [
        [2000, 6],
        [2001, 7],
        [2002, 11],
        [2003, 6],
        [2004, 19],
        [2005, 26],
        [2006, 35],
        [2007, 44],
        [2008, 54],
        [2009, 59],
        [2010, 56],
        [2011, 39],
        [2012, 63],
        [2013, 68],
        [2014, 71],
        [2015, 83],
        [2016, 88]
      ]
    },{
      "name": "2019 QW2",
      "sector": "Hull Insurance",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
      ],
      "premium": [
        [2000, 9500],
        [2001, 12200],
        [2002, 15600],
        [2003, 21150],
        [2004, 26550],
        [2005, 29100],
        [2006, 25700],
        [2007, 36500],
        [2008, 38750],
        [2009, 41650],
        [2010, 43500],
        [2011, 49000],
        [2012, 51600],
        [2013, 63000],
        [2014, 59500],
        [2015, 79600],
        [2016, 81000]
      ],
      "claims": [
        [2000, 7],
        [2001, 9],
        [2002, 10],
        [2003, 11],
        [2004, 14],
        [2005, 19],
        [2006, 12],
        [2007, 24],
        [2008, 23],
        [2009, 30],
        [2010, 33],
        [2011, 27],
        [2012, 35],
        [2013, 48],
        [2014, 70],
        [2015, 73],
        [2016, 82]
      ]
    },{
      "name": "2017 WL28 ",
      "sector": "Travel Insurance",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
      ],
      "premium": [
        
        [2000, 21550],
        [2001, 26100],
        [2002, 20700],
        [2003, 32500],
        [2004, 33750],
        [2005, 38650],
        [2006, 48500],
        [2007, 51000],
        [2008, 53600],
        [2009, 69000],
        [2010, 73500],
        [2011, 75600],
        [2012, 72600],
        [2013, 79260],
        [2014, 82600],
        [2015, 86500],
        [2016, 89000]
      ],
      "claims": [
        [2000, 8],
        [2001, 9],
        [2002, 11],
        [2003, 14],
        [2004, 17],
        [2005, 20],
        [2006, 13],
        [2007, 25],
        [2008, 24],
        [2009, 31],
        [2010, 34],
        [2011, 28],
        [2012, 36],
        [2013, 49],
        [2014, 71],
        [2015, 74],
        [2016, 89]
      ]
    },{
      "name": "2019 GS2",
      "sector": "Motor Insurance",
      "years": [
        [2000, 2000],
        [2001, 2001],
        [2002, 2002],
        [2003, 2003],
        [2004, 2004],
        [2005, 2005],
        [2006, 2006],
        [2007, 2007],
        [2008, 2008],
        [2009, 2009],
        [2010, 2010],
        [2011, 2011],
        [2012, 2012],
        [2013, 2013],
        [2014, 2014],
        [2015, 2015],
        [2016, 2016]
      ],
      "premium": [
        [2000, 11500],
        [2001, 8500],
        [2002, 10200],
        [2003, 13600],
        [2004, 19150],
        [2005, 21550],
        [2006, 26100],
        [2007, 20700],
        [2008, 32500],
        [2009, 33750],
        [2010, 38650],
        [2011, 48500],
        [2012, 51000],
        [2013, 53600],
        [2014, 69000],
        [2015, 73500],
        [2016, 82600]
      ],
      "claims": [
        [2000, 9],
        [2001, 11],
        [2002, 12],
        [2003, 15],
        [2004, 18],
        [2005, 21],
        [2006, 18],
        [2007, 26],
        [2008, 25],
        [2009, 34],
        [2010, 29],
        [2011, 27],
        [2012, 31],
        [2013, 37],
        [2014, 57],
        [2015, 82],
        [2016, 71]
      ]
    }
    ];
var data = testdata;

function x(d) {
      return d.years;
  }
  
  function y(d) {
       return d.claims;
  }
  
  function radius(d) {
    return d.premium;
  }
  
  function color(d) {
    return d.sector;
  }
  
  function key(d) {
    return d.name;
  }
  
  var currentCountry = "";
  
  // Chart dimensions.
  var margin = {
      top: 19.5,
      right: 19.5,
      bottom: 19.5,
      left: 39.5
    },
    width = 960 - margin.right,
    height = 500 - margin.top - margin.bottom,
    yearMargin = 10;
  
  // Various scales. These domains make assumptions of data, naturally.
  var xScale = d3.scale.linear().domain([1999, 2020]).range([0, width]),
    yScale = d3.scale.linear().domain([0, 100]).range([height, 0]),
    radiusScale = d3.scale.linear().domain([10000, 100000]).range([0, 50]),
    colorScale = d3.scale.category10();
  
  // The x & y axes.
  formatter = d3.format(".0%");
  var xAxis = d3.svg.axis().orient("bottom").scale(xScale),
    yAxis = d3.svg.axis().scale(yScale).orient("left");
  
  // Create the SVG container and set the origin.
  var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  // Add the x-axis.
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
  
  // Add the y-axis.
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
  
  // Add an x-axis label.
  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text("Years");
  
  // Add a y-axis label.
  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Distance From Earth");
  
  // Add the year label; the value is set on transition.
  var label = svg.append("text")
    .attr("class", "year label")
    .attr("text-anchor", "end")
    .attr("y", height - 24)
    .attr("x", width)
    .text(2000);
  
  var country = svg.append("text")
    .attr("class", "country")
    .attr("y", height - margin.bottom)
    .attr("x", margin.left)
    .text("");
  
  // Load the data.
  drawMotionChart(data);
  
  function drawMotionChart(nations) {
  
    var currentCountries = "";
  
    // A bisector since many nation's data is sparsely-defined.
    var bisect = d3.bisector(function(d) {
      return d[0];
    });
  
    // Add a dot per nation. Initialize the data at 1990, and set the colors.
    var tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .text("a simple tooltip");
  
    tooltip.text("my tooltip text");
  
    var dots = svg.append("g")
      .attr("class", "dots");
  
    var dot = dots.selectAll(".dot")
      .data(interpolateData(2016))
      .enter().append("circle")
      .attr("class", "dot")
      .style("fill", function(d) {
        return colorScale(color(d));
      })
      .on("mouseover", function(d) {
        tooltip.html("<strong>Asteroid:</strong> " + d.name + "<br><strong>Name:</strong>"+ d.premium);
        tooltip.attr('class', 'd3-tip');
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function(d) {
        tooltip.html("<strong>Asteroid:</strong> " + d.name + "<br><strong>Name:</strong>"+ d.premium);
        return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
      })
      .on("mouseout", function(d) {
        return tooltip.style("visibility", "hidden");
      })
      .call(position)
      .sort(order);
  
    // Add a title.
    dot.append("text")
      .text(function(d) {
        return d.name;
      });
  
    // Add an overlay for the year label.
    var box = label.node().getBBox();
  
    var overlay = svg.append("rect")
      .attr("class", "overlay")
      .attr("x", box.x)
      .attr("y", box.y)
      .attr("width", box.width)
      .attr("height", box.height)
      .on("mouseover", enableInteraction);
  
    // Start a transition that interpolates the data based on year.
    svg.transition()
      .duration(30000)
      .ease("linear")
      .tween("year", tweenYear)
      .each("end", enableInteraction);
  
    // Positions the dots based on data.
    function position(dot) {
      dot.attr("cx", function(d) {
          return xScale(x(d));
        })
        .attr("cy", function(d) {
          return yScale(y(d));
        })
        .attr("r", function(d) {
          return radiusScale(radius(d));
        });
    }
  
    // Defines a sort order so that the smallest dots are drawn on top.
    function order(a, b) {
      return radius(b) - radius(a);
    }
  
    // After the transition finishes, you can mouseover to change the year.
    function enableInteraction() {
      var yearScale = d3.scale.linear()
        .domain([2000, 2016])
        .range([box.x + 10, box.x + box.width - 10])
        .clamp(true);
  
      // Cancel the current transition, if any.
      svg.transition().duration(0);
  
      overlay.on("mouseover", mouseover)
        .on("mouseout", mouseout)
        .on("mousemove", mousemove)
        .on("touchmove", mousemove);
  
      function mouseover() {
        label.classed("active", true);
      }
  
      function mouseout() {
        label.classed("active", false);
      }
  
      function mousemove() {
        displayYear(yearScale.invert(d3.mouse(this)[0]));
      }
    }
  
    // Tweens the entire chart by first tweening the year, and then the data.
    // For the interpolated data, the dots and label are redrawn.
    function tweenYear() {
      var year = d3.interpolateNumber(2000, 2016);
      return function(t) {
        displayYear(year(t));
      };
    }
  
    // Updates the display to show the specified year.
    function displayYear(year) {
      dot.data(interpolateData(year), key).call(position).sort(order);
      label.text(Math.round(year));
    }
  
    // Interpolates the dataset for the given (fractional) year.
    function interpolateData(year) {
      return nations.map(function(d) {
        return {
          name: d.name,
          sector: d.sector,
          years: interpolateValues(d.years, year),
          premium: interpolateValues(d.premium, year),
          claims: interpolateValues(d.claims, year)
        };
      });
    }
  
    // Finds (and possibly interpolates) the value for the specified year.
    function interpolateValues(values, year) {
      var i = bisect.left(values, year, 0, values.length - 1),
        a = values[i];
      if (i > 0) {
        var b = values[i - 1],
          t = (year - a[0]) / (b[0] - a[0]);
        return a[1] * (1 - t) + b[1] * t;
      }
      return a[1];
    }
  }