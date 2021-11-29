//LECTURE: Functions Calling Other Functions
const describePopulation = function (country, population) {
  return `${country} has ${population} people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};
console.log(
  describePopulation("Poland", 38000000),
  describePopulation("Finland", 6000000),
  describePopulation("Italy", 59000000)
);
//LECTURE: Introduction to Arrays
const populations = [38000000, 6000000, 59000000, 7900000000];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
