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
console.log(number);
