// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var special = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
var passwordLength = 8;
var desireLowerCase = true;
var desireUpperCase = true;
var desireNumeric = true;
var desireSpecial = true;

// charcode reference
// 32 to 47 is some special characters
// 48 to 57 is numbers
// 58 to 64 is some more special characters
// 65 to 90 is upper case letters
// 91 to 96 is some more special characters
// 97 to 122 is lower case letters
// 123 to 126 is the last of the special characters

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
  var output = '', chosenCharList = '', charListTypes = '';

  // this function call brings up a series of confirm prompts for the password options.
  choosePasswordOptions();

  // this function call brings up a prompt which returns an int number
  passwordLength = choosePasswordLength();

  // this function call returns a string of all selected character types.
  chosenCharList += addCharList();

  alert(`Generating password ${passwordLength} characters long.\nIncluding:\n${charListTypes}`);

  // This loop generates the password
  for (var i = 0; i < passwordLength; i++) {
    output += randomPasswordChar(chosenCharList);
    // console.log(output.length + " Characters out of " + passwordLength);
  }
  return output;



  // this function call returns a string of all desired character types.
  function addCharList() {
    var charList = '';

    if (desireLowerCase) {
      charList += alphabet;
      charListTypes += ' Lower Case\n'
      console.log('Lower case added');
    }
    else {
      console.log('No Lower Case');
    }
    if (desireUpperCase) {
      charList += alphabet.toUpperCase();
      charListTypes += ' Upper Case\n';
      console.log('Upper Case added');
    }
    else {
      console.log('No Upper Case');
    }
    if (desireNumeric) {
      charList += numbers;
      charListTypes += ' Numeric Characters\n';
      console.log('numbers added');
    }
    else {
      console.log('No numbers');
    }
    if (desireSpecial) {
      charList += special;
      charListTypes += ' Special Characters\n';
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
      desireLowerCase = confirm(`Do you want to include lower case characters?\n\nChoices made:\n Lower case: <--\n Upper case:\n Numeric:\n Special:`);
      desireUpperCase = confirm(`Do you want to include UPPER CASE characters?\n\nChoices made:\n Lower case: ${yesNo(desireLowerCase)}\n Upper case: <--\n Numeric:\n Special:`);
      desireNumeric = confirm(`Do you want to include numeric characters?\n\nChoices made:\n Lower case: ${yesNo(desireLowerCase)}\n Upper case: ${yesNo(desireUpperCase)}\n Numeric: <--\n Special:`);
      desireSpecial = confirm(`Do you want to include special characters?\n\nChoices made:\n Lower case: ${yesNo(desireLowerCase)}\n Upper case: ${yesNo(desireUpperCase)}\n Numeric: ${yesNo(desireNumeric)}\n Special: <--`);

      // Validation checking at least one character type is selected.
      if (desireLowerCase || desireUpperCase || desireNumeric || desireSpecial) {
        validated = true;
      }
      else {
        //returns to confirms for character types.
        alert("You need to choose at least one character type! \nWe'll have to start over.");
      }
    }
    // function to parse a boolean into yes/no
    function yesNo(input) {
      if (input) { return 'yes' }
      else { return 'no' }
    }
  }

  function choosePasswordLength() {

    var validated;
    var answer;

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
