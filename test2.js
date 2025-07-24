
function arrAdd(arr) {
//add one to the last item in the array
//get the length of the array
let n=arr.length
//loop through the elements from the last element
for (let i = n-1; i >= 0; i--) {
    // console.log(arr[i])
   if(arr[i]<9){
    //add 1 to the last element if it is less than 9 only
    arr[i]++;
    return arr;
   }
   arr[i]=0;

//    console.log(arr[i])  
}
//if all digits are 9, then assign 1 to the start
arr.unshift(1)
return arr;
}
console.log(arrAdd([9,1,9]))