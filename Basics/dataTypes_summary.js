

// Primitive types

// String ,  Boolean , Number , null , undefined , Symbol , BigInt

let name = "danial"
let isStudent = true
let Score = 33
let SomeThing = null
let Passion;

const id = Symbol('123')
const AnotherId = Symbol('123')

// console.log(id);
// console.log(AnotherId);


console.log(id === AnotherId); // false

const BigNumber = 912739123n

// Reference (non-primitive) types

// Array , object , function 

const Array = ["C" , "C#" , "C++"]

const object = {
  name: "Danial",
  age: 20,
}

const Function = function () {
 console.log("Function");
}

console.log(typeof BigInt);
