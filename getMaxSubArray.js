function maxSubArray(array) {
// console.log(Array.isArray(array));
//main goal is to find the sum of the sub arrays making an array
let subSrrays=[];
for (let i = 0; i < array.length; i++) {
    //lets focus with generating sub arrays only first
    let subArray= [];
   for(let j=i; j<array.length; j++){
        subArray.push(array[j]);

    //push the subArray to the subArrays
    //used the spread operator to prevent the default behavour of affecting the original subaaray after every run
   subSrrays.push([...subArray]);
 
   }
//    console.log(subArray);
}
    //  console.log(subSrrays);
     return subSrrays
}
// maxSubArray([1,3,4,-5]);

// function to find the sum of each subArray in the main array and return their totals
function subArraySum(arrays) {
let results= arrays.map((subSum)=>{
   return subSum.reduce((previous, current)=> previous + current, 0);
})
return results;
}
//function to find the largest of the numbers

function maxNumber(numArray) {
   if(numArray.length===0){
    return 0;//handles case where array has nothing
   }
   let maxValue=Math.max(...numArray);
   return isNaN(maxValue) ? 0 : maxValue;//tackles NaN case
}


console.log("the maximum sum of the sub array is :" + maxNumber(subArraySum(maxSubArray([[100, 5]]))));

