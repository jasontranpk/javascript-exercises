const reverseString = function(strInput) {
    let strResult = '';
    for(let i = strInput.length - 1; i >= 0; i--)
    {
        strResult += strInput.slice(i, i+1);
    }
    return strResult;
};

// Do not edit below this line
module.exports = reverseString;
