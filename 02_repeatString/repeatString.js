const repeatString = function(strInput, num) {
    if(num < 0)
        return 'ERROR'
    let strResult = '';
    for(let i = 0; i < num; i++)
    {
        strResult +=strInput;
    }
    return strResult;
};

// Do not edit below this line
module.exports = repeatString;
