const removeFromArray = function(arr, ...val) {
    let normalArray = Array.from(val);
    console.log(normalArray);
    normalArray.map((value) =>{
        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i] === value)
            {
                arr.splice(i,1);
                console.log(arr);
            }
        }    
    })
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
