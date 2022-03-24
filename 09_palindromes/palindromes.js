const palindromes = function (str) {
    strResult = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').toLowerCase();
    let reversedStr = Array(strResult.length);
    for(let i = strResult.length - 1; i >= 0; i--){
        reversedStr[i] = strResult[strResult.length -1 - i];
    }
    if(reversedStr.toString().replace(/[,]/g, '') == strResult)
    {
        console.log(strResult);
        return true;
    }
    else
    {
        console.log(strResult);
        console.log(reversedStr.toString().replace(',', ''));
        return false; 
    }
         
};

// Do not edit below this line
module.exports = palindromes;
