window.onload = function() {
  for (var i = 0; i < snippets.length; i++) {
    new Snippet().init(snippets[i]);
  }
};

function Snippet() {

  this.init = function(snippet) {
    this.snippet = snippet;

    this.createMarkup();
    this.addCode();
    this.addData();
    this.addState();
    // this.addListeners();
    this.visualize();
  };

  this.visualize = function() {
    this.svg.attr('width', this.getW());

    this.x = d3.scale.ordinal().domain(d3.range(this.snippet.execution.length + 2)).rangePoints([0, this.getW()]);
    this.y = d3.scale.ordinal().domain(d3.range(this.getLineCount() + 1)).rangePoints([0, this.getH()]);

    // JOIN new data with old elements
    var dots = this.svg.selectAll('.dot')
        .data(this.snippet.execution);

    // EXIT old elements not present in new data
    dots.exit().remove();

    // UPDATE old elements present in new data
    dots.attr('cx', function(d, i) { return this.x(i + 1); }.bind(this))
        .attr('cy', function(d, i) { return this.y(d) + (this.getH() / this.getLineCount() / 2); }.bind(this));

    // ENTER new elements present in new data
    dots.enter().append('circle')
        .attr('class', function(d, i) { return 'dot' + ' ' + d; })
        .attr('cx', function(d, i) { return this.x(i + 1); }.bind(this))
        .attr('cy', function(d, i) { return this.y(d) + (this.getH() / this.getLineCount() / 2); }.bind(this))
        .attr('r', 3);

    var axis = d3.svg.axis()
      .scale(this.x)
      .orient('top');

    this.xAxis.call(axis);

    // TODO: Add lines between dots to make order more clear?
  };

  this.getW = function() {
    return (this.snippet.execution.length + 2) * 10;
  };

  this.getH = function() {
    return this.codeWrapper.clientHeight;
  };

  this.getLineCount = function() {
    return this.codeWrapper.querySelector('ol.linenums').children.length;
  };

  this.createMarkup = function() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('snippet');
    this.codeWrapper = document.createElement('div');
    this.codeWrapper.classList.add('code');
    this.dataWrapper = document.createElement('div');
    this.dataWrapper.classList.add('data');
    this.stateWrapper = document.createElement('div');
    this.stateWrapper.classList.add('state');

    this.pre = document.createElement('pre');
    this.pre.classList.add('default', 'linenums', 'prettyprint');
    this.code = document.createElement('code');

    this.pre.appendChild(this.code);
    this.codeWrapper.appendChild(this.pre);
    this.wrapper.appendChild(this.codeWrapper);
    this.wrapper.appendChild(this.dataWrapper);
    this.wrapper.appendChild(this.stateWrapper);
    document.querySelector('.snippets').appendChild(this.wrapper);

  };

  this.addCode = function() {
    this.code.textContent = js_beautify(this.snippet.code);
    prettyPrint();
  };

  this.addData = function() {
    this.svg = d3.select(this.dataWrapper)
      .append('svg')
        .attr('width', 0)
        .attr('height', this.getH())
        .style('background-image', 'repeating-linear-gradient(180deg, #F8F8F8, #F8F8F8 ' +
          (this.getH() / this.getLineCount()) + 'px, #FFFFFF ' + (this.getH() / this.getLineCount()) + 'px, #FFFFFF ' + (this.getH() / this.getLineCount() * 2) + 'px)');

    this.xAxis = this.svg.append("g")
      .attr("class", "axis");
  };

  this.addListeners = function() {
    this.paramSize.addEventListener('input', function(e) {
      this.snippet.execution.splice(7, 0, 13, 15, 16, 17);
      this.visualize();
    }.bind(this));
  };
};
