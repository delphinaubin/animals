const chainOperators = (operators) => {
  return {
    on: (value) => {
      return operators.reduce(
        (result, operator) => operator(result),
        value,
      )
    }
  }
}

module.exports = chainOperators