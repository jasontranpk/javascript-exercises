const fibonacci = function(number) {
    let arr = [];
        arr[0] = 1;
        arr[1] = 1;
    if(number < 0){
        return 'OOPS';
    }
    
    else if(number < 2){
        return arr[number];
    }
    else{
        for(let i = 2; i < number; i++){
            arr[i] = arr[i-1] + arr[i-2]; 
        }
        console.log(arr);
        return arr[number-1];
    }
};
// Do not edit below this line
module.exports = fibonacci;
