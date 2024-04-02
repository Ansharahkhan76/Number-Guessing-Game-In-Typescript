 #! /usr/bin/env node
import inquirer from "inquirer";
const SystemGenerateNum = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: `Please enter a number between 1 to 10: `,
    }
]);
const { userGuess } = answer;
// If, else condition
if (userGuess === SystemGenerateNum) {
    console.log(userGuess, "UserGuess", SystemGenerateNum, "SYs"); // To check  what is the value of random number and user answer
    console.log("Congratulations your answer is Correct. \n You Win!");
}
else {
    console.log("Please try again, Better luck next time");
}
console.log("Random number is :", SystemGenerateNum);
