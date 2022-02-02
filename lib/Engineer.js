//variables
const Employee = require("../lib/Employee");

//engineer class ->extend from employee and add role + github username function
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.githubUsername = this.githubUsername;
    };
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.githubUsername
    }
};


//exports
module.exports = Engineer;
