'use strict';

///////////////////////////////////////////
/////////DEFULT PARAMETERS

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

///////////////////////////////////////////
/////////HOW PASSING ARGUMENTS WORK

// const flight = 'LH44';
// const dawid = {
//   name: 'Dawid',
//   passport: 232234234,
// };

// const checkIn = function (flightNum, passenger) {
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 232234234) {
//     alert('Checked in!');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, dawid);
// console.log(dawid);

////////////////////////////////////////////
/////////CALLBACKS

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //higher-order function
// const transformer = function (str, fn) {
//   console.log(`orignal string: ${str}`);
//   console.log(`transformed string: ${fn(str)}`);
//   console.log(`trasformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

///////////////////////////////////////////
/////////FUNCTIONS CALLING OTHER FUNCTIONS
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetTwo = greeting => name => console.log(`${greeting} ${name}`);
// greetTwo('hi')('dawid');

///////////////////////////////////////////
/////////apply and call methods

//creating object, with methods, and then a new object with the same method as in the previously created object. Method is not working as THIS keyword is not pointing to the correct object, it's not a method of an object, but just a regular function that does not have the THIS keyword. So, you can use, apply, call and bind methods to specify the THIS KEYWORD.
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Dawid Adamczyk');
// lufthansa.book(635, 'Ja Kowalski');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// //does not work
// // book(23, 'Sarah Williams');

// //////////call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'SA',
//   bookings: [],
// };

// book.call(swiss, 456, 'Meg Adams');
// console.log(swiss);

// //////////apply method

// const flightData = [586, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //////////bind method
// //bind method returns function, so you assing it to the new function, and then call it with standard parameters that function requires. You can also specify the first parameter tobe the same all the time like in an example with 23. THen while callin it you simply write the second argument :)
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Dawid Adamczyk');
// bookEW23('Martha Coooper');

// //bind with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// // lufthansa.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application

// const addTax1 = (rate, value) => value + value * rate;
// console.log(addTax1(0.1, 200));

// const addVat = addTax1.bind(null, 0.23);

// console.log(addVat(200));

// function addTax2(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }

// const addVat2 = addTax2(0.23);
// console.log(addVat2(200));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const inputNum = prompt(
//       `${this.question}\n ${this.options.join('\n')} \n Write option number:`
//     );

//     const inputNumber = parseInt(inputNum);
//     for (const [i, el] of this.answers.entries()) {
//       if (inputNumber === i) {
//         this.answers[i]++;
//       } else if (inputNumber > 3 || inputNumber < 0) {
//         alert('what the..');
//       }
//     }
//     //OR JONAS METHOD WITH SHORT CIRCUITING ETC
//     //typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       const result = `Poll results are ${this.answers.join(',')}`;
//       console.log(result);
//       return result;
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// // [5, 2, 3]
// // [1, 5, 3, 9, 6, 1]

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
