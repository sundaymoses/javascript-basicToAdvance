function removeDub(arr){
const removeDubb= arr.filter((item, index)=> arr.indexOf(item)=== index)
return removeDubb;
}
console.log(removeDub([1,2,2,2,3,4,5,5,6,6]));