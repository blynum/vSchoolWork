// Filter Anagrams


function filterAnagrams(arr, target) {
    // Function to sort the characters of a word
    const sortWord = (word) => word.split('').sort().join('');

    // Sort the target word for comparison
    const sortedTarget = sortWord(target);

    // Filter the array to find anagrams
    return arr.filter(word => sortWord(word) === sortedTarget);
}

// Test the function
const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);

console.log(anagrams); // Output: ['listen', 'silent']


//Sort by Multiple Criteria

function sortByMultipleCriteria(people) {
    return people.sort((a, b) => {
        if (a.age === b.age) {
            // If ages are equal, sort by name
            return a.name.localeCompare(b.name);
        } else {
            // Otherwise, sort by age
            return a.age - b.age;
        }
    });
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]

