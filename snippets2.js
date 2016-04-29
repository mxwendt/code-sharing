var snippets = [
  {
    "title": "Ernest Hemmingway",
    "code": "/**\n * @param {Number} size\n * @return {Array} result\n */\nfunction fibonacci(size) { var first = 0; var second = 1; var next; var count = 2; var result = [first, second]; if (size < 2) { return 'the request was made but it was not good'; } while (count++ < size) { next = first + second; first = second; second = next; result.push(next); } return result; }\n\nfibonacci(6);",
    "execution": [
      {line: 22, val: "()"},
      {line: 5, val: "0"},
      {line: 6, val: "1"},
      {line: 7, val: "u"},
      {line: 8, val: "2"},
      {line: 9, val: "[0,1]"},
      {line: 10, val: "f"},
      {line: 13, val: "t"},
      {line: 14, val: "1"},
      {line: 15, val: "1"},
      {line: 16, val: "1"},
      {line: 17, val: "[...,1]"},
      {line: 13, val: "t"},
      {line: 14, val: "2"},
      {line: 15, val: "1"},
      {line: 16, val: "2"},
      {line: 17, val: "[...,2]"},
      {line: 13, val: "t"},
      {line: 14, val: "3"},
      {line: 15, val: "2"},
      {line: 16, val: "3"},
      {line: 17, val: "[...,3]"},
      {line: 13, val: "t"},
      {line: 14, val: "5"},
      {line: 15, val: "3"},
      {line: 16, val: "5"},
      {line: 17, val: "[...,5]"},
      {line: 13, val: "f"},
      {line: 19, val: "[0,1,1,2,3,5]"}
    ]
  }
];
