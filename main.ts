#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess number Between 1-6",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations! You Guessed Right Number.");
} else {
  console.log("Oops! You Guessed Wrong Number.");
}
