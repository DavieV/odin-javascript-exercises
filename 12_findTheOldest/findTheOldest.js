const findTheOldest = function(people) {
  let oldest = {}
  let oldestAge = 0;
  people.forEach((person) => {
    let age = ('yearOfDeath' in person) ? person.yearOfDeath - person.yearOfBirth : 2022 - person.yearOfBirth;
    if (age > oldestAge) {
      oldestAge = age;
      oldest = person;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
