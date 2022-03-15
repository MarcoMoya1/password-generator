// Assignment code here

 function generatePassword(){
     let passwordLength =prompt('How many Characters do you want your password to be?');
     if (passwordLength<8 || passwordLength>128 ) {
         alert('Please choose a number between 8 and 128.');
         return generatePassword();
     }
    let hasNumbers = confirm("Would you like to allow numbers in the password?");
    const numbers= [1,2,3,4,5,6,7,8,9,0];
    let hasSymbols = confirm("Would you like to allow symbols in the password?");
    const symbols=["!", "@", "#", "$", "%", "^", "&", "*",];
    let hasLowwerCase = confirm("Would you like to allow lowwercase letters in the password?");
    const lowwerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    let hasUpperCase = confirm("Would you like to allow uppercase letters in the password?");
    const upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    let userChoice=[]
    let finalPassword =[]

    if (hasNumbers){
        userChoice =userChoice.concat(numbers);
        console.log(userChoice);
    }
    
    if (hasSymbols){
        userChoice =userChoice.concat(symbols);
        console.log(userChoice);
    }

    if (hasLowwerCase){
        userChoice =userChoice.concat(lowwerCase);
        console.log(userChoice);
    }
    if (hasUpperCase){
        userChoice =userChoice.concat(upperCase);
        console.log(userChoice);
    }

    for(var i = 0; i< passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * userChoice.length);
    
        finalPassword.push(userChoice[randomNumber]);
    }
    return finalPassword.join("");
 }

 
 // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', () => {
  
}) 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);