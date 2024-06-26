/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isAlpha(ch){
//   if(ch>="a" && ch>='z'){
//     return true;
//   }
//   return false;
// }

function isPalindrome(str) {
  str=str.toLowerCase();
  let s=0;
  let e=str.length-1;
  while(s<=e){
    if(!(str[s]>="a" && str[s]<="z")){
      s++;
      continue;
    }
    if(!(str[e]>="a" && str[e]<="z")){
      e--;
      continue;
    }
    
    if(str[s]!=str[e]){
      return false;
    }
    s++;
    e--;
  }
  return true;
}


module.exports = isPalindrome;
