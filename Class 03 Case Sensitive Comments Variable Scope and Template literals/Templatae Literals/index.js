// Template Literals:
// A new and fast way to deal with strings is Template Literals or Template String.
// How we were dealing with strings before ?
//  let myName = "MehwishNaz" ;
//  let hello = "Hello "+ myName" ;
//  console.log(hello); //Hello MehwishNaz
// What is Template literals ?
// As we mentioned before , it’s a way to deal with strings and specially dynamic strings ; 
// so you don’t need to think more about what’s the next quote to use  single or double.
//How to use Template literals 
//It uses a `backticks` to write string within it.
//  let myName = "MehwishNaz" ;
//  let hello = (`Hello + ${myName}`);
//  console.log(hello); //Hello 
//Example"
var firstName = "Mehwish";
var lastName = "Naz";
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
