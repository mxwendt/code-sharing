window.onload = function() {
  for (var i = 0; i < snippets.length; i++) {
    new Snippet().init(snippets[i]);
  }
};

function Snippet() {
  var snippet;
  var svg;
  var x;
  var y;
  var xAxis;
  var wrapper;
  var codeWrapper;
  var dataWrapper
  var stateWrapper;
  var code;

  return {
    init: init
  };

  function init(s) {
    snippet = s;

    createMarkup();
    addCode();
    addData();
    addState();
    // addListeners();
    visualize();
  }

  function visualize() {
    svg.attr('width', getW());

    x = d3.scale.ordinal().domain(d3.range(snippet.execution.length + 2)).rangePoints([0, getW()]);
    y = d3.scale.ordinal().domain(d3.range(getLineCount() + 1)).rangePoints([0, getH()]);

    // JOIN new data with old elements
    var dots = svg.selectAll('.dot')
        .data(snippet.execution);

    // EXIT old elements not present in new data
    dots.exit().remove();

    // UPDATE old elements present in new data
    dots.attr('cx', function(d, i) { return x(i + 1); })
        .attr('cy', function(d, i) { return y(d) + (getH() / getLineCount() / 2); });

    // ENTER new elements present in new data
    dots.enter().append('circle')
        .attr('class', function(d, i) { return 'dot' + ' ' + d; })
        .attr('cx', function(d, i) { return x(i + 1); })
        .attr('cy', function(d, i) { return y(d) + (getH() / getLineCount() / 2); })
        .attr('r', 3);

    var axis = d3.svg.axis()
      .scale(x)
      .orient('top');

    xAxis.call(axis);

    // TODO: Add lines between dots to make order more clear?
  }

  function getW() {
    return (snippet.execution.length + 2) * 10;
  }

  function getH() {
    return codeWrapper.clientHeight;
  }

  function getLineCount() {
    return codeWrapper.querySelector('ol.linenums').children.length;
  }

  function createMarkup() {
    wrapper = document.createElement('div');
    wrapper.classList.add('snippet');
    codeWrapper = document.createElement('div');
    codeWrapper.classList.add('code');
    dataWrapper = document.createElement('div');
    dataWrapper.classList.add('data');
    stateWrapper = document.createElement('div');
    stateWrapper.classList.add('state');

    var pre = document.createElement('pre');
    pre.classList.add('default', 'linenums', 'prettyprint');
    code = document.createElement('code');

    pre.appendChild(code);
    codeWrapper.appendChild(pre);
    wrapper.appendChild(codeWrapper);
    wrapper.appendChild(dataWrapper);
    wrapper.appendChild(stateWrapper);
    document.querySelector('.snippets').appendChild(wrapper);
  };

  function addCode() {
    code.textContent = js_beautify(snippet.code);
    prettyPrint();
  };

  function addData() {
    svg = d3.select(dataWrapper)
      .append('svg')
        .attr('width', 0)
        .attr('height', getH())
        .style('background-image', 'repeating-linear-gradient(180deg, #F8F8F8, #F8F8F8 ' +
          (getH() / getLineCount()) + 'px, #FFFFFF ' + (getH() / getLineCount()) + 'px, #FFFFFF ' + (getH() / getLineCount() * 2) + 'px)');

    xAxis = svg.append("g")
      .attr("class", "axis");
  }

  function addState() {
    // TODO: Visualize state and behavior
  }
};
