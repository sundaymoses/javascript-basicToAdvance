function removeElement(nums) {
nums.sort(compareFunction);
}
// console.log(removeElement([1,2,4,3,2,3], 3))

function compareFunction(a){
    return a!=4;
}

console.log(removeElement([1,32,4,4,3,2,3]));