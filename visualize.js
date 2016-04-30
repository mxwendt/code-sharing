window.onload = function() {
  for (var i = 0; i < snippets.length; i++) {
    new Snippet().init(snippets[i]);
  }
};

function Snippet() {
  var snippet;
  var svg;
  var dots;
  var x;
  var y;
  var xAxis;
  var wrapper;
  var title;
  var toggleBtn;
  var codeWrapper;
  var dataWrapper
  var stateWrapper;
  var code;
  var highlightedLine;
  var isVisualized = false;
  var currentDot;
  var lastNum;

  return {
    init: init
  };

  function init(s) {
    snippet = s;

    createMarkup();
    addCode();
  }

  function visualize() {
    svg.attr('width', getW());

    x = d3.scale.ordinal().domain(d3.range(snippet.execution.length + 2)).rangePoints([0, getW()]);
    y = d3.scale.ordinal().domain(d3.range(getLineCount() + 1)).rangePoints([0, getH()]);

    // JOIN new data with old elements
    dots = svg.selectAll('.dot')
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
        .attr('r', 4);

    dots.on('mouseover', function() {
      if (! this.classList.contains('is-active')) {
        this.setAttribute('stroke', '#EC5E5D');
      }
    }).on('mouseout', function() {
      if (! this.classList.contains('is-active')) {
        this.setAttribute('stroke', '#FFFFFF');
      }
    }).on('click', function(d, i) {
      if (! this.classList.contains('is-active')) {
        highlightDot(i);
        slider.value = i;
        slider.dispatchEvent(new Event('input'));
      }
    });

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
    unhighlightLine();
    highlightedLine = codeWrapper.querySelector('ol.linenums').children[snippet.execution[num].line];
    highlightedLine.classList.add('is-highlighted');
  }

  function unhighlightLine() {
    if (highlightedLine !== undefined) {
      highlightedLine.classList.remove('is-highlighted');
    }
  }

  function highlightDot(num) {
    if (lastNum !== undefined) {
      dots.each(function(d, i) {
        if (i == lastNum) {
          this.classList.remove('is-active');
        }
      });
    }

    dots.each(function(d, i) {
      if (i == num) {
        this.classList.add('is-active');
        lastNum = num;
      }
    });
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

    if (snippet.title) {
      title = document.createElement('h2');
      title.textContent = snippet.title;
    }

    if (snippet.execution.length > 0) {
      toggleBtn = document.createElement('button');
      toggleBtn.classList.add('toggleBtn');
      toggleBtn.addEventListener('click', function(e) {
        if (e.target.classList.contains('is-active')) {
          toggleVisualization();
          unhighlightLine();
          e.target.classList.remove('is-active');
        } else if (snippet.execution.length > 0) {
          if (! isVisualized) {
            addData();
            addState();
            // addListeners();
            visualize();
            isVisualized = true;
            addTimeSlider();
          } else {
            highlightLine(0);
            highlightDot(0);
            toggleVisualization();
          }
          e.target.classList.add('is-active');
        }
      });
    }

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
    if (snippet.execution.length > 0) codeWrapper.appendChild(toggleBtn);
    if (snippet.title) wrapper.appendChild(title);
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
        .style('background-image', 'repeating-linear-gradient(180deg, rgba(248, 248, 248, 0.6), rgba(248, 248, 248, 0.6) ' +
          (getH() / getLineCount()) + 'px, rgba(255, 255, 255, 0.6) ' + (getH() / getLineCount()) + 'px, rgba(255, 255, 255, 0.6) ' + (getH() / getLineCount() * 2) + 'px)');

    xAxis = svg.append("g")
      .attr("class", "axis");
  }

  function addState() {
    // TODO: Visualize state and behavior
    var values = document.createElement('ol');
    var widestItem = 0;

    for (var i = 0; i < snippet.state.length; i++) {
      var item = document.createElement('li');

      var name = document.createElement('span');
      name.textContent = snippet.state[i].name;
      name.classList.add(snippet.state[i].type === "param" ? "com" : "kwd");
      name.classList.add(snippet.state[i].name);
      name.classList.add('stateName');
      item.appendChild(name);

      var value = document.createElement('span');
      value.classList.add('stateVal');
      item.appendChild(value);

      values.appendChild(item);
    }

    stateWrapper.appendChild(values);
  }

  function addTimeSlider() {
    slider = document.createElement('input');
    slider.type = "range";
    slider.min = 0;
    slider.max = snippet.execution.length - 1;
    slider.value = 0;
    slider.classList.add('timeSlider');
    slider.style.width = getW() - 6 + 'px';
    if (snippet.execution.length <= 1) slider.style.display = 'none';

    slider.addEventListener('input', function(e) {
      highlightLine(e.target.value);
      highlightDot(e.target.value);
      updateState(e.target.value);
    });

    dataWrapper.appendChild(slider);
    highlightLine(0);
    highlightDot(0);
    updateState(0);
  }

  function toggleVisualization() {
    dataWrapper.classList.toggle('is-hidden');
    stateWrapper.classList.toggle('is-hidden');
  }
};
