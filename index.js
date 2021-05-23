// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub userame? (Required)',
        default: 'Username',
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
        name: 'title',
        message: 'What is the title of your project? (Required)',
        default: 'Title',
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please enter a Title of your project!');
            } else {
            return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project? (Required)',
        default: 'Description',
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
        name: 'installation',
        message: 'How did you install your project? (Required)',
        default: 'Install',
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please enter any installation instructions for your project!');
            } else {
            return true;
            }
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'How does an individual use your project? (Required)',
        default: 'Instructions',
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please explain how to use this project!');
            } else {
            return true;
            }
        }
    },
    {
        type: 'input',
        name: 'userInput',
        message: 'How can users better your project? (Required)',
        default: 'Advise',
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please enter any consctructive criticism for this project!');
            } else {
            return true;
            }
        }
    },
    {
        type: 'list',
        name: 'licencec',
        message: 'Choose a licence for your project? (Required)',
        default: 'Licences',
        choices: ['Apache', 'GNU', 'MIT', 'IBM', 'Boost', 'Eclipse'],
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please choose a licence from the list provided!');
            } else {
            return true;
            }
        }
    },
];

// Build a function to create the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Success! Your README.md file has been generated');
        }
    })
};

const writeToFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app, AKA prompt the questions
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
    console.log(userInput)
    writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
