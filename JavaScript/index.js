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


