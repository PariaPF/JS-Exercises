let i = 0;
let list = [];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (input) => {
  // YOU CAN CHANGE HERE FOR DIFFERENT TYPES OF INPUT
  list.push(input);
  i++;

  if (i >= 3) {
    myFunction(input);
    readline.close();
  }
});

function myFunction(input) {
  // WRITE YOUR CODE HERE USING INPUT
  const rightStreets = list[1].split(` `);
  const rightStreetsNumber = Number(list[0][0]);
  const roundStreetsNumber = Number(list[0][2]);

  for (let i = 0; i < rightStreetsNumber; i++) {
    rightStreets[i] = Number(rightStreets[i]);
  }

  if (rightStreets.includes(0) === true && rightStreets.includes(1) === true) {
    console.log(`YES`);
  } else {
    console.log(`NO`);
  }
}
