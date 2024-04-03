let var1 = 5;
let var2 = 10;

console.log("Initial value of var1 = 5");
console.log("Initial value of var2 = 10");

let swipper;
swipper = var1;
var1 = var2;
var2 = swipper;

console.log("value of var1 after swipping is:", var1);

console.log("value of var2 after swipping is:", var2);
