let beeramid = function (bonus, price) {
  let i = 0;
  let totalCheck = 0;
  while (totalCheck <= bonus) {
    totalCheck += i * i * price;
    i++;
  }
  if (i - 2 <= 0) {
    //dddddddddddddddddddddddddddddd
    return 0;
  }
  return console.log(i - 2);
};

beeramid(5000, 3);
