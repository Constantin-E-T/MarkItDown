
  // This function is taking in the data from the user and generating a badgeURL based on the license
  // that the user has selected
  // param data - This is the object that is being passed in from the index.js file.
  // returns a string of markdown.
 
/* Importing the badgeGenerator.js file. */
const generateBadgeURL = require('./badgeGenerator');

/* This is a function that is taking in the data from the user and generating a badgeURL based on the
license that the user has selected. */
function generateMarkdown(data) {
  const badgeURL = generateBadgeURL(data.license);

  return `
# ${data.title}

${badgeURL ? `![License](${badgeURL})` : ''}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${badgeURL ? `This project is licensed under the [${data.license}](${badgeURL}) license.` : 'This project is not licensed.'}

## Questions

If you have any questions about the repo, open an issue or contact me directly at <a href="mailto:${data.email}">${data.email}</a>. You can find more of my work at <a href="https://github.com/${data.github}">${data.github}</a>.
`;
}

module.exports = generateMarkdown;
