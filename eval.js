function fibonacci(size) {
  var first = 0;
  var second = 1;
  var next;
  var count = 2;
  var result = [first, second];
  if (size < 2) {
    return "the request was made but it was not good";
  }
  while (count++ < size) {
    next = first + second;
    first = second;
    second = next;
    result.push(next);
  }
  return result;
}

function evalAndReturnX(code) {
  eval(code);
  return "weogh";
}

console.log(evalAndReturnX("var x = 2"));