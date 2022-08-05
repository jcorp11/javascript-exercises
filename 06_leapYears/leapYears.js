const leapYears = function(year) {
    let condition1 = year%4 == 0;
    let condition2 = year%100 == 0;
    let condition3 = year%400 == 0;
    if(condition1){
        if(condition2){
            if(condition3){
                return true;
            }
            return false;
        };
        return true;
    };
    return false;
};

// Do not edit below this line
module.exports = leapYears;
