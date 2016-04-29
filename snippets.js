var snippets = [
  {
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
  }
  // ,
  // {
  //   "code": "/**\n * @param {Number} theSize\n * @return {Array} theResult\n */\nfunction theSeriesOfFIBONACCI(theSize) {\n\n//a CALCKULATION in two acts\n//employ'ng the humorous logick of JAVA-SCRIPTE\n\n//Dramatis Personae\nvar theResult; //an ARRAY to contain THE NUMBERS\nvar theCounter; //a NUMBER, serv'nt to the FOR LOOP\n\n//ACT I: in which a ZERO is added for INITIATION\n\n//[ENTER: theResult]\n\n//Upon the noble list bestow a zero\nvar theResult = [0]; \n\n//ACT II: a LOOP in which the final TWO NUMBERS are QUERRED and SUMM'D\n\n//[ENTER: theCounter]\n\n//Commence at one and venture o'er the numbers\nfor (theCounter = 1; theCounter < theSize; theCounter++) { \n//By divination set adjoining members\ntheResult[theCounter] = (theResult[theCounter-1] || 1) + theResult[Math.max(0, theCounter-2)]; }\n\n//'Tis done, and here's the answer\nreturn theResult;\n\n//[Exeunt]\n }\n\ntheSeriesOfFIBONACCI(6);",
  //   "execution": [36, 10, 11, 18, 25, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25, 31],
  //   "state": []
  // },
  // {
  //   "code": "/**\n * @param {Number} umbrella\n * @return {Array} armada\n */\nfunction Colette(umbrella) { var staircaise = 0, galleons = 0, brigantines = 1; var armada = [galleons, brigantines], bassoon; Array.prototype.embrace = [].push;\n\nwhile (2 + staircaise++ < umbrella) { bassoon = galleons + brigantines; armada.embrace(brigantines = (galleons = brigantines, bassoon)); }\n\nreturn armade; }\n\nColetta(6);",
  //   "execution": [20, 5, 6, 7, 8, 9, 10, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 17],
  //   "state": []
  // },
  // {
  //   "code": "/**\n * @param {Number} l\n * @return {Array} r\n */\nfunction LeonardoPisanoBigollo(l) {\n\nif (l < 0) { return 'I would prefer not to respond. (Although several replies occur to me.)' }\n\n/**/\n\n//Everything is getting complicated.\nfor (var i=2,r=[0,1].slice;i<l;r.push(r[i-1]+r[i-2]),i++){}\n\n/**/\n\n//I didn't understand any of this, but here it is anyway.\nreturn r\n\n/**/\n\n//Nothing happens here and if it does I'd rather not talk about it.\n}\n\nLeonardoPisanoBigollo(6);",
  //   "execution": [25, 6, 13, 13, 13, 13, 18],
  //   "state": []
  // },
  // {
  //   "code": "/**\n * @param {Number} numeratiFettuchini\n * @return {Array} ilInumerati\n */\nfunction theDaFibonacciCode(numeratiFettuchini) {\n// Wide awake, the bleary-eyed Langdon watched as two tall, lissome number\n// ones, with big feet and a type of hat, sidled up to the rounded zero ... \nvar ilInumerati = [0,1,1];\n// while theIntegerThatIncrementsOneByOne morphed eerily into a ... three.\ntheIntegerThatIncrementsOneByOne = 3,\n// Now the silent ratio that could not be uttered had come to make it right.\nTheBotticelliVector = 1.61803;\n\nwhile (theIntegerThatIncrementsOneByOne < numeratiFettuchini) {\n// Somehow another number one appeared and theIntegerThatIncrementsOneByOne\n// snatched at it gracefully.\ntheIntegerThatIncrementsOneByOne = theIntegerThatIncrementsOneByOne + 1;\n\n// The renowned, rounded 16-bit unsigned integer tentatively succumbed to\n// the strange force of the vector before pushing itself bodily into the\n// hands of the weakly typed array.\nilInumerati.push(Math.round(ilInumerati[theIntegerThatIncrementsOneByOne - 2] * TheBotticelliVector)); }\n\n// Too many elementi? reminded the five-foot-eleven, bushy-eyebrowed Italian.\n// Too many elements?\nif (ilInumerati.length > numeratiFettuchini) {\n// Intelligently, Langdon, sporting a Harris Tweed jacket (J.Crew, $79.99),\n// sliced it with his Modell 1961 Ausführung 1994 Swiss Army knife.\nilInumerati = ilInumerati.slice(0, numeratiFettuchini); }\n\n// The kaleidoscope of truth had been shaken. Now, in front of them, sat the\n// numerically sequenced sequenza numerica. Like a gleaming cathedral.\nreturn ilInumerati;\n\n}\n\ntheDaFibonacciCode(6);",
  //   "execution": [38, 7, 9, 11, 13, 16, 21, 13, 16, 21, 13, 26, 29, 34],
  //   "state": []
  // }
];
