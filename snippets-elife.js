var snippets = [
  {
    "code": "var plan = [\n'#####',\n'#o  #',\n'#  ##',\n '#  o#',\n '#####'];",
    "execution": [],
    "state": []
  },
  {
    "code": "function Wall() {}",
    "execution": [],
    "state": []
  },
  {
    "code": "var world = new World(plan, {'#': Wall, 'o': BouncingCritter});",
    "execution": [],
    "state": []
  },
  {
    "code": "var directions = {\n 'n':  new Vector( 0, -1),\n 'ne': new Vector( 1, -1),\n 'e':  new Vector( 1,  0),\n 'se': new Vector( 1,  1),\n 's':  new Vector( 0,  1),\n 'sw': new Vector(-1,  1),\n 'w':  new Vector(-1,  0),\n 'nw': new Vector(-1, -1)\n };",
    "execution": [],
    "state": []
  },
  {
    "code": "var directionNames = 'n ne e se s sw w nw'.split(' ');\n",
    "execution": [],
    "state": []
  },
  {
    "code": "function BouncingCritter() {\n this.direction = randomElement(directionNames);\n };",
    "execution": [],
    "state": []
  },
  {
    "code": "/**\n * @param {Object} view\n * @return {Object} action\n */\n BouncingCritter.prototype.act = function(view) {\n if (view.look(this.direction) != ' ') {\n this.direction = view.find(' ') || 's';\n } \n\n return {type: 'move', direction: this.direction};\n };",
    "execution": [
      {line: 5},
      {line: 6, name: "BouncingCritter_direction", val: "s"},
      {line: 9, name: "action", val: "{type:'move',direction:'s'}"},
    ],
    "state": [
      {name: "view", type: "param"},
      {name: "BouncingCritter_direction", type: "prop"},
      {name: "action", type: "return"},
    ]
  },
  {
    "code": " /**\n * @param {Array} array\n * @return {String} element\n */\n function randomElement(array) {\n return array[Math.floor(Math.random() * array.length)];\n }",
    "execution": [
      {line: 5, name: "element", val: "#"}
    ],
    "state": [
      {name: "array", type: "param"},
      {name: "element", type: "return"}
    ]
  },
  {
    "code": "/**\n * @param {Number} x\n * @param {Number} y\n */\nfunction Vector(x, y) {\n this.x = x;\n this.y = y;\n }",
    "execution": [
      {line: 5, name: "Vector_x", val: 0},
      {line: 6, name: "Vector_y", val: 0}
    ],
    "state": [
      {name: "x", type: "param"},
      {name: "y", type: "param"},
      {name: "Vector_x", type: "prop"},
      {name: "Vector_y", type: "prop"}
    ]
  },
  {
    "code": "/**\n * @param {Object} other.x\n * @param {Object} other.y\n * @return {Object} Vector\n */\nVector.prototype.plus = function(other) {\n return new Vector(this.x + other.x, this.y + other.y);\n };",
    "execution": [
      {line: 6, name: "Vector", val: "{x:0,y:0}"}
    ],
    "state": [
      {name: "other_x", type: "param"},
      {name: "other_y", type: "param"},
      {name: "Vector", type: "return"}
    ]
  },
  {
    "code": "/**\n * @param {Number} width\n * @param {Number} height\n */\nfunction Grid(width, height) {\nthis.space = new Array(width * height);\nthis.width = width;\nthis.height = height;\n}",
    "execution": [
      {line: 5, name: "Grid_space", val: "[u,u,u,u,u,u]"},
      {line: 6, name: "Grid_width", val: 2},
      {line: 7, name: "Grid_height", val: 3}
    ],
    "state": [
      {name: "width", type: "param"},
      {name: "height", type: "param"},
      {name: "Grid_space", type: "prop"},
      {name: "Grid_width", type: "prop"},
      {name: "Grid_height", type: "prop"}
    ]
  },
  {
    "code": "/**\n * @param {Object} vector.x\n * @param {Object} vector.y\n * @return {Boolean} isInside\n */\n Grid.prototype.isInside = function(vector) {\n return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height;\n };",
    "execution": [
      {line: 6, name: "isInside", val: true}
    ],
    "state": [
      {name: "vector_x", type: "param"},
      {name: "vector_y", type: "param"},
      {name: "isInside", type: "return"}
    ]
  },
  {
    "code": "/**\n * @param {Object} vector.x\n * @param {Object} vector.y\n * @return {String} cell\n */\n Grid.prototype.get = function(vector) {\n return this.space[vector.x + this.width * vector.y];\n };",
    "execution": [
     {line: 6, name: "cell", val: 'o'}
    ],
    "state": [
      {name: "vector_x", type: "param"},
      {name: "vector_y", type: "param"},
      {name: "cell", type: "return"}
    ]
  },
  {
    "code": "/**\n * @param {Object} vector.x\n * @param {Object} vector.y\n * @param {String} value\n */\n Grid.prototype.set = function(vector, value) {\n this.space[vector.x + this.width * vector.y] = value;\n };",
    "execution": [
     {line: 6, name: "Grid_space", val: 0}
    ],
    "state": [
      {name: "vector_x", type: "param"},
      {name: "vector_y", type: "param"},
      {name: "Grid_space", type: "var"}
    ]
  },
  {
    "code": "/**\n * @param {Array} map\n * @param {Object} legend\n */\n function World(map, legend) {\n var grid = new Grid(map[0].length, map.length);\n this.grid = grid;\n this.legend = legend;\n map.forEach(function(line, y) {\n for (var x = 0; x < line.length; x++) {\n grid.set(new Vector(x, y), elementFromChar(legend, line[x]));\n }\n });\n }",
    "execution": [
     {line: 5, name: "grid", val: "[u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"},
     {line: 6, name: "World_grid", val: "[u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"},
     {line: 7, name: "World_legend", val: "{'#':Wall,'o':BouncingCritter}"},
     {line: 8},
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 8},
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,u,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 8},
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,u,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,u,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,u,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,u,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,u,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 8},
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,,u,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,,,u,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,,,o,u,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,,,o,#,u,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,,,o,#,#,u,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 8},
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,,,o,#,#,#,u,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,,,o,#,#,#,#,u,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,,,o,#,#,#,#,#,u]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 10, name: "World_grid", val: "[#,#,#,#,#,#,o,,,#,#,,,#,#,#,,,o,#,#,#,#,#,#]"}, // TODO: Need to be able to set two variables at the same time
     {line: 9},
     {line: 8}
    ],
    "state": [
     {name: "map", type: "param"}, // TODO: Make changable
     {name: "legend", type: "param"}, // TODO: Make changable
     {name: "grid", type: "var"},
     {name: "World_grid", type: "prop"},
     {name: "World_legend", type: "prop"}
    ]
  },
  {
    "code": "/**\n * @return {String} output\n */\n World.prototype.toString = function() {\n var output = '';\n for (var y = 0; y < this.grid.height; y++) {\n for (var x = 0; x < this.grid.width; x++) {\n var element = this.grid.get(new Vector(x, y));\n output += charFromElement(element);\n }\n output += '\\n';\n } \n\n return output;\n };",
    "execution": [
     {line: 4, name: "output", val: "''"},
     {line: 5},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'##'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'###'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'####'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####'"},
     {line: 6},
     {line: 10, name: "output", val: "'#####\\n'"},
     {line: 5},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#'"},
     {line: 6},
     {line: 7, name: "element", val: "'o'"},
     {line: 8, name: "output", val: "'#####\\n#o'"},
     {line: 6},
     {line: 7, name: "element", val: "' '"},
     {line: 8, name: "output", val: "'#####\\n#o '"},
     {line: 6},
     {line: 7, name: "element", val: "' '"},
     {line: 8, name: "output", val: "'#####\\n#o  '"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #'"},
     {line: 6},
     {line: 10, name: "output", val: "'#####\\n#o  #\\n'"},
     {line: 5},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#'"},
     {line: 6},
     {line: 7, name: "element", val: "' '"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n# '"},
     {line: 6},
     {line: 7, name: "element", val: "' '"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  '"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  #'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##'"},
     {line: 6},
     {line: 10, name: "output", val: "'#####\\n#o  #\\n#  ##\\n'"},
     {line: 5},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#'"},
     {line: 6},
     {line: 7, name: "element", val: "' '"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n# '"},
     {line: 6},
     {line: 7, name: "element", val: "' '"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  '"},
     {line: 6},
     {line: 7, name: "element", val: "'o'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o#'"},
     {line: 6},
     {line: 10, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n'"},
     {line: 5},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n#'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n##'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n###'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n####'"},
     {line: 6},
     {line: 7, name: "element", val: "'#'"},
     {line: 8, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n#####'"},
     {line: 6},
     {line: 10, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n#####\\n'"},
     {line: 5},
     {line: 13, name: "output", val: "'#####\\n#o  #\\n#  ##\\n#  o#\\n#####\\n'"}
    ],
    "state": [
     {name: "element", type: "var"},
     {name: "output", type: "return"}
    ]
  },
  {
    "code": "/**\n * @param {String} element\n * @return {String} cell\n */\n function charFromElement(element) {\n if (element == null) {\n return ' ';\n } else {\n return element.originChar;\n }\n }",
    "execution": [
     {line: 5},
     {line: 8, name: "char", val: "#"}
    ],
    "state": [
     {name: "element", type: "param"},
     {name: "char", type: "return"}
    ]
  },
  {
    "code": "/**\n * @param {Array} legend\n * @param {String} ch\n * @return {String} elem\n */\n function elementFromChar(legend, ch) {\n if (ch == ' ') {\n return null;\n } \n\n var element = new legend[ch]();\n element.originChar = ch;\n return element;\n }",
    "execution": [
     {line: 6},
     {line: 10, name: "element", val: "Wall"},
     {line: 11, name: "element_originChar", val: "#"}, // TODO: Need to be able to set properties on objects
     {line: 12, name: "elem", val: "Wall"}
    ],
    "state": [
     {name: "legend", type: "param"},
     {name: "ch", type: "param"},
     {name: "element", type: "var"},
     {name: "element_originChar", type: "prop"},
     {name: "elem", type: "return"}
    ]
  }
];
