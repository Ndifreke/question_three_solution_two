const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let previousInput = 0

const add = () => {
    readline.on('line', (input) => {
        if(!isNaN(input)){
        console.log(`Sum of input = ${input + previousInput}\n\nEnter another input`);
        previousInput = input
        }else{
            
        }
      })
      readline.question('Enter an input ', (input) =>console.log(`You Entered ${input}\n\nEnter another input`))
};

add();
