///////////////////
//shorthand object
function getStats(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, currVal) => sum + currVal);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg,
  };
}
const nums = [1, 2, 3, 4, 5];
