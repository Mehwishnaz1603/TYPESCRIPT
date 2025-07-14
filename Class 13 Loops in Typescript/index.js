// Loops:
// For Loops
var a = 0;
if (a < 1) { }
a++;
for (var count = 1; count < 10; count++) {
    console.log("Hellow World");
}
; //increment 9 times
for (var i_1 = 0; i_1 <= 10; i_1++) {
    console.log("Hellow World");
}
; //incrment 1o times
// For Loop in Function:
var printTable = function (num) {
    for (var t = 1; t <= 10; t++) {
        console.log("".concat(num, "*").concat(t, "= ").concat(num * t));
    }
    ;
};
printTable(2);
printTable(4);
printTable(8);
var sumOfNumber = function (num) {
    var sum = 0;
    for (var n = 0; n <= num; n++) {
        sum = sum + n;
    }
    console.log(sum);
};
sumOfNumber(5);
sumOfNumber(100);
//While Loop
var i = 0;
while (i <= 10) {
    console.log(i, "i");
    i++;
}
var j = 1;
var tableNum = 2;
while (j <= 10) {
    console.log("".concat(tableNum, " * ").concat(j, " = ").concat(tableNum * j));
    j++;
}
;
//For in Loops
var student = {
    name: "Mehwish",
    batch: "Thursday Class",
    isAvailable: false,
};
// console.log(obj.name);
// console.log(obj["name"]);
for (var x in student) {
    console.log(x, "x");
    console.log(x, student[x]);
}
