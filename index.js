const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


let year = new Date().getFullYear()
let name = "Dodzi Agbenorku"

const license = require("./licenses")
let allLicenses = license.getLicenses(year, name)
generateMarkdown.setName_Year(year, name)



//Get all license names:
function getLicenseNames(licenses) {
    let licenseNames = []
    for (const license of licenses) {
        licenseNames.push(license[0])
    }
    return licenseNames
}


// array of questions for user
const questions = [
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
        choices: getLicenseNames(allLicenses),
        filter(val) {
            return val.toLowerCase();
        },
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Add information on how others can contribute:",
    },
    {
        type: 'input',
        name: 'test',
        message: "Add information on test:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Add email to be contacted for questions and support:",
    },
    {
        type: 'input',
        name: 'githubId',
        message: "Add authors GitHub username:",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.error(error) : console.log(`README file generated successfully, located here ${fileName}`)
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("fileName.md", generateMarkdown.generateMarkdown(answers))
    });
}



// function call to initialize program
init();
