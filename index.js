// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        default: 'Project Title',
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please enter your project Title!');
            } else {
            return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project? (Required)',
        default: 'Project Description',
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please enter a description of your project!');
            } else {
            return true;
            }
        }
    },
    {
        type: 'input',
        message: 'If applicable, please provide any installation instructions for your project.',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'If applicable, please provide any instructions and usage information for your project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'If applicable, please provide any contribution guidelines for your project.',
        name: 'contributions'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Choose a licence for your project!',
        choices: [],
        name: 'licence'
    }
];

// This is to create the README file
// const writeFile = () => 'Title: Project Title, Description: project description';
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Success! Your README.md file has been generated');
        }
    })
}

const writeToFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app, AKA prompt the questions
function init() {}

// Function call to initialize app
init();
