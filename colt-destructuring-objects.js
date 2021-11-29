//////////////////////////////////////////////////////
//DESTRUCTURING OBJECTS
/////////////////////////////////////////////////////////
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the ORder of the Golden Heart of Kenya",
};

// const { first, last } = runner;
// const { country: nation, title: honorific } = runner;
const { first, last, ...other } = runner;
//nested destructuring
const runners = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Fayisa",
    last: "Lelisa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
];

const [{ first: goldWinner }, { country }, { last }] = runners;
function print(person) {
  const { first, last, country } = person;
  console.log(`${first} ${last}, ${country}`);
}
//OR
function print({ first, last, country }) {
  console.log(`${first} ${last}, ${country}`);
}
