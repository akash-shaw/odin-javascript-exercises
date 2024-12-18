const findTheOldest = function(people) {
    return people.sort( (a,b)=> getAge(b)-getAge(a) ).at(0);
};

function getAge(person){
    let age;
    if(!person.yearOfDeath){
        age = (new Date()).getFullYear() - person.yearOfBirth;
    }
    else{
        age = person.yearOfDeath - person.yearOfBirth;
    }
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
