//LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
const describingFinland = describeCountry("Finland", 6000000, "Helsinki");
const describingPoland = describeCountry("Poland", 38000000, "Warsaw");
const describingItaly = describeCountry("Italy", 59000000, "Rome");

console.log(describingFinland);
console.log(describingPoland);
console.log(describingItaly);
