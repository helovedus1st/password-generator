//character set arrays
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


//generated arrays


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genPwd();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//function to generate password

function genPwd() {


  //prompt for size of pwd between 8 and 128 characters and qualify that password length input is usable and store as variable (or re-run prompt)

  var pwdLength = parseInt(prompt("Enter your desired length of your password.\nYou can choose a number between 8-128."))
    if (Number.isInteger(pwdLength) && (pwdLength > 7) && (pwdLength < 129)) {
      console.log("I am an usable password length.")
    } else { alert("You must enter a numeral between 8-128.")
      return writePassword
    }
  console.log(pwdLength)




  //prompt for selection of password character types (lowercase, uppercase, numerical, and special characters)



  //qualify that at least one character type has been selected or re-run prompt



  //concatenate all arrays that should be included in possible pwd characters into new array



  //randomly select user-determined number of pwd characters and combine into new array



  //qualify that pwd array contains at least one of each user-selected character types



  //display generated password

}