#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const user = require("./utils/userPrompt");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
  },
  {
    type: "input",
    name: "URL_project",
    message: "What is the project URL",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "What information is needed to be able to use URL?",
  },
  {
    type: "input",
    name: "tech",
    message: "What technology and framework are used for this project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// function to initialize program
const init = async () => {
  try {
    const userResponse = await inquirer.user(user);
    const gitHubResponse = await user.getUserName(userResponse.github);
    const data = {
      ...userResponse,
      url: gitHubResponse.data_url,
    };
    writeToFile("README.md", generateMarkdown(data));
  } catch (error) {
    console.log(error);
  }
};

// function call to initialize program
init();
