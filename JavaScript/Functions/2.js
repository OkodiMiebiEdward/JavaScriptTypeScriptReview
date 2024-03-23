//function declarations and function expressions

function sayHello(name) {
  return `hello ${name}`;
}

// console.log(sayHello());

//function expression
let age = 78;
let checkage = () => {
  if (age > 50) console.log("yap, you are old enough");
};

checkage();
