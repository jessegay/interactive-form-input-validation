/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Form Input Validation - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";


/* Variable to store form inputs - You'll use these in the functions below' */
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const framework = document.querySelector("#framework");
const languagesContainer = document.querySelector("#radio-wrapper");
const languagesInputs = document.querySelectorAll("#languages input");

// YOUR CODE GOES HERE!!! Do the steps in the functions below to complete this challenge

/* Helper function to validate name input */
const nameValidator = () => {

  // 1. Create a variable to store the `.value` of the `name` input and log it out
  const userName = name.value;
  console.log(userName);
  // 2. Call this `nameValidator` function in the submit listener below
    // To test it, type something in the name field on the form and click the submit button

  // 3. Create an if/else statement
    // If the name value.length is greater than zero, set the name input's border to white and return true
    if (userName.length > 0) {
      name.style.borderColor = 'white';
      //alert ("You've entered a name");
      return true;
      
    }
    // Else, set the name input's border to red and return false
    else {
      name.style.borderColor = 'red';
      //alert ("Please enter a name");
      return false;
    }
}


/* Helper function to validate email input */
const emailValidator = () => {

  // 1. Create a variable to store the `.value` of the `email` input and log it out
  const emailValue = email.value;
  console.log(emailValue);
  // 2. Call this `emailValidator` function in the submit listener below 
    // To test it, type something in the email field on the form and click the submit button

  // 3. Create a variable to store the .indexOf of the `@` in the email value
  const indexOfAt = emailValue.indexOf('@');
  // 4. Create a variable to store the .lastIndexOf of the `.` in the email value
  const lastIndexOfDot = emailValue.lastIndexOf('.');
  // 5. Log out the two variables above
  console.log(indexOfAt);
  console.log(lastIndexOfDot);
  // 5. Create an if/else statement
    // If the `@` index is greater than one AND the `.` last index is greater than the `@` index + 1, 
      // Set the email's border to white and return true
      // Else, set the email's border to red and return false

      if (indexOfAt > 1 && lastIndexOfDot > (indexOfAt + 1)) {
        email.style.borderColor = 'white';
        return true;
      } else {
        email.style.borderColor = 'red';
        return false;
      }
    
}


/* Helper function to validate framework element */
const frameworkValidator = () => {

  // 1. Create a variable to store the `.value` of the `framework` element and log it out
  const frameworkValue = framework.value;
  console.log(` This is frameworkValue ${frameworkValue}`);

  // I want to get the default value of the framework select to use in the if/else below.
  const defaultSelectedFramework = () => {
    for (let index = 0; index < framework.length; index++) {
    const option = framework[index];
    if (option.defaultSelected) {
      console.log(`${option.value} is the .defaultSelected option`)
      return option.value;
      }
    }
  }
 
  // 2. Call this `frameworkValidator` function in the submit listener below 
    // And then click the submit button to test it

  // 3. Create an if/else statement
    // If the framework work value does not equal the default value of 'Choose framework', 
    // FIXME: How do I get the default value? I tried getting it via my defaultSelectedFramework() function on 87. Doesn't work. Feels very kludgy.
    // Is there a simpler way,e.g. like framework.option.defaultSelected () ?

      // Set the framework element's border to white and return true
    // Else, set the framework element's border to red and return false
    if (frameworkValue != defaultSelectedFramework) {
      framework.style.borderColor = 'white';
      return true;
    } else {
      framework.style.borderColor = 'red';
      return false;
    }
}


/* Helper function to validate language section */
const languageValidator = () => {

  // 1. Log out the `languagesContainer` and `languagesInputs` variables from above
  console.log(languagesContainer);
  console.log(languagesInputs);

  // 2. Call this `languageValidator` function in the submit listener below 
    // And then click the submit button to test it

  // 3. Loop over the languagesInputs
    // Create an if statement
      // If `(languagesInputs[i].checked)`, set the languagesContainer section's border to white and return true
  for (let i = 0; i < languagesInputs.length; i++) {
    if (languagesInputs[i].checked) {
      languagesContainer.style.borderColor = 'white';
      return true;
    }
  }
  // 4. After the loop, set the border to red and return false
    // Note that this code after the loop will only run if the loop concludes without finding a clicked language
  languagesContainer.style.borderColor = 'red';
  return false;
}


/* Real time validation */
// To add real time validation, use the .addEventListener() method on the form elements/sections
// Use events like `keyup`, `blur` and/or `mouseout`
// As the callback, use the validation functions above, but remember, 
// Don't use parens when passing a reference to a function as a callback  


/* Submit listener on the form element */
form.addEventListener('submit', (e) => {
  nameValidator();
  emailValidator();
  frameworkValidator();
  languageValidator();
  // 1. Create an if statement
    // If `(!nameValidator())` call `e.preventDefault();` 
      // And log out a message saying this validator prevented submission
  if (!nameValidator()) {
    e.preventDefault();
    console.log('There is a problem with the name input which prevented submission');
  }
  // 2. Repeat the above step for the rest of your validation functions
  else if (!emailValidator()) {
    e.preventDefault();
    console.log('There is a problem with the email input which prevented submission');
  }
  else if (!frameworkValidator()) {
    e.preventDefault();
    console.log('There is a problem with the framework input which prevented submission');
  }
  else if (!languageValidator()) {
    e.preventDefault();
    console.log('There is a problem with the lanaguage validator input which prevented submission');
  }
 
 
 
  else {
    console.log("inputs looks good");
  }
  // And feel free to comment out or delete any log statements from the validation functions above


  // Submit handler test log - Feel free to delete this or comment it out
  //console.log('Submit handler is functional!');
});