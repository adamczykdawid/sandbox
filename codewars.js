//////////codewars task
function duplicateCount(text) {
  let count = 0;
  let currentCount = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text[i].toLowerCase() == text[j].toLowerCase()) {
        currentCount++;
      }
    }
    if (currentCount > 1) {
      count++;
    }
    currentCount = 0;
    i++;
  }
  return count;
}

console.log(duplicateCount("abcde")); //1
console.log(duplicateCount("")); //undefined
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //6
console.log(duplicateCount("Indivisibilities")); //7
