// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.


const numbers = [4, 7, 3, 1, 10]

function sortNumbers(numbers) {
    return numbers.sort(function (a, b) {
        return a - b;
    });
}

console.log(sortNumbers(numbers))


//Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

const strings = ['hello', 'world', 'javascript']
/*function convertToUppercase(strings) {
    return strings.map(strings.toUpperCase())

} */

/* let convertToUppercase = strings.map(function (index) {
    return strings.toUpperCase(index[0])
}) */

let convertToUppercase = strings.map(strings => strings.charAt(0).toUpperCase() + strings.slice(1))


console.log(convertToUppercase)