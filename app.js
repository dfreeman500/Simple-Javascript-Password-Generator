let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "1234567890"
let symbols = "~!@#$%^&*()_+`-={}|:\"<>?[]\;'.,"


let avoidCharacters = " "
// charactersToAvoid = document.getElementById("charactersToAvoid").value


function generatePossibleCharacters() {
    let possibleCharacters = ""
    if (document.getElementById('lowerCase').checked === true) {
        possibleCharacters += lowerCase
    }
    if (document.getElementById('uppercase').checked === true) {
        possibleCharacters += upperCase
    }
    if (document.getElementById('numbers').checked === true) {
        possibleCharacters += numbers
    }
    if (document.getElementById('symbols').checked === true) {
        possibleCharacters += symbols
    }

    let possibleCharactersArray = possibleCharacters.split('')
    charactersToAvoid = document.getElementById("charactersToAvoid").value

    console.log("this is possible characters: " + possibleCharacters)
    for (i = 0; i < charactersToAvoid.length; i++) {
        var index = possibleCharactersArray.indexOf(charactersToAvoid[i]);
        if (index !== -1) {
            possibleCharactersArray.splice(index, 1);
        }

    }
    console.log("this is characters to avoid " + charactersToAvoid)
    console.log("this is characters after avoiding removed " + possibleCharactersArray)

    let lengthOfPassword = document.getElementById("lengthOfPassword").value






    return possibleCharacters
}




