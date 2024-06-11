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
  if (i >= Number(list[0]) + 1) {
    myFunction(input);
    readline.close();
  }
});

function myFunction(input) {
  for (let i = 1; i <= Number(list[0]); i++) {
    const test = list[i].split(` `);
    let fatherGenes = test[0];
    let motherGenes = test[1];
    const parentsGenes = fatherGenes.split(``).concat(motherGenes.split(``));
    let childGenes = test[2];

    if (childGenes === `O-`) {
      console.log(`valid`);
    } else if (childGenes === `O+`) {
      if (parentsGenes.includes(`+`)) {
        console.log(`valid`);
      } else {
        console.log(`invalid`);
      }
    } else if (childGenes === `A+`) {
      if (parentsGenes.includes(`+`) && parentsGenes.includes(`A`)) {
        console.log(`valid`);
      } else {
        console.log(`invalid`);
      }
    } else if (childGenes === `A-`) {
      if (parentsGenes.includes(`A`)) {
        console.log(`valid`);
      } else {
        console.log(`invalid`);
      }
    } else if (childGenes === `B+`) {
      if (parentsGenes.includes(`B`) && parentsGenes.includes(`+`)) {
        console.log(`valid`);
      } else {
        console.log(`invalid`);
      }
    } else if (childGenes === `B-`) {
      if (parentsGenes.includes(`B`)) {
        console.log(`valid`);
      } else {
        console.log(`invalid`);
      }
    } else if (childGenes === `AB+`) {
      if (
        parentsGenes.includes(`A`) &&
        parentsGenes.includes(`B`) &&
        parentsGenes.includes(`+`)
      ) {
        console.log(`valid`);
      } else {
        console.log(`invalid`);
      }
    } else if (childGenes === `AB-`) {
      if (parentsGenes.includes(`A`) && parentsGenes.includes(`B`)) {
        console.log(`valid`);
      } else {
        console.log(`invalid`);
      }
    }
  }
}
