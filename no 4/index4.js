const weight = 88;
const height = 1.73;
const bmi = weight / height ** 2;
const outcome = bmi > 25 ? `overweight` : bmi < 18.5 ? `underweight` : `normal`;

console.log(outcome);
