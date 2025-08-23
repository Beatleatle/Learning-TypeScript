function multiply(a,b) {
    return a * b;
}

// const assert = require("jest").assert;

// how do i run these tests? probably just print out results instead?
describe("Multiply", () => {
    it("fixed tests", () => {
        expect(multiply(1, 1)).toBe(1);
        expect(multiply(2, 1)).toBe(2);
        expect(multiply(2, 2)).toBe(4);
        expect(multiply(3, 5)).toBe(15);
    });
});