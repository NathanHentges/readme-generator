// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // Return license if applicable, otherwise nothing
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // If there is no license, return an empty string
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";

    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";

    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (!license) {
    return "";
  }
  return `Using the ${license} license. For more information, visit [here](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license);
  const badge = renderLicenseBadge(data.license);
  return `# ${data.title}

${badge}

## Description
${data.description}

## Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
My GitHub is [${data.username}](http://www.github.com/${data.username})

You can also [email me](mailto:${data.email}) for further questions.

## License
${license}`;
}

module.exports = generateMarkdown;
