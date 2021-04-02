// Packages needed
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array needed for inquirer prompt
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "editor",
    name: "description",
    message: "What is the description?"
  },
  {
    type: "editor",
    name: "installation",
    message: "What are the installation instructions?"
  },
  {
    type: "editor",
    name: "usage",
    message: "What is the usage information?"
  },
  {
    type: "editor",
    name: "contribution",
    message: "What are the contribution guidelines?"
  },
  {
    type: "editor",
    name: "test",
    message: "What are the test instructions?"
  },
  {
    type: "list",
    name: "license",
    message: "What is the license type?",
    choices: ["MIT", "GNU GPLv3", "Apache License 2.0"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];

// writes to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// Initialize function
function init() {
  // use inquirer prompt to ask questions & get answers
  inquirer.prompt(questions)
    .then((data) => {
      const createdMD = generateMarkdown(data);
      writeToFile("README.md", createdMD);
    });
}

// Function call to initialize app
init();
