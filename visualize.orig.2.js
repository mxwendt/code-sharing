window.onload = function() {
  for (var i = 0; i < snippets.length; i++) {
    visualize(snippets[i]);
  }
};

function visualize(snippet) {
  var execution = snippet.execution;
  var code = snippet.code;

  var snippetContainerElem = document.createElement('div');
  snippetContainerElem.classList.add('snippet');

  var codeContainerElem = document.createElement('div');
  codeContainerElem.classList.add('code');

  var dataContainerElem = document.createElement('div');
  dataContainerElem.classList.add('data');

  var codeElem = document.createElement('code');
  codeElem.textContent = js_beautify(code);

  var preElem = document.createElement('pre');
  preElem.classList.add('default', 'linenums', 'prettyprint');

  preElem.appendChild(codeElem);
  codeContainerElem.appendChild(preElem);
  snippetContainerElem.appendChild(codeContainerElem);
  snippetContainerElem.appendChild(dataContainerElem);
  document.querySelector('.snippets').appendChild(snippetContainerElem);

  prettyPrint();

  var w = (execution.length + 2) * 20;
  var h = codeContainerElem.clientHeight;
  var lineCount = codeContainerElem.querySelector('ol.linenums').children.length;

  var svg = d3.select(dataContainerElem)
    .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('background-image', 'repeating-linear-gradient(180deg, #F8F8F8, #F8F8F8 ' +
        (h / lineCount) + 'px, #FFFFFF ' + (h / lineCount) + 'px, #FFFFFF ' + (h / lineCount * 2) + 'px)');

  var x = d3.scale.ordinal().domain(d3.range(execution.length + 2)).rangePoints([0, w]);
  var y = d3.scale.ordinal().domain(d3.range(lineCount + 1)).rangePoints([0, h]);

  var axis = d3.svg.axis()
    .scale(x)
    .orient('top')
    .ticks(2);

  var xAxis = svg.append("g")
    .attr("class", "axis")
    .call(axis);

  var dots = svg.selectAll('.val')
      .data(execution)
    .enter().append('text')
      .attr('class', 'val')
      .attr('x', function(d, i) { return x(i + 1); })
      // .attr('y', 10)
      .attr('text-anchor', 'middle')
      .attr('y', function(d, i) { return y(d.line + 1) - 5; })
      .text(function(d) { return d.val; });

  // TODO: Add lines between dots to make order more clear?
}
