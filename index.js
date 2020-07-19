const inquirer = require('inquirer');
const fs = require('fs');

// questions to generate readme with
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your Project?",
            name: "title"
        },
        {
            type: "input",
            message: `Please enter a description of your project.`,
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions for this project. Write NONE if no instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "How would you like your application to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed on this project?",
            name: "contribution"
        },
        {
            type: "checkbox",
            message: "Please select a license.",
            choices: [
                "Apache",
                "MIT",
                "ISC"
            ],  
            name: "license"
        },
        {
            type: "input",
            message: "What is your GitHub username",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address",
            name: "email"
        },
    ]);
}

function generateMarkdown(response) {
    return `
# ${response.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage) 
- [Contributing](#contributing)
- [License](#license) 
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

    ${response.description}
## Installation:
    ${response.installation}
## Usage:
    ${response.usage}
## Contributing:
    ${response.contribution}
## License:
    For more information about the License, click on the link below.
    
- [License](https://opensource.org/licenses/${response.license})

## Questions:
    For questions about the Generator:

- [GitHub Profile](https://github.com/${response.username})

- [Email]: ${response.email}.

`;
}