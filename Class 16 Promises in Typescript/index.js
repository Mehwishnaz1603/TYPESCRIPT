// Promises:
// In TypeScript, Promises are used to handle asynchronous operations in a clean and manageable way. T
// hey represent a value that may be available now, or in the future, or never. TypeScript's strong 
// typing makes working with promises more robust by ensuring the correct types are used.
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
// Basic Example of a Promise.
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var success = true; // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Failed to fetch data.");
            }
        }, 1000);
    });
}
// Using the Promise
fetchData()
    .then(function (data) {
    console.log(data); // Outputs: Data fetched successfully!
})
    .catch(function (error) {
    console.error(error); // If failed: Outputs the error message
});
// Using async/await with Promises
// TypeScript supports async and await for handling promises, making asynchronous code look synchronous.
function fetchDataAsync() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        var success = true;
                        if (success) {
                            resolve("Data fetched successfully (async/await)!");
                        }
                        else {
                            reject("Failed to fetch data (async/await).");
                        }
                    }, 1000);
                })];
        });
    });
}
// Using the async function
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchDataAsync()];
                case 1:
                    data = _a.sent();
                    console.log(data); // Outputs: Data fetched successfully (async/await)!
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1); // If failed: Outputs the error message
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
main();
function getUser() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({ id: 1, name: "John Doe" });
        }, 1000);
    });
}
getUser().then(function (user) {
    console.log(user.id); // Outputs: 1
    console.log(user.name); // Outputs: John Doe
});
// Working with Multiple Promises
// Use Promise.all to handle multiple promises simultaneously.
function promise1() {
    return Promise.resolve("First result");
}
function promise2() {
    return Promise.resolve(42);
}
// Using Promise.all
Promise.all([promise1(), promise2()]).then(function (_a) {
    var result1 = _a[0], result2 = _a[1];
    console.log(result1); // Outputs: First result
    console.log(result2); // Outputs: 42
});
// Benefits of Promises in TypeScript
// Type Safety: The resolved value of a promise has a predictable type, reducing runtime errors.
// Readability: With async/await, asynchronous operations become easier to read and understand.
// Error Handling: Centralized error handling via .catch or try/catch.
// TypeScript's support for promises enhances the ability to write scalable and maintainable asynchronous code.
