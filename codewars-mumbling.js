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
