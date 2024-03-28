#! /usr/bin/env node

import inquirer from "inquirer";

const randomnumber = Math.floor((Math.random()) * 5+ 1);

const answeres = await inquirer.prompt([
    {
        name: "yourguessnumber",
        type: "number",
        message: "please! guess a number between 1-5: ",
    },
]);

if(answeres.yourguessnumber === randomnumber) {
    console.log("Congratulations! you guessed a right number");
    
}else{
    console.log("Sorry! you guessed a wrong number");
}