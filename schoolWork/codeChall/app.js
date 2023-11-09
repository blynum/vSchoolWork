// 11/3/2021 -“Find the Longest Word in the String”… return the length of the longest word in the sentence!
// There are 3 major approaches and the answer should be a number.

// const findLongestWord = (str) => {
//   let splitStr = str.split(" ");
//   let longestWord = splitStr.sort((a, b) => b.length - a.length);
//   return `${longestWord[0].length}`;
// };

// findLongestWord("The quick brown fox jumped over the lazy dog");

// console.log(findLongestWord("The quick brown fox jumped over the last dog"));

// function findLongest(str) {
//   let longestWord = str.split(" ").sort(function (a, b) {
//     return b.length - a.length;
//   });
//   return longestWord[0].length;
// }
// console.log(
//   findLongest(
//     "Lets find the longest word in this string value here, have you ever been to Mississippi?"
//   )
// );

// Coding challenge for today: Create a function that will return a Boolean specifying if a number is prime…

function isPrime(n) {
  if(n % n === 0)
  console.log("is a prime")
  return true;
}

console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(9, " is prime? ", isPrime(9));
