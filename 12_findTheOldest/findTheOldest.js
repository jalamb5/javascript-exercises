const findTheOldest = function(array) {
    let ages = []
    array.forEach(person => {
        let yearOfDeath = person.yearOfDeath ? person.yearOfDeath : 2022;
        let yearOfBirth = person.yearOfBirth;
        let age = yearOfDeath - yearOfBirth;
        ages.push(age);
    });
    let oldest = 0
    for (i = 0; i < ages.length; i++) {
        if (ages[i] > oldest) {
            oldest = ages[i];
        };
    };
    let oldestIndex = ages.findIndex(item => item === oldest);
    let answer = array[oldestIndex].name;
    return array[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;

