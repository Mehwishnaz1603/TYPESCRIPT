// Variable Scope:
// The current context of code, which deyermines the accessibility of variables to Java script.

// Global Scope or Gloval Varaible:
// If the variable is declared outside the construct then we can access the variable anywhere. This is known 
//as Global Scope.

// As the name specified, are declared within the block like methods, loops etc. Local variables are accessible 
//only within the construct where they are declared.
// Lcal Scope or Local Varaible:

// Example:
let globalVar = "Accessibility Everywhere"
function showExample(){
    let localVar = "Accessible only inside the function"
    console.log(globalVar);  // work
}
console.log(localVar);   // Error local is not defined