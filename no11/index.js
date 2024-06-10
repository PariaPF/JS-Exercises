const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 0;
let line = [];

readline.on("line", (input) => {
  // YOU CAN CHANGE HERE FOR DIFFERENT TYPES OF INPUT
  line.push(input);
  i++;
  if (i >= 2) {
    readline.close();
    myFunction(input);
  }
});

function myFunction(input) {
  // WRITE YOUR CODE HERE USING INPUT
  const rocksOrder = line[0].split(` `);
  for (let i = 0; i < rocksOrder.length; i++) {
    rocksOrder[i] = Number(rocksOrder[i]);
  }
  const wantedRock = Number(line[1]);
  // console.log(wantedRock);
  for (let i = 0; i < rocksOrder.length; i++) {
    if (rocksOrder[i] === wantedRock && i !== 0) {
      console.log(rocksOrder.length - i);
    } else if (rocksOrder[i] === wantedRock && i === 0) {
      console.log(rocksOrder.length - i - 1);
    }
  }
}
