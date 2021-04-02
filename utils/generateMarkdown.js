// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      break;

    case "GNU GPLv3":
      break;

    case "Apache License 2.0":
      break;

    default:
      break;
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (!license) {
    return "";
  }
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
