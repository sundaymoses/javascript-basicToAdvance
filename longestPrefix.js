function longestPrefix(strs) {
  let stringToTest = strs[0];
  let newString = "";
  // console.log(strs);
  //use the string that has the shrotest length
  for (let i = 0; i < strs.length; i++) {
    stringToTest = strs[i];
    // if(strs[i].length === stringToTest.length){
    //     stringToTest=strs[i]
    // }
    //if string at i length is less than initialized string, append it to string to use
    if (strs[i].length < stringToTest.length) {
      stringToTest = strs[i];
    }
  }
  //    console.log(stringToTest);

  for (let j = 0; j < stringToTest.length; j++) {
    let charToTest = stringToTest[j];
    let commonLetter = true;

    for (let m = 0; m < strs.length; m++) {
      // console.log(stringToTest[m][j])
      // console.log(strs[m][j])
      if (charToTest !== strs[m][j]) {
        //    console.log(charToTest)
        commonLetter = false;
      }
    }
    if (commonLetter) {
      newString += charToTest;
      //turn back common to false
      commonLetter = false;
    } else {
      break;
    }
  }
  return newString;
}
console.log(longestPrefix(["car", "cir"]));
