// Type Casting in TypeScript
// Type casting is a way to tell the TypeScript compiler to treat a value as a specific type. This is useful 
// when you know more about the type of a value than TypeScript can infer on its own.

// Example:
let Value: unknown = "Hello, TypeScript!";
let Length: number = (<string>Value).length;
console.log(Length); // Output: 18

//Example:
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
console.log(strLength); // Output: 18

// Example:
let value: unknown = "TypeScript";
let lengt: number = (value as string).length;
console.log(lengt); // Output: 10

// Example:
let mixedArray: any[] = [1, "two", 3];
let stringArray = mixedArray as string[];
// `stringArray` will not error, but be cautious with invalid assumptions
console.log(stringArray); // Output: [1, "two", 3] but treated as string[]
