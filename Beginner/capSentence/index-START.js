/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




const capSentence = (text) => text.split(" ").map(el => el[0].toUpperCase()+el.substring(1).toLowerCase()).join(" ")


// 0(N)



module.exports = capSentence