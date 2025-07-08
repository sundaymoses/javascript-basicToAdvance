function removeElement(nums, val) {
    let k = 0; // Pointer for next non-val element position
    
    // Iterate through array
    for (let i = 0; i < nums.length; i++) {
        // If current element is not val, place it at k position
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
  
    
    return k;
}
console.log(removeElement([1,2,3,3,3,4,3,2,3],3));
