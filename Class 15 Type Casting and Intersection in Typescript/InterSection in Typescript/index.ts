// Intersection Types in TypeScript
// Intersection types in TypeScript allow you to combine multiple types into one. A value of an intersection 
// type must satisfy all the constituent types, meaning it has the properties and methods of every type involved 
// in the intersection.

// Syntax
// The & symbol is used to create an intersection type.
// type IntersectionType = TypeA & TypeB;
// Example 1: Combining Object Types
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeeDetails = Person & Employee;

const john: EmployeeDetails = {
  name: "John Doe",
  age: 30,
  employeeId: 12345,
  department: "IT"
};
console.log(john);        // Output: { name: 'John Doe', age: 30, employeeId: 12345, department: 'IT' }
// In this example, john must have all properties from both Person and Employee.

// Example 2: Combining Object and Literal Types
// You can intersect an object type with a literal type for more specific structures.
type Coordinates = {
  x: number;
  y: number;
};

type NamedPoint = Coordinates & {
  name: string;
};

const point: NamedPoint = {
  x: 10,
  y: 20,
  name: "A Point"
};

console.log(point);        // Output: { x: 10, y: 20, name: 'A Point' }

// Example 3: Intersecting with Primitive Types
// While less common, intersections with primitive types are allowed. However, they can lead to empty types 
// if the types are mutually exclusive.

// type StringOrNumber = string & number; // This is an impossible type (no value can be both string and number)
// In practical usage, this example doesn’t make sense because no value can satisfy both string and number. T
// ypeScript will prevent you from using such a type.

// Example 4: Using Intersection in Function Parameters
// You can use intersection types to specify that a parameter should fulfill multiple type requirements.
type CanSwim = {
  swim: () => void;
};

type CanFly = {
  fly: () => void;
};

type Amphibious = CanSwim & CanFly;

const amphibiousCreature: Amphibious = {
  swim: () => console.log("Swimming"),
  fly: () => console.log("Flying")
};

amphibiousCreature.swim();             // Output: Swimming
amphibiousCreature.fly();             // Output: Flying

// Example 5: Intersecting with Optional Properties
// Intersection types combine all properties, including optional ones.
type A = {
  propA?: string;
};

type B = {
  propB: number;
};

type AB = A & B;

const example: AB = {
  propB: 42
};
console.log(example);       // Output: { propB: 42 } // In this example, propA is optional, but propB is required.

// Practical Use Cases.
// Combining Interfaces and Types Intersection types are great for combining multiple interfaces or types into one.
// Example:
interface Shape {
  color: string;
}
interface Circle {
  radius: number;
}
type ColoredCircle = Shape & Circle;
const myCircle: ColoredCircle = {
  color: "red",
  radius: 10
};
