// Write a function called same which accepts two arrays, 
// the function should return true if every value in the 
// array has its corresponding value squared in the second
// array. The frequency of the value must be the same.

function compareArrayAuare(firtsArray, secondArray){
    if (firtsArray.length !==  secondArray.length){
        return false
    }

    // Initialise empty object for counting items frequencies in lists
    const firstCounterObj = {};
    const secondCounterObj = {};

    // count frequency occurence for each list
    for (let item of firtsArray){
        firstCounterObj[item] = (firstCounterObj[item] || 0) + 1
    }

    for (let item of secondArray){
        secondCounterObj[item] = (secondCounterObj[item] || 0) + 1
    }

    // compare both object, secondArray is squred secondArray, frequency occurence is same
    for (let key in firstCounterObj){
        if (!(key ** 2 in secondCounterObj)){
            return false;
        }
        if(firstCounterObj[key] !== secondCounterObj[key ** 2]){
            return false
        }
    }
    return true

}

// const v = compareArrayAuare([1,2,3], [1,4,9])
// console.log(v)