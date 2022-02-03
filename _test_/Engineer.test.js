const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("New", () => {
        it("test that should create new engineer ben", () => {           
            const engineer = new Engineer("ben", 21, "bensandlin@gmail.com", "sandlinben");
            expect(engineer.name).toEqual("ben");
            expect(engineer.id).toEqual(21);
            expect(engineer.email).toEqual("bensandlin@gmail.com");
            expect(engineer.getRole()).toEqual("Engineer");
            expect(engineer.getGithub()).toEqual("sandlinben");
        });
    });
});
