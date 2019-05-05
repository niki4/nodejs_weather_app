// imports
const rp = require('request-promise')


// exports
module.exports = async function(city = '') {
    if (!city) {
        throw new Error('City name cannot be empty')
    }

    const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d'
    const uri = 'https://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true
    }

    try {
        const respData = await rp(options)
        const celsius = Math.floor((respData.main.temp - 32) * 5/9)

        return {
            weather: `${respData.name}: ${celsius}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error: error.error.message
        }
    }

}