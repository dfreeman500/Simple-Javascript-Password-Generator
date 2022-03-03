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

    // console.log("this is possible characters: " + possibleCharacters)
    for (i = 0; i < charactersToAvoid.length; i++) {
        var index = possibleCharactersArray.indexOf(charactersToAvoid[i]);
        if (index !== -1) {
            possibleCharactersArray.splice(index, 1);
        }

    }
    // console.log("this is characters to avoid " + charactersToAvoid)
    // console.log("this is characters after avoiding removed " + possibleCharactersArray)


    // if (possibleCharactersArray.length<1){
    //     alert("You have to provide some characters in order for a password to be created!")
    //     return "You have to provide some characters in order for a password to be created!"
    // }


    return possibleCharactersArray
}




// Copy Button

function randomGenerator(possibleCharactersArray,lengthOfPassword){
    
    console.log(possibleCharactersArray)
    let randomPassword=""
    for (i=0; i<lengthOfPassword; i++){
        let index = Math.floor(Math.random()*possibleCharactersArray.length)
        randomPassword += possibleCharactersArray[index]
        console.log("i value: " + i+ ".index: "+ index+ ". item in array "+ possibleCharactersArray[index])

    }
    // if (randomPassword.length<1){
    //     alert("Your current settings do not allow for generation of a password with any length!")
    // }
    return randomPassword
}
// randomGenerator()

function createPassword(){
    randomPassword = randomGenerator(generatePossibleCharacters(), lengthOfPassword = document.getElementById("lengthOfPassword").value)
    if (randomPassword.length<1 || randomPassword.slice(0,9)==="undefined"){
        randomPassword= "You have to provide enough characters or length to generate a password!"
    }
    console.log(randomPassword)
    console.log("udnefined: " + randomPassword.slice(0,9))
    let messageOutput = document.getElementById("messageOutput")
    messageOutput.innerText = randomPassword
}