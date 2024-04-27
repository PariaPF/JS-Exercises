const maxFunction = (num1, num2, num3) => {
  let maxNum;
  if (num1 >= num2) {
    maxNum = num1;
  } else {
    maxNum = num2;
  }

  if (num3 >= maxNum) {
    maxNum = num3;
  }

  return maxNum;
};

console.log(maxFunction(-45.5, 31, 78 / 3));
