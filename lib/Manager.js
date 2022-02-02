//variables
const Employee = require("../lib/Employee");

//manager class ->extend from employee and add role + office# function
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getRole() {
        return "Manager"
    }
    getofficeNum() {
        return this.officeNum
    }
};

//exports
module.exports = Manager;