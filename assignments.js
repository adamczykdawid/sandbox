"use strict";

// These are the assignments from Jonas Schmedtmann course.
// LECTURE: Values and Variables
const country = "Poland";
const continent = "Europe";
let population = 38000000;

console.log(country, continent, population);
//LECTURE: Data Types
const isIsland = false;
const language = "polish";

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
//LECTURE: Basic Operators
console.log(population / 2);
console.log(population++);

population > 6000000
  ? console.log("Poland has more people than Finland")
  : console.log("Finland is bigger than Pland");

population > 33000000
  ? console.log("more than average")
  : console.log("less than average");

// let description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " people speak " +
//   language;

// console.log(description);
// LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

console.log(description);
//LECTURE: Taking Decisions: if / else Statements (Already done this task in one of the previous tasks)
//LECTURE: Type Conversion and Coercion
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);
// //LECTURE: Equality Operators: == vs. ===
// const numNeighbours = Number(
//   prompt("How many neughbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("Only one border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No borders!");
// }
// console.log(typeof numNeighbours);
// LECTURE: Logical Operators
if (language === "english" && population < 50000000 && isIsland) {
  console.log("You should live in Poland!");
} else {
  console.log("Poland does not meet your criteria");
}
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th");
    break;
  default:
    console.log("great language too:)");
}
//LECTURE: The Conditional (Ternary) Operator
console.log(
  `${country}'s population is ${
    population > 33000000 ? "above " : "below "
  }average`
);
