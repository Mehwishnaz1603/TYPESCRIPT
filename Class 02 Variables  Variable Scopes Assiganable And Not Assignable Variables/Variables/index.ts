//Variables:
//Fundamentals Variables
//Variable means anything that can vary.
//A TypeScript variable is simply a name of storage location. 
//A variable must have a unique name. 

//Variables are values in your code that can represent different values each time the code runs.
//The first time you create a variable, you declare it. And you need a special word for that: let, var, or const.
//Example: let firstname = "MehwishNaz";
//The commonly used naming conventions used for variables are camel-case.
//Example: let firstName = "MehwishNaz";

//Variables Names:
//A variable name can't contain any spaces
//A variable name can contain only letters, numbers, dollar signs, and underscores.
//The first character must be a letter, or an underscore (-), or a dollar sign ($).
//Subsequent characters may be letters, digits, underscores, or dollar signs.
//Numbers are not allowed as the first character of variable.

//Type Annotations on Variables:
//When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly 
//specify the type of the variable:
//     let myName: string = "MehwishNaz";
//TypeScript doesn’t use “types on the left”-style declarations like int x = 0; Type annotations will always go 
//after the thing being typed.
//In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically infer the types 
//in your code. 
// No type annotation needed -- 'myName' inferred as type 'string'
//        let myName = "MehwishNaz";


// Example Of Variables Decleration:
let firstName: string = "MehwishNaz";
let age: number = 27;
let isMarried: boolean = true;
console.log(firstName);
console.log(age);
console.log(isMarried);

