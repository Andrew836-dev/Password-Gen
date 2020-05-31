// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var numeric = '0123456789';
var special = '!@#$%^&*()-=/?.>,\\<';
var desireLowerCase = true;
var desireUpperCase = true;
var desireNumeric = true;
var desireSpecial = true;
var custom = '';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function that will return a random character from an input string
function randomPasswordChar(inputString) {

  return inputString[Math.floor(Math.random() * inputString.length)];

}

function generatePassword() {
  //Declaring local variables
  let validated = false;
  let charList = '';
  let passwordLength = 0;

  // prompts encapsulated in a while loop.
  while (!validated) {

    // These prompts check which character types are desired.
    desireLowerCase = confirm("Do you want to include lower case characters?");
    desireUpperCase = confirm("Do you want to include UPPER CASE characters?");
    desireNumeric = confirm("Do you want to include numeric characters?");
    desireSpecial = confirm("Do you want to include special characters?");
    
    // Validation checking at least one character type is selected.
    if (desireSpecial || desireUpperCase || desireNumeric || desireSpecial) {

      // Nested while loop with same escape as outer loop to reduce backtracking for the user.
      while (!validated) {

        //prompt for how long the password should be. Parsed as an int.
        passwordLength = parseInt(prompt("How long should the password be? \n(Minimum 8 characters, Maximum 128 characters)"));

        // Validation for password length.
        if (passwordLength > 128) {
          alert("Your password is too long!");
        }
        else if (passwordLength < 8) {
          alert("Your password is too short!");
        }
        else {

          // Generation will begin if this point is reached.
          validated = true;
        }
      }
    }
    else {

      //returns to confirms for character types.
      alert("You need to choose at least one character type! \nWe'll have to start over.");
    }
  }
  // End of while loops.
  alert("Parameters are acceptable, generating password.");

  if (desireLowerCase) {
    charList.toString() += alphabet;
    console.log(charList);
    console.log('Lower case added');
  }
  else {
    console.log('No Lower Case');
  }
  if (desireUpperCase) {
    charList.toString() += alphabet.toUpperCase();
    console.log(charList);
    console.log('Upper Case added');
  }
  else {
    console.log('No Upper Case');
  }
  if (desireNumeric) {
    charList.toString() += numeric;
    console.log(charList);
    console.log('numbers added');
  }
  else {
    console.log('No numbers');
  }
  if (desireSpecial) {
    charList.toString() += special;
    console.log(charList);
    console.log('specials added');
  }
  else {
    console.log('No specials');
  }

  // if (output === null) {
  //   alert("Please choose at least one option.")
  //   return generatePassword();
  // }
  // else {
  //   return output;
  // }
  return charList.toString();
}
