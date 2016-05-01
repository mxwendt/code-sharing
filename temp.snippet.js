var snippets = [
  {
    uid: "uid_6",
    ractive: true, // TODO: Remove when all templates are update with ractive templates
    code:

    "/**\n" +
    " * @param {Object} view.look = a | b | c\n" +
    " * @return {Object} action\n" +
    " */\n" +
    "Class.prototype.method = function(param) {\n" +
      "if (a !== b) {\n" +
        "do;\n" +
      "}\n\n" +
      "return this;\n" +
    "};",

    execution: [5, 6, 9],
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
        "</li>" +
      "</ol>" +

      "<ol class='stateParams'>" +
        "<li>" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
        "</li>" +
      "</ol>",

      data: {
        step: 0,
        prop: {},
        param: {},
        vals: {},
        ret: {}
      }
    },
    state: {
      template:

      "<ol class='stateProps'>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.width" +
          "<input type='range' min='0' max='10' value={{prop.width.val}}> {{prop.width.val}}" +
        "</li>" +
        "<li>" +
          "has <span class='typ'>Grid</span>.height" +
          "<input type='range' min='0' max='10' value={{prop.height.val}}> {{prop.height.val}}" +
        "</li>" +
      "</ol>" +

      "<ol class='stateParams'>" +
        "<li>" +
          "uses <span class='com'>x</span>" +
          "<input type='range' min='0' max='10' value={{x.val}}>" +
        "</li>" +
        "<li>" +
          "uses <span class='com'>array</span>" +
          "<input type='text' value={{array.val}}>" +
        "</li>" +
      "</ol>" +

      "<ol class='stateValues'>" +
        "<li>" +
          "sets <span class='typ'>Class</span>.prop to <span class='stateVal'>{{prop.timed(1)}}</span>" +
        "</li>" +
      "</ol>" +

      "<ol class='stateReturns'>" +
        "<li>" +
          "returns <span class='stateVal'>{{action.timed(2)}}</span>" +
        "</li>" +
      "</ol>",

      data: {
        prop: {
          val: 0,
          timed: function(param) {
            if (document.querySelector('#uid_10').querySelector('.timeSlider').value < param) return '';
            return this.val;
          }
        }
      }
    }
  }
];
