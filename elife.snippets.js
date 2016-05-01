var snippets = [
  {
    uid: "uid_0",
    code:

    "var plan = [\n" +
      "'#####',\n" +
      "'#o  #',\n" +
      "'#  ##',\n" +
      "'#  o#',\n" +
      "'#####'];",

    execution: [],
    state: []
  },
  {
    uid: "uid_1",
    code:

    "function Wall() {}",

    execution: [],
    state: []
  },
  {
    uid: "uid_2",
    code:

    "var world = new World(plan, {'#': Wall, 'o': BouncingCritter});",

    execution: [],
    state: []
  },
  {
    uid: "uid_3",
    code:

    "var directions = {\n" +
      "'n':  new Vector( 0, -1),\n" +
      "'ne': new Vector( 1, -1),\n" +
      "'e':  new Vector( 1,  0),\n" +
      "'se': new Vector( 1,  1),\n" +
      "'s':  new Vector( 0,  1),\n" +
      "'sw': new Vector(-1,  1),\n" +
      "'w':  new Vector(-1,  0),\n" +
      "'nw': new Vector(-1, -1)\n" +
    "};",

    execution: [],
    state: []
  },
  {
    uid: "uid_4",
    code:

    "var directionNames = 'n ne e se s sw w nw'.split(' ');",

    execution: [],
    state: []
  },
  {
    uid: "uid_5",
    code:

    "/**\n" +
    " * @this {String} direction\n" +
    " */\n" +

    "function BouncingCritter() {\n" +
      "this.direction = randomElement(directionNames);\n" +
    "};",

    execution: [4],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>BouncingCritter</span>.direction undefined" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
          "sets <span class='typ'>BouncingCritter</span>.direction to <span class='stateVal'>{{vals.random(prop.global.directionNames.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {
          global: {
            directionNames: {
              val: "['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']"
            }
          }
        },
        param: {},
        vals: {
          random: function(directionNames) {
            var items = directionNames.slice(1, directionNames.length - 1);
            var array = items.split(', ');
            return array[Math.floor(Math.random() * array.length)];
          }
        },
        ret: {}
      }
    }
  },
  {
    uid: "uid_6",
    code:

    "/**\n" +
    " * @this {String} direction = 'n'\n" +
    " * @return {Object}\n" +
    " */\n" +

    "BouncingCritter.prototype.act = function(view) {\n" +
      "if (view.look(this.direction) != ' ') {\n" +
        "this.direction = view.find(' ') || 's';\n" +
      "}\n\n" +
      "return {type: 'move', direction: this.direction};\n" +
    "};",

    execution: [6, 7, 10],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>BouncingCritter</span>.direction {{prop.direction.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
          "sets <span class='typ'>BouncingCritter</span>.direction to <span class='stateVal'>{{timed(vals.direction.step, vals.direction.val)}}</span>" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
          "returns <span class='stateVal'>{{timed(ret.step, ret.val)}}</span>" +
          "" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {
          direction: {
            val: "'n'"
          }
        },
        param: {},
        vals: {
          direction: {
            step: 1,
            val: "'ne'"
          }
        },
        ret: {
          step: 2,
          val: "{type:'move', direction:'ne'}"
        }
      }
    }
  },
  {
    uid: "uid_7",
    code:

    "/**\n" +
    " * @param {Array} array = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']\n" +
    " * @return {String}\n" +
    " */\n" +

    "function randomElement(array) {\n" +
      "return array[Math.floor(Math.random() * array.length)];\n" +
    "}",

    execution: [5],
    state: {
      template:

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>array</span> {{param.array.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
          "returns <span class='stateVal'>{{ret.random(param.array.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {},
        param: {
          array: {
            val: "['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']"
          }
        },
        vals: {},
        ret: {
          random: function(arrayStr) {
            var items = arrayStr.slice(1, arrayStr.length - 1);
            var array = items.split(', ');
            return array[Math.floor(Math.random() * array.length)];
          }
        }
      }
    }
  },
  {
    uid: "uid_8",
    code:

    "/**\n" +
    " * @param {Number} x [0, 10]\n" +
    " * @param {Number} y [0, 10]\n" +
    " */\n" +

    "function Vector(x, y) {\n" +
      "this.x = x;\n" +
      "this.y = y;\n" +
    "}",

    execution: [5, 6],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>Vector</span>.x undefined" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>Vector</span>.y undefined" +
        "</li>" +
      "</ol>" +

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>x</span>" +
          "<input type='range' min='0' max='10' value={{param.x.val}}> {{param.x.val}}" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>y</span>" +
          "<input type='range' min='0' max='10' value={{param.y.val}}> {{param.y.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
          "sets <span class='typ'>Vector</span>.x to <span class='stateVal'>{{timed(param.x.step, param.x.val)}}</span>" +
        "</li>" +
        "<li>" +
          "sets <span class='typ'>Vector</span>.y to <span class='stateVal'>{{timed(param.y.step, param.y.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {},
        param: {
          x: {
            step: 0,
            val: 0
          },
          y: {
            step: 1,
            val: 0
          }
        },
        vals: {},
        ret: {}
      }
    }
  },
  {
    uid: "uid_9",
    code:

    "/**\n" +
    " * @this {Number} x = 0\n" +
    " * @this {Number} y = 0\n" +
    " * @param {Number} other.x [0, 10]\n" +
    " * @param {Number} other.y [0, 10]\n" +
    " * @return {Object}\n" +
    "*/\n" +

    "Vector.prototype.plus = function(other) {\n" +
      "return new Vector(this.x + other.x, this.y + other.y);\n" +
    "};",

    execution: [8],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>Vector</span>.x {{prop.x.val}}" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>Vector</span>.y {{prop.y.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>other.x</span>" +
          "<input type='range' min='0' max='10' value={{param.otherX.val}}> {{param.otherX.val}}" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>other.y</span>" +
          "<input type='range' min='0' max='10' value={{param.otherY.val}}> {{param.otherY.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
          "returns <span class='stateVal'>{x:{{prop.x.val + param.otherX.val}}, y:{{prop.y.val + param.otherY.val}}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {
          x: {
            val: 0
          },
          y: {
            val: 0
          }
        },
        param: {
          otherX: {
            val: 0
          },
          otherY: {
            val: 0
          }
        },
        vals: {},
        ret: {}
      }
    }
  },
  {
    uid: "uid_10",
    code:

    "/**\n" +
    " * @this {Array} space\n" +
    " * @this {Number} width\n" +
    " * @this {Number} height\n" +
    " * @param {Number} width [0, 10]\n" +
    " * @param {Number} height [0, 10]\n" +
    "*/\n" +

    "function Grid(width, height) {\n" +
      "this.space = new Array(width * height);\n" +
      "this.width = width;\n" +
      "this.height = height;\n" +
    "}",

    execution: [8, 9, 10],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.space undefined" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.width undefined" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.height undefined" +
        "</li>" +
      "</ol>" +

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>width</span>" +
          "<input type='range' min='0' max='10' value={{param.width.val}}> {{param.width.val}}" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>height</span>" +
          "<input type='range' min='0' max='10' value={{param.height.val}}> {{param.height.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
          "sets <span class='typ'>Grid</span>.space to <span class='stateVal'>{{prop.space.calc(param.width.val, param.height.val)}}</span>" +
        "</li>" +
        "<li>" +
          "sets <span class='typ'>Grid</span>.width to <span class='stateVal'>{{timed(param.width.step, param.width.val)}}</span>" +
        "</li>" +
        "<li>" +
          "sets <span class='typ'>Grid</span>.height to <span class='stateVal'>{{timed(param.height.step, param.height.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {
          space: {
            calc: function(w, h) {
              var length = Number(w * h);

              var ret = '[';
              for (var i = 0; i < length; i++) {
                if (i === 0) ret += '';
                else ret += ',';
              }
              ret += ']';

              return ret;
            }
          }
        },
        param: {
          width: {
            step: 1,
            val: 0
          },
          height: {
            step: 2,
            val: 0
          }
        },
        vals: {},
        ret: {}
      }
    }
  },
  {
    uid: "uid_11",
    code:

    "/**\n" +
    " * @this {Number} width = 2\n" +
    " * @this {Number} height = 3\n" +
    " * @param {Number} vector.x [0, 10]\n" +
    " * @param {Number} vector.y [0, 10]\n" +
    " * @return {Boolean}\n" +
    " */\n" +

    "Grid.prototype.isInside = function(vector) {\n" +
      "return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height;\n" +
    "};",

    execution: [8],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.width {{prop.width.val}}" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.height {{prop.height.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>vector.x</span>" +
          "<input type='range' min='0' max='10' value={{param.vectorX.val}}> {{param.vectorX.val}}" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>vector.y</span>" +
          "<input type='range' min='0' max='10' value={{param.vectorY.val}}> {{param.vectorY.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
          "returns <span class='stateVal'>{{ret.calc(prop.width.val, prop.height.val, param.vectorX.val, param.vectorY.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        prop: {
          width: {
            val: 2
          },
          height: {
            val: 3
          }
        },
        param: {
          vectorX: {
            val: 0
          },
          vectorY: {
            val: 0
          }
        },
        vals: {},
        ret: {
          calc: function(width, height, vectorX, vectorY) {
            return vectorX >= 0 && vectorX < width && vectorY >= 0 && vectorY < height;
          }
        }
      }
    }
  },
  {
    uid: "uid_12",
    code:

    "/**\n" +
    " * @this {Array} space = ['#', '#', '#', '#', 'o', ' ', '#', '#']\n" +
    " * @this {Number} width = 2\n" +
    " * @param {Number} vector.x [0, 2]\n" +
    " * @param {Number} vector.y [0, 2]\n" +
    " * @return {String}\n" +
    " */\n" +

    "Grid.prototype.get = function(vector) {\n" +
      "return this.space[vector.x + this.width * vector.y];\n" +
    "};",

    execution: [8],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.space {{prop.space.val}}" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.width {{prop.width.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>vector.x</span>" +
          "<input type='range' min='0' max='2' value={{param.vectorX.val}}> {{param.vectorX.val}}" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>vector.y</span>" +
          "<input type='range' min='0' max='2' value={{param.vectorY.val}}> {{param.vectorY.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
          "returns <span class='stateVal'>{{ret.random(prop.space.val, param.vectorX.val, param.vectorY.val, prop.width.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {
          space: {
            val: "['#', '#', '#', '#', 'o', ' ', '#', '#']"
          },
          width: {
            val: 2
          }
        },
        param: {
          vectorX: {
            val: 0
          },
          vectorY: {
            val: 0
          }
        },
        vals: {},
        ret: {
          random: function(space, vectorX, vectorY, width) {
            var items = space.slice(1, space.length - 1);
            var array = items.split(', ');
            return array[vectorX + width * vectorY];
          }
        }
      }
    }
  },
  {
    uid: "uid_13",
    code:

    "/**\n" +
    " * @this {Array} space = [,,,,,,,]\n" +
    " * @this {Number} width = 2\n" +
    " * @param {Number} vector.x [0, 2]\n" +
    " * @param {Number} vector.y [0, 2]\n" +
    " * @param {String} value = 'o'\n" +
    " */\n" +

    "Grid.prototype.set = function(vector, value) {\n" +
      "this.space[vector.x + this.width * vector.y] = value;\n" +
    "};",

    execution: [8],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.space {{prop.space.val}}" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.width {{prop.width.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>vector.x</span>" +
          "<input type='range' min='0' max='2' value={{param.vectorX.val}}> {{param.vectorX.val}}" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>vector.y</span>" +
          "<input type='range' min='0' max='3' value={{param.vectorY.val}}> {{param.vectorY.val}}" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>value</span> {{param.value.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
          "sets <span class='typ'>Grid</span>.space to <span class='stateVal'>{{prop.space.calc(prop.space.val, param.vectorX.val, param.vectorY.val, prop.width.val, param.value.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {
          space: {
            val: "[,,,,,,,]",
            calc: function(space, vectorX, vectorY, width, value) {
              var items = space.slice(1, space.length - 1);
              var array = items.split(',');
              var index = vectorX + width * vectorY;
              array.splice(index, 1, index === 0 ? value : ' ' + value);
              return '"[' + array + ']"';
            }
          },
          width: {
            val: 2
          }
        },
        param: {
          vectorX: {
            val: 1
          },
          vectorY: {
            val: 1
          },
          value: {
            val: "'o'"
          }
        },
        vals: {},
        ret: {}
      }
    }
  },
  {
    uid: "uid_14",
    code:

    "/**\n" +
    " * @this {Object} grid\n" +
    " * @this {Object} legend\n" +
    " * @param {Array} map = ['#####', '#o  #', '#  ##', '#  o#', '#####']\n" +
    " * @param {Object} legend = {'#':Wall, 'o':BouncingCritter}\n" +
    " */\n" +

    "function World(map, legend) {\n" +
      "var grid = new Grid(map[0].length, map.length);\n" +
      "this.grid = grid;\n" +
      "this.legend = legend;\n" +
      "map.forEach(function(line, y) {\n" +
        "for (var x = 0; x < line.length; x++) {\n" +
          "grid.set(new Vector(x, y), elementFromChar(legend, line[x]));\n" +
        "}\n" +
      "});\n" +
    "}",

    execution: [7, 8, 9, 10, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 10, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 10, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 10, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 10, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>World</span>.grid undefined" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>World</span>.legend undefined" +
        "</li>" +
      "</ol>" +

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>map</span> {{param.map.val}}" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>legend</span> {{param.legend.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
          "sets grid to <span class='stateVal'>{{timedSequence(vals.grid.steps)}}</span>" +
        "</li>" +
        "<li>" +
          "sets <span class='typ'>World</span>.grid to <span class='stateVal'>{{timed(prop.grid.step, prop.grid.val)}}</span>" +
        "</li>" +
        "<li>" +
          "sets <span class='typ'>World</span>.legend to <span class='stateVal'>{{timed(param.legend.step, param.legend.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {
          grid: {
            step: 1,
            val: 'grid'
          }
        },
        param: {
          map: {
            val: "['#####', '#o  #', '#  ##', '#  o#', '#####']"
          },
          legend: {
            step: 2,
            val: "{'#':Wall, 'o':BouncingCritter}"
          }
        },
        vals: {
          grid: {
            steps: [
              {step: 0,  val: "{space:[,,,,,,,,,,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 5,  val: "{space:['#',,,,,,,,,,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 7,  val: "{space:['#', '#',,,,,,,,,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 9,  val: "{space:['#', '#', '#',,,,,,,,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 11, val: "{space:['#', '#', '#', '#',,,,,,,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 13, val: "{space:['#', '#', '#', '#', '#',,,,,,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 16, val: "{space:['#', '#', '#', '#', '#', '#',,,,,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 18, val: "{space:['#', '#', '#', '#', '#', '#', 'o',,,,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 20, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ',,,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 22, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ',,,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 24, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#',,,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 27, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#',,,,,,,,,,,,,,], width:5, height:5}"},
              {step: 29, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ',,,,,,,,,,,,,], width:5, height:5}"},
              {step: 31, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ',,,,,,,,,,,,], width:5, height:5}"},
              {step: 33, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#',,,,,,,,,,,], width:5, height:5}"},
              {step: 35, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#',,,,,,,,,,], width:5, height:5}"},
              {step: 38, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#',,,,,,,,,], width:5, height:5}"},
              {step: 40, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#', ' ',,,,,,,,], width:5, height:5}"},
              {step: 42, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#', ' ', ' ',,,,,,,], width:5, height:5}"},
              {step: 44, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#', ' ', ' ', 'o',,,,,,], width:5, height:5}"},
              {step: 46, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#', ' ', ' ', 'o', '#',,,,,], width:5, height:5}"},
              {step: 50, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#', ' ', ' ', 'o', '#', '#',,,,], width:5, height:5}"},
              {step: 51, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#', ' ', ' ', 'o', '#', '#', '#',,,], width:5, height:5}"},
              {step: 53, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#', ' ', ' ', 'o', '#', '#', '#', '#',,], width:5, height:5}"},
              {step: 55, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#', ' ', ' ', 'o', '#', '#', '#', '#', '#',], width:5, height:5}"},
              {step: 57, val: "{space:['#', '#', '#', '#', '#', '#', 'o', ' ', ' ', '#', '#', ' ', ' ', '#', '#', '#', ' ', ' ', 'o', '#', '#', '#', '#', '#', '#'], width:5, height:5}"},
            ]
          }
        },
        ret: {}
      }
    }
  },
  {
    uid: "uid_15",
    code:

    "/**\n" +
    " * @this {Number} grid.height = 5\n" +
    " * @this {Number} grid.width = 5\n" +
    " * @return {String}\n" +
    " */\n" +

    "World.prototype.toString = function() {\n" +
      "var output = '';\n" +
      "for (var y = 0; y < this.grid.height; y++) {\n" +
        "for (var x = 0; x < this.grid.width; x++) {\n" +
          "var element = this.grid.get(new Vector(x, y));\n" +
          "output += charFromElement(element);\n" +
        "}\n" +
        "output += '\\n';\n" +
      "}\n\n" +
      "return output;\n" +
    "};",

    execution: [6, 7, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 12, 7, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 12, 7, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 12, 7, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 12, 7, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 9, 10, 8, 12, 7, 15],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>World</span>.grid.height {{prop.gridHeight.val}}" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>World</span>.grid.width {{prop.gridWidth.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
          "sets element to <span class='stateVal'>{{timedSequence(vals.element.steps)}}</span>" +
        "</li>" +
        "<li>" +
          "sets output to <span class='stateVal'>{{timedSequence(vals.output.steps)}}</span>" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
          "returns output <span class='stateVal'>{{timed(ret.output.step, ret.output.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {
          gridHeight: {
            val: 5
          },
          gridWidth: {
            val: 5
          }
        },
        param: {},
        vals: {
          element: {
            steps: [
              {step: 0,  val: ""},
              {step: 3,  val: "'#'"},
              {step: 6,  val: "'#'"},
              {step: 9,  val: "'#'"},
              {step: 12,  val: "'#'"},
              {step: 15,  val: "'#'"},
              {step: 21,  val: "'#'"},
              {step: 24,  val: "'o'"},
              {step: 27,  val: "' '"},
              {step: 30,  val: "' '"},
              {step: 33,  val: "'#'"},
              {step: 38,  val: "'#'"},
              {step: 41,  val: "' '"},
              {step: 44,  val: "' '"},
              {step: 47,  val: "'#'"},
              {step: 50,  val: "'#'"},
              {step: 55,  val: "'#'"},
              {step: 58,  val: "' '"},
              {step: 61,  val: "' '"},
              {step: 64,  val: "'o'"},
              {step: 67,  val: "'#'"},
              {step: 72,  val: "'#'"},
              {step: 75,  val: "'#'"},
              {step: 78,  val: "'#'"},
              {step: 81,  val: "'#'"},
              {step: 84,  val: "'#'"},
            ]
          },
          output: {
            steps: [
              {step: 0,  val: "''"},
              {step: 4,  val: "'#'"},
              {step: 7,  val: "'##'"},
              {step: 10,  val: "'###'"},
              {step: 13,  val: "'####'"},
              {step: 16,  val: "'#####'"},
              {step: 18,  val: "'#####\\n'"},
              {step: 22,  val: "'#####\\n#'"},
              {step: 25,  val: "'#####\\n#o'"},
              {step: 28,  val: "'#####\\n#o '"},
              {step: 31,  val: "'#####\\n#o  '"},
              {step: 34,  val: "'#####\\n#o  #'"},
              {step: 36,  val: "'#####\\n#o  #\\n'"},
              {step: 39,  val: "'#####\\n#o  #\\n#'"},
              {step: 42,  val: "'#####\\n#o  #\\n# '"},
              {step: 45,  val: "'#####\\n#o  #\\n#  '"},
              {step: 48,  val: "'#####\\n#o  #\\n#  #'"},
              {step: 51,  val: "'#####\\n#o  #\\n#  ##'"},
              {step: 53,  val: "'#####\\n#o  #\\n#  ##\\n'"},
              {step: 56,  val: "'#####\\n#o  #\\n#  ##\\n#'"},
              {step: 59,  val: "'#####\\n#o  #\\n#  ##\\n# '"},
              {step: 62,  val: "'#####\\n#o  #\\n#  ##\\n#  '"},
              {step: 65,  val: "'#####\\n#o  #\\n#  ##\\n#  o'"},
              {step: 68,  val: "'#####\\n#o  #\\n#  ##\\n#  o#'"},
              {step: 70,  val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n'"},
              {step: 73,  val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n#'"},
              {step: 76,  val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n##'"},
              {step: 79,  val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n###'"},
              {step: 82,  val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n####'"},
              {step: 85,  val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n#####'"},
              {step: 88,  val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n#####\\n'"}
            ]
          }
        },
        ret: {
          output: {
            step: 92,
            val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n#####\\n'"
          }
        }
      }
    }
  },
  {
    uid: "uid_16",
    code:

    "/**\n" +
    " * @param {String} element = null\n" +
    " * @return {String}\n" +
    " */\n" +

    "function charFromElement(element) {\n" +
      "if (element == null) {\n" +
        "return ' ';\n" +
      "} else {\n" +
        "return element.originChar;\n" +
      "}\n" +
    "}",

    execution: [5, 6],
    state: {
      template:

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>element</span> {{param.element.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
          "returns <span class='stateVal'>{{timed(ret.step, ret.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {},
        param: {
          element: {
            val: "null"
          }
        },
        vals: {},
        ret: {
          step: 1,
          val: "' '"
        }
      }
    }
  },
  {
    uid: "uid_17",
    code:

    "/**\n" +
    " * @param {Object} legend = {'#':Wall, 'o':BouncingCritter}\n" +
    " * @param {String} ch = '#'\n" +
    " * @return {String} element\n" +
    " */\n" +

    "function elementFromChar(legend, ch) {\n" +
      "if (ch == ' ') {\n" +
        "return null;\n" +
      "}\n\n" +
      "var element = new legend[ch]();\n" +
      "element.originChar = ch;\n" +
      "return element;\n" +
    "}",

    execution: [6, 10, 11, 12],
    state: {
      template:

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>legend</span> {{param.legend.val}}" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>ch</span> {{param.ch.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
          "sets element to <span class='stateVal'>{{timed(vals.element.step, vals.element.val)}}</span>" +
        "</li>" +
        "<li>" +
          "sets element.originChar to <span class='stateVal'>{{timed(vals.elementOriginChar.step, vals.elementOriginChar.val)}}</span>" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
          "returns <span class='stateVal'>{{timed(ret.step, ret.val)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {},
        param: {
          legend: {
            val: "{'#':Wall, 'o':BouncingCritter}"
          },
          ch: {
            val: "'#'"
          }
        },
        vals: {
          element: {
            step: 1,
            val: "Wall"
          },
          elementOriginChar: {
            step: 2,
            val: "'#'"
          }
        },
        ret: {
          step: 3,
          val: "Wall"
        }
      }
    }
  }
];
