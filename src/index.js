const computeArguments = require('./cli-utils/compute-arguments')
const filterAnimals = require('./filter-animals')
const { data } = require('../data')
const args = process.argv.slice(2)

const { shouldFilter, filter } = computeArguments(args)
let output = data
if(shouldFilter) {
  output = filterAnimals(data, filter)
}

console.log(JSON.stringify(output))