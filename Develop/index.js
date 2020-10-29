const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const start = require("start");


// array of questions for user

const questions = [
     
    {
      type: "input",
      message: "What is your project title?",
      name: "Title",


    },

    {
      type: "input",
      message: "Describe your project?",
      name: "Description",



    },

    {
      type: "input",
      message: "Contributors?",
      name: "Contributors",
    },

    {
      type: "input",
      message: "Provide instructions for use.",
      name: "Usage"

    },

    {
      type: "input", 
      message: "How do you test your project",
      name: "Test"
    },

    {
      type: "input",
      message: "License?",
      name: "license"
    },
    
    {
      type: "input",
      message: "What is your Github username?",
      name: "Username"
    },

    {
      type: "input",
      message: "What's your email?",
      name: "Email"

    },


]

;

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(start.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) =>{ 
    
    writeToFile("README.md", generateMarkdown({...response}));
    console.log("Your README has been generated");
  })
};

// function call to initialize program
init();
