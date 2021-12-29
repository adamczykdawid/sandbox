// 'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const dawid = new Person('Dawid', 1992);
// console.log(dawid);

// const przemyslaw = new Person('Przemysław', 1994);
// console.log(przemyslaw);

// const jack = new Person('Jack', 1974);
// console.log(jack);

// console.log(dawid instanceof Person);

// //Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// dawid.calcAge();
// jack.calcAge();
// przemyslaw.calcAge();

// Person.prototype.species = 'Homo Sapiens';

// console.log(jack.species, dawid.species);
// console.log(dawid.hasOwnProperty('firstName'));
// console.log(dawid.hasOwnProperty('species'));

// const arr = [3, 4, 5, 6, 7, 8, 9]; //new Array === []
// console.log(arr.__proto__);

// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const scuderiaFerrari = new Car('Scuderia Ferrari', 50);
// const mcLaren = new Car('McLaren', 60);
// const mercedes = new Car('Mercedes', 80);

// console.log(scuderiaFerrari, scuderiaFerrari.__proto__);
// scuderiaFerrari.accelerate();
// scuderiaFerrari.break();

//class declaration
// const PersonNew = class {

// }

//class expression
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const dawid = new Person('Dawid', 1992);
console.log(dawid);

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

dawid.greet();
dawid.calcAge();

//1. classes are not hoisted
//2. classes are first-class citizens
//3. classes are executed in strict mode
