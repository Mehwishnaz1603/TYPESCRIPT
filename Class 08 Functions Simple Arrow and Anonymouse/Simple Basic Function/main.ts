// Functions in Typescript:
// In TypeScript, functions are a core part of the language, allowing you to define reusable blocks of code. TypeScript enhances JavaScript functions by adding type annotations, which ensure type safety and reduce runtime errors.
// 1. Basic Function
// A simple function in TypeScript with explicit types:

// Example:
function sayHi(name) {
    return `Hi, ${name}!`;
}
console.log(sayHi("Bob"));      // Outputs: Hi, Bob!

// Example:
function greeting(name: string): string {
    return `Hello, ${name}!`;
}
const message = greeting("Alice");     // Calling the function
console.log(message);              // Outputs: Hello, Alice!

// Example:
function add(a: number, b: number): number {
    return a + b;
}
const result = add(5, 10);          // Calling the function
console.log(result);                // Outputs: 15
// Explanation:
// a: number, b: number: The types of the parameters a and b are explicitly defined as number.
// : number: The return type of the function is number.

//soppose recipe of halffry egg//
//we have three ingriedents//
//egg, butter, salt

//let egg = "2";
//let butter = "1";
//let salt = "2"
function halffry(salt:number, butter:number){
let cooked =1+salt+butter
console.log(cooked);
}
// call 2 different aur multiple condition in one function// by using function operator
halffry(2,2)
halffry(1.5,2)
halffry(3,2)

// Example:
function tea( suger, milk)
{let cooked = suger + milk +3;
return cooked;}
let response = tea (2,3)
console.log(response)

let halfFryEgg =  ()=>  1+1.5+3;
    let responses:number = halfFryEgg()
    console.log(response)





