const findTheOldest = function(people) {
    people.sort((a, b) => getAge(a) > getAge(b) ? -1 : 1);
    return people[0];
};

function getAge(person) {
    const currentYear = new Date().getFullYear();
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return currentYear - person.yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
