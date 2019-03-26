const chainOperators = require('./chain-operators')

describe('chain operators', () => {
  it('should apply all given operators on given argument', () => {
    const add1 = (x) => x + 1
    const multiplyPer2 = (x) => x * 2
    const result = chainOperators([add1, multiplyPer2]).on(3)
    expect(result).toBe((3+1)*2)
  })
})