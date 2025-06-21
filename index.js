const drivers= ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}
function fuzzyMatch(drivers, query){
    return drivers.filter(driver => driver.toUpperCase().startsWith(query.toUpperCase()))
}
function matchName(drivers, name){
    const driverObjects= [
        {name: 'Bobby', hometown: 'Pittsburgh' },
          {name: 'Sammy', hometown: 'New York'},
          {name: 'Sally', hometown: 'Cleveland' },
          {name: 'Annette', hometown: 'Los Angeles' },
          {name: 'Bobby', hometown: 'Tampa Bay' },
          ];
          return driverObjects.filter(driver => driver.name === name)
        }
        const afindMatching= findMatching
        module.exports
        {findMatching, fuzzyMatch, matchName, afindMatching };


        