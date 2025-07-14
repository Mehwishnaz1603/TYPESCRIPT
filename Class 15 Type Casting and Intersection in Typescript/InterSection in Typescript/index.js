// Intersection Types in TypeScript
// Intersection types in TypeScript allow you to combine multiple types into one. A value of an intersection 
// type must satisfy all the constituent types, meaning it has the properties and methods of every type involved 
// in the intersection.
var john = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    department: "IT"
};
console.log(john); // Output: { name: 'John Doe', age: 30, employeeId: 12345, department: 'IT' }
var point = {
    x: 10,
    y: 20,
    name: "A Point"
};
console.log(point); // Output: { x: 10, y: 20, name: 'A Point' }
var amphibiousCreature = {
    swim: function () { return console.log("Swimming"); },
    fly: function () { return console.log("Flying"); }
};
amphibiousCreature.swim(); // Output: Swimming
amphibiousCreature.fly(); // Output: Flying
var example = {
    propB: 42
};
console.log(example); // Output: { propB: 42 } // In this example, propA is optional, but propB is required.
var myCircle = {
    color: "red",
    radius: 10
};
