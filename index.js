const inquirer = require('inquirer');
const fs = require('fs'); 

inquirer
    .prompt([
        {
            type: 'input', 
            name: 'title', 
            message: 'Enter the project title',
        },
        {
            type: 'input', 
            name: 'description', 
            message: 'Provide a description of the project', 
        },
        {
            type: 'input',
            name: 'installation', 
            message: "Provide the steps required to install or load the project's program"
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a description for how the program can be used'
        },
        { 
            type: 'checkbox',
            name: 'license',
            message: 'Select one license',
            choices: ['MIT', 'Google']
        },
        {
            type: 'input', 
            name: 'gitHubUsername',
            message: 'Enter your GitHub username',
        },
        {
            type: 'input',
            name: 'gitHubLink',
            message: 'Provide a link to your GitHub profile'
        },
        {
            type: 'input', 
            name: 'email',
            message: 'Enter your email address',
        }
    ])
    .then((answers) => {
        console.log(answers); 
        fs.writeFile('README-Create.md', 

`# Project Title: ${answers.title}

## Description 
${answers.description}

## Table of Contents
- [Installation Instructions](#installation_instructions)
- [Usage](#usage)
- [License](#license)
- [Constributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation Instructions
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Questions
- GitHub Username: ${answers.gitHubUsername}
- GitHub Profile Link: ${answers.gitHubLink}
- Email Address: ${answers.email}`,

        (error) => {
            error ? console.log(error) : console.log('Success!')})
    })
    