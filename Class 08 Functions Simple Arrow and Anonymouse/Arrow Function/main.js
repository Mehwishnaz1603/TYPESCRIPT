// Arrow Function in Typescript:
// An arrow function is a concise way to write functions in TypeScript (and JavaScript), introduced with ES6. 
// It uses the => syntax, hence the name "arrow function." Arrow functions provide a more compact syntax and 
// do not bind their own this context, making them particularly useful in certain scenarios.
// Basic Syntax of Arrow Functions
// const functionName = (parameters) => expression_or_code_block;
// Example 1: Simple Arrow Function
var add = function (a, b) { return a + b; };
console.log(add(5, 3)); // Outputs: 8
// Explanation:
// The function takes two parameters, a and b.
// The => separates the parameters from the function body.
// The return statement is implicit when there is a single expression.
// Example 2: Arrow Function with Explicit return
// If the function has a block body ({}), you must use an explicit return statement.
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(4, 2)); // Outputs: 8
// Key Difference:
// When using curly braces {}, the return statement is necessary unless the function doesn't return a value.
// Example 3: Single Parameter (No Parentheses)
// For functions with a single parameter, parentheses around the parameter can be omitted.
var square = function (x) { return x * x; };
console.log(square(5)); // Outputs: 25
// Note:
// You still need parentheses if there are no parameters or more than one parameter.
// Example 4: No Parameters
// If an arrow function has no parameters, use empty parentheses ().
var greet = function () { return "Hello, World!"; };
console.log(greet()); // Outputs: Hello, World!
// Key Features of Arrow Functions
// No Binding of this: Arrow functions do not have their own this. 
// Instead, they inherit this from the surrounding scope. This makes them useful in contexts like callbacks.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayName = function () {
        var _this = this;
        var logName = function () {
            console.log(_this.name); // `this` refers to the enclosing `Person` instance
        };
        logName();
    };
    return Person;
}());
var person = new Person("Alice");
person.sayName(); // Outputs: Alice
