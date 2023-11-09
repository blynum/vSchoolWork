
var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
console.log(input)
var shift = parseInt(readline.question('How many letters would you like to shift? '))


let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newAlpha = letterArr.split('');

const cipher = (input, shift) => {
    // Takes user input as a string and changes it to an array.
    const inputText = input.split('')
    // Map user inputArr and encrypt inputText by each letter that matches a letter in the letterArr
    const encryptedText = inputText.map(letter => {
        // check if letter is in the letter arr and
        const checkLetter = newAlpha.some(item => item === letter)
        if (letter === ' ') {
            return 32
        } else if (checkLetter === true) {
            return letter.charCodeAt() + shift
        } else {
            return letter.charCodeAt()
        }
    })
    // Maps array and turns the character code back to the character
    const hideText = encryptedText.map(letter => {
        if (letter > 122) {
            letter = letter - 26
        }
        return String.fromCharCode(letter)
    })
    // Joins the letters back to one string
    const hiddenText = hideText.join('')
    // Returns the ciphered phrase
    return hiddenText
}
console.log(cipher(input, shift)) 