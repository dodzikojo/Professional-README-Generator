

const license = require(".././licenses")
let allLicenses = license.getLicenses()

// function to generate markdown for README
function generateMarkdown(data) {

  const { title, description,  installation, usage, license, contribute, test, email, githubId } = data;
  
  let mdString =
`# ${title}

${getLicenseBadge(license)}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation Instructions
${installation}

## Usage
${usage}

## License
${getLicenseName(license)}

${getLicenseText(license)}

## Contributing
${contribute}

## Tests
${test}

## Questions
If you have any questions, you can reach out to me here at https://github.com/${githubId} or via email at ${email}  
`;

  return mdString;
}



//Get selected license badge
function getLicenseName(selectedLicense) {
  for (const license of allLicenses) {
    if (license[0].toLowerCase() == selectedLicense.toLowerCase()) {
      return license[0]
    }
  }
}

//Get selected license badge
function getLicenseBadge(selectedLicense) {
  for (const license of allLicenses) {
    if (license[0].toLowerCase() == selectedLicense.toLowerCase()) {
      return license[1]
    }
  }
}

//Get selected license text
function getLicenseText(selectedLicense) {
  for (const license of allLicenses) {
    if (license[0].toLowerCase() == selectedLicense.toLowerCase()) {
      return license[2]
    }
  }
}


module.exports = { generateMarkdown }
