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
  var title;
  var codeWrapper;
  var dataWrapper
  var stateWrapper;
  var code;
  var highlightedLine;

  return {
    init: init
  };

  function init(s) {
    snippet = s;

    createMarkup();
    addCode();
    addData();
    addState();
    addTimeSlider();
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
        .attr('cy', function(d, i) { return y(d.line) + (getH() / getLineCount() / 2); });

    // ENTER new elements present in new data
    dots.enter().append('circle')
        .attr('class', function(d, i) { return 'dot' + ' ' + d; })
        .attr('cx', function(d, i) { return x(i + 1); })
        .attr('cy', function(d, i) { return y(d.line) + (getH() / getLineCount() / 2); })
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

  function highlightLine(num) {
    if (highlightedLine !== undefined) highlightedLine.classList.remove('is-highlighted');
    highlightedLine = codeWrapper.querySelector('ol.linenums').children[snippet.execution[num].line];
    highlightedLine.classList.add('is-highlighted');
  }

  function updateState(num) {
    var values = stateWrapper.querySelectorAll('.stateVal');

    for (var i = 0; i < values.length; i++) {
      values[i].textContent = "";
    }

    var state;

    for (var j = 0; j <= num; j++) {
      if (snippet.execution[j].name) {
        state = stateWrapper.querySelector('.' + snippet.execution[j].name);
        state.nextSibling.textContent = snippet.execution[j].val;
      }
    }
  }

  function createMarkup() {
    wrapper = document.createElement('div');
    wrapper.classList.add('snippet');
    title = document.createElement('h2');
    title.textContent = snippet.title;
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
    wrapper.appendChild(title);
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
    var values = document.createElement('ol');
    var widestItem = 0;

    for (var i = 0; i < snippet.state.length; i++) {
      console.log(snippet.state[i]);
      var item = document.createElement('li');

      var name = document.createElement('span');
      name.textContent = snippet.state[i].name;
      name.classList.add(snippet.state[i].type === "param" ? "com" : "kwd");
      name.classList.add(snippet.state[i].name);
      item.appendChild(name);

      var value = document.createElement('span');
      value.classList.add('stateVal');
      item.appendChild(value);

      values.appendChild(item);
    }

    stateWrapper.appendChild(values);
  }

  function addTimeSlider() {
    var slider = document.createElement('input');
    slider.type = "range";
    slider.min = 0;
    slider.max = snippet.execution.length - 1;
    slider.value = 0;
    slider.classList.add('timeSlider');
    slider.style.width = getW() - 6 + 'px';

    slider.addEventListener('input', function(e) {
      highlightLine(e.target.value);
      updateState(e.target.value);
    });

    dataWrapper.appendChild(slider);
    highlightLine(0);
    updateState(0);
  }
};
