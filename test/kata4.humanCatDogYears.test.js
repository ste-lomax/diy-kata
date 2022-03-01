const { humanCatDogYears } = require("../src");

describe("returns human cat dog years", () => {
    it("returns human cat dog years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    })
});