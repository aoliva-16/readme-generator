const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![GitHub license](https://img.sheilds.io/github/license/Naereeb/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
    badge = '![License: GPL v3](https://img.sheilds.io/badge/License-GPLv3-blue.svg'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/license/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = 
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

  return `
  # ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contents:
  ### * [License](#license) 
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributors](#contributors)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Installation:
  ### You must install the following for the README.md generator to function:
  ### ${answer.installation}

  ## Usage:
  ### ${answer.usage}

  ## Contributors:
  ### ${answer.contributions}

  ## Tests:
  ### Run the following commands to test this app:
  ### ${answer.test}

  ## Questions:
  ### If you have any questions, contact me at:
  ### Github: https://guthub.com/${answer.askMe}
  ### or 
  ### Email: ${answer.email}

`;
}

module.exports = generateMarkdown;
