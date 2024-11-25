// Equal to (==)
// "Are these similar?"
5 == '5' // true - they look the same
5 == 5 // true
4 == 5 // false

// Strictly Equal to (===)
// "Are these EXACTLY the same?"
5 === '5' // false - one is a number, one is text
5 === 5 // true - both are numbers and same value
'5' === '5' // true - both are text and same value

// Not Equal (!=)
// "Are these different?"
5 != '5' // false - they look similar
5 != 6 // true - they're different
'cat' != 'dog' // true - different words

// Strictly Not Equal (!==)
// "Are these COMPLETELY different?"
5 !== '5' // true - different types
5 !== 5 // false - exactly same
'5' !== '5' // false - exactly same

// Greater Than (>)
// "Is the first one bigger?"
7 > 5 // true - 7 is bigger than 5
5 > 5 // false - same number
3 > 5 // false - 3 is smaller

// Less Than (<)
// "Is the first one smaller?"
3 < 5 // true - 3 is smaller than 5
5 < 5 // false - same number
7 < 5 // false - 7 is bigger

// Greater Than or Equal To (>=)
// "Is the first one bigger or the same?"
7 >= 5 // true - 7 is bigger
5 >= 5 // true - same number
3 >= 5 // false - 3 is smaller

// Less Than or Equal To (<=)
// "Is the first one smaller or the same?"
3 <= 5 // true - 3 is smaller
5 <= 5 // true - same number
7 <= 5 // false - 7 is bigger



let score = 100
if (score == '100') {
  // true because they look the same
  console.log('Perfect score!')
}

let age = 10
if (age === '10') {
  // false because one is number, one is text
  console.log("You're ten!")
}

let myHeight = 140
let doorHeight = 180
if (myHeight < doorHeight) {
  console.log('You can walk through the door!')
}


// so the main things to understand are == and === 
// == compares without checking type 
// === strictly checks the type


// remember do not try to compare null and undefined with number or strings it will cause issue and is not good for this reason typescript is introduced.