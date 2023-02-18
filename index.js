const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

let year = 2023
let name = "Dodzi Agbenorku"

const license = require("./licenses")
let allLicenses = license.getLicenses(year, name)



//Get all license names:
function getLicenseNames(licenses) {
    let licenseNames = []
    for (const license of licenses) {
        licenseNames.push(license[0])
    }

    return licenseNames
}



// array of questions for user
const questions = () => inquirer.prompt(
    {
        type: 'input',
        name: 'title',
        message: "What is the project title?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Add a project description:",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Add installation instructions for the application:",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Add usage instructions for the application:",
    },
    {
        type: 'list',
        name: 'license',
        message: "Add a license to the project from the list:",
        choices: getLicenseNames(allLicenses)
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Add information on user contributions:",
    },
    {
        type: 'input',
        name: 'test',
        message: "Add information on test:",
    },
    {
        type: 'input',
        name: 'questions',
        message: "Add email for questions and support:",
    },
    {
        type: 'input',
        name: 'githubId',
        message: "Add authors GitHub Id:",
    },
);

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.error(error) : console.log(`README file generated successfully, located here ${fileName}`)
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
