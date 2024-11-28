// Stack and Heap memory management


// Stack memory: used for Primitive data Types stores data copy in stack memory


let userEmail = "user@example.com"; // This create a copy in stack memory as userEmail and stores it's values

let MyEmail = userEmail; // This create another copy in stack memory as MyEmail

let myEmail = "notdanial22@gmail.com";

console.log(userEmail); // user@example.com
console.log(myEmail); // notdanial22@gmail.com


/*
Now This is how data will be in Stack memory:
1. userEmail  value :  "user@example.com"
2. MyEmail    value :  "user@example.com"
3. userEmail  value: "notdanial22@gmail.com"

This is how data will be stored in Stack memory which is for Primitive data types
*/

// Heap memory: used for Non-Primitive data types stores reference to data in heap memory

let user = {
 name : "user",
 email : "user@example.com"
}

let myUser = user;

myUser.email = "notdanial22@gmail.com";


console.log(user.email); // "notdanial22@gmail.com"
console.log(myUser.email); // "notdanial22@gmail.com"


/*
Now notice how both email value changed while I only changed the value of  myUser This is because of Heap memory:
when at first i created user this stored the value of 
{
 name : "user",
 email : "user@example.com"
}

it was stored in heap memory and the reference of user was stored in stack
then we i assigned the :
let myUser = user;
the myUser was also pointing or referencing to same:
{
 name : "user",
 email : "user@example.com"
}

so when i changed the value of email it was changed for both users

*/



