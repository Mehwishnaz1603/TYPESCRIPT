// 1. NOT (!)
// The NOT operator inverts a boolean value: true becomes false, and false becomes true.
// Syntax:
// !condition
// Example:
var isAvailable = false;
console.log(!isAvailable); // Outputs: true
// 2. OR (||) (Short_Circuit Behaiviour)
// The OR operator evaluates to true if either one of the conditions is true. If both are false, the result is false.
// Syntax:
// condition1 || condition2
// Condition1       	Condition2   	Result
//   true	               true	          true
//   true	               false	      true
//   false	               true	          true
//   false	               false	      false
// Example:
var m = true;
var n = false;
console.log(m || n); // Outputs: true
console.log(false || false); // Outputs: false
// 3. AND (&&)
// The AND operator evaluates to true only if both conditions are true. If either condition is false, the result is false.
// Syntax:
// condition1 && condition2
// Condition1    Condition2	    Result
//   true	        true	         true
//   true	        false	         false
//   false	        true	         false
//   false	        false	         false
// Example:
var x = true;
var y = false;
console.log(x && y); // Outputs: false
console.log(true && true); // Outputs: true
// Combining OR and AND
// You can combine || and && to form complex logical expressions. Use parentheses to clarify the order of evaluation.
// Example:
var a = true;
var b = false;
var c = true;
console.log(a || (b && c)); // Outputs: true
console.log((a || b) && c); // Outputs: true
// Explanation:
// In a || (b && c), the b && c is evaluated first (because && has higher precedence), then a || result is evaluated.
// In (a || b) && c, the a || b is evaluated first, followed by result && c.
// Example: Conditional Check
function isEligible(age, hasPermission) {
    return age >= 18 || hasPermission;
}
console.log(isEligible(16, true)); // Outputs: true
console.log(isEligible(16, false)); // Outputs: false
// Example: Combining Conditions
var isAdult = true;
var hasTicket = false;
if (isAdult && hasTicket) {
    console.log("You can enter.");
}
else {
    console.log("Entry denied."); // Outputs: Entry denied
}
;
