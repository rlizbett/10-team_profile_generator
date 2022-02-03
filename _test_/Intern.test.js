const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("New", () => {
        it("test that should create new intern ben", () => {           
            const intern = new Intern("ben", 21, "bensandlin@gmail.com", "UT");
            expect(intern.name).toEqual("ben");
            expect(intern.id).toEqual(21);
            expect(intern.email).toEqual("bensandlin@gmail.com");
            expect(intern.getRole()).toEqual("Intern");
            expect(intern.getSchool()).toEqual("UT");
        });
    });
});
 