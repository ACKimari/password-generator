var characters = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "_!#$%&'*+,-./:<=>?@\^|~";

function passwordLength() {
    length = prompt("Choose a number between 8 and 128");
    if (length < 8 || length > 128) {
        passwordLength()
    }
    return length;
}


function generatePassword() {
    var passwordNum = passwordLength()
    if (prompt("Would you like lowercase letters generated in your password? (Y/N)") === "Y") {
        characters += lowercase;
        console.log(characters)
    } if (prompt("Would you like uppercase letters generated in your password? (Y/N)") === "Y") {
        characters += uppercase;
        console.log(characters)
    } if (prompt("Would you like numbers generated in your password? (Y/N)") === "Y") {
        characters += numbers;
        console.log(characters);
    } if (prompt("Would you like special characters generated in your password? (Y/N)") === "Y") {
        characters += specialCharacters;
        console.log(characters);
    } if (characters == "") {
        alert("Please choose at least one of the categories")
    } else {
        var password = "";
        for (let i = 1; i < parseInt(passwordNum) + 1; i++) {
            console.log(i);
            password += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
            console.log(password);
        }
        return password
    }
    // return ""
};

function displayPassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    if (password != undefined) {
        passwordText.value = password;
    }
};

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", displayPassword);

