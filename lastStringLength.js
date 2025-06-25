
 function findLength(sentence) {
   let lastWord=sentence.split(" ");//separates the words to array each
// console.log(lastWord);
// console.log(res);
//onces capable of changing them to arrays, pick the last word
let res=lastWord[lastWord.length-1];
console.log(res.length);
 }
 findLength("How are you");