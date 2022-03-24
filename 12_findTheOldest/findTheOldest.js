const findTheOldest = function(arr) {
    let sortedArr = arr.sort((a, b) => {
        if(!a.yearOfDeath) 
            a.yearOfDeath = 2022;
        if(!b.yearOfDeath)
            b.yearOfDeath = 2022;
        if ((a.yearOfDeath - a.yearOfBirth ) > (b.yearOfDeath - b.yearOfBirth))
        {
            return -1;
        }
        if ((a.yearOfDeath - a.yearOfBirth ) < (b.yearOfDeath - b.yearOfBirth))
        {
            return 1;
        }
        return 0;
    })
    console.log(sortedArr);
    return sortedArr[0];
}

// Do not edit below this line
module.exports = findTheOldest;
