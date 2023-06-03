//Generate a random password
//functions, conditionals, variables, for loops, concatenation (+ &+=)
//.concat()

//Create a function to prompt the user to enter the number of characters in the password, and other that ask the user if they want lowercase, uppercase, special characters and/or numbers.
//create if statements that combine the strings based on the user input

//create a function that uses a random function create a random index and a floor function to round that number up
//product a string to a random password 

//what happens if all are false


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];

//var combined = [];
//var outputString = "";

console.log('test');
function getUserInput() {


    var amount = Number(prompt('Please provide an amount')); //changes the string into a number
    var includeLowercase = confirm('Click OK to include lowercase letters.'); //prompts the user to confirm if they want lower. returns true or false
    var includeUppercase = confirm('Click OK to include uppercase letters.'); //prompts the user to confirm if they want upper. returns true or false
    var includeNumbers = confirm('Click OK to include numbers letters.'); //prompts the user to confirm if they want numbers. returns true or false
    var includeSpecialCharacters = confirm('Click OK to include special characters letters.'); //prompts the user to confirm if they want special Char. returns true or false

    //console.log(amount, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters );

    return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters]; //ex: return[50, true, true, true]
}

var choices = getUserInput();
console.log(choices);

var pass = ""; //holds the value for the generated password
var includeLowercase = choices[1]; //holds the boolean from the user input
var includeUppercase = choices[2];  //holds the boolean from the user input
var includeNumbers = choices[3];  //holds the boolean from the user input
var includeSpecialCharacters = choices[4];  //holds the boolean from the user input
var charAmount = choices[0];  //holds the number of characters desired in the password from the user input
var allPossibleChars = [];  //holds all the possible characters that the user selected for thier password

if (includeLowercase) { //adds the lowercase string to if true
    allPossibleChars = allPossibleChars.concat(lowercase);
}

if (includeUppercase) { //adds the uppercase string if true}
    allPossibleChars = allPossibleChars.concat(uppercase);
}

if (includeNumbers) {  //adds the numbers string if true}
    allPossibleChars = allPossibleChars.concat(numbers);
}

if (includeSpecialCharacters) {  //adds the special characters string if true}
    allPossibleChars = allPossibleChars.concat(specialCharacters);
}


for (var count = 0; count < charAmount; count++) {
    //Grab a random caharcter from the allPossibleChars array
    var randomNum = Math.random();  //generates a random number between 0-1
    var randomIndex = Math.floor(randomNum * allPossibleChars.length); //Rounds the random number down and mulitplies it by the numbers in the string of characters to get a whole number
    var randomChar = allPossibleChars[randomIndex]; //uses the above whole number to select a random character
    pass += randomChar; //addes the current random character to pass
}

console.log(pass); //Just for me to see the password in the console for testing

if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {  //checks to make sure at least one character type was sellected. 
    document.write('Please try again and select at least one character type. Thanks!');  //displays "try again" message since no character type was sellected. 
}else{  //displays password since at least one character type was selected

document.write("Your new password is:   "); //write a message to the screen

document.write(pass);   //displays the password
}




