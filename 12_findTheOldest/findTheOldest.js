const findTheOldest = function(items) {
    let maxage = -Infinity;
    let person;
    let age;
    for (const item of items) {
        if (!("yearOfDeath" in item)){
            age = 2024 - item.yearOfBirth;
        }
        else age = item.yearOfDeath - item.yearOfBirth;
        if (age > maxage){
            maxage = age;
            person = item;
        }
    }
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
