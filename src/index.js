const computeArguments = require('./cli-utils/compute-arguments')
const filterAnimals = require('./filter-animals')
const countNodes = require('./count-nodes')
const { data } = require('../data')
const args = process.argv.slice(2)

const { shouldCountNodes, shouldFilter, filter } = computeArguments(args)
let output = data
if(shouldFilter) {
  output = filterAnimals(data, filter)
}
if(shouldCountNodes) {
  output = countNodes(output)
}

console.log(JSON.stringify(output))