/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const obj={};
  if(str1.length!=str2.length){
    return false;
  }
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  for(let character of str1){
    if(character in obj){
      obj[character]++;
    }
    else{
      obj[character]=1;
    }
  }

  for(let character of str2){
    if(character in obj){
      obj[character]--;
    }
    else{
      // obj[character]=1;
      return false
    }
  }

  for(let first in obj){
    if(obj[first]>0){
      return false;
    }
  }
  return true;
}

console.log(isAnagram('Debit Card', 'Bad Credit'))
console.log(isAnagram('School MASTER', 'The ClassROOM'))

module.exports = isAnagram;
