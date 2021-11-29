//codewars two to one
function longest(s1, s2) {
  let sorted = "";
  let textArr = s1 + s2;
  textArr.split("");
  let alreadySaved = [];
  for (let i = 0; i < textArr.length; i++) {
    if (alreadySaved.includes(textArr[i])) {
      continue;
    } else {
      alreadySaved.push(textArr[i]);
    }
  }

  sorted = alreadySaved.sort().join("");
  return sorted;
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));
