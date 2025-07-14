// Synchronus in Typescript:
// in a sunchronous a code is run line by line

// Synchronous refers to a style of execution in programming where tasks are performed one at a time, 
// in sequence. Each task must complete before the next one begins. This is the default behavior for 
// most JavaScript and TypeScript code.

// Example of Synchronous Code
function task1(): void {
    console.log("Task 1 started");
    console.log("Task 1 finished");
}

function task2(): void {
    console.log("Task 2 started");
    console.log("Task 2 finished");
}
// Synchronous execution
task1();
task2();                //Output:   Task 1 started // Task 1 finished // Task 2 started // Task 2 finished
// Explanation:
// task1 runs first and completes entirely before task2 begins.
// The tasks are executed sequentially.

// Problems with Synchronous Code
// In scenarios where a task takes a long time (e.g., reading a file or fetching data from a server), synchronous
// execution can cause delays, as subsequent tasks cannot start until the current one finishes. For example:

function longTask(): void {
    const start = Date.now();
    while (Date.now() - start < 3000) {
                                  // Simulate a long task (3 seconds)
    }
    console.log("Long task finished");
}
function shortTask(): void {
    console.log("Short task executed");
}
// Synchronous execution
longTask();
shortTask();                     // Output:Long task finished   Short task executed
// Issue:
// The shortTask has to wait until the longTask completes, which blocks other operations.

// How Asynchronous Programming Works
// Unlike synchronous programming, where tasks are executed one after another, asynchronous code starts tasks and moves 
// on without waiting for them to complete. The results of these tasks are handled when they are ready.

// Example of Asynchronous Code
function fetch_Data(callback: (data: string) => void): void {
    setTimeout(() => {
        callback("Data fetched");
    }, 2000);                                    // Simulate a 2-second delay
}
console.log("Start fetching data...");
fetch_Data((data) => {
    console.log(data);                          // This executes after 2 seconds
});
console.log("Other operations continue..."); // Output: Start fetching data... //Other operations continue...// Data fetched
// Explanation:
// The setTimeout function simulates a delay.
// The main execution continues with "Other operations continue..." without waiting for fetchData to complete.

// Asynchronous Code with async/await
// async/await simplifies asynchronous programming by making it look synchronous.

function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched with async/await");
        }, 2000);
    });
}
async function maim() {
    console.log("Start fetching data...");
    const data = await fetchData();
    console.log(data);                              // Executes after 2 seconds
    console.log("Other operations continue...");
}
maim();   //Output: //Start fetching data... //Data fetched with async/await //Other operations continue...
// Explanation:
// The await keyword pauses execution in the main function until the promise resolves.
// Code appears synchronous but operates asynchronously.

// Handling Errors in Asynchronous Code
// Promises
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
// async/await
async function main() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
main();

// Asynchronous vs Synchronous
// Feature:	              Synchronous	Asynchronous
// Execution:	          Tasks execute sequentially	Tasks can overlap in execution
// Blocking Behavior:	  Blocks the execution of subsequent code	Does not block other tasks
// Use Cases:	           Simple, dependent operations	I/O operations, network calls, timers


// Examples Of Class Code

console.log("Hellow Wporld");
let i = 0;
for(i = 0; i<=10; i++){
    console.log("loop calling", i)
};
console.log("Hamza Alvi");

const sumTwoNumbers= () =>{
return 2+2;
}

console.log(sumTwoNumbers())
length
let result = sumTwoNumbers()
console.log(result);
function anotherFunc(thefun){
console.log(thefun)
}
anotherFunc(54)
anotherFunc("Hello World");

let pubG;
pubG = "We want AC enviorement, Biryani anf Ice cream";
console.log(pubG);
function makePizza(){
    return "your Delicious Pizza is being prepared"
}
let order = makePizza()
console.log(order)