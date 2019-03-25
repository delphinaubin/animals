const computeArguments = (args) => {
  
  let shouldFilter = false
  let filter
  
  const filterArgument = args
    .find((arg) => arg.startsWith('--filter'))
  
  if(filterArgument) {
    shouldFilter = true
    filter = filterArgument.split('=')[1]
  }
  
  return {
    shouldFilter,
    filter
  }
}

module.exports = computeArguments