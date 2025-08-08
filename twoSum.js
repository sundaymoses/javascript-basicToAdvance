function twoSum(arr,target){
    let indx_of_num=[]
   
//return indicess of the two numbers such that they add up to target

for(let i=0;i<arr.length;i++){
    //declare array to store the indexes of this numbers

    for (let j=i+1;j<arr.length;j++){
//   console.log(arr[j]);
   if(arr[i]+arr[j]==target){
    indx_of_num.push(i,j)
   }
    }
  
}
return indx_of_num    
}
console.log(twoSum([3,2,4,6,7],13));