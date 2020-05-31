// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var numeric = '0123456789';
var special = '!@#$%^&*()-=?.,<>/\\';
var passwordLength = 8;
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
  var output = ''
  var chosenCharList = ''

  choosePasswordOptions();

  var passwordLength = choosePasswordLength();

  alert("Parameters are acceptable, generating password.");

  chosenCharList += addCharlist();

  for (var i = 0; i < passwordLength; i++) {
    output += randomPasswordChar(chosenCharList);
    // console.log(output.length + " Characters out of " + passwordLength);
  }
  generatedYet = true;
  return output;

  function addCharlist() {
    var charList = '';
    
    if (desireLowerCase) {
      charList += alphabet;
      // console.log(chosenCharList);
      console.log('Lower case added');
    }
    else {
      console.log('No Lower Case');
    }
    if (desireUpperCase) {
      charList += alphabet.toUpperCase();
      // console.log(chosenCharList);
      console.log('Upper Case added');
    }
    else {
      console.log('No Upper Case');
    }
    if (desireNumeric) {
      charList += numeric;
      // console.log(chosenCharList);
      console.log('numbers added');
    }
    else {
      console.log('No numbers');
    }
    if (desireSpecial) {
      charList += special;
      // console.log(chosenCharList);
      console.log('specials added');
    }
    else {
      console.log('No specials');
    }
    return charList;
  }

  function choosePasswordOptions() {

    let validated = false;

    while (!validated) {
      // These prompts check which character types are desired.
      desireLowerCase = confirm("Do you want to include lower case characters?");
      desireUpperCase = confirm("Do you want to include UPPER CASE characters?");
      desireNumeric = confirm("Do you want to include numeric characters?");
      desireSpecial = confirm("Do you want to include special characters?");

      // Validation checking at least one character type is selected.
      if (desireLowerCase || desireUpperCase || desireNumeric || desireSpecial) {

        validated = true;

      }

      else {

        //returns to confirms for character types.
        alert("You need to choose at least one character type! \nWe'll have to start over.");

      }
    }
  }

  function choosePasswordLength() {

    let validated = false;
    let answer = 0;

    while (!validated) {

      //prompt for how long the password should be. Parsed as an int.
      answer = parseInt(prompt("How long should the password be? \n(Minimum 8 characters, Maximum 128 characters)"));


      // Validation for password length.
      if (answer > 128) {
        alert("That password would be too long!");
      }
      else if (answer < 8) {
        alert("That password would be too short!");
      }
      else {
        validated = true;
      }
    }
    return answer;
  }
}
