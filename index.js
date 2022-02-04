//variables
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const pageHTML = require("./src/html_template");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employeeMembers = [];
const idNum = [];

//functions for Employee, Manager, Engineer, and Intern
function managerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "ManagerName",
        },
        {
            type: "input",
            message: "What is the Manager's Id?",
            name: "ManagerId",
        },
        {
            type: "input",
            message: "What is the Manager's email adress?",
            name: "ManagerEmail",
        },
        {
            type: "input",
            message: "What is the Manager's office number?",
            name: "ManagerOffNum",
        },
    ])
        .then((response) => {
            console.log(response);
            employeeMembers.push(new Manager(response.ManagerName, response.ManagerId, response.ManagerEmail, response.ManagerOffNum));
            employeeQuestions();
        });

};
//Engineer function
function engineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "EngineerName",
        },
        {
            type: "input",
            message: "What is the Engineer's Id?",
            name: "EngineerId",
        },
        {
            type: "input",
            message: "What is the Engineer's email adress?",
            name: "EngineerEmail",
        },
        {
            type: "input",
            message: "What is the Engineers github username?",
            name: "EngineerGithub",
        },

    ])
        .then((response) => {
            console.log(response);
            employeeMembers.push(new Engineer(response.EngineerName, response.EngineerId, response.EngineerEmail, response.EngineerGithub));
            employeeQuestions();
        });
};
//Add employees
function employeeQuestions() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which employee would you like to add?",
            name: "EmployeeChoice",
            choices: [
                "Engineer",
                "Intern",
                "I dont wish to add more Employees"
            ]
        }
    ])
        .then((response) => {
            console.log(response);
            if (response.EmployeeChoice == "Engineer") {
                engineerQuestions();
            }
            else if (response.EmployeeChoice == "Intern") {
                internQuestions();
            }
            else if (response.EmployeeChoice == "I dont wish to add more Employees") { 
                console.log();
                fs.writeFile('./team.html', pageHTML(employeeMembers), (err) =>
                    err ? console.log(err) : console.log('responces recorded to team.html'))
                console.log(employeeMembers);
            }
        });
};
//Intern function
function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "InternName",
        },
        {
            type: "input",
            message: "What is the Intern's Id?",
            name: "InternId",
        },
        {
            type: "input",
            message: "What is the Intern's email adress?",
            name: "InternEmail",
        },
        {
            type: "input",
            message: "What school does the intern attend?",
            name: "InternSchool",
        },

    ])
    .then((response) => {
        console.log(response);
        employeeMembers.push(new Intern(response.InternName, response.InternId, response.InternEmail, response.InternSchool));
        employeeQuestions();
    });
};
managerQuestions();