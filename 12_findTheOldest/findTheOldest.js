const findTheOldest = function(array) {
    return array.reduce( (oldest, person) => {
        // console.log(oldest);
        // if (age(oldest) < age(person)) {
        //     return person;
        // }else {
        //     return oldest;
        // }
        return age(oldest) < age(person) ?  person :  oldest;
    });
};
function age(person){
    const end = !person.yearOfDeath ? (new Date()).getFullYear() : person.yearOfDeath;
    const ini = person.yearOfBirth ;
    return end - ini;
}
// Do not edit below this line
module.exports = findTheOldest;
