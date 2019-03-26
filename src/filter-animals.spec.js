const filterAnimals = require('./filter-animals')

describe('animals filter', () => {
  it('should return the input data if there is no filter', () => {
    const SOME_DATA = [
      {
        name: 'a country',
        people: [
          {
            name: 'a name',
            animals: [ { name: 'an animal' } ]
          },
        ]
      }
    ]
    const EMPTY_FILTER = undefined
    const result = filterAnimals(EMPTY_FILTER)(SOME_DATA)
    expect(result).toEqual(result)
  })
  it('should filter animals by name if there is 1 country and 1 person', () => {
    const THE_FILTER = 'THE_FILTER'
    const SOME_DATA = [
      {
        name: 'a country',
        people: [
          {
            name: 'a name',
            animals: [
              { name: 'an animal' },
              { name: `an animal containing ${THE_FILTER}` },
            ]
          },
        ]
      }
    ]
    const EXPECTED_RESULT = [
      {
        name: 'a country',
        people: [
          {
            name: 'a name',
            animals: [
              { name: `an animal containing ${THE_FILTER}` },
            ]
          },
        ]
      }
    ]
    const result = filterAnimals(THE_FILTER)(SOME_DATA)
    expect(result).toEqual(EXPECTED_RESULT)
  })
  it('should filter animals by name for many countries and many people', () => {
    const THE_FILTER = 'THE_FILTER'
    const SOME_DATA = [
      {
        name: 'a country',
        people: [
          {
            name: 'a people name',
            animals: [
              { name: 'an animal' },
              { name: `an animal containing ${THE_FILTER}` },
            ]
          },
          {
            name: 'another people name',
            animals: [
              { name: 'another animal' },
              { name: `another animal containing ${THE_FILTER}` },
            ]
          },
        ]
      },
      {
        name: 'another country',
        people: [
          {
            name: 'yet another name',
            animals: [
              { name: 'yet another animal' },
              { name: `yet another animal containing ${THE_FILTER}` },
            ]
          },
        ]
      }
    ]
    const EXPECTED_RESULT = [
      {
        name: 'a country',
        people: [
          {
            name: 'a people name',
            animals: [ { name: `an animal containing ${THE_FILTER}` } ]
          },
          {
            name: 'another people name',
            animals: [ { name: `another animal containing ${THE_FILTER}` } ]
          },
        ]
      },
      {
        name: 'another country',
        people: [
          {
            name: 'yet another name',
            animals: [ { name: `yet another animal containing ${THE_FILTER}` }]
          },
        ]
      }
    ]
    const result = filterAnimals(THE_FILTER)(SOME_DATA)
    expect(result).toEqual(EXPECTED_RESULT)
  })
  it('should remove empty nodes', () => {
    const THE_FILTER = 'THE_FILTER'
    const SOME_DATA = [
      {
        name: 'a country with a matching animal',
        people: [
          {
            name: 'a people with a matching animal',
            animals: [
              { name: `an animal containing ${THE_FILTER}` },
            ]
          },
          {
            name: 'a people who should be removed',
            animals: [ { name: 'another animal' }]
          },
        ]
      },
      {
        name: 'a country which should be removed',
        people: [
          {
            name: 'yet another name',
            animals: [ { name: 'yet another animal' } ]
          },
        ]
      }
    ]
    const EXPECTED_RESULT = [
      {
        name: 'a country with a matching animal',
        people: [
          {
            name: 'a people with a matching animal',
            animals: [
              { name: `an animal containing ${THE_FILTER}` },
            ]
          }
        ],
      },
    ]
    const result = filterAnimals(THE_FILTER)(SOME_DATA)
    expect(result).toEqual(EXPECTED_RESULT)
  })
})