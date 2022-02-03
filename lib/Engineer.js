//variables
const Employee = require("../lib/Employee");

//engineer class ->extend from employee and add role + github username function
class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
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
