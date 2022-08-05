const sumAll = function(a, b) {
    if( a < 0 || b < 0){
        return 'ERROR';
    }

    if( typeof(a) != 'number' || typeof(b) != 'number' ){
        return 'ERROR';
    }

    let finalsum = 0;
    let initial;
    if( a < b){
        initial = a;
        end = b;
    } else {
        initial = b;
        end = a;
    }
    for(let i = initial; i <= end; i++){
        finalsum += i ;
    }
    return finalsum;
};

// Do not edit below this line
module.exports = sumAll;
