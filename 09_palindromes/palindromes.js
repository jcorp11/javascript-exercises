const palindromes = function (str) {
    let cond = true;
    str = str.toLowerCase().replace(/[^a-z]/g, "");
    

    for(let i = 0; i < str.length; i++){
        if(str[i] != str[str.length - 1 - i]){
            cond =false;
        };
    };
    return cond;
};

// Do not edit below this line
module.exports = palindromes;
