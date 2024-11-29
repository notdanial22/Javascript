

const min = 1
const max = 6
// Generate random number between min and max

console.log(Math.floor((Math.random() * (max - min + 1)) + min));

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity


console.log(Number.NaN); // NaN


console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false


console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10));  // false

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

const num = 123.456;
console.log(num.toFixed(2)); // "123.46"


console.log(num.toPrecision(4)); // "123.5"

console.log(Math.abs(-10)); // 10 // only converts a negative number to positive number

console.log(Math.ceil(4.2)); // 5

console.log(Math.floor(4.8)); // 4

console.log(Math.round(4.5)); // 5

console.log(Math.pow(2, 4)); // 16

console.log(Math.sqrt(16)); // 4 // square root


console.log(Math.min(1, 2, 3)); // 1
console.log(Math.max(1, 2, 3)); // 3


