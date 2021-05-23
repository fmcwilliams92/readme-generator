// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        default: 'readme-generator',
        validate: nameInput => {
            if (nameInput < 1 ) {
            return console.log('Please enter your project name!');
            } else {
            return true;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Success! Your README,md file has been generated');
        }
    })
}

const writeToFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
