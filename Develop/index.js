// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project tatle?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?'
    },
     {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput = () => {
            if(licenseInput) {
                return true;
            }else {
                console.log("Please select one of the four options")
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have been done?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?'
    },
    {
        type: 'input', 
        name: 'github',
        message: 'For questions(github)?'
    }
   
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
            var fileContent = generateMarkdown(answer);
            writeToFile(fileContent)
        });

}

// Function call to initialize app
init();

module.exports = questions;
