const computeArguments = require('./cli-utils/compute-arguments')
const filterAnimals = require('./filter-animals')
const countNodes = require('./count-nodes')
const chainOperators = require('./functional-utils/chain-operators')
const { data } = require('../data')
const args = process.argv.slice(2)

const operatorsToApply = []


const { shouldCountNodes, shouldFilter, filter } = computeArguments(args)
if(shouldFilter) {
  operatorsToApply.push(filterAnimals(filter))
}
if(shouldCountNodes) {
  operatorsToApply.push(countNodes)
}

const output = chainOperators(operatorsToApply).on(data)

console.log(JSON.stringify(output))