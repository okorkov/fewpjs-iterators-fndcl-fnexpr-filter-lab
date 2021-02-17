const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function findMatching(arrayOfDrivers, driverToFind) {
  let result = arrayOfDrivers.filter( driver => {
    return driver.toLowerCase() === driverToFind.toLowerCase();
  })
  return result;
}

function fuzzyMatch(drivers, lettersString) {
  let result = drivers.filter( driver => {
    return driver.indexOf(lettersString) > -1 && driver.indexOf(lettersString) < 2
  })
  return result;
}

function matchName(drivers, driversName) {
  let result = drivers.filter( driver => {
    return driver.name === driversName
  })
  return result;
}

console.log(matchName(drivers, 'Bobby'))


