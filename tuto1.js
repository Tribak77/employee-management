// const readline = require("readline");
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// rl.question("what is your name ?\n" , (name)=>{
//     console.log("hello",name);
//     rl.close;
// });



const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number : ', (num2) => {
      const result = Number(num1) + Number(num2);
      console.log(`the result : ${result}`);
      rl.close();
    });
  });