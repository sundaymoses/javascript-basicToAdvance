function sortt(arr, target) {
    //sort the array first
   //loop through the array to sort them
   for (let i = 1; i <= arr.length; i++) {
    // console.log(arr[i])
    //sort them
    if(arr[i]>arr[i+1]){
        let temp=arr[i]
        arr[i]= arr[i +1]
        arr[i+1]=temp;  
        }
         if(arr[i]==target){
    console.log(`Index of number is ` + i);
   }
   //in a case where it is not available, return where it should be inserted
   
    //   console.log(arr[i])
   }
  
    // console.log(arr)
}
sortt([2,4,1,2,3], 1)