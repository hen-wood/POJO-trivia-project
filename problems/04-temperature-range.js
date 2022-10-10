/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `temperatureRange` - What is the temperature range for each month in each
city?

In this case, temperature range is the difference in temperature between the
high temperature and low temperature in a given month ( range = high - low ).

Write a function, `temperatureRange` that takes in the climate data, and returns
a new copy of the array that includes all of the city data. Each city object
should have a "monthlyTemperatureRange" key that points to an array of objects
formatted to match the example output below:

[
  {
    "id": 1,
    "city": "Amsterdam",
    "country": "Netherlands",
    "monthlyTemperatureRange": [
        { "month": "January", high: x, low: x, range: x },
        { "month": "February", high: x, low: x, range: x },
        // ... continued for all 12 months
    ]
  },
  // ... constinued for all cities in the original climateData array
]:

Note: You can solve this in multiple ways. Try using a few advanced array
methods. Can you use helper methods to separate out the logic?
*/

const temperatureRange = (climateData) => {
  let newArray = climateData
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  for (let object of newArray) {
    let rangeArray = []
    let avgArray = object['monthlyAvg']
    for (let index in avgArray) {
      rangeArray.push({ month: months[index], high: avgArray[index].high, low: avgArray[index].low, range: (avgArray[index].high - avgArray[index].low) })
    }
    object['monthlyTemperatureRange'] = rangeArray
    delete object.monthlyAvg
  }
  // console.log(newArray)
  return newArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [temperatureRange];
