// code_1.js;
let xVal = 30;
let yVal = 24;

function HandleValue(OP) {
  switch (OP) {
    case "+":
      return xVal + yVal;
    case "-":
      return xVal - yVal;
    case "*":
      return xVal * yVal;
    case "/":
      return xVal / yVal;
    default:
      return "Give the correct operator";
      break;
  }
}

console.log("Addition result of X and Y =", HandleValue("+"));

console.log("Substraction result of X and Y =", HandleValue("-"));

console.log("Multiplication result of X and Y =", HandleValue("*"));

console.log("Division result of X and Y =", HandleValue("/"));

console.log("Division result of X and Y =", HandleValue("%"));
