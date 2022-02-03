const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("New", () => {
        it("test that should create new manager ben", () => {           
            const manager = new Manager("ben", 21, "bensandlin@gmail.com", "956");
            expect(manager.name).toEqual("ben");
            expect(manager.id).toEqual(21);
            expect(manager.email).toEqual("bensandlin@gmail.com");
            expect(manager.getRole()).toEqual("Manager");
            expect(manager.getofficeNum()).toEqual("956");
        });
    });
});