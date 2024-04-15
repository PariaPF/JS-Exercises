const distance = 20;
const time = 10 / 60;
const speed = distance / time;
const dayOrNight = `day`;
const x =
  (dayOrNight === `day` && speed > 80) || (dayOrNight === `night` && speed > 60)
    ? `Speed Out of range!`
    : `Speed in Range`;

console.log(x);
