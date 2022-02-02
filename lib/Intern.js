//variables
const Employee = require("../lib/Employee");

//intern class ->extend from employee and add role + school function
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
};

//exports
module.exports = Intern;