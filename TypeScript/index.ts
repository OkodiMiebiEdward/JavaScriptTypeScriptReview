/*
 * TypeScript is a superset of JavaScript. It brings compile time check to the javaScript programming language
 * JavaScript has the basic types 
 * i.e Primitive(number, string, boolean, null, undefined)
 * reference types(functions, objects, arrays)
 * Basically all reference types in JavaScript are objects
 * TypeScript types include any,arrays,Tuples,Enums,Unknown,never
 */


//so basically i have to pass the exact type even if it is an object
let person:{name:string,age:number,isAlive:boolean,move:() => void} = {
    name: "joe",
    age: 67,
    isAlive: true,
    move: ():void => {
        console.log(`yes i can move`);
    }
};

//Arrays
let items:(string | number)[] = [7,"joe",78,90];
    // items.forEach(x => console.log(x));

let numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

//Tuples
let user:[number,string] = [1,"Mike"];
let getNameFromUser = user[0];
// console.log(getNameFromUser);

enum Size{
 Small,
 Big,
 Bigger,
 Biggest
}

function getSize(size:number):void
{
 console.log(`The size is ${Size[size]}`);
}
// getSize(1);

let number:number = 678_789_789;
console.log(number)




