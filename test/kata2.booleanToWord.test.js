const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns yes if boolean true', () => {
    expect(booleanToWord(true)).toEqual("Yes")
  })

  it('returns no if boolean false', () => {
    expect(booleanToWord(false)).toEqual("No")
  })
});
