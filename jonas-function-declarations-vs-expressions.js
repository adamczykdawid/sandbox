//LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}
const percentageFinland = percentageOfWorld1(6000000);
const percentagePoland = percentageOfWorld1(38000000);
const percentageItaly = percentageOfWorld1(59000000);

console.log(percentagePoland);
console.log(percentageFinland);
console.log(percentageItaly);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};
const percentageFinland2 = percentageOfWorld2(6000000);
const percentagePoland2 = percentageOfWorld2(38000000);
const percentageItaly2 = percentageOfWorld2(59000000);

console.log(percentagePoland2);
console.log(percentageFinland2);
console.log(percentageItaly2);

const percentageOfWorld3 = (population) => (population / 7900000000) * 100;
const percentageFinland3 = percentageOfWorld3(6000000);
const percentagePoland3 = percentageOfWorld3(38000000);
const percentageItaly3 = percentageOfWorld3(59000000);

console.log(percentagePoland3);
console.log(percentageFinland3);
console.log(percentageItaly3);
