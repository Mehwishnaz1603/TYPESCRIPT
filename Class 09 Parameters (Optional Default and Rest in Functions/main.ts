// Parameters In Functions

// 1. Optional Parameters
// Use ? to make parameters optional.

function greet(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}. You are ${age} years old.`;
    } else {
        return `Hello, ${name}.`;
    }
}
// Calling the function
console.log(greet("Alice", 25)); // Outputs: Hello, Alice. You are 25 years old.
console.log(greet("Bob"));       // Outputs: Hello, Bob.
// Explanation:
// The age parameter is optional, so the function can be called with or without it.

// 2. Default Parameters
// Provide default values for parameters.

function multiply(a: number, b: number = 1): number {
    return a * b;
}
// Calling the function
console.log(multiply(5, 2)); // Outputs: 10
console.log(multiply(5));    // Outputs: 5 (uses default value for b)
// Explanation:
// If no value is provided for b, the default value 1 is used.

// 3. Rest Parameters
// Functions can accept a variable number of arguments using rest parameters.

function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10
// Explanation:
// The ...numbers: number[] allows the function to accept any number of number arguments.

