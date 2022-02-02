//variables
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const pageHTML = require("./src/html_template"); 
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");