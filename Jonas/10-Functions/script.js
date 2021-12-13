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

const flight = 'LH44';
const dawid = {
  name: 'Dawid',
  passport: 232234234,
};

const checkIn = function (flightNum, passenger) {
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 232234234) {
    alert('Checked in!');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, dawid);
console.log(dawid);
