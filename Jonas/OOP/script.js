// // // 'use strict';

// // // const Person = function (firstName, birthYear) {
// // //   this.firstName = firstName;
// // //   this.birthYear = birthYear;
// // // };

// // // const dawid = new Person('Dawid', 1992);
// // // console.log(dawid);

// // // const przemyslaw = new Person('Przemysław', 1994);
// // // console.log(przemyslaw);

// // // const jack = new Person('Jack', 1974);
// // // console.log(jack);

// // // console.log(dawid instanceof Person);

// // // Person.hey();

// // // //Prototypes
// // // Person.prototype.calcAge = function () {
// // //   console.log(2037 - this.birthYear);
// // // };

// // // dawid.calcAge();
// // // jack.calcAge();
// // // przemyslaw.calcAge();

// // // Person.prototype.species = 'Homo Sapiens';

// // // console.log(jack.species, dawid.species);
// // // console.log(dawid.hasOwnProperty('firstName'));
// // // console.log(dawid.hasOwnProperty('species'));

// // // const arr = [3, 4, 5, 6, 7, 8, 9]; //new Array === []
// // // console.log(arr.__proto__);

// // // console.log(arr.__proto__ === Array.prototype);
// // // console.log(arr.__proto__.__proto__);

// // // ///////////////////////////////////////
// // // // Coding Challenge #1

// // // /*
// // // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// // // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// // // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// // // DATA CAR 1: 'BMW' going at 120 km/h
// // // DATA CAR 2: 'Mercedes' going at 95 km/h

// // // GOOD LUCK 😀
// // // */

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

// //class declaration
// // const PersonNew = class {

// // }

// // //class expression
// // class Person {
// //   constructor(fullName, birthYear) {
// //     this.fullName = fullName;
// //     this.birthYear = birthYear;
// //   }
// //   //Instance methods
// //   //methods will be added to .prototype property
// //   calcAge() {
// //     console.log(2037 - this.birthYear);
// //   }
// //   get age() {
// //     return 2038 - this.birthYear;
// //   }
// //   //set a property that already exists
// //   set fullName(name) {
// //     if (name.includes(' ')) this._fullName = name;
// //     else alert(`${name} is not a full name!`);
// //   }
// //   get fullName() {
// //     return this._fullName;
// //   }
// //   //Static method
// //   static hey() {
// //     console.log(`Hey there`);
// //   }
// // }

// // const dawid = new Person('Dawid Adams', 1992);
// // console.log(dawid);

// // Person.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// // dawid.greet();
// // dawid.calcAge();
// // console.log(dawid.age);
// // Person.hey();

// // //1. classes are not hoisted
// // //2. classes are first-class citizens
// // //3. classes are executed in strict mode

// // const account = {
// //   owner: 'Dawid',
// //   movements: [200, 200, 300, 400],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },

// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // console.log(account.latest);

// // account.latest = 50;
// // console.log(account.movements);

// // ///Object.create
// // const PersonProto = {
// //   calcAge() {
// //     console.log(2037 - this.birthYear);
// //   },
// //   init(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   },
// // };

// // const steven = Object.create(PersonProto);
// // console.log(steven);
// // steven.name = 'Steven';
// // steven.birthYear = 2002;
// // steven.calcAge();

// // console.log(steven.__proto__ === PersonProto);

// // const sarah = Object.create(PersonProto);
// // sarah.init('Sarah', '1984');
// // sarah.calcAge();

// // ///////////////////////////////////////
// // // Coding Challenge #2

// // /*
// // 1. Re-create challenge 1, but this time using an ES6 class;
// // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// // 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// // DATA CAR 1: 'Ford' going at 120 km/h

// // GOOD LUCK 😀
// // */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  break() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(miles) {
    this.speed = miles * 1.6;
    console.log(this.speed);
  }
}

// // const scuderiaFerrari = new CarCl('Scuderia Ferrari', 50);
// // const mcLaren = new CarCl('McLaren', 60);
// // const mercedes = new CarCl('Mercedes', 80);

// // console.log(scuderiaFerrari, scuderiaFerrari.__proto__);
// // scuderiaFerrari.accelerate();
// // scuderiaFerrari.break();
// // console.log(scuderiaFerrari.speedUS);
// // scuderiaFerrari.speedUS = 120;
// // console.log(scuderiaFerrari);

// /////////////////////////////////////
// ////////Inheritance between "classes": constructor functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);

// mike.introduce();
// mike.calcAge();

// Student.prototype.constructor = Student;

// ///////////////////////////////////////
// // Coding Challenge #3

// /*
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */

// // const EV = function (make, speed, charge) {
// //   Car.call(this, make, speed);
// //   this.charge = charge;
// // };

// // EV.prototype = Object.create(Car.prototype);

// // EV.prototype.chargeBattery = function (chargeTo) {
// //   this.charge = chargeTo;
// // };

// // EV.prototype.accelerate = function () {
// //   this.speed += 20;
// //   this.charge--;
// //   console.log(
// //     `${this.make} going at ${this.speed} km/h, with charge of ${this.charge}%`
// //   );
// // };

// // const tesla = new EV('Tesla', 120, 23);
// // console.log(tesla);
// // tesla.chargeBattery(90);
// // tesla.accelerate();
// ///////////////////////////////////////
// // Inheritance Between "Classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //needs to happen first! it allows you gto access this keyword
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'COmputer Science');
// martha.introduce();
// martha.calcAge();

// ///////////////////////////////////////
// // Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

//Public fields
//private fields
//public methods
//private methods
//there is also a static version

class Account {
  //public fields (instances)
  locale = navigator.language;

  //private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  //public methods
  //public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) { //in future
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  static helper() {
    console.log(`working only on the class itself`);
  }
  //private methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Dawid', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000); //not yet implemented to js
console.log(acc1.getMovements);
console.log(acc1);
// console.log(acc1.#movements); //error - private :D
// console.log(acc1.#pin); //same here
Account.helper;

//chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
//////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  getCharge() {
    return this.#charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
console.log(rivian.accelerate().break().break().chargeBattery(100));
console.log(rivian.getCharge());
console.log(rivian.speedUS);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
