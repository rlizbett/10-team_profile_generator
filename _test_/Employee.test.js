const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("New", () => {
        it("test that should create new employee ben", () => {
            const employee = new Employee("ben", 21, "bensandlin@gmail.com");
            expect(employee.name).toEqual("ben");
            expect(employee.id).toEqual(21);
            expect(employee.email).toEqual("bensandlin@gmail.com");
        });
    });
});
//need to add employe role