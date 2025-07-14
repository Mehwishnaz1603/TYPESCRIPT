//Let, Var, Const:
//var and let are both used for variable declaration in TypeScript but the difference between them is that var is 
//function scoped and let is block scoped. Variable declared by let cannot be redeclared and must be declared before 
//use whereas variables declared with var keyword are hoisted.
//const is an augmentation of let in that it prevents re-assignment to a variable.
//Dont use var, use let and const

//Using let:
//This declare a variable that can be assigned toa different value. Its useful for values 
//that change over time, like counters or values that depend on conditions.

//Using const:
//This declares a constant that cannot be reassigned once set. Its perfect for values that
//should remain the same throughout the execution of your program, like configuration settings or important identifiers.

//Example:
let currentBalnce = 1000
const accountNumber = "36638743948"

currentBalnce = 5000            // This is Allowed
accountNumber = "6454758439"    // This is not Allowed

// Example Of Let:
let firstName = "Mehwish";
console.log(firstName);
firstName = "Noorulain";
console.log(firstName);
firstName = "Iqra";
console.log(firstName);
firstName = "Maryam";
console.log(firstName);

let favouriteColour = "blue"
console.log(favouriteColour);
favouriteColour = "green"
console.log(favouriteColour);
favouriteColour = "pink"
console.log(favouriteColour);

// const:
// In Typescript we have not inilize the one value of const variable in Multiples Times.
// Example:
const userName = "MehwishNaz";
console.log(firstName);
userName = "MehwishNaz";
console.log(firstName);

const favourite_Colour = "blue"
console.log(favouriteColour);
favourite_Colour = "green"
console.log(favouriteColour);

// How to Print message in let or const:
// Example let:
let message: string = "Hello everyone How are you ";
console.log(message);
// Example const:
const message_1: string = "Hello everyone How are you ";
console.log(message_1);

// var:
// In Typescript we have not use var variable because var is a global variable 
// its use in javascript not use in Typescript.
