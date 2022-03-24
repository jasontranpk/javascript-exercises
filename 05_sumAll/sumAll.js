const sumAll = function(int1, int2) {
    let result = 0;
    let max, min;
    if(typeof int1 != 'number' || typeof int2 != 'number' || int1 < 0 || int2 < 0)
        return 'ERROR';
    if(int1 > int2)
    {
        max = int1;
        min = int2;
    }
    else if(int2 > int1)
    {
        max = int2;
        min = int1;
    }
    else
        return 0;
    for(let i = min; i <= max; i++)
    {
        result +=i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
