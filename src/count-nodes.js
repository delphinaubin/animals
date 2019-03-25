const countNodes = (countries) => {

  return countries.map(({ name, people, ...countryRest}) => {
    return {
      ...countryRest,
      name: `${name} [${people.length}]`,
      people: people.map(({name, animals, ...peopleRest}) => {
        return {
          ...peopleRest,
          name: `${name} [${animals.length}]`,
          animals
        }
      })
    }
  })
}

module.exports = countNodes