// Anonymous Functions
// Anonymous functions have no name and are often used as arguments to other functions.

// Immediately Invoked Function Expressions (IIFE)
// An IIFE is a function that runs as soon as it is defined.

(function () {
    console.log("This is an IIFE.");
})();

// Using an anonymous function as a callback
setTimeout(function () {
    console.log("This is an anonymous function.");
}, 1000);
