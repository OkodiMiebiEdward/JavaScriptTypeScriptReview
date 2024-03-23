class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //method
  move() {
    console.log("I can move very well");
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

let person = new Person("Joe", 67);
// person.move();

let student = new Student("joe", 23, "b");
student.move();
