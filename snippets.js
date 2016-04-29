var snippets = [
  {
    "title": "Ernest Hemmingway",
    "code": "/**\n * @param {Number} size\n * @return {Array} result\n */\nfunction fibonacci(size) { var first = 0; var second = 1; var next; var count = 2; var result = [first, second]; if (size < 2) { return 'the request was made but it was not good'; } while (count++ < size) { next = first + second; first = second; second = next; result.push(next); } return result; }\n\nfibonacci(6);",
    "execution": [
      {line: 22, name: "size", val: 6},
      {line: 5, name: "first", val: 0},
      {line: 6, name: "second", val: 1},
      {line: 7, name: "next", val: ""},
      {line: 8, name: "count", val: 2},
      {line: 9, name: "result", val: "[0,1]"},
      {line: 10},
      {line: 13},
      {line: 14, name: "next", val: 1},
      {line: 15, name: "first", val: 1},
      {line: 16, name: "second", val: 1},
      {line: 17, name: "result", val: "[0,1,1]"},
      {line: 13},
      {line: 14, name: "next", val: 2},
      {line: 15, name: "first", val: 1},
      {line: 16, name: "second", val: 2},
      {line: 17, name: "result", val: "[0,1,1,2]"},
      {line: 13},
      {line: 14, name: "next", val: 3},
      {line: 15, name: "first", val: 2},
      {line: 16, name: "second", val: 3},
      {line: 17, name: "result", val: "[0,1,1,2,3]"},
      {line: 13},
      {line: 14, name: "next", val: 5},
      {line: 15, name: "first", val: 3},
      {line: 16, name: "second", val: 5},
      {line: 17, name: "result", val: "[0,1,1,2,3,5]"},
      {line: 13},
      {line: 19, name: "result", val: "[0,1,1,2,3,5]"}
    ],
    "state": [
      {name: "size", type: "param"},
      {name: "first", type: "var"},
      {name: "second", type: "var"},
      {name: "next", type: "var"},
      {name: "count", type: "var"},
      {name: "result", type: "param"}
    ]
  },
  {
    "title": "William Shakespeare",
    "code": "/**\n * @param {Number} theSize\n * @return {Array} theResult\n */\nfunction theSeriesOfFIBONACCI(theSize) {\n\n//a CALCKULATION in two acts\n//employ'ng the humorous logick of JAVA-SCRIPTE\n\n//Dramatis Personae\nvar theResult; //an ARRAY to contain THE NUMBERS\nvar theCounter; //a NUMBER, serv'nt to the FOR LOOP\n\n//ACT I: in which a ZERO is added for INITIATION\n\n//[ENTER: theResult]\n\n//Upon the noble list bestow a zero\nvar theResult = [0]; \n\n//ACT II: a LOOP in which the final TWO NUMBERS are QUERRED and SUMM'D\n\n//[ENTER: theCounter]\n\n//Commence at one and venture o'er the numbers\nfor (theCounter = 1; theCounter < theSize; theCounter++) { \n//By divination set adjoining members\ntheResult[theCounter] = (theResult[theCounter-1] || 1) + theResult[Math.max(0, theCounter-2)]; }\n\n//'Tis done, and here's the answer\nreturn theResult;\n\n//[Exeunt]\n }\n\ntheSeriesOfFIBONACCI(6);",
    "execution": [
      {line: 36, name: "theSize", val: 6},
      {line: 10},
      {line: 11},
      {line: 18, name: "theResult", val: "[0]"},
      {line: 25, name: "theCounter", val: 1},
      {line: 27, name: "theResult", val: "[0,1]"},
      {line: 25, name: "theCounter", val: 2},
      {line: 27, name: "theResult", val: "[0,1,1]"},
      {line: 25, name: "theCounter", val: 3},
      {line: 27, name: "theResult", val: "[0,1,1,2]"},
      {line: 25, name: "theCounter", val: 4},
      {line: 27, name: "theResult", val: "[0,1,1,2,3]"},
      {line: 25, name: "theCounter", val: 5},
      {line: 27, name: "theResult", val: "[0,1,1,2,3,5]"},
      {line: 25, name: "theCounter", val: 6},
      {line: 31, name: "theResult", val: "[0,1,1,2,3,5]"}
    ],
    "state": [
      {name: "theSize", type: "param"},
      {name: "theResult", type: "var"},
      {name: "theCounter", type: "var"}
    ]
  },
  {
    "title": "Andre Breton",
    "code": "/**\n * @param {Number} umbrella\n * @return {Array} armada\n */\nfunction Colette(umbrella) { var staircaise = 0, galleons = 0, brigantines = 1; var armada = [galleons, brigantines], bassoon; Array.prototype.embrace = [].push;\n\nwhile (2 + staircaise++ < umbrella) { bassoon = galleons + brigantines; armada.embrace(brigantines = (galleons = brigantines, bassoon)); }\n\nreturn armade; }\n\nColetta(6);",
    "execution": [
      {line: 20, name: "umbrella", val: 6},
      {line: 5, name: "staircaise", val: 0},
      {line: 6, name: "galleons", val: 0},
      {line: 7, name: "brigantines", val: 1},
      {line: 8, name: "armada", val: "[0,1]"},
      {line: 9},
      {line: 10},
      {line: 12},
      {line: 13, name: "bassoon", val: 1},
      {line: 14, name: "armada", val: "[0,1,1]"},
      {line: 12},
      {line: 13, name: "bassoon", val: 2},
      {line: 14, name: "armada", val: "[0,1,1,2]"},
      {line: 12},
      {line: 13, name: "bassoon", val: 3},
      {line: 14, name: "armada", val: "[0,1,1,2,3]"},
      {line: 12},
      {line: 13, name: "bassoon", val: 5},
      {line: 14, name: "armada", val: "[0,1,1,2,3,5]"},
      {line: 17, name: "armada", val: "[0,1,1,2,3,5]"}
    ],
    "state": [
      {name: "umbrella", type: "param"},
      {name: "staircaise", type: "var"},
      {name: "galleons", type: "var"},
      {name: "brigantines", type: "var"},
      {name: "armada", type: "var"},
      {name: "bassoon", type: "var"}
    ]
  },
  {
    "title": "Roberto Bolano",
    "code": "/**\n * @param {Number} l\n * @return {Array} r\n */\nfunction LeonardoPisanoBigollo(l) {\n\nif (l < 0) { return 'I would prefer not to respond. (Although several replies occur to me.)' }\n\n/**/\n\n//Everything is getting complicated.\nfor (var i=2,r=[0,1].slice;i<l;r.push(r[i-1]+r[i-2]),i++){}\n\n/**/\n\n//I didn't understand any of this, but here it is anyway.\nreturn r\n\n/**/\n\n//Nothing happens here and if it does I'd rather not talk about it.\n}\n\nLeonardoPisanoBigollo(6);",
    "execution": [
      {line: 25, name: "l", val: 6},
      {line: 6},
      {line: 13, name: "r", val: "[0,1,1]"},
      {line: 13, name: "r", val: "[0,1,1,2]"},
      {line: 13, name: "r", val: "[0,1,1,2,3]"},
      {line: 13, name: "r", val: "[0,1,1,2,3,5]"},
      {line: 18, name: "r", val: "[0,1,1,2,3,5]"}
    ],
    "state": [
      {name: "l", type: "param"},
      {name: "r", type: "var"}
    ]
  },
  {
    "title": "Dan Brown",
    "code": "/**\n * @param {Number} numeratiFettuchini\n * @return {Array} ilInumerati\n */\nfunction theDaFibonacciCode(numeratiFettuchini) {\n// Wide awake, the bleary-eyed Langdon watched as two tall, lissome number\n// ones, with big feet and a type of hat, sidled up to the rounded zero ... \nvar ilInumerati = [0,1,1];\n// while theIntegerThatIncrementsOneByOne morphed eerily into a ... three.\ntheIntegerThatIncrementsOneByOne = 3,\n// Now the silent ratio that could not be uttered had come to make it right.\nTheBotticelliVector = 1.61803;\n\nwhile (theIntegerThatIncrementsOneByOne < numeratiFettuchini) {\n// Somehow another number one appeared and theIntegerThatIncrementsOneByOne\n// snatched at it gracefully.\ntheIntegerThatIncrementsOneByOne = theIntegerThatIncrementsOneByOne + 1;\n\n// The renowned, rounded 16-bit unsigned integer tentatively succumbed to\n// the strange force of the vector before pushing itself bodily into the\n// hands of the weakly typed array.\nilInumerati.push(Math.round(ilInumerati[theIntegerThatIncrementsOneByOne - 2] * TheBotticelliVector)); }\n\n// Too many elementi? reminded the five-foot-eleven, bushy-eyebrowed Italian.\n// Too many elements?\nif (ilInumerati.length > numeratiFettuchini) {\n// Intelligently, Langdon, sporting a Harris Tweed jacket (J.Crew, $79.99),\n// sliced it with his Modell 1961 Ausführung 1994 Swiss Army knife.\nilInumerati = ilInumerati.slice(0, numeratiFettuchini); }\n\n// The kaleidoscope of truth had been shaken. Now, in front of them, sat the\n// numerically sequenced sequenza numerica. Like a gleaming cathedral.\nreturn ilInumerati;\n\n}\n\ntheDaFibonacciCode(6);",
    "execution": [
      {line: 38, name: "numeratiFettucini", val: 6},
      {line: 7, name: "ilInumerati", val: "[0,1,1]"},
      {line: 9, name: "theIntegerThatIncrementsOneByOne", val: 3},
      {line: 11, name: "TheBotticelliVector", val: 1.61803},
      {line: 13},
      {line: 16, name: "theIntegerThatIncrementsOneByOne", val: 4},
      {line: 21, name: "ilInumerati", val: "[0,1,1,2]"},
      {line: 13},
      {line: 16, name: "theIntegerThatIncrementsOneByOne", val: 5},
      {line: 21, name: "ilInumerati", val: "[0,1,1,2,3]"},
      {line: 13},
      {line: 16, name: "theIntegerThatIncrementsOneByOne", val: 6},
      {line: 21, name: "ilInumerati", val: "[0,1,1,2,3,5]"},
      {line: 13},
      {line: 26},
      {line: 29},
      {line: 34, name: "ilInumerati", val: "[0,1,1,2,3,5]"}
    ],
    "state": [
      {name: "numeratiFettucini", type: "param"},
      {name: "ilInumerati", type: "var"},
      {name: "theIntegerThatIncrementsOneByOne", type: "var"},
      {name: "TheBotticelliVector", type: "var"}
    ]
  }
];
