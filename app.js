const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "~!@#$%^&*()_+`-={}|:\"<>?[]\\;'.,/";

function generatePossibleCharacters() {
  let possibleCharacters = "";
  if (document.getElementById("lowerCase").checked === true) {
    possibleCharacters += lowerCase;
  }
  if (document.getElementById("uppercase").checked === true) {
    possibleCharacters += upperCase;
  }
  if (document.getElementById("numbers").checked === true) {
    possibleCharacters += numbers;
  }
  if (document.getElementById("symbols").checked === true) {
    possibleCharacters += symbols;
  }

  let possibleCharactersArray = possibleCharacters.split("");
  charactersToAvoid = document.getElementById("charactersToAvoid").value;

  for (i = 0; i < charactersToAvoid.length; i++) {
    let index = possibleCharactersArray.indexOf(charactersToAvoid[i]);
    if (index !== -1) {
      possibleCharactersArray.splice(index, 1);
    }
  }
  return possibleCharactersArray;
}

function randomGenerator(possibleCharactersArray, lengthOfPassword) {
  let randomPassword = "";
  for (i = 0; i < lengthOfPassword; i++) {
    let index = Math.floor(Math.random() * possibleCharactersArray.length);
    randomPassword += possibleCharactersArray[index];
  }
  return randomPassword;
}

function createPassword() {
  randomPassword = randomGenerator(
    generatePossibleCharacters(),
    (lengthOfPassword = document.getElementById("lengthOfPassword").value)
  );
  if (randomPassword.length < 1 || randomPassword.slice(0, 9) === "undefined") {
    randomPassword =
      "You have to provide enough characters or length to generate a password!";
  }
  let messageOutput = document.getElementById("messageOutput");
  messageOutput.innerText = randomPassword;
}





// Future directions:
// 1.) Add a copy button to the clipboard
// 2.) Add letters specifically to use in the password (ex: Use aeiou)
// 3.) Extend gradient to full browser window
// 4.) add mobile css
// 5.) Add advice for a good password
// 6.) Add warning for weak password or add password strength indicator


function goodPassword() {
  message = "";
  if (lengthOfPassword < 12) {
    message += "A strong password should have 12 or more characters. ";
  } else if (document.getElementById("symbols").checked === false) {
    message += "Adding symbols to a password can make it stronger. ";
  }

  //contains letters and numbers
  return message;
}

