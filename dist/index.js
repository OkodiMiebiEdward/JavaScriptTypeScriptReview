"use strict";
/*
 * TypeScript is a superset of JavaScript. It brings compile time check to the javaScript programming language
 * JavaScript has the basic types
 * i.e Primitive(number, string, boolean, null, undefined)
 * reference types(functions, objects, arrays)
 * Basically all reference types in JavaScript are objects
 * TypeScript types include any,arrays,Tuples,Enums,Unknown,never
 */
//so basically i have to pass the exact type even if it is an object
let person = {
    name: "joe",
    age: 67,
    isAlive: true,
    move: () => {
        console.log(`yes i can move`);
    }
};
//Arrays
let items = [7, "joe", 78, 90];
// items.forEach(x => console.log(x));
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Tuples
let user = [1, "Mike"];
let getNameFromUser = user[0];
// console.log(getNameFromUser);
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Big"] = 1] = "Big";
    Size[Size["Bigger"] = 2] = "Bigger";
    Size[Size["Biggest"] = 3] = "Biggest";
})(Size || (Size = {}));
function getSize(size) {
    console.log(`The size is ${Size[size]}`);
}
// getSize(1);
let number = 678789789;
let janitor = {
    name: "joe",
    age: 45,
    salary: 45000,
    jobDescription: () => {
        console.log(`my name is ${janitor.name}
                       my job is to clean and to sweep`);
    }
};
let booksAuthors = {
    name: "Harry Potter",
    yearWritten: "1890",
    authorName: "Mikes",
    dob: "1678",
    isAlive: false
};
//type narrowing
function getPhoneNumber(num) {
    if (typeof num === 'number')
        console.log(`The number is ${num}`);
    else
        console.log(num.length);
}
let num = null;
// console.log(num)
//Literal Types
let quantity = 50;
//Nullish Coalescing Operator
// ?? operator
let address = null;
let ans = address !== null && address !== void 0 ? address : "Address not provided";
// console.log(ans);
//OOP
//Creating Classes
// class Account
// {
//     public name: string;
//     public isAccountActive:boolean;
//     public isEmployed:boolean;
//     private _accountType:string = "Saving";
//     constructor(name:string,isAccountActive:boolean,isEmployed:boolean)
//     {
//       this.name = name;
//       this.isAccountActive = isAccountActive;
//       this.isEmployed = isEmployed;
//     }
//     getAccountType():string
//     {
//        return this._accountType;
//     }
//     CreateAnotherAccount():void
//     {
//         let output:string = "";
//         output = this._accountType === "Saving" ? "Current" : "Saving";
//         console.log(`You will be creating a ${output} account`);
//     }
// }
// let account = new Account("Joe Robinson", true, true);
// account.CreateAnotherAccount();
//using parameter properties
class Account {
    constructor(name, isAccountActive, isEmployed) {
        this.name = name;
        this.isAccountActive = isAccountActive;
        this.isEmployed = isEmployed;
        this._amount = 890890789;
    }
    get money() {
        return this._amount;
    }
    set money(value) {
        if (value < 0)
            throw new Error('number cannot be smaller than 0');
        else
            this._amount = value;
    }
}
// let account = new Account("Joe Robinson", true, true);
// account.money = 56_000;
// console.log(account.money);
class Shape {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(height, size, color) {
        super(size, color);
        this.height = height;
    }
}
class Calender {
    // name: string;
    // AddEvent: () => void;
    // removeEvent: () => string;
    /**
     *
     */
    constructor(name) {
        this.name = name;
        this.removeEvent = () => "event removed";
    }
    addEvent() {
    }
}
//Generics
class KeyValuePair {
    //contains properties we can only know when we run the code.
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("boy", 12);
//Generic functions
function sayTime(val) {
    return val;
}
let result = sayTime("The time is late");
console.log(result);
