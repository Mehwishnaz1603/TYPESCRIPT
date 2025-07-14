// Type Casting in TypeScript
// Type casting is a way to tell the TypeScript compiler to treat a value as a specific type. This is useful 
// when you know more about the type of a value than TypeScript can infer on its own.
// Example:
var Value = "Hello, TypeScript!";
var Length = Value.length;
console.log(Length); // Output: 18
//Example:
var someValue = "Hello, TypeScript!";
var strLength = someValue.length;
console.log(strLength); // Output: 18
// Example:
var value = "TypeScript";
var lengt = value.length;
console.log(lengt); // Output: 10
// Example:
var mixedArray = [1, "two", 3];
var stringArray = mixedArray;
// `stringArray` will not error, but be cautious with invalid assumptions
console.log(stringArray); // Output: [1, "two", 3] but treated as string[]
