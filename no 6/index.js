const location = `Tehran`;
const charge = 25;
const result =
  (location === `Vancouver` ||
    location === `Dubai` ||
    location === `California`) &&
  (charge >= 15 || charge <= 80)
    ? `Your device is ready to Update!`
    : `Your device is NOT ready to Update!`;

console.log(result);
