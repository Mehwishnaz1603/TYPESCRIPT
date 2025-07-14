// A callback function in TypeScript is a function passed as an argument to another function, 
// which is later invoked inside the outer function to complete some kind of routine or action. 
// TypeScript's type system allows us to define the type of the callback function, ensuring type 
// safety and reducing runtime errors.

function hello(callback:any) {
    callback("Mehwish");
}
var arrowfunction = (name:string)=> {
    console.log(`My name is ${name}`);
};
hello(arrowfunction);              // Output: My name is Mehwish

// Here’s an example of using a callback function in TypeScript:
// Example 1: Basic Callback with Type

// Define a function that takes a callback
function fetchData(callback: (data: string) => void): void {
    const data = "Hello, TypeScript!";          //Simulated fetched data
    callback(data);                           // Call the callback function with the data
}
// Call fetchData with a callback
fetchData((result) => {
    console.log(result);                 // Outputs: Hello, TypeScript!
});
// Explanation
// (data: string) => void:This specifies the type of the callback function. It takes string as an argument and returns void.
// fetchData function: Accepts a callback as a parameter and calls it with some simulated data.

// Example 2: Using a Callback with Multiple Parameters.
// Define a function with a more complex callback
function calculate(
    num1: number,
    num2: number,
    callback: (result: number, message: string) => void
): void {
    const result = num1 + num2;
    callback(result, "Calculation complete!");
}
// Call calculate with a callback
calculate(5, 7, (result, message) => {
    console.log(result);                        // Outputs: 12
    console.log(message);                      // Outputs: Calculation complete!
});
// Explanation
// The callback takes two arguments (result and message), and the function type enforces this structure.

// Example 3: Using Type Aliases for Callbacks
// To improve readability, you can define the callback type using a type alias.
// Define a callback type
type ProcessCallback = (success: boolean, data?: string) => void;

// Function using the callback type
function processRequest(isSuccess: boolean, callback: ProcessCallback): void {
    if (isSuccess) {
        callback(true, "Request processed successfully.");
    } else {
        callback(false);
    }
}
// Call the function
processRequest(true, (success, data) => {
    if (success) {
        console.log(data); // Outputs: Request processed successfully.
    } else {
        console.log("Request failed.");
    }
});

// Benefits of Callbacks in TypeScript
// Type Safety: TypeScript ensures the callback function is called with the correct parameters.
// Code Clarity: Defining types for callbacks improves code readability and makes debugging easier.
// Error Prevention: Misusing or miscalling callbacks can be caught at compile time.
// Key Notes
// Callbacks are often used in asynchronous operations such as fetching data or processing events.
// With TypeScript, you can also use Promise or async/await for more modern and readable async code, 
// but callbacks are still commonly used in specific scenarios.

