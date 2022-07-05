// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "+", "-", "/", "_", "=","`", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var noUpper = [];
var toUpper = function (capitalize) {
  return capitalize.toUpperCase();
}
upperCase = lowercase.map(toUpper);

var passwordLength;
var confirmLow;
var confirmUp;
var confirmSpec;
var confirmNum;
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// begin function for password
function generatePassword() {
  passwordLength = prompt("Choose between 8 and 128 characters for your password");
  console.log("Password length " + passwordLength);

if (!passwordLength) {
  alert("");
} else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("You must choose between 8 and 128 characters");
  console.log("password length " + passwordLength );
} else {
  confirmLow = confirm("Will the password contain lowercase letters?");
  console.log("lowercase " + confirmLow);
  confirmUp = confirm("Will the password contain uppercase letters?");
  console.log("uppercase " + confirmUp);
  confirmSpec = confirm("Will the password contain special characters?");
  console.log("special characters " + confirmSpec);
  confirmNum = confirm("Will the password contain numbers?");
  console.log("numbers " + confirmNum);
}
// no criteria met
if (!confirmLow && !confirmUp && !confirmSpec && !confirmNum) {
  userChoices = alert("You must select the proper criteria.");
}
// All options confirmed
else if (confirmLow && confirmUp && confirmNum && confirmSpec) {
  userChoices = lowercase.concat(upperCase, numbers, special);
  console.log(userChoices);
}
// three options confirmed
else if (confirmLow && confirmUp && confirmNum) {
  userChoices = lowercase.concat(upperCase, numbers);
  console.log(userChoices);
} else if (confirmLow && confirmUp && confirmSpec) {
  userChoices = lowercase.concat(upperCase, special);
  console.log(userChoices);
} else if (confirmLow && confirmNum && confirmSpec) {
  userChoices = lowercase.concat(numbers, special);
  console.log(userChoices);
} else if ( confirmUp && confirmNum && confirmSpec) {
  userChoices = uppercase.concat(numbers, special);
  console.log(userChoices);
}
// two options confirmed
else if (confirmLow && confirmUp) {
  userChoices = lowercase.concat(upperCase);
  console.log(userChoices);
} else if (confirmLow && confirmSpec) {
  userChoices = lowercase.concat(special);
  console.log(userChoices);
} else if (confirmLow && confirmNum) {
  userChoices = lowercase.concat(numbers);
  console.log(userChoices);
} else if (confirmUp && confirmNum) {
  userChoices = uppercase.concat(numbers);
  console.log(userChoices);
} else if (confirmUp && confirmSpec) {
  userChoices = uppercase.concat(special);
  console.log(userChoices);
} else if (confirmNum && confirmSpec) {
  userChoices = special.concat(numbers);
  console.log(userChoices);
}
// one option confirmed
else if (confirmLow) {
  userChoices = lowercase;
  console.log(userChoices);
} else if (confirmUp) {
  userChoices = uppercase;
  console.log(userChoices);
} else if (confirmSpec) {
  userChoices = special;
  console.log(userChoices);
} else if (confirmNum) {
  userChoices = numbers;
  console.log(userChoices);
};
passwordBlank = []
// for loop random
for (var i = 0; i < passwordLength; i++) {
  var allOptions = userChoices[Math.floor(Math.random() *userChoices.length)];
  passwordBlank.push(allOptions);
  console.log(allOptions);
}
// joining and returning the password
var password = passwordBlank.join("");
console.log("Your password is: " + password)
return password;
}
