//COLt LECTURES:
//pick one function function

function cry() {
  console.log("boo hoo");
}
function laugh() {
  console.log("hahaha");
}

function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand > 0.5) {
    f1();
  } else {
    f2();
  }
}
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
const halve = multiplyBy(0.5);
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}
const isChild = makeBetweenFunc(7, 14);
function byeFunc() {
  alert("Baiiiiii");
}
setTimeout(byeFunc, 5000);
function motivateMe() {
  alert("We are getting stronger in JS, man!");
}

// const btn = document.querySelector("button");
// btn.addEventListener("click", motivateMe);
const nums = [1, 2, 3, 4, 5];
