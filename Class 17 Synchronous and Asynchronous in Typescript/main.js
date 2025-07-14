// Synchronus in Typescript:
// in a sunchronous a code is run line by line
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Synchronous refers to a style of execution in programming where tasks are performed one at a time, 
// in sequence. Each task must complete before the next one begins. This is the default behavior for 
// most JavaScript and TypeScript code.
// Example of Synchronous Code
function task1() {
    console.log("Task 1 started");
    console.log("Task 1 finished");
}
function task2() {
    console.log("Task 2 started");
    console.log("Task 2 finished");
}
// Synchronous execution
task1();
task2(); //Output:   Task 1 started // Task 1 finished // Task 2 started // Task 2 finished
// Explanation:
// task1 runs first and completes entirely before task2 begins.
// The tasks are executed sequentially.
// Problems with Synchronous Code
// In scenarios where a task takes a long time (e.g., reading a file or fetching data from a server), synchronous
// execution can cause delays, as subsequent tasks cannot start until the current one finishes. For example:
function longTask() {
    var start = Date.now();
    while (Date.now() - start < 3000) {
        // Simulate a long task (3 seconds)
    }
    console.log("Long task finished");
}
function shortTask() {
    console.log("Short task executed");
}
// Synchronous execution
longTask();
shortTask(); // Output:Long task finished   Short task executed
// Issue:
// The shortTask has to wait until the longTask completes, which blocks other operations.
// How Asynchronous Programming Works
// Unlike synchronous programming, where tasks are executed one after another, asynchronous code starts tasks and moves 
// on without waiting for them to complete. The results of these tasks are handled when they are ready.
// Example of Asynchronous Code
function fetch_Data(callback) {
    setTimeout(function () {
        callback("Data fetched");
    }, 2000); // Simulate a 2-second delay
}
console.log("Start fetching data...");
fetch_Data(function (data) {
    console.log(data); // This executes after 2 seconds
});
console.log("Other operations continue..."); // Output: Start fetching data... //Other operations continue...// Data fetched
// Explanation:
// The setTimeout function simulates a delay.
// The main execution continues with "Other operations continue..." without waiting for fetchData to complete.
// Asynchronous Code with async/await
// async/await simplifies asynchronous programming by making it look synchronous.
function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched with async/await");
        }, 2000);
    });
}
function maim() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Start fetching data...");
                    return [4 /*yield*/, fetchData()];
                case 1:
                    data = _a.sent();
                    console.log(data); // Executes after 2 seconds
                    console.log("Other operations continue...");
                    return [2 /*return*/];
            }
        });
    });
}
maim(); //Output: //Start fetching data... //Data fetched with async/await //Other operations continue...
// Explanation:
// The await keyword pauses execution in the main function until the promise resolves.
// Code appears synchronous but operates asynchronously.
// Handling Errors in Asynchronous Code
// Promises
fetchData()
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.error("Error:", error); });
// async/await
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchData()];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
main();
// Asynchronous vs Synchronous
// Feature:	              Synchronous	Asynchronous
// Execution:	          Tasks execute sequentially	Tasks can overlap in execution
// Blocking Behavior:	  Blocks the execution of subsequent code	Does not block other tasks
// Use Cases:	           Simple, dependent operations	I/O operations, network calls, timers
// Examples Of Class Code
console.log("Hellow Wporld");
var i = 0;
for (i = 0; i <= 10; i++) {
    console.log("loop calling", i);
}
;
console.log("Hamza Alvi");
var sumTwoNumbers = function () {
    return 2 + 2;
};
console.log(sumTwoNumbers());
length;
var result = sumTwoNumbers();
console.log(result);
function anotherFunc(thefun) {
    console.log(thefun);
}
anotherFunc(54);
anotherFunc("Hello World");
var pubG;
pubG = "We want AC enviorement, Biryani anf Ice cream";
console.log(pubG);
function makePizza() {
    return "your Delicious Pizza is being prepared";
}
var order = makePizza();
console.log(order);
