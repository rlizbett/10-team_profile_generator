const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("New", () => {
        it("test that should create new engineer ben", () => {           
            const engineer = new Engineer("ben", 21, "bensandlin@gmail.com");
            expect(engineer.name).toEqual("ben");
            expect(engineer.id).toEqual(21);
            expect(engineer.email).toEqual("bensandlin@gmail.com");
        });
    });
});
//need to add engineer role and github username 