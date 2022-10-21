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
            type: 'list',
            name: 'license',
            message: 'Select one license',
            // choices: ['Apache', 'Boost', 'MIT']
            choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'The MIT License', 'Mozilla Public License 2.0']
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
        console.log(answers.license);
        console.log(answers.license[0]); 
        let licenseIcon;
        if (answers.license == 'Apache 2.0 License') {
            licenseIcon = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (answers.license == 'Boost Software License 1.0') {
            licenseIcon = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        } else if (answers.license == 'The MIT License') {
            licenseIcon = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        } else if (answers.license = 'Mozilla Public License 2.0') {
            licenseIcon = '[![License: MPL 2.0](https://img.shields.io/}badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        } else {
            answers.license = 'No license selected'
        }
        console.log(licenseIcon); 
        fs.writeFile('README-Template.md', 

`# Project Title: ${answers.title}
${licenseIcon}

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
For additional questions reach out to the developer via the links below

- **GitHub Username:** ${answers.gitHubUsername}
- **GitHub Profile Link:** ${answers.gitHubLink}
- **Email Address:** ${answers.email}`,

        (error) => {
            error ? console.log(error) : console.log('Success!')})
    })
    