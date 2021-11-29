//LECTURE: Basic Array Operations (Methods)
const neighbours = [
  "Russia",
  "Lithuania",
  "Belarus",
  "Ukraine",
  "Slovakia",
  "Chech Republic",
  "Germany",
];

neighbours.push("Utopia");
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("probably not a CE country");
} else {
  console.log("A Central Europe country indeed!");
}
console.log(neighbours.indexOf("Slovakia"));
neighbours[4] = "Słowacja";

//OR neighbours[neighbours.indexOf("Slovakia")] = "Słowacja";
console.log(neighbours);
