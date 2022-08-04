const removeFromArray = function(array, ...theArgs) {
    let newArray = [];
    array.forEach(element => {
        if(!theArgs.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
