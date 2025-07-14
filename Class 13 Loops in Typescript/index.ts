// Loops:
// For Loops
let a =0
if (a< 1){}a++
for(let count = 1; count<10; count++){
    console.log("Hellow World")}; //increment 9 times

    for (let i= 0; i<=10;i++){
        console.log("Hellow World")}; //incrment 1o times

// For Loop in Function:
let printTable=(num:number)=>{
    for (let t= 1; t<=10; t++){
        console.log(`${num}*${t}= ${num*t}`);
    };
};
printTable(2)
printTable(4)
printTable(8)

let sumOfNumber=(num:number)=>{
    let sum = 0
    for(let n=0;n<=num; n++){
        sum =sum+n;
    }
    console.log(sum)
}
sumOfNumber(5)
sumOfNumber(100);

//While Loop
let i =0;
while(i <= 10){
    console.log(i,"i");
    i++
}

let j =1
let tableNum=2
while(j<=10){
    console.log(`${tableNum} * ${j} = ${tableNum*j}`)
    j++
};

//For in Loops
let student ={
    name:"Mehwish",
    batch:"Thursday Class",
    isAvailable:false,
}
// console.log(obj.name);
// console.log(obj["name"]);

for(let x in student){
    console.log(x,"x")
    console.log(x,student[x]);
}

