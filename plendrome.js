
//this task will check an number and return true or false if it is a palindrome
function palendrom(num) {
  let cleanNumber=String(num);
//   console.log(typeof(cleanNumber));
  //now number converted to string, now revert the string
  let res=Number(cleanNumber.split("").reverse().join(""))
//   console.log(res)
  //join changes it back to string
  //remember reverse methods are used on arrays not strings
//   console.log(typeof(res))
  //goal is to check wehter the entered number is a palendrome
//so
console.log(res===Number(cleanNumber));
}
palendrom(11);