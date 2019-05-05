// imports
const rp = require('request-promise')


// exports
module.exports = async function(city = '') {
    if (!city) {
        throw new Error('City name cannot be empty')
    }

    console.log('city', city)
}