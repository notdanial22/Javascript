// Array 

//  array from iterable objects like strings
const StrArr = Array.from('hello');
console.log(StrArr) // ['h', 'e', 'l', 'l', 'o']

// an array from arguments provided
const arr1 = Array.of(1, 2, 3);
console.log(arr1); // [1, 2, 3]

const arr3 = [1, 2]
arr3.push(3) // Adds 3
console.log(arr3) // [1, 2, 3]
arr3.pop() // Removes 3
console.log(arr3)


const arr4 = [2, 3, 5, 7,4]
arr4.unshift(1); // Adds 1
console.log(arr4);
arr4.shift(); // Removes 1
console.log(arr4);

// mapping function creates a new array and applying function to each element
const squaredArray = arr4.map(x => x**2)

console.log(squaredArray);

// filtering function creates a new array with elements that pass the test implemented by provided function
const filteredArray = arr4.filter(x => x % 2 === 0 )

console.log(filteredArray);

// reduce function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

const sum = arr4.reduce((acc, curr) => acc + curr, 0)

console.log(sum)

// find 

console.log(arr4.find(x => x / 7 == 1 ));


console.log(arr4.includes(2))

console.log(arr1.concat(arr4))


console.log(arr4.slice(1, 3)) // [3, 5]

console.log(arr4.sort((a, b) => a - b)) // [ 2, 3, 4, 5]

arr4.splice(0, 1, 'a', 'b') // Removes 2 elements starting at index 0 and inserts 'a', 'b'
console.log(arr4)

// what is main difference between slice and splice ??
// slice mainly creates  a modified copy of the original array without changing the original
// 1. start (optional): The index to begin extraction (inclusive). 2. end (optional): The index to stop extraction (exclusive).

// splice Removes, replaces, or adds elements to an array by modifying the original array.

//start: The index to begin changes.
//deleteCount (optional): The number of elements to remove.
//...items (optional): Elements to insert.


// also there is diff between concat and push

const items1 = ["pencil", "book" , "eraser"]
const items2 = ["apple" , "orange" , "pineapple"]

console.log(items1.concat(items2)) // ["pencil", "book", "eraser", "apple", "orange", "pineapple"]

items1.push(items2)

console.log(items1); // ["pencil", "book", "eraser", ["apple", "orange", "pineapple"]]


const arr5 = Array.from({name : "danial"})

console.log(arr5); // [] returns empty array asked in interviews

const nestedArray = [1, 2, [3, 4], [5, [6, [ 7]]]]
const simpleArray = nestedArray.flat(3) // infinity if you want to do it for all depths

console.log(simpleArray); // [1, 2, 3, 4, 5, 6, 7]