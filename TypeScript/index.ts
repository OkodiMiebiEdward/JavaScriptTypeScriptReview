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
// console.log(number)


//Objects
//using type alias
type employee =
{
  name:string,
  age:number,
  salary:number,
  jobDescription:() => void
}


let janitor:employee = {
    name: "joe",
    age: 45,
    salary: 45_000,
    jobDescription: ():void => {
        console.log(`my name is ${janitor.name}
                       my job is to clean and to sweep`);
    }
}

// janitor.jobDescription();

//union type
// type data =  (string | number);
// let personalInfo:data = "No 7 fills johns avenue";
// console.log(personalInfo);


//intersections
//The intersection type can work properly by creating objects that intersect
type books = {
  name:string,
  yearWritten:string
}

type author = {
   authorName:string,
   dob:string,
   isAlive:boolean
}

let booksAuthors: books&author = {
    name: "Harry Potter",
    yearWritten:"1890",
    authorName:"Mikes",
    dob:"1678",
    isAlive:false
}

//type narrowing
function getPhoneNumber(num:(string | number)):void{
   if(typeof num === 'number')
      console.log(`The number is ${num}`);
    else
    console.log(num.length);
}

// getPhoneNumber(`Can't give you my number`);

//nullable types
type specialNumber = number | null;
let num:specialNumber = null
// console.log(num)


//Literal Types
let quantity:50 = 50;

//Nullish Coalescing Operator
// ?? operator
let address = null
let ans: (string | null) = address ?? "Address not provided";
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
class Account
{
    private _amount:number = 890_890_789;
    constructor(public name:string, public isAccountActive:boolean, public isEmployed:boolean){}

    get money():number
    {
       return this._amount
    }

    set money(value:number)
    {
       if(value < 0)
          throw new Error('number cannot be smaller than 0');
        else
        this._amount = value;
    }
    
    //index signature
    //[SetNames:string]:string
}

// let account = new Account("Joe Robinson", true, true);
// account.money = 56_000;
// console.log(account.money);


class Shape
{
    constructor(public size:string,public color:string){}
}


class Circle extends Shape
{
    constructor(public height:number,size:string,color:string){
        super(size,color)
    }
}

//Interfaces
interface ICalender
{
    name:string;
    addEvent:() => void;
    removeEvent:() => string;
}


class Calender implements ICalender
{
    // name: string;
    // AddEvent: () => void;
    // removeEvent: () => string;
    /**
     *
     */
    constructor(public name:string) {
    }

    addEvent():void
    {
    }

    removeEvent = ():string => "event removed";
}

//Generics



