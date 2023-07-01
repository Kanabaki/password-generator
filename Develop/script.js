// Assignment Code
// the passLength var on line 3 is a test that gets overwritten once the passlength prompt triggers
// the other variables are arrays containing the characters that the prompts will concat and save to the getPrompts function 

var passLength = 8;
var choiceArray = [''];
// 
var special = [' ' , '!' , '"' , '#' , '$' , '%' , '&' , "'" , '(' , ')' , '*' , '+' , ',' , '-' , '.' , '/' , ':' , ';' , '<' , '=' , '>' , '?' , '@' , '^' , '_' , "`" , "{" , '|' , "}" , '~', "[", "]", ];
var lower= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9',];

//These prompts and confirms set the password parameters and concatenates possible combinations to the choiceArray
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

//If you add this first parenthesis->(Math.floor(Math.random() * choiceArray.length)) , then it seems to only generate 1 character as a password,
//which we fixed by removing the parenthesis and we were able to generate a longer string based on the first prompt
//The function below randomizes indexes to return in a string
function generatePassword(){
  var password = "";
  for(var i = 0; i < passlength; i++) {
    var randomIndx = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray [randomIndx];
    
  }
  return password;
} 
//------------------------------------------------------------------------------------------------------------------
//Explanation of the Javascript

//First, a few var's and arrays are defined. Then a querySelector variable is defined and attached to the #generate class in the html which is 
//the button element. When the generate button  is "clicked", the addEventListener triggers the writePassword function. Then in the writePassword
// Function, a promptResults var and a passwordText var are defined. The promptResults var sends prompts and confirms for parameters and then 
//concatenates the desired parameters and returns it for later use. Then code moves down to the if else statements in the previous writePassword 
//Function and then calls the generatePassword Function. This block sets the password var to a string after using a for loop to randomly select 
//items in the choiceArray and concatenate them to the password, which is then returned back to the if statement. Following the code it is then 
//finally diplayed as a string and displayed in the #password element and a new passcode has been generated.