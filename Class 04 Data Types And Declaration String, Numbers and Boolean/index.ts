// Primitive data types:
// String:
// A string is used to store a text value. (For textal data)
// Example: let firstName = "MehwishNaz"; 
// Number:
// A number is used to store a numeric value.(For Numericals valuesintegers and floating_point numbers)
// Example: let myAge = 27; 
// Boolean:
// A boolean is used to store a value that is either true or false.(For True/False values)
// Example: let isMarried = false; 

//Additional Primative data types:
// Undefined:
// An undefined type is either when it has not been defined or it has not been assigned a value.( Represent a variable
//that has not been assign a value or not initialized. It is one of Javascript's primitive types that Typescript Adopts.)
// Example: let unassigned;
// Null:
// null is a special value for saying that a variable is empty or has an unknown value.(Null Reprsents the international 
// absence of any object value. I	t is another primitive type 
//in JavaScript used in TypeScript to signify that a variable internationally has not value)
// Example: let empty = null; 
//Any:
// For Variables that can hold any types of data.(Used for Variables where the type is not known at the times of writing
// the code.Its a safer alternativr to any, as it requires the type to be determined before it can be used)
// BigInt:
// A data type that can store numbers larger than the maximum limit for the number type. It allows representation of 
// very large Integers.
// Symbol:
// A unique and immutable primitive value that can be used as the key of an Object prperty. Symbols are often used to add
// unique prpoerty keys to an Object thst wont collide with keys any other code might add to the object, and which are 
// hidden from any mechanisms other code will typically use to access the object.

// Analyzing and modifying data types:
// You can check the type of a variable by entering typeof.
// Example: 
// 	let testVariable = 1; 
// 	console.log(typeof testVariable);

// The variables in TypeScript cannot change types. 
//Example: 
 	let n = 2; 
 	n = “2”; //Error

// Types Interface:

//Strongly typed syntax:
let a : string = "Pakistan"
let b: number = 9;
let c: boolean = true;

//type Interface:
let e = "USA"
let f = 10.9;
let g = false;

// Example:
let firstName: string = "Mehwish";
let age: number = 26;
let isMarried: boolean = true;
console.log(firstName);
console.log(age);
console.log(isMarried);




