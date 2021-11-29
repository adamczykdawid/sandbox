nums.forEach(function (n) {
  console.log((n += 1));
});
const numbers = [20, 21, 23];
const words = ["mu", "lfc", "cfc", "mc"];
// const doubles = numbers.map(function (num) {
//   return num * 2;
// });
//OR WITH ARROW FUNCTION:
// const doubles2 = numbers.map((num) => {
//   return num * 2;
// });
//OR WITH ARROW FUNCTION AND IMPLICIT RETURN:
const doubles = numbers.map((num) => num * 2);

const abbrevs = words.map(function (w) {
  return w.toUpperCase().split("").join(".");
});
const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter((n) => n % 2 === 1);
const doubledNums = numbers.forEach((num) => console.log(num + num));
