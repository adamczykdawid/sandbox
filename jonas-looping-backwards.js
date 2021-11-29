//LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    let currentNeighbour = listOfNeighbours[i];
    console.log(`Neighbour: ${currentNeighbour[j]}`);
  }
}
// OR Jonas style. This above is mine.
// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbout: ${listOfNeighbours[i][j]}`);
//   }
// }
