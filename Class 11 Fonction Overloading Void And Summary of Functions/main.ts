// 1. Function Overloading
// TypeScript allows function overloading, where multiple function signatures can be defined.

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}
// Calling the function
console.log(combine(1, 2));       // Outputs: 3
console.log(combine("Hello, ", "World!")); // Outputs: Hello, World!

// Explanation:
// Overload Signatures: The first two combine signatures specify the accepted parameter types.
// Implementation Signature: The implementation uses any to handle different types.

// 2. Void Functions
// Functions that do not return a value are of type void.

function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a message."); // Outputs: This is a message.

// Explanation:
// The return type void indicates the function does not return a value

// 3. Typed Function as a Variable
// Functions can also be defined as variables with explicit types.

const subtract: (a: number, b: number) => number = (a, b) => {
    return a - b;
};

console.log(subtract(10, 3)); // Outputs: 7

// Explanation:
// The type (a: number, b: number) => number explicitly describes the function.

//                  Summary of Function Types
//     Type	                                     Example
// Named Function	          function add(a: number, b: number): number {}
// Arrow Function	          const add = (a: number, b: number): number => {}
// Optional Parameters	      function greet(name: string, age?: number): string {}
// Default Parameters	      function multiply(a: number, b: number = 1): number {}
// Rest Parameters	          function sum(...numbers: number[]): number {}
// Function Type Variable	  const func: (a: number) => string = (a) => {}
// Functions in TypeScript provide a robust and type-safe way to write maintainable and error-free code!






