/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `leastRainfall` Which cities have the least rainfall in a given month?

Write a function, `leastRainfall` that takes in the climate data and a month,
and returns an array of cities that have the least rainfall in that month. It
should include all cities that recieve less than 10 mm rainfall in that month.

For example, if there are three cities have less than 10 mm, the returned array
should look like:

[ "city1, country1: x mm", "city2, country2: x mm", "city3, country3: x mm" ]
(Each city's data is a formatted string data type).

Note: You can solve this in multiple ways. Try using a few advanced array
methods!

Hint: How can you identify and access the correct data for a month such as
"March"?
*/
const leastRainfall = (climateData, month) => {
    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    let index = months.indexOf(month.toLowerCase())
    let completeArray = []
    for (let object of climateData) {
        let simplifiedRainfall = Math.floor(object.monthlyAvg[index].rainfall)
        let dataString = `${object['city']}, ${object['country']}: ${simplifiedRainfall} mm`
        if (object.monthlyAvg[index].rainfall < 10) {
            completeArray.push(dataString)
        }
    }
    return completeArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [leastRainfall];
