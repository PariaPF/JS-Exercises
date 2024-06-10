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
  if (i >= Number(list[0] * 2 + 1)) {
    myFunction(input);
    readline.close();
  }
});

function myFunction(input) {
  // WRITE YOUR CODE HERE USING INPUT
  for (let i = 2; i <= list.length - 1; i = i + 2) {
    const setsPoints = list[i];
    if (setsPoints[setsPoints.length - 1] === `Q`) {
      console.log(`Quera`);
    } else {
      console.log(`CodeCup`);
    }
  }
}
