const month = 5;

switch (month) {
  case 1:
    console.log(`Month: Farvardin `);
    break;
  case 2:
    console.log(`Month: Ordibehesht `);
    break;
  case 3:
    console.log(`Month: Khordad `);
    break;
  case 4:
    console.log(`Month: Tir `);
    break;
  case 5:
    console.log(`Month: Mordad `);
    break;
  case 6:
    console.log(`Month: Shahrivar `);
    break;
  case 7:
    console.log(`Month: Mehr `);
    break;
  case 8:
    console.log(`Month: Aban `);
    break;
  case 9:
    console.log(`Month: Azar `);
    break;
  case 10:
    console.log(`Month: Dey `);
    break;
  case 11:
    console.log(`Month: Bahman `);
    break;
  case 12:
    console.log(`Month: Esfand `);
    break;
  default:
    console.log(`Invalid Input!`);
}

if (month >= 1 && month <= 3) {
  console.log(`Season: Spring `);
} else if (month >= 4 && month <= 6) {
  console.log(`Season: Summer`);
} else if (month >= 7 && month <= 9) {
  console.log(`Season: Fall`);
} else {
  console.log(`Season: Winter`);
}
