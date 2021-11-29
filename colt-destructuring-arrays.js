//////////////////////////////////////////
//destructuring array
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

const [gold, silver, bronze] = raceResults;
// const [first, , fourth] = raceResults;
const [winner, ...rest] = raceResults;

console.log(gold, silver, bronze); //expected output: Eliud Kipchoge, Feyisa Lelisa, Galen Rupp
