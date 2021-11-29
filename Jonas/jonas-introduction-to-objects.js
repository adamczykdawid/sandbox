// //LECTURE: Introduction to Objects
// const myCountry = {
//   country: "Poland",
//   capital: "Warsaw",
//   language: "polish",
//   population: 38000000,
//   neighbours: [
//     "Russia",
//     "Lithuania",
//     "Belarus",
//     "Ukraine",
//     "Slovakia",
//     "Chech Republic",
//     "Germany",
//   ],

//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },

//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//   },
// };
// //LECTURE: Dot vs. Bracket Notation
// console.log(
//   `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// myCountry.population += 2000000;
// console.log(myCountry.population);

// myCountry["population"] -= 2000000;
// console.log(myCountry["population"]);
// //LECTURE: Object Methods
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);
// //LECTURE: Iteration: The for Loop
// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }
