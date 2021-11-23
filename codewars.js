// //////////codewars task
// function duplicateCount(text) {
//   let count = 0;
//   let currentCount = 0;
//   for (let i = 0; i < text.length; i++) {
//     for (let j = 0; j < text.length; j++) {
//       if (text[i].toLowerCase() == text[j].toLowerCase()) {
//         currentCount++;
//       }
//     }
//     if (currentCount > 1) {
//       count++;
//     }
//     currentCount = 0;
//     i++;
//   }
//   return count;
// }
// function duplicateCount(text) {
//   let count = 0;
//   let textArr = text.toLowerCase().split("");
//   let alreadyFound = [];

//   for (let i = 0; i < textArr.length; i++) {
//     let sliced = textArr.slice(0, i);

//     if (alreadyFound.includes(textArr[i])) {
//       i++;
//     } else if (sliced.includes(textArr[i])) {
//       alreadyFound.push(textArr[i]);
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// }

// console.log(duplicateCount("abcde")); //1
// console.log(duplicateCount("")); //undefined
// console.log(duplicateCount("aabbcde")); //2
// console.log(duplicateCount("aabBcde")); //2
// console.log(duplicateCount("Indivisibility")); //6
// console.log(duplicateCount("Indivisibilities")); //7
// console.log(duplicateCount("abcdefABCABa")); //7

// function duplicateCount(text) {
//   let miniArr = text.toLowerCase().split("");
//   let alreadyFound = [];
//   let counter = 0;

//   for (let i = 0; i < miniArr.length; i++) {
//     let sliced = miniArr.slice(0, i);

//     if (alreadyFound.includes(miniArr[i])) {
//       i++;
//       continue;
//     } else if (sliced.includes(miniArr[i])) {
//       alreadyFound.push(miniArr[i]);
//       counter++;
//     }
//   }
//   console.log(counter);
//   return counter;
// }

// //duplicateCount("")
// duplicateCount("abcde"); //0
// duplicateCount("aabbcde"); //2
// duplicateCount("aabBcde"); //2
// duplicateCount("Indivisibility"); //1
// duplicateCount("Indivisibilities"); //2
// duplicateCount("abcdefABCABa");
//codewars 2nd KATA
// function longest(s1, s2) {
//   let sorted = "";
//   let textArr = s1 + s2;
//   textArr.split("");
//   let alreadySaved = [];
//   for (let i = 0; i < textArr.length; i++) {
//     if (alreadySaved.includes(textArr[i])) {
//       continue;
//     } else {
//       alreadySaved.push(textArr[i]);
//     }
//   }

//   sorted = alreadySaved.sort().join("");
//   return sorted;
// }

// console.log(longest("aretheyhere", "yestheyarehere"));
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
// console.log(longest("inmanylanguages", "theresapairoffunctions"));
// function accum(s) {
//   let finalString = "";
//   let testString = s.toLowerCase();

//   for (let i = 0; i < testString.length; i++) {
//     if (i === 0) {
//       finalString += testString[i].toUpperCase();
//       finalString += "-";
//     } else if (i === testString.length - 1) {
//       finalString += testString[i].toUpperCase() + testString[i].repeat(i);
//     } else if (i !== 0) {
//       finalString += testString[i].toUpperCase() + testString[i].repeat(i);
//       finalString += "-";
//     }
//   }

//   return finalString;
// }

// console.log(accum("ZpglnRxqenU"));
// function likes(names) {
//   let whoLikesIt = [];

//   if (names.length === 0) {
//     return "no one likes this";
//   } else if (names.length === 1) {
//     return `${names[0]} likes this`;
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (names.length > 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Dawid"]));
// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(isPrime(5099));
// let beeramid = function (bonus, price) {
//   let i = 0;
//   let totalCheck = 0;
//   while (totalCheck <= bonus) {
//     totalCheck += i * i * price;
//     i++;
//   }
//   if (i - 2 <= 0) {
//     return 0;
//   }
//   return console.log(i - 2);
// };

// beeramid(5000, 3  );
//Colt assignments
// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.includes(" ") ||
//     password.includes(username)
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(isValidPassword("89Fjjlnms", "dogLuvr"));
// console.log(isValidPassword("dogLuvr123!", "dogLuvr"));
// console.log(isValidPassword("hello1", "dogLuvr"));
// console.log(isValidPassword("h osiemchaarkdk", "dogLuvr"));
// function avg(arr) {
//   let sum = 0;
//   for (let e of arr) {
//     sum += e;
//   }
//   sum /= arr.length;
//   return sum;
// }

// console.log(avg([0, 50]));
// console.log(avg([75, 76, 80, 95, 100]));
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of "abcdefghijklmnoprstuwxyz") {
//     if (lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPangram("The five boxing wizards jump quickly"));
// function getCard(value, suit) {
//   const randomPlayingCard = {
//     value: value,
//     suit: suit,
//   };
//   return console.log(randomPlayingCard.value, randomPlayingCard.suit);
// }

// console.log(getCard("Q", "hearts"));
