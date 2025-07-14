// Object:
//In typescrip object is us to a stote a data with paramaters and value in simply in one object//
//let suposse we have store information of student whitout declaring multples times variable just declare in one variable 
//and store all ainformation in one object. The object is create under curly bracket//
var Std_Data = {
    Std_Name: "Mehwish",
    Std_Age: 26,
    Std_Id: 1,
    Std_Class: "AI Web3.0 and Metaverse",
    Std_Batch: "10th",
    Std_Institute: "GIAIC"
};
//With the help of object we have print any property object by using dot .
console.log("".concat(Std_Data.Std_Name, ",").concat(Std_Data.Std_Age, ",").concat(Std_Data.Std_Id, ",").concat(Std_Data.Std_Batch, ",").concat(Std_Data.Std_Class, ",\n").concat(Std_Data.Std_Institute));
//Its your choice console in one time all properties or console one by one
console.log("".concat(Std_Data.Std_Name));
console.log("".concat(Std_Data.Std_Age));
console.log("".concat(Std_Data.Std_Id));
console.log("".concat(Std_Data.Std_Batch));
console.log("".concat(Std_Data.Std_Class));
console.log("".concat(Std_Data.Std_Institute));
var student = {
    username: "MehwishNaz",
    age: 26,
    gender: "female",
    email: "mehwishnaz1603@gmail.com",
    phoneNumber: "03343302800",
    slot: "Thursday",
    shift: "morning",
    timing: "9 to 12 PM"
};
console.log("".concat(student.username, ", ").concat(student.age, ",").concat(student.gender, ", ").concat(student.email, ",  ").concat(student.phoneNumber, ", \n").concat(student.slot, ", ").concat(student.shift, ", ").concat(student.timing));
var car = {
    carName: "BMW",
    carModel: "gb7857",
    carColor: "Black",
    carYear: "2022",
    carPower: "1500cc"
};
console.log("".concat(car.carName, ", ").concat(car.carModel, ", ").concat(car.carYear, ", ").concat(car.carPower, ", ").concat(car.carColor));
// Define data types in Object
var info = {
    username: "MehwishNaz",
    age: 26,
    gender: "female",
    slot: "Thursday",
    isSingle: true
};
console.log("".concat(info.username, ", ").concat(info.age, ", ").concat(info.gender, ", ").concat(info.slot, ", ").concat(info.isSingle));
var employee1 = {
    name: "MehwishNaz",
    age: 26,
    isAdmin: true
};
var employee2 = {
    name: "Hooriya",
    age: 18,
    isAdmin: false
};
var employee3 = {
    name: "Amna",
    age: 20,
    isAdmin: false
};
console.log(employee1, employee2, employee3);
var car1 = {
    name: "Civic",
    model: 546,
    color: "Black",
    powerStering: false,
};
var car2 = {
    name: "Alto",
    model: 657,
    color: "Red",
};
var car3 = {
    name: "Corolla",
    model: 658,
    color: "white",
};
console.log(car1, car2, car3);
var students = "Mehwish";
var Admin = "Ayesha";
var Teachers = "JHamza Alvi";
var Ts = "Neha";
var product = {
    title: "Watch",
    description: "this is a watch",
    price: 500,
    isAvailable: true,
};
var stydents = {
    name: "MehwishNaz",
    standard: "MSC",
    gender: "female",
    address: {
        street: "street1",
        postalCode: 71500,
        city: "karachi",
    }
};
console.log("".concat(stydents.address.street));
var shirt = {
    title: "Polo",
    description: "This a a Polo brand Shirt",
    isAvailable: true,
    price: 300,
    additionalInfo: {
        color: "Yellow",
        size: 22,
        quantity: 8,
    }
};
var studentdata1 = {
    name: "MehwishNaz",
    gender: "Female",
    mob: 923343302800,
    dateofbirth: 16 / 3 / 1997
};
{
    depName: "Commerece";
    faculty: "bcom";
}
console.log(Object.keys(studentdata1));
console.log(Object.values(studentdata1));
console.log(Object.entries(studentdata1));
function greet() {
    console.log("Hello Thursday Class");
}
var stu = {
    name: "MehwishNaz",
    dob: 1997,
    gender: "Female",
    callName: function () {
        console.log("Hello Mehwish Naz");
    }
};
stu.callName();
