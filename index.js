/* Write a function called same which accepts two arrays, 
the function should return true if every value in the 
array has its corresponding value squared in the second
array. The frequency of the value must be the same. */

function compareArraySquare(firtsArray, secondArray){
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

// const v = compareArrayAuare([1,2,3], [1,4,9], "compareArraySquare")
// console.log(v)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Given two strings, write a function to determing if the first string is an anagram of the second. */
function checkAnagram(firstString, secondString){

    // if strings are not equal in length, they definitely cannot be anagrams
    if ( firstString.length !== secondString.length){
        return false;
    }

    // create a frequency counter object
    const compareObject = {}

    // Perform a frequency count for the first string
    for(let i = 0; i < firstString.length; i++){
        let letter = firstString[i];

        compareObject[letter] ? compareObject[letter] += 1 : compareObject[letter] = 1;
    }
    console.log(compareObject)
    // Use secondString keys to compare values on both arrays, if value is found in compareObject, subtract one from value
    for(let i = 0; i < secondString.length; i++){
        let letter = secondString[i];

        // if value is zero after subtraction this returns false, the ! returns true, block runs.
        if(!compareObject[letter]){
            return false
        }else{
            compareObject[letter] -= 1;
        }
    }
    return true;
    console.log(compareObject)
    
}

// console.log(checkAnagram("aba", "aab"), "CheckAnagram")

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Write a fucntion call sum zero which accepts a sorted array of integers. The function should find the first pair where the sum is zero.
Return an array that include both values that sum up to zero or undefined if the pair does not exist */

function sumZero(array){
    // Pick poniters to start sum check, which is the first and last item on the list.
    let leftPointer = 0
    let rightPointer = array.length - 1

    // Pointer is at the center of the list if both leftpointer and rigthpointer respectively are zero
    // check the else block.....therefore since we want to check numbers before zero(list is sorted) left should be less than right
    while(leftPointer < rightPointer){
        let sum = array[leftPointer] + array[rightPointer];

        if(sum === 0){
            return [array[leftPointer], array[rightPointer]]
        }else if (sum > 0){
            rightPointer--
        }else{
            leftPointer++
        }
    }
    return "No sum found"
}

// console.log(sumZero([-2, -1, 0 , 1, 2, 3, 4]))
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Implement a function called count unique values, which accepts a sorted array and count the unique the vcalue in the
sorted array. There can be negative numbers in the array, but it will always be sorted. */

function countUniqueValue (array){
    let firstPointer = 0
    let secondPointer = 1

    while (secondPointer < array.length){
        if (array[firstPointer] !== array[secondPointer]){
            firstPointer++
            array[firstPointer] = array[secondPointer]
            secondPointer++
        }else{
            secondPointer++
        }
    }

    return firstPointer + 1
}

// Refactor

function countUniqueValueRef (array){

    if (array.length === 0) return 0;

    let pointer = 0;
    for (j=1; j < array.length; j++){
        if(array[j] !== array[pointer]){
            pointer++
            array[pointer] = array[j]
        }
    }
    return pointer + 1
}

// console.log(countUniqueValueRef([1, 1, 1, 1, 2, 3, 4, 4, 4, 5,5]))
// console.log(countUniqueValueRef([]))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Write a function maxSubArraySum which accepts an array of integers and numbers called n. The function should calculate the 
maximum sum of n consecutive elements in the array */
