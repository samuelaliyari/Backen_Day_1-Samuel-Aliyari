const moreThan = (arr) => arr.filter((city => city.population >= 100000 ? city : null))

const lessThan = (arr) => arr.filter((city => city.population < 100000 ? city : null))




module.exports = { moreThan, lessThan }