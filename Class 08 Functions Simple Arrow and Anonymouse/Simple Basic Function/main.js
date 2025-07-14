// Functions in Typescript:
// In TypeScript, functions are a core part of the language, allowing you to define reusable blocks of code. TypeScript enhances JavaScript functions by adding type annotations, which ensure type safety and reduce runtime errors.
// 1. Basic Function
// A simple function in TypeScript with explicit types:
// Example:
function sayHi(name) {
    return "Hi, ".concat(name, "!");
}
console.log(sayHi("Bob")); // Outputs: Hi, Bob!
// Example:
function greeting(name) {
    return "Hello, ".concat(name, "!");
}
var message = greeting("Alice"); // Calling the function
console.log(message); // Outputs: Hello, Alice!
// Example:
function add(a, b) {
    return a + b;
}
var result = add(5, 10); // Calling the function
console.log(result); // Outputs: 15
// Explanation:
// a: number, b: number: The types of the parameters a and b are explicitly defined as number.
// : number: The return type of the function is number.
// 2. Optional Parameters
// Use ? to make parameters optional.
function greet(name, age) {
    if (age) {
        return "Hello, ".concat(name, ". You are ").concat(age, " years old.");
    }
    else {
        return "Hello, ".concat(name, ".");
    }
}
// Calling the function
console.log(greet("Alice", 25)); // Outputs: Hello, Alice. You are 25 years old.
console.log(greet("Bob")); // Outputs: Hello, Bob.
// Explanation:
// The age parameter is optional, so the function can be called with or without it.
// 3. Default Parameters
// Provide default values for parameters.
function multiply(a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
}
// Calling the function
console.log(multiply(5, 2)); // Outputs: 10
console.log(multiply(5)); // Outputs: 5 (uses default value for b)
// Explanation:
// If no value is provided for b, the default value 1 is used.
// 4. Rest Parameters
// Functions can accept a variable number of arguments using rest parameters.
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10
// Explanation:
// The ...numbers: number[] allows the function to accept any number of number arguments.
//soppose recipe of halffry egg//
//we have three ingriedents//
//egg, butter, salt
//let egg = "2";
//let butter = "1";
//let salt = "2"
function halffry(salt, butter) {
    var cooked = 1 + salt + butter;
    console.log(cooked);
}
// call 2 different aur multiple condition in one function// by using function operator
halffry(2, 2);
halffry(1.5, 2);
halffry(3, 2);
