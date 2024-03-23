/**
 * We have factory functions and constructor functions in Js
 */

function createCircle(radius) {
  return {
    radius: radius,
    diameter: radius * radius,
  };
}

let c = createCircle(5);
// console.log(c.diameter);
function Shape(color) {
  this.color = color;
  this.size = function () {
    console.log("The size seems big");
  };
}

Shape.prototype.height = function () {
  console.log("The shape has a fixed height");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
  this.diameter = radius * radius;

  //instantiated method
  this.area = () => console.log(3.14 * this.diameter);
}

//prototypical inheritance
Circle.prototype.move = function () {
  //   console.log("Told to move a little bit");
};

// circle.move();

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

let circle = new Circle(6, "red");
circle.height();
