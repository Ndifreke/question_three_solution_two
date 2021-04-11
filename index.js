const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let previousInput = 0;
let isFirstInput = true

const add = () => {
  readline.on("line", (input) => {
    if (!isNaN(input)) {
      console.log(`Sum of input = ${Number(input) + Number(previousInput)}\n\nEnter another input`);
      previousInput += Number(input);
    } else {
      console.log("Invalid input Entered, Input must be a Number");
    }
  });
  readline.question("Enter an input ", (input) => {
    console.log(`You Entered ${input}\n\nEnter another input`);
  });
};

add();
