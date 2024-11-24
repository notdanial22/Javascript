let marks = "36"

console.log(typeof marks);
// console.log(typeof(marks)); // 2nd way of checking

//conversion of a string to a number
let NumberMarks = Number(marks)

// console.log(typeof NumberMarks);

console.log(NumberMarks);


// the above code will convert this to a number but there are few issues in this process
/*
1. if we convert "36abc" this will return NaN cause it can't be converted
2. if we convert "36.25" this will return 36.25 which is a number
3. if we convert "36" this will return 36 which is a number
4. if we convert "" it will return 0
5. if we convert "danial" it will return NaN
5. if we convert null it will return 0
6. if we convert undefined it will return NaN
*/
// we just need to be sure while converting them if not checked it will cause a lot of issue

// Same process for boolean let's try

let Available = ""

let BooleanAvailable = Boolean(Available)

console.log(typeof BooleanAvailable);

console.log(BooleanAvailable);


/*
1. 1 => true; 0=> false; everything above 1 returns true
2. if we convert "danial" this will return true
3. if we convert "" this will return false

*/

let myIq = false

let StringMyIq = String(myIq)

console.log(typeof StringMyIq); 
console.log(StringMyIq);

/*
1. any number can be converted to a string
2. boolean like true and false can also be converted to string it returns them as string
3. same for null and undefined

*/
