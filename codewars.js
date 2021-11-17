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
function accum(s) {
  let finalString = "";
  let testString = s.toLowerCase();

  for (let i = 0; i < testString.length; i++) {
    if (i === 0) {
      finalString += testString[i].toUpperCase();
      finalString += "-";
    } else if (i === testString.length - 1) {
      finalString += testString[i].toUpperCase() + testString[i].repeat(i);
    } else if (i !== 0) {
      finalString += testString[i].toUpperCase() + testString[i].repeat(i);
      finalString += "-";
    }
  }

  return finalString;
}

console.log(accum("ZpglnRxqenU"));
