// Array:
// The Problem: Suppose you have five fruits and you want to store them in the variable, But you have to create 
//five variables to store the fruits which is not an efficient approach, what if you have thousands of fruits?
let fruit1 = "apple"
let fruit2 = "banana"
let fruit3 = "grapes"
let fruit4 = "strawberry"
let fruit5 = "orange"
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);
console.log(fruit5);

// The Solution: Here the array comes into play which helps  
// to store multiple data in a single variable.
// let fruits = ["apple","banana", "orange", "grapes", "strawberry"]

// Array - More About Array:
// An array is a special variable, which can hold more than one value.
// An array can hold many values under a single name, and you can access the values by referring to an index number.
// In JavaScript, arrays always use numbered indexes.
// Array indexes start with 0.
// Examples:
let fruits = ["apple","banana", "orange", "grapes", "strawberry"]
console.log(fruits);

// Arrays length:
fruits[0] // apple
fruits[3] // grapes
let x = [1, 2, "Mehwish"] // Arrays can store multiple types of data 

// Arrays: Adding and removing elements
// When you work with arrays, it is easy to remove elements and add new elements. This is what popping and pushing is.
// The pop() method removes the last element from an array:
// The pop() method returns the value that was "popped out"
// The push() method adds a new element to an array (at the end).
// The push() method returns the new array length.

// Example:
// let pets =  [];
// pets = "dog"; // adds “dog” to an array at 0 index
// pets = "cat"; // adds “cat” to an array at index 1

// pets.pop(); // removes the last element of an array which is cat in our case
// pets.push("parrot"); // adds a new element to an array

// Arrays: Removing, inserting, and extracting elements:
// No.1
// Shifting is equivalent to popping, but working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out".
// The unshift() method adds a new element to an array 
// (at the beginning), and "unshifts" older elements:
// The unshift() method returns the new array length.

// Example:
// var pets = [];
// pets[0] = "dog"; // adds “dog” to an array at 0 index
// pets[1] = "cat"; // adds “cat” to an array at index 1

// pets.shift(); // removes the first element of an array which is cat in our case
// pets.unshift("parrot"); // adds a new element to an array (at the beginning)

// No 2:
// Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// Example:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi"); 
// // adds elements to an array at 2nd index
// // deleted 0 elements
// The slice() method slices out a piece of an array.
// Example:
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1); // [Orange,Lemon,Apple,Mango]
// Notes: 
// The slice() method creates a new array.


