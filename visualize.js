window.onload = function() {
  var s = [];

  for (var i = 0; i < snippets.length; i++) {
    var snippet = new Snippet();

    snippet.init(snippets[i]);

    s.push(snippet);
  }

  document.querySelector('.showAllBtn').addEventListener('click', function(e) {
    for (var i = 0; i < s.length; i++) {
      s[i].triggerShow();
    }
  });

  document.querySelector('.hideAllBtn').addEventListener('click', function(e) {
    for (var i = 0; i < s.length; i++) {
      s[i].triggerHide();
    }
  });
};

function Snippet() {
  var snippet;
  var svg;
  var dots;
  var x;
  var y;
  var xAxis;
  var wrapper;
  var codeWrapper;
  var dataWrapper
  var stateWrapper;
  var isVisualized = false;
  var currentDot;
  var slider;
  var ractive;

  return {
    init: init,
    triggerShow: triggerShow,
    triggerHide: triggerHide
  };

  function init(s) {
    snippet = s;

    createMarkup();
    prettyPrint();
  }

  function visualize() {
    svg = d3.select(dataWrapper)
      .append('svg')
        .attr('width', 0)
        .attr('height', getH())
        .style('background-image', 'repeating-linear-gradient(180deg, rgba(248, 248, 248, 0.6), rgba(248, 248, 248, 0.6) ' +
          (getH() / getLineCount()) + 'px, rgba(255, 255, 255, 0.6) ' + (getH() / getLineCount()) + 'px, rgba(255, 255, 255, 0.6) ' + (getH() / getLineCount() * 2) + 'px)');

    xAxis = svg.append("g")
      .attr("class", "axis");

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
        .attr('cy', function(d, i) { return y(d) + (getH() / getLineCount() / 2); });

    // ENTER new elements present in new data
    dots.enter().append('circle')
        .attr('class', function(d, i) { return 'dot' + ' ' + d; })
        .attr('cx', function(d, i) { return x(i + 1); })
        .attr('cy', function(d, i) { return y(d) + (getH() / getLineCount() / 2); })
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
        slider.value = i;
        slider.dispatchEvent(new Event('input'));
      }
    });

    var axis = d3.svg.axis()
      .scale(x)
      .orient('top');

    xAxis.call(axis);
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

  function highlightLine() {
    unhighlightLine();

    var step = slider !== undefined ? slider.value : 0;
    var line = codeWrapper.querySelector('ol.linenums').children[snippet.execution[step]];

    line.classList.add('is-highlighted');
  }

  function unhighlightLine() {
    var lines = codeWrapper.querySelector('ol.linenums').children;

    for (var i = 0; i < lines.length; i++) {
      if (lines[i].classList.contains('is-highlighted')) {
        lines[i].classList.remove('is-highlighted');
      }
    }
  }

  function highlightDot() {
    unhighlightDot();

    dots.each(function(d, i) {
      if (i == slider.value) {
        this.classList.add('is-active');
      }
    });
  }

  function unhighlightDot() {
    dots.each(function(d, i) {
      if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
      }
    });
  }

  function createMarkup() {
    wrapper = document.createElement('div');
    wrapper.classList.add('snippet');
    wrapper.id = snippet.uid;

    codeWrapper = document.createElement('div');
    codeWrapper.classList.add('code');

    dataWrapper = document.createElement('div');
    dataWrapper.classList.add('data');

    stateWrapper = document.createElement('div');
    stateWrapper.classList.add('state');

    codeWrapper.appendChild(getCodeMarkup());
    codeWrapper.appendChild(getToggleBtnMarkup());

    wrapper.appendChild(codeWrapper);
    wrapper.appendChild(dataWrapper);
    wrapper.appendChild(stateWrapper);

    document.querySelector('.snippets').appendChild(wrapper);
  }

  function getCodeMarkup() {
    var pre = document.createElement('pre');
    pre.classList.add('default', 'linenums', 'prettyprint');

    var code = document.createElement('code');
    code.textContent = js_beautify(snippet.code);

    pre.appendChild(code);

    return pre;
  }

  function getToggleBtnMarkup() {
    var toggleBtn = document.createElement('button');
    toggleBtn.classList.add('toggleBtn');
    toggleBtn.addEventListener('click', onToggleBtnClick);

    if (! shouldVisualize()) toggleBtn.style.display = 'none';

    return toggleBtn;
  }

  function onToggleBtnClick(e) {
    e.stopPropagation();

    if (e.target.classList.contains('is-active')) {
      hideVisualization();
      e.target.classList.remove('is-active');
      return;
    }

    if (shouldVisualize()) {
      if (! isVisualized) {
        visualize();
        addTimeSlider();
        addState();
        isVisualized = true;
      } else {
        showVisualization();
      }

      e.target.classList.add('is-active');
    }
  }

  function triggerShow() {
    var toggleBtn = codeWrapper.querySelector('.toggleBtn');

    if (! toggleBtn.classList.contains('is-active')) toggleBtn.dispatchEvent(new Event('click'));
  }

  function triggerHide() {
    var toggleBtn = codeWrapper.querySelector('.toggleBtn');

    if (toggleBtn.classList.contains('is-active')) toggleBtn.dispatchEvent(new Event('click'));
  }

  function addState() {
    var helpers = Ractive.defaults.data;

    helpers.timed = function(min, val) {
      if (this.get('step') < min) return '';
      else return val;
    }

    helpers.timedSequence = function(array) {
      var value = array[0].val;

      for (var i = 0; i < array.length; i++) {

        if (this.get('step') >= array[i].step) value = array[i].val;
      }

      return value;
    }

    ractive = new Ractive({
      el: stateWrapper,
      template: snippet.state.template,
      data: snippet.state.data
    });
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

    slider.addEventListener('input', onSliderInput);

    dataWrapper.appendChild(slider);

    highlightLine();
    highlightDot();
  }

  function onSliderInput(e) {
    e.stopPropagation();

    highlightLine();
    highlightDot();

    ractive.set('step', e.target.value);
  }

  function showVisualization() {
    if (! shouldVisualize()) return;

    dataWrapper.classList.remove('is-hidden');
    stateWrapper.classList.remove('is-hidden');
    highlightLine();
    highlightDot();
  }

  function hideVisualization() {
    if (! shouldVisualize()) return;

    unhighlightLine();
    unhighlightDot();
    dataWrapper.classList.add('is-hidden');
    stateWrapper.classList.add('is-hidden');
  }

  function shouldVisualize() {
    return snippet.execution.length > 0 ? true : false;
  }
};
