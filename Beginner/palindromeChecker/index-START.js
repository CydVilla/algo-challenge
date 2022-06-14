/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    const lowerCase = text.toLowerCase()
    const length = text.length
    for (let i = 0; i < length / 2; i++) {
      if (lowerCase[i] !== lowerCase[length - 1 - i ]) {
      return false 
    }
    }
    return true
}



module.exports = palindromeChecker;