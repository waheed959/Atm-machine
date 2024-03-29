#! /usr/bin/env node
import inquirer from "inquirer";

let balance: number = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Welcome to your account");

  let Operations = await inquirer.prompt([
    {
      name: "Operation",
      message: "Select your Operation",
      type: "list",
      choices: ["fastCash", "Withdraw", "checkBalance"],
    },
  ]);
  if (Operations.Operation === "fastCash") {
    let amountAns = await inquirer.prompt([
      {
        name: "fastCash",
        message: "select your amount",
        type: "list",
        choices: [500, 1000, 2000, 5000],
      },
    ]);
    balance -= amountAns.fastCash;
    console.log(`you withdrew ${amountAns.fastCash} rupees \n your remaining balance is ${balance}`);
  } else if (Operations.Operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount < 500) {
      console.log(`you cannot dithdraw less than 500 rupees`);
    } else if (amountAns.amount <= balance) {
      balance -= amountAns.amount;
      console.log(`you withdrew ${amountAns.amount} rupees \n your remaining balance is ${balance}`);
    } else {
      console.log(`Insufficent balance`);
    }
  } else if (Operations.Operation === "checkBalance") {
    console.log(`your balance is ${balance}`);
  }
} else {
  console.log(`Wrong pin`);
}
