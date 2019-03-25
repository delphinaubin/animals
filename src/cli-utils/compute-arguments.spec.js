const computeArguments = require('./compute-arguments')

describe('compute arguments', () => {
  describe('filter detection', () => {
    it('should set shouldFilter to false if there is no --filter argument', () => {
      const INPUT_ARGUMENTS = ['--unknown-arg']
      const { shouldFilter } = computeArguments(INPUT_ARGUMENTS)
      expect(shouldFilter).toBe(false)
    })
    it('should set shouldFilter to true and extract the filter if there is a --filter argument', () => {
      const A_FILTER = 'A_FILTER'
      const INPUT_ARGUMENTS = ['--unknown-arg', `--filter=${A_FILTER}`]
      const { shouldFilter, filter } = computeArguments(INPUT_ARGUMENTS)
      expect(shouldFilter).toBe(true)
      expect(filter).toBe(A_FILTER)
    })
  })
  describe('count detection', () => {
    it('should set shouldCountNodes to false if there is no --count argument', () => {
      const INPUT_ARGUMENTS = ['--unknown-arg']
      const { shouldCountNodes } = computeArguments(INPUT_ARGUMENTS)
      expect(shouldCountNodes).toBe(false)
    })
    it('should set shouldCountNodes to true if there is a --count argument', () => {
      const INPUT_ARGUMENTS = ['--unknown-arg', '--count']
      const { shouldCountNodes } = computeArguments(INPUT_ARGUMENTS)
      expect(shouldCountNodes).toBe(true)
    })
  })
})