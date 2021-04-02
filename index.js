// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description?"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?"
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?"
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?"
  },
  {
    type: "input",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  // use inquirer prompt to ask questions & get answers
  inquirer.prompt(questions)
    .then((data) => {
      const createdMD = generateMarkdown(data);
      writeToFile("testing-README.md", createdMD);
    });
}

// Function call to initialize app
init();
