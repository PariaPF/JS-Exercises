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

  if (rightStreets.includes(`0`) && rightStreets.includes(`1`)) {
    console.log(`YES`);
  } else {
    console.log(`NO`);
  }
}
