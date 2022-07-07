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
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?'
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
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
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
