/**
 * All random javaScript code will be written here
 * More specific code will be placed in the JavaScript or TypeScript Folders
 *
 * All code execution won't be ran on the browser but with node.
 */

//Variables
let person = {
  name: "Joe",
  age: 67,
  isAlive: true,
  hobbies: ["Dancing", "Cooking", "Hiking"],
};

let check = person.hobbies.filter((hobby) => hobby.endsWith("ing"));
// check.forEach(x => console.log(x));

let output = person.hobbies.map((hobby) => `<li>${hobby}</li>`);
// output.forEach((x) => console.log(x));

//Ternary Operator
let canDance = person.hobbies.includes("Dancing") ? true : false;
// console.log(canDance);

//check truthy
let result = false || "JOE";
// console.log(result);

//deconstruction
let { age } = person;
// console.log(age);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = numbers.reduce((curr, acc) => curr + acc, 0);
// console.log(ans);

let sum = 0;
for (let i = 1; i < 100; i++) {
  sum += i;
}
// console.log(sum);
