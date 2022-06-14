/* 
Given an array and chunk size, 
divide the array into many subarrays where each subarray is of length size.
*/

const chunkArray = (array, size) => {
    let result = [] // initialize empty array, since output expects an array
    for (let i of array ) { // loop though each letter of the array
        const last = result[result.length-1] // intialize a variable, set equal to the 'last' number in the result array
        if (!last || last.length === size) { // conditional time, if last does not exist or if the length of last equals
            result.push([i]);                // size, push that number into the result array
        } else {                             // otherwise if those two conditions are satisfied, push the number
        last.push(i)                         // into last, starting the process all over again
    }
    }
    return result
}


module.exports = chunkArray