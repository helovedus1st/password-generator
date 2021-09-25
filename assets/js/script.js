//character set arrays
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var combinedArray = []

//generated arrays




//global functions

//function determine password length


function userInputCompile() {
    //prompt for size of pwd between 8 and 128 characters and qualify that password length input is usable and store as variable (or re-run prompt)

  var pwdLength = parseInt(prompt("Enter your desired length of your password.\nYou can choose a number between 8-128."))
  if (!Number.isInteger(pwdLength) || (pwdLength < 8) || (pwdLength > 128)) {
    alert("You must enter a numeral between 8-128.");
    console.log("I am NOT an usable password length.")

    //if input is not usable, the user is brought back to the prompt

    writePassword()

    //if input is usable, the user can proceed

  } else {
    console.log("I AM an usable password length.")
    console.log(pwdLength)
  }

    //prompt for selection of password character types (lowercase, uppercase, numerical, and special characters)
    // then enter each selected array into a combined array for selecting the the password from

  var specialSelect = confirm("Would you like your password to contain special characters?")
  if (specialSelect) {
    combinedArray = combinedArray.concat(specialArray);
    console.log(combinedArray)
  }

  var numbSelect = confirm ("Would you like your password to contain numbers?")
  if (numbSelect) {
    combinedArray = combinedArray.concat(numbArray);
    console.log(combinedArray)
  }

  var upperSelect = confirm ("Would you like your password to contain uppercase letters?")
  if (upperSelect) {
    combinedArray = combinedArray.concat(uppercaseArray);
    console.log(combinedArray)
  }

  var lowerSelect = confirm ("Would you like your password to contain lowercase letters?")
  if (lowerSelect) {
    combinedArray = combinedArray.concat(lowercaseArray);
    console.log(combinedArray)
  }

  //if no selection is made, the user is brought back to the prompt
  if (!specialSelect && !numbSelect && !upperSelect && !lowerSelect) {
    alert("You must choose at least one character type.\nClick OK to start over.")
    genPwd()
  }

  //randomly select user-determined number of pwd characters from concatenated array
  finalizePwd()
  function finalizePwd() {
  let pwdArray = combinedArray.sort(() => 0.5 - Math.random()).slice(0,pwdLength)
  console.log(pwdArray);
  }
  
  if (specialSelect) {
  var specialfound = pwdArray.some(r=> specialArray.indexOf(r) >= 0)
  console.log(specialfound)
  } else {
    finalizePwd()
  }

  if (numbSelect) {
  var numbfound = pwdArray.some(r=> numbArray.indexOf(r) >= 0)
  console.log(numbfound)
} else {
  finalizePwd()
}

  if (upperSelect) {
  var upperfound = pwdArray.some(r=> uppercaseArray.indexOf(r) >= 0)
  console.log(upperfound)
} else {
  finalizePwd()
}

  if (lowerSelect) {
  var lowerfound = pwdArray.some(r=> lowercaseArray.indexOf(r) >= 0)
  console.log(lowerfound)
} else {
  finalizePwd()
}
console.log("this is the final" + pwdArray);




}





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
  var userOptions = userInputCompile() 














  //qualify that pwd array contains at least one of each user-selected character types



  //display generated password

}