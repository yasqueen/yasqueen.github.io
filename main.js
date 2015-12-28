var eight = {
  'top_bar': {
    // half size if true
    'half_size': false,
    // degrees element is rotated
    'rotation': 0
  },
  // Will default to full size
  // and rotation of 0
  'middle_bar': true,
  'bottom_bar': false,
  'top_left': 0,
  'top_right': 1,
  'bottom_left': {},
  'bottom_right': []
};

var counter = 0;

d3.select("#barchart").selectAll("div")
  .data(Object.keys(eight))
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", function(d) {
    counter += 1;
    return counter*5+"px";
  });
