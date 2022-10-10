/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* 01. `listAllCitiesWithCountries`
What are all of the cities included in the data set?

Write a function, `listAllCitiesWithCountries` that returns an array of all of
the cities in the data set, formatted in "city, country" format.

For example, it should return:
[ "Amsterdam, Netherlands", "Athens, Greece", ...plus 103 more cities ]
*/

const listAllCitiesWithCountries = (climateData) => {
    let citieCountriesFormat = []
    for (let obj of climateData) {
        citieCountriesFormat.push(`${obj.city}, ${obj.country}`)
    }
    return citieCountriesFormat
}


/* 02. `listAllUsCities`
What are all of the United States cities included in the data set?

Write a function, `listAllUsCities` that returns an array of all of
the United States cities in the data set, formatted in "city, country" format.

For example, it should return:
[ 'Atlanta GA, United States', 'Austin TX, United States', ...plus more cities ]
*/

const listAllUsCities = (climateData) => {
    let usCities = []
    for (let obj of climateData) {
        if (obj.country === 'United States') {
            usCities.push(`${obj.city}, ${obj.country}`)
        }
    }
    return usCities
}



/* 03. `findDuplicates` What cities are included more than once in the data?

Write a function, `findDuplicates` that finds all duplicate cities. Return an
object including every city name, pointing to an array of IDs for that city.

For example, if `Athens` showed up only once with an id of 2, and 'Mexico City'
was duplicated in id 3, 7, and 9, the returned object should look like:
{ 'Athens: [ 2 ], 'Mexico City': [ 3, 7, 9 ] }
*/

const findDuplicates = (climateData) => {
    let duplicates = {}
    for (let obj of climateData) {
        if (!duplicates[obj.city]) {
            duplicates[obj.city] = [obj.id]
        } else {
            duplicates[obj.city].push(obj.id)
        }
    }
    return duplicates
}

/* 04. `returnDuplicate` Which city object should be corrected in
the data set?

Write a function, `returnDuplicate` that finds the ONE duplicated city,
and returns the data (object) of the last instance of that city.

For example, if `Paris` showed up twice with an id of 2 and 5, the function
should and return the object with the id of 5.

HINT: Use documentation to research the `find()` method in JavaScript. You may,
but do not have to, use this method to solve this problem.
*/

const returnDuplicate = (climateData) => {
    let duplicatesObj = findDuplicates(climateData)
    let duplicateIdArrays = Object.values(duplicatesObj)
    for (let array of duplicateIdArrays) {
        if (array.length > 1) {
            return climateData.find(el => el.id === array[array.length - 1])
        }
    }
}

/* 05. `correctDuplicate` Correct the city name of the duplicated city.

Write a function, `correctDuplicate` that finds the ONE duplicated city,
and changes the name of the city to the name provided as a second argument.

For example, if `Paris` showed up twice with an id of 2 and 5, calling
correctDuplicate(climateData, "Nice"), should change the city for the object
with id of 5 to 'Nice' and then return that object with the corrected city name.

HINT: Can you use functions you have already written to help solve this problem?
*/

const correctDuplicate = (climateData, newName) => {
    let duplicateObj = returnDuplicate(climateData)
    duplicateObj.city = newName
    return duplicateObj
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [listAllCitiesWithCountries, listAllUsCities, findDuplicates,
    returnDuplicate, correctDuplicate];
