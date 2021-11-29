// "use strict";

// // // These are the assignments from Jonas Schmedtmann course.
// // // LECTURE: Values and Variables
// // const country = "Poland";
// // const continent = "Europe";
// let population = 38000000;

// // console.log(country, continent, population);
// // //LECTURE: Data Types
// // const isIsland = false;
// // const language = "polish";

// // console.log(
// //   typeof isIsland,
// //   typeof population,
// //   typeof country,
// //   typeof language
// // );
// // //LECTURE: Basic Operators
// // console.log(population / 2);
// // console.log(population++);

// // population > 6000000
// //   ? console.log("Poland has more people than Finland")
// //   : console.log("Finland is bigger than Pland");

// // population > 33000000
// //   ? console.log("more than average")
// //   : console.log("less than average");

// // // let description =
// // //   country +
// // //   " is in " +
// // //   continent +
// // //   ", and its " +
// // //   population +
// // //   " people speak " +
// // //   language;

// // // console.log(description);
// // // LECTURE: Strings and Template Literals
// // const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

// // console.log(description);
// // //LECTURE: Taking Decisions: if / else Statements (Already done this task in one of the previous tasks)
// // //LECTURE: Type Conversion and Coercion
// // // console.log("9" - "5");
// // // console.log("19" - "13" + "17");
// // // console.log("19" - "13" + 17);
// // // console.log("123" < 57);
// // // console.log(5 + 6 + "4" + 9 - 4 - 2);
// // // //LECTURE: Equality Operators: == vs. ===
// // // const numNeighbours = Number(
// // //   prompt("How many neughbour countries does your country have?")
// // // );
// // // if (numNeighbours === 1) {
// // //   console.log("Only one border!");
// // // } else if (numNeighbours > 1) {
// // //   console.log("More than 1 border!");
// // // } else {
// // //   console.log("No borders!");
// // // }
// // // console.log(typeof numNeighbours);
// // // LECTURE: Logical Operators
// // if (language === "english" && population < 50000000 && isIsland) {
// //   console.log("You should live in Poland!");
// // } else {
// //   console.log("Poland does not meet your criteria");
// // }
// // switch (language) {
// //   case "chinese":
// //   case "mandarin":
// //     console.log("MOST number of native speakers");
// //     break;
// //   case "spanish":
// //     console.log("2nd place in number of native speakers");
// //     break;
// //   case "english":
// //     console.log("3rd place");
// //     break;
// //   case "hindi":
// //     console.log("number 4");
// //     break;
// //   case "arabic":
// //     console.log("5th");
// //     break;
// //   default:
// //     console.log("great language too:)");
// // }
// // //LECTURE: The Conditional (Ternary) Operator
// // console.log(
// //   `${country}'s population is ${
// //     population > 33000000 ? "above " : "below "
// //   }average`
// // );
// //LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }
// const describingFinland = describeCountry("Finland", 6000000, "Helsinki");
// const describingPoland = describeCountry("Poland", 38000000, "Warsaw");
// const describingItaly = describeCountry("Italy", 59000000, "Rome");

// console.log(describingFinland);
// console.log(describingPoland);
// console.log(describingItaly);
// //LECTURE: Function Declarations vs. Expressions
// function percentageOfWorld1(population) {
//   return (population / 7900000000) * 100;
// }
// const percentageFinland = percentageOfWorld1(6000000);
// const percentagePoland = percentageOfWorld1(38000000);
// const percentageItaly = percentageOfWorld1(59000000);

// console.log(percentagePoland);
// console.log(percentageFinland);
// console.log(percentageItaly);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900000000) * 100;
// };
// const percentageFinland2 = percentageOfWorld2(6000000);
// const percentagePoland2 = percentageOfWorld2(38000000);
// const percentageItaly2 = percentageOfWorld2(59000000);

// console.log(percentagePoland2);
// console.log(percentageFinland2);
// console.log(percentageItaly2);

// const percentageOfWorld3 = (population) => (population / 7900000000) * 100;
// const percentageFinland3 = percentageOfWorld3(6000000);
// const percentagePoland3 = percentageOfWorld3(38000000);
// const percentageItaly3 = percentageOfWorld3(59000000);

// console.log(percentagePoland3);
// console.log(percentageFinland3);
// console.log(percentageItaly3);
// //LECTURE: Functions Calling Other Functions
// const describePopulation = function (country, population) {
//   return `${country} has ${population} people, which is about ${percentageOfWorld1(
//     population
//   )}% of the world.`;
// };
// console.log(
//   describePopulation("Poland", 38000000),
//   describePopulation("Finland", 6000000),
//   describePopulation("Italy", 59000000)
// );
// //LECTURE: Introduction to Arrays
// const populations = [38000000, 6000000, 59000000, 7900000000];

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);
// //LECTURE: Basic Array Operations (Methods)
// const neighbours = [
//   "Russia",
//   "Lithuania",
//   "Belarus",
//   "Ukraine",
//   "Slovakia",
//   "Chech Republic",
//   "Germany",
// ];

// neighbours.push("Utopia");
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("probably not a CE country");
// } else {
//   console.log("A Central Europe country indeed!");
// }
// console.log(neighbours.indexOf("Slovakia"));
// neighbours[4] = "Słowacja";

// //OR neighbours[neighbours.indexOf("Slovakia")] = "Słowacja";
// console.log(neighbours);
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
// //LECTURE: Looping Arrays, Breaking and Continuing

// // let percentages2 = [];

// // for (let i = 0; i < populations.length; i++) {
// //   const perc = percentageOfWorld1(populations[i]);
// //   percentages2.push(perc);
// // }

// // console.log(percentages, percentages2);
// //LECTURE: Looping Backwards and Loops in Loops
// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     let currentNeighbour = listOfNeighbours[i];
//     console.log(`Neighbour: ${currentNeighbour[j]}`);
//   }
// }
// // OR Jonas style. This above is mine.
// // for (let i = 0; i < listOfNeighbours.length; i++) {
// //   for (let j = 0; j < listOfNeighbours[i].length; j++) {
// //     console.log(`Neighbout: ${listOfNeighbours[i][j]}`);
// //   }
// // }
// //LECTURE: The while Loop
// // let percentages2 = [];

// // for (let i = 0; i < populations.length; i++) {
// //   const perc = percentageOfWorld1(populations[i]);
// //   percentages2.push(perc);
// // }

// // console.log(percentages, percentages2);
// let percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages3.push(perc);
//   i++;
// }
// console.log(percentages, percentages3);
