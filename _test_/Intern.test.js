const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("New", () => {
        it("test that should create new intern ben", () => {           
            const intern = new Intern("ben", 21, "bensandlin@gmail.com");
            expect(intern.name).toEqual("ben");
            expect(intern.id).toEqual(21);
            expect(intern.email).toEqual("bensandlin@gmail.com");
        });
    });
});
//need to add intern role and school 