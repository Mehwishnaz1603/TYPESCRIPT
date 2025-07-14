// Object:
//In typescrip object is us to a stote a data with paramaters and value in simply in one object//
//let suposse we have store information of student whitout declaring multples times variable just declare in one variable 
//and store all ainformation in one object. The object is create under curly bracket//
let Std_Data= {
    Std_Name: "Mehwish",
    Std_Age: 26,
    Std_Id: 1,
    Std_Class: "AI Web3.0 and Metaverse",
    Std_Batch: "10th",
    Std_Institute: "GIAIC"
}
//With the help of object we have print any property object by using dot .
console.log(`${Std_Data.Std_Name},${Std_Data.Std_Age},${Std_Data.Std_Id},${Std_Data.Std_Batch},${Std_Data.Std_Class},
${Std_Data.Std_Institute}`);
//Its your choice console in one time all properties or console one by one
console.log(`${Std_Data.Std_Name}`)
console.log(`${Std_Data.Std_Age}`)
console.log(`${Std_Data.Std_Id}`)
console.log(`${Std_Data.Std_Batch}`) 
console.log(`${Std_Data.Std_Class}`)
console.log(`${Std_Data.Std_Institute}`)


let student = {
    username: "MehwishNaz",
    age : 26,
    gender : "female",
    email: "mehwishnaz1603@gmail.com",
    phoneNumber : "03343302800",
    slot: "Thursday",
    shift: "morning",
    timing: "9 to 12 PM"
}
console.log(`${student.username}, ${student.age},${student.gender}, ${student.email},  ${student.phoneNumber}, 
${student.slot}, ${student.shift}, ${student.timing}`);

let car = {
    carName: "BMW",
    carModel: "gb7857",
    carColor: "Black",
    carYear: "2022",
    carPower: "1500cc"
}
console.log(`${car.carName}, ${car.carModel}, ${car.carYear}, ${car.carPower}, ${car.carColor}`)

// Define data types in Object
let info :{ username:string, age:number, gender:string, slot:string, isSingle:boolean} =
{
    username: "MehwishNaz",
    age: 26,
    gender: "female",
    slot: "Thursday",
    isSingle: true
}
console.log(`${info.username}, ${info.age}, ${info.gender}, ${info.slot}, ${info.isSingle}`)

// type varable is always declare in capital letter
type Employee = {
    name: string;
    age: number;
    isAdmin: boolean;
};
let employee1: Employee = {
    name: "MehwishNaz",
    age: 26,
    isAdmin: true
}
let employee2: Employee = {
    name: "Hooriya",
    age: 18,
    isAdmin: false
}
let employee3: Employee = {
    name: "Amna",
    age: 20,
    isAdmin: false
}
console.log(employee1, employee2, employee3)
// Optional Data Types
type Cars = {
    name: string;
    model: number;
    color: string;
    powerStering?: boolean;
};
let car1: Cars = {
    name: "Civic",
    model: 546,
    color:"Black",
    powerStering: false,
}
let car2: Cars = {
    name: "Alto",
    model: 657, 
    color:"Red",
}
let car3: Cars = {
    name: "Corolla",
    model: 658,
    color: "white",
}
console.log(car1,car2,car3);

type Faculty = "students"| "Admin" | "Teachers"| "Ts"
let students = "Mehwish"
let Admin = "Ayesha"
let Teachers = "JHamza Alvi"
let Ts = "Neha"

const product : {
    title: string,
    description?: string,
    price: number,
    isAvailable: boolean
} = {
    title: "Watch",
    description: "this is a watch",
    price: 500,
    isAvailable: true,
}

const stydents= {
    name: "MehwishNaz",
    standard: "MSC",
    gender: "female",
    address:{
        street: "street1",
        postalCode: 71500,
        city: "karachi",
    }
}
console.log(`${stydents.address.street}`)

const shirt ={
    title: "Polo",
    description: "This a a Polo brand Shirt",
    isAvailable: true,
    price: 300,
    additionalInfo: {
        color: "Yellow",
        size: 22,
        quantity: 8,
    }
}

type studentdata ={
    bio:{
        name: string,
        gender: string,
        mob: number
        dateofbirth: number
    },
    depatment:{
        depName: string,
        faculty: "bcom" | "bcs" | "ba"
    }
}   
let studentdata1 ={
    name: "MehwishNaz",
    gender : "Female",
    mob: 923343302800,
    dateofbirth: 16/3/1997
},
   contact: {
    depName: "Commerece"
    faculty: "bcom" 
}
console.log(Object.keys(studentdata1))
console.log(Object.values(studentdata1))
console.log(Object.entries(studentdata1))

function greet(){
    console.log("Hello Thursday Class");
}
const stu = {
    name: "MehwishNaz",
    dob: 1997,
    gender: "Female",
    callName: function (){
        console.log("Hello Mehwish Naz");
    }
    }
stu.callName()