//////////codewars task
function duplicateCount(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text[i].toLowerCase() == text[j].toLowerCase()) {
        count++;
      }
    }
    if (count > 1) {
      console.log(`letter ${text[i].toLowerCase()} occurs ${count} times`);
    } else {
    }
    count = 0;
    i++;
  }
}

duplicateCount("ABBA");
