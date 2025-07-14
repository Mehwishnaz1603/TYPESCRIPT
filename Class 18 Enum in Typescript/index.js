// Enums in TypeScript
// Enums (short for Enumerations) in TypeScript are a way of giving more friendly names to sets of numeric or string 
// values. They allow developers to define a set of named constants that can represent a collection of related values, 
// making code more readable and maintainable.
// Types of Enums in TypeScript
// Numeric Enums
// String Enums
// Heterogeneous Enums (Mix of string and numeric values)
// 1. Numeric Enums
// Numeric enums are the default type of enums in TypeScript. By default, the first value is assigned 0, and 
// subsequent values increment by 1.
// Example:
// enum Direction {
//    Up = 0,     // 0
//   Down =1,   // 1
//   Left = 2,   // 2
//   Right =3   // 3
// }
// console.log(Direction.Up);    // Output: 0
// console.log(Direction.Right); // Output: 3
// Access enum using reverse mapping
// console.log(Direction[0]);    // Output: "Up"
// You can also specify the starting value:
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right"; // 4
})(Direction || (Direction = {}));
console.log(Direction.Left); // Output: 3
// 2. String Enums
// String enums provide a way to associate meaningful string values with each constant, rather than using 
// auto-incremented numbers.
// Example:
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
console.log(Status.Active); // Output: "ACTIVE"
console.log(Status["Inactive"]); // Output: "INACTIVE"
// String enums do not support reverse mapping (i.e., you cannot access the key using its value).
// 3. Heterogeneous Enums
// Heterogeneous enums allow a mix of string and numeric values. However, they are generally less recommended 
// due to reduced readability.
// Example:
var Result;
(function (Result) {
    Result[Result["Success"] = 1] = "Success";
    Result["Failure"] = "FAILURE";
})(Result || (Result = {}));
console.log(Result.Success); // Output: 1
console.log(Result.Failure); // Output: "FAILURE"
// Computed and Constant Values
// Enums can also contain computed values. These are evaluated at runtime and must appear after any constants 
// in the enum declaration.
// Example:
var baseValue = 5;
var Mixed;
(function (Mixed) {
    Mixed[Mixed["A"] = 1] = "A";
    Mixed[Mixed["B"] = 3] = "B";
    Mixed[Mixed["C"] = 10] = "C"; // Computed at runtime
})(Mixed || (Mixed = {}));
console.log(Mixed.A); // Output: 1
console.log(Mixed.B); // Output: 3
console.log(Mixed.C); // Output: 10
// Enum Use Cases
// Switch Statements Enums work seamlessly with switch statements for cleaner logic.
// Example:
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (UserRole = {}));
function getPermissions(role) {
    switch (role) {
        case UserRole.Admin:
            return "Full Access";
        case UserRole.Editor:
            return "Edit Content";
        case UserRole.Viewer:
            return "View Content";
        default:
            return "No Access";
    }
}
console.log(getPermissions(UserRole.Editor)); // Output: "Edit Content"
// Flags and Options Numeric enums can be used as bit flags for combining options.
// Example:
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["Read"] = 1] = "Read";
    FileAccess[FileAccess["Write"] = 2] = "Write";
    FileAccess[FileAccess["Execute"] = 4] = "Execute"; // 0100
})(FileAccess || (FileAccess = {}));
var myAccess = FileAccess.Read | FileAccess.Write;
console.log(myAccess); // Output: 3 (0011)
console.log(myAccess & FileAccess.Read); // Output: 1 (True)
console.log(myAccess & FileAccess.Execute); // Output: 0 (False)
// APIs and Data Models String enums are often used to represent fixed sets of options for API calls or data.
// Example:
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["New"] = "NEW";
    OrderStatus["Processing"] = "PROCESSING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
function updateOrderStatus(status) {
    console.log("Order is now ".concat(status));
}
updateOrderStatus(OrderStatus.Shipped); // Output: "Order is now SHIPPED"
// Enums vs. Objects
// Enums are a special feature of TypeScript and provide additional functionality like reverse mapping 
// (for numeric enums) and better type safety compared to plain JavaScript objects.
// Example:
// enum Color {
//   Red,
//   Green,
//   Blue
// }
// Equivalent Object:
// const Color = {
//   Red: 0,
//   Green: 1,
//   Blue: 2
// };
