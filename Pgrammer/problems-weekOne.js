// // // Week One Day One Problem One

// // Given a variable name, please declare it in JavaScript and assign it, 
// the number 5. Then, write a statement that increments the value of the 
// variable by 1.

// // Write this in the form of a function named 'incrementVariable'. The 
// function should take one argument (the variable name as a string), you 
// should evaluate the string as a variable, perform the operations mentioned 
// above then finally return the final value of the variable.

function incrementVariable(incrementValue) {
    if (typeof incrementValue !== 'string') {
      console.log('Invalid input! Input should be a string.');
    }
    
    let variableObject = {};
    variableObject[incrementValue] = 5;
    variableObject[incrementValue]++;
  
    return variableObject[incrementValue];
  }
  
  console.log(incrementVariable('thisisastringofwords'));

