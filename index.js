/* This is a node package that allows us to prompt the user for information. */
const inquirer = require('inquirer');
/* Fs is a node package that allows us to read and write files. */
const fs = require('fs');
/* This is importing the generateMarkdown function from the generateMarkdown.js file. */
const generateMarkdown = require('./utils/generateMarkdown');
/* Importing the validateGithubUsername, validateEmail, and validateProjectTitle functions from the
validateInput.js file. */
const { 
  validateGithubUsername, 
  validateEmail, 
  validateProjectTitle 
} = require('./utils/validateInput');


// Prompt the user for information about their project
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
      // Validate the user's input
      validate: validateProjectTitle,
    },
    {
      type: 'input',
      message: 'Please enter a description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter installation instructions for your project:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please enter usage information for your project:',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Please choose a license for your project:',
      name: 'license',
      choices: [
        'MIT',
        'Apache',
        'GPL',
        'BSD',
        'ISC',
        'MPL',
        'EPL',
        'CC0',
        'Unlicense',
        'None',
      ],
    },
    {
      type: 'input',
      message: 'Please enter contribution guidelines for your project:',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Please enter test instructions for your project:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
      // Validate the user's input if is a valid GitHub username
      validate: validateGithubUsername,
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      // Validate the user's input if is a valid email address
      validate: validateEmail,
    },
  ])
  .then((data) => {
    // Generate the markdown string based on the user's input
    const markdownString = generateMarkdown(data);

    // Write the markdown string to a README.md file
    fs.writeFile('README.md', markdownString, (err) =>
      err ? console.error(err) : console.log('README file generated successfully!')
    );
  });
