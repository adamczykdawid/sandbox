//LECTURE: Equality Operators: == vs. ===
const numNeighbours = Number(
  prompt("How many neughbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only one border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}
console.log(typeof numNeighbours);
