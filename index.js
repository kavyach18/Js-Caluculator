
const display= document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
  // This will show the input on the display 
}

function clearDisplay() {
  display.value="";
  // The button AC will clear the input from the display
}

function calculate() {
  try{
   display.value = eval(display.value);
    // eval() is used to evaluate the data and give optimal result
  }
  catch{
    display.value="Error";
  }   // when there is an error during calculation , the try-catch is used for error handling, if there is an error then it will display ERROR message else it'll give result
}

function clearDigit(){
  //let currentValue = display.value;
  let newValue = display.value.slice(0, -1);
  display.value = newValue;
  // The button C will clear a single digit from the display as this function is written in the button 'C'
}

function changeSign() {
 // let currentValue = parseFloat(display.value); //  This will convert the display value to a number
 // display.value = -currentValue; // This will change the sign by multiplying with -1
 display.value = display.value*(-1); // The value displayed will be multiplied with -1
}

function toPercentage() {
  //let currentValue = parseFloat(display.value); // This will convert the display value to a number
 // display.value = currentValue / 100; // This will convert to percentage by dividing by 100
 display.value= display.value/100;  //The value display will be divided by 100
}
