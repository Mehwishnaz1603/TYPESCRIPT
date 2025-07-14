// Promises:
// In TypeScript, Promises are used to handle asynchronous operations in a clean and manageable way. T
// hey represent a value that may be available now, or in the future, or never. TypeScript's strong 
// typing makes working with promises more robust by ensuring the correct types are used.

// Basic Example of a Promise.
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;               // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 1000);
    });
}
// Using the Promise
fetchData()
    .then((data) => {
        console.log(data); // Outputs: Data fetched successfully!
    })
    .catch((error) => {
        console.error(error); // If failed: Outputs the error message
    });

    // Using async/await with Promises
// TypeScript supports async and await for handling promises, making asynchronous code look synchronous.

async function fetchDataAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully (async/await)!");
            } else {
                reject("Failed to fetch data (async/await).");
            }
        }, 1000);
    });
}
// Using the async function
async function main() {
    try {
        const data = await fetchDataAsync();
        console.log(data); // Outputs: Data fetched successfully (async/await)!
    } catch (error) {
        console.error(error); // If failed: Outputs the error message
    }
}
main();

// TypeScript allows promises to resolve with any type, and you can define these types explicitly.
// Example: Promise with Custom Types.
interface User {
    id: number;
    name: string;
}
function getUser(): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John Doe" });
        }, 1000);
    });
}
getUser().then((user) => {
    console.log(user.id); // Outputs: 1
    console.log(user.name); // Outputs: John Doe
});

// Working with Multiple Promises
// Use Promise.all to handle multiple promises simultaneously.
function promise1(): Promise<string> {
    return Promise.resolve("First result");
}
function promise2(): Promise<number> {
    return Promise.resolve(42);
}
// Using Promise.all
Promise.all([promise1(), promise2()]).then(([result1, result2]) => {
    console.log(result1); // Outputs: First result
    console.log(result2); // Outputs: 42
});

// Benefits of Promises in TypeScript
// Type Safety: The resolved value of a promise has a predictable type, reducing runtime errors.
// Readability: With async/await, asynchronous operations become easier to read and understand.
// Error Handling: Centralized error handling via .catch or try/catch.
// TypeScript's support for promises enhances the ability to write scalable and maintainable asynchronous code.



