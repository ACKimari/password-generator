// Assignment Code
var userChoice = prompt("Choose a password length between 8 - 128")

for (i = 0; i >= 8; i++){

    Math.floor(Math.random())

}


var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "_!#$%&'*+,-./:<=>?@\^|~";


if (userChoice < 8 && userChoice > 128){
    alert("Please enter valid number");
} else if (userChoice >= 8 && userChoice <= 128) {
    var lowercase = window.confirm ("Would you like lowercase letters generated in your password?")
} if (userChoice !== true && userChoice == true) {
    var uppercase = window.confirm ("Would you like uppercase letters generated in your password?")
} if (userChoice !== true && userChoice == true){
    var numbers = window.confirm ("Would you like numbers generated in your password?")
} if (userChoice !== true && userChoice == true){
    var specialCharacters = window.confirm ("Would you like special characters generated in your password?")
} else if (userChoice !== lowercase && userChoice !== uppercase && userChoice !==numbers && userChoice !== specialCharacters){
    alert("Please choose at least one of the categories")
}


function generatePassword() {
    
    let  = document.getElementById("number").value;
}

var choices = ["lowercase", "uppercase", "numbers", "specialCharacters"]

var cpuChoice = [choices]

function randomPassword(cpuChoice){
    return cpuChoice[Math.floor(Math.random()*cpuChoice)]
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    
    passwordText.value = password;
    
}


// Add event listener to generate button
generateBtn.addEventListener("click", function (writePassword){
    var element = writePassword.apply;
    console.log(element);

        var state = element.getAttribute("data-state");
        console.log(state);

        // if ()
});
