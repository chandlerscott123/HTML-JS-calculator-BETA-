
function add(number1, number2) {
  return number1+number2;
}

function multiply(c, d){
  return c*d;
}



const a = parseInt(window.prompt("ADD. Enter a number: "));
const b = parseInt(window.prompt("ADD. Enter another number: "));

const resultAdd= (add(a,b)).toString();
window.alert(a.toString() + " + " + b.toString() + " = " + resultAdd); 

// window.alert(add(a,b));

// const multA = parseInt(window.prompt("Multiply. Enter a number: "));
// const multB = parseInt(window.prompt("Multiply. Enter another number: "));
// window.alert(multiply(multA,multB));
