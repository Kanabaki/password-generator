// Assignment code here
var passLength = 8;
var choiceArray = [''];

var special = [' ' , '!' , '"' , '#' , '$' , '%' , '&' , "'" , '(' , ')' , '*' , '+' , ',' , '-' , '.' , '/' , ':' , ';' , '<' , '=' , '>' , '?' , '@' , '^' , '_' , "`" , "{" , '|' , "}" , '~', "[", "]", ];
var lower= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9',];

// 1. Prompt user for pass criteria
//    a. pass length 8 < 128
//    b. lowercase,uppercase,numbers,special characters
// 2.Validate the input
// 3.Generate password based on the criteria
// 4.Display generated password on the page


function getPrompts() {
  choiceArray = [];
passlength = parseInt(prompt("Choose Password Length (8-128 characters)"));
if (isNaN(passlength) || passlength < 8 || passlength >128) {
  alert("Password length has to be a number from 8-128!");
  return false;
}

if (confirm("Would you like to include lowercase letters?")) {
  choiceArray = choiceArray.concat(lower);
}

if (confirm("Would you like to include uppercase letters?")) {
  choiceArray = choiceArray.concat(upper);
}

if (confirm("Would you like to include special characters?")) {
  choiceArray = choiceArray.concat(special);
}

if (confirm("Would you like to include numbers?")) {
  choiceArray = choiceArray.concat(number);
}
return true;
}

// Base------------------------------------------------------------------------------------------------------------
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var promptResults = getPrompts ();
  var passwordText = document.querySelector("#password");

if (promptResults) {
  var endPassword = generatePassword();

  passwordText.value = endPassword;
}else {
    passwordText.value = "";
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Base--------------------------------------------------------------------------------------------------------------

//If you add this parenthesis->(Math.floor(Math.random() * choiceArray.length)) , then it seems to only generate 1 character, 
//which we fixed by removing the parenthesis and we were able to generate a longer string
function generatePassword(){
  var password = "";
  for(var i = 0; i < passlength; i++) {
    var randomIndx = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray [randomIndx];
    
  }
  return password;
} 
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page