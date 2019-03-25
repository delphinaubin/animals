const countNodes = require('./count-nodes')

describe('count nodes', () => {
  it('should add children count on each node\'s name', () => {
    const SOME_DATA = [
      {
        name: 'a country',
        people: [
          {
            name: 'a name',
            animals: [
              { name: 'an animal' },
              { name: 'another animal' },
            ]
          },
        ]
      }
    ]

    const EXPECTED_RESULT = [
      {
        name: 'a country [1]',
        people: [
          {
            name: 'a name [2]',
            animals: [
              { name: 'an animal' },
              { name: 'another animal' },
            ]
          },
        ]
      }
    ]
    const result = countNodes(SOME_DATA)
    expect(result).toEqual(EXPECTED_RESULT)

  })
})