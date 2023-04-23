const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMd = require("./utils/generateMarkdown");  //accesses README template in utl folder

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        message: "Please enter your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a short description about your project.",
        name: "description"
    },
    {
        type: "list",
        message: "Please enter the license that your project has?",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        message: "Please enter the command that should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "Please enter the command used for running tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "Please enter anything that the user needs to know about the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter what the user needs to know about contributing to the repository?",
        name: "contribute"
    },

]

const promptUser = () => {  //prompts the user to answer questions via terminal.
    return inquirer
        .prompt(questions);
}

const writeToFile = (fileName, data) => {  //function for generating a README file.
    return writeFileAsync(fileName, data);
}

const init = async () => {  //initializes the program
    try {
        console.log("Welcome to the README generator. Please answer the following questions:")

        const answers = await promptUser(); //required for a user to answer questions.

        const fileContent = generateMd(answers);  //generates a file in markdown (pseudo-language for README)

        await writeToFile("./output/README.md", fileContent); //adds markdown info to the README file

        console.log("README.md has been created in the output folder!"); //Informs the user that the README is completed.

    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}

init(); //function call for program initialization.