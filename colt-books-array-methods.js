////////////BOOKS EXAMPLE - PRACTICE:
// const books = [
//   {
//     title: "Rozmyślania",
//     authors: "Marek Aureliusz",
//     rating: 4.85,
//     genres: "Filozofia",
//   },
//   {
//     title: "Dżentelmen w Moskwie",
//     authors: "Amor Towles",
//     rating: 4.16,
//     genres: "Powieść",
//   },
//   {
//     title: "The SLight Edge",
//     authors: "Jeff Olson",
//     rating: 4.57,
//     genres: ["Filozofia", "Biznes", "Rozwój"],
//   },
//   {
//     title: "Do Przerwy 0:1",
//     authors: "Adam Bahdaj",
//     rating: 3.98,
//     genres: "Powieść",
//   },
//   {
//     title: "Pismo Święte",
//     authors: "Autor zbiorowy",
//     rating: 5,
//     genres: "Religia",
//   },
//   {
//     title: "Władca Pierścieni - Saga",
//     authors: "J.R.R.Tolkien",
//     rating: 4.75,
//     genres: "Fantastyka",
//   },
//   {
//     title: "Harry Potter - Saga",
//     authors: "J.K.Rowling",
//     rating: 4.64,
//     genres: "Fantastyka",
//   },
//   {
//     title: "Lalka",
//     authors: "Bolesław Prus",
//     rating: 4.07,
//     genres: "Powieść",
//   },
//   {
//     title: "Trylogia",
//     authors: "Henryk Sienkiewicz",
//     rating: 4.27,
//     genres: ["Powieść", "Powieść Historyczna"],
//   },
//   {
//     title: "A truly horrible book",
//     authors: "Xavier Time",
//     rating: 2.06,
//     genres: ["Powieść"],
//   },
// ];

//forEach:
// books.forEach(function (book) {
//   return console.log(book.title.toUpperCase());
// });

//Map:
//1)
// books.map((book) => {
//   const newBook = `/${book.title}/`;
//   return console.log(newBook);
// });
//2)

//Find:
// const test = books.find((book) => {
//   if (book.title.indexOf("Dż") === 0) {
//     return books;
//   }
// });
// console.log(test);

// const goodBook = books.find((book) => book.rating >= 4);

//Filter
// const greatBooks = books.filter((book) => book.rating >= 4.5);
// console.log(greatBooks);
// const thoughtProvoking = books.filter(
//   (book) => book.genres.includes("Filozofia") || book.genres.includes("Religia")
// );
// console.log(thoughtProvoking);

//Every & Some
// const allGoodBooks = books.every((book) => book.rating > 4.5);

//Sort

// const worstToBest = books.slice().sort((a, b) => a.rating - b.rating);
// books.slice().sort((a, b) => b.rating - a.rating);

// console.log(worstToBest);
// console.log(books);

//Reduce
// const allRatings = [];

// books.map((book) => allRatings.push(book.rating));

// console.log(allRatings);

// const sumOfRatings = allRatings.reduce((acc, currVal) => acc + currVal);

// console.log(sumOfRatings);

// const highestRating = allRatings.reduce((acc, currVal) => {
//   return Math.max(acc, currVal);
// });
// console.log(highestRating);
// const votes = [
//   "y",
//   "n",
//   "n",
//   "y",
//   "y",
//   "absent",
//   "y",
//   "n",
//   "n",
//   "y",
//   "y",
//   "y",
//   "n",
//   "n",
//   "y",
//   "y",
// ];

// const results = votes.reduce((tally, currVal) => {
//   tally[currVal] ? tally[currVal]++ : (tally[currVal] = 1);

//   //OR shorter: tally[currVal] = (tally[currVal] || 0) + 1;

//   return tally;
// }, {});
