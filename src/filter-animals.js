const filterAnimals = (filter) => (countries) => {
  return countries
    .map(({ people, ...countryRest }) => {
      return {
        ...countryRest,
        people: people
          .map(({ animals, ...peopleRest }) => {
            return {
              ...peopleRest,
              animals: animals.filter(({ name }) => name.includes(filter)),
            }
          })
          .filter(({ animals }) => animals.length > 0)
      }
  })
  .filter(({ people }) => people.length > 0)
}

module.exports = filterAnimals