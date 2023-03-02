
function add(number1, number2) {
  return number1+number2;
}

function multiply(c, d){
  return c*d;
}

function tempConversion(temp){
  let convertedTemp = 0;
  let inputVal = window.prompt("Is your temperature in celsius or farenheit?");
 
  if(inputVal[0] === "C" || inputVal[0] === "c" ){
    window.alert("Converting to Farenheit.");
    convertedTemp = (temp*1.8 + 32)
    window.alert(temp.toString() + " degrees Celsius converts to " + convertedTemp.toString() + " degrees Farenheit.");
  }
  else if (inputVal[0] === "F" || inputVal[0] === "f")
  {
    window.alert("Converting to Celsius.");
    convertedTemp = (temp-32)*.5556;
    window.alert(temp.toString() + " degrees Farenheit converts to " + convertedTemp.toString() + " degrees Celsius.");
  } 
  else
    window.alert("Invalid Input. Temperatures must be in Celsius or Farenheit.");


}


// let userTemp = parseInt(window.prompt("Enter a temperature to convert: "));
// tempConversion(userTemp);


// const a = parseInt(window.prompt("ADD. Enter a number: "));
// const b = parseInt(window.prompt("ADD. Enter another number: "));

// const resultAdd= (add(a,b)).toString();
// window.alert(a.toString() + " + " + b.toString() + " = " + resultAdd); 

// window.alert(add(a,b));

// const multA = parseInt(window.prompt("Multiply. Enter a number: "));
// const multB = parseInt(window.prompt("Multiply. Enter another number: "));
// window.alert(multiply(multA,multB));

