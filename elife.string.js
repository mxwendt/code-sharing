"var plan = ['#####',\n
             '#o  #',\n
             '#  ##',\n
             '#  o#',\n
             '#####'];
\n\n
/**\n
 * @param {Number} x\n
 * @param {Number} y\n
 */\n
function Vector(x, y) {\n
  this.x = x;\n
  this.y = y;\n
}
\n\n
/**\n
 * @param {Object} other.x\n
 * @param {Object} other.y\n
 * @return {Object} Vector\n
 */\n
Vector.prototype.plus = function(other) {\n
  return new Vector(this.x + other.x, this.y + other.y);\n
};
\n\n
/**\n
 * @param {Number} width\n
 * @param {Number} height\n
 */\n
function Grid(width, height) {\n
  this.space = new Array(width * height);\n
  this.width = width;\n
  this.height = height;\n
}
\n\n
/**\n
 * @param {Object} vector.x\n
 * @param {Object} vector.y\n
 * @return {Boolean} isInside\n
 */\n
Grid.prototype.isInside = function(vector) {\n
  return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height;\n
};
\n\n
/**\n
 * @param {Object} vector.x\n
 * @param {Object} vector.y\n
 * @return {String} cell\n
 */\n
Grid.prototype.get = function(vector) {\n
  return this.space[vector.x + this.width * vector.y];\n
};
\n\n
/**\n
 * @param {Object} vector.x\n
 * @param {Object} vector.y\n
 * @param {String} value\n
 */\n
Grid.prototype.set = function(vector, value) {\n
  this.space[vector.x + this.width * vector.y] = value;\n
};
\n\n
var directions = {\n
  'n':  new Vector( 0, -1),\n
  'ne': new Vector( 1, -1),\n
  'e':  new Vector( 1,  0),\n
  'se': new Vector( 1,  1),\n
  's':  new Vector( 0,  1),\n
  'sw': new Vector(-1,  1),\n
  'w':  new Vector(-1,  0),\n
  'nw': new Vector(-1, -1)\n
};
\n\n
/**\n
 * @param {Array} array\n
 * @return {String} element\n
 */\n
function randomElement(array) {\n
  return array[Math.floor(Math.random() * array.length)];\n
}
\n\n
var directionNames = 'n ne e se s sw w nw'.split(' ');\n
\n\n
function BouncingCritter() {\n
  this.direction = randomElement(directionNames);\n
};
\n\n
/**\n
 * @param {Object} view\n
 * @return {Object} action\n
 */\n
BouncingCritter.prototype.act = function(view) {\n
  if (view.look(this.direction) != ' ') {\n
    this.direction = view.find(' ') || 's';\n
  }
  \n\n
  return {type: 'move', direction: this.direction};\n
};
\n\n
/**\n
 * @param {Array} legend\n
 * @param {String} ch\n
 * @return {String} element\n
 */\n
function elementFromChar(legend, ch) {\n
  if (ch == ' ') {\n
    return null;\n
  }
  \n\n
  var element = new legend[ch]();\n
  element.originChar = ch;\n
  return element;\n
}
\n\n
/**\n
 * @param {Array} map\n
 * @param {Object} legend\n
 */\n
function World(map, legend) {\n
  var grid = new Grid(map[0].length, map.length);\n
  this.grid = grid;\n
  this.legend = legend;\n
  map.forEach(function(line, y) {\n
    for (var x = 0; x < line.length; x++) {\n
        grid.set(new Vector(x, y), elementFromChar(legend, line[x]));\n
    }\n
  });\n
}
\n\n
/**\n
 * @param {String} element\n
 * @return {String} cell\n
 */\n
function charFromElement(element) {\n
  if (element == null) {\n
    return ' ';\n
  } else {\n
    return element.originChar;\n
  }\n
}
\n\n
/**\n
 * @return {String}\n
 */\n
World.prototype.toString = function() {\n
  var output = ';\n
  for (var y = 0; y < this.grid.height; y++) {\n
    for (var x = 0; x < this.grid.width; x++) {\n
        var element = this.grid.get(new Vector(x, y));\n
        output += charFromElement(element);\n
    }\n
    output += '\n';\n
  }
  \n\n
  return output;\n
};
\n\n
function Wall() {}
\n\n
var world = new World(plan, {'#': Wall, 'o': BouncingCritter});"
