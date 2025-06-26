//instead of using for loop with a lot of codes, filter methods makes it easier for us in the arrays sector
let arr=[1,49,65,43,2,3,4,5,44,55,66,5];
//return numbers greater than 10

let bigNumbers= arr.filter((num)=>{
    if(num>10){
        console.log(num)
    }
})
//filter only returns things that satisfy a condition
//we could do this with a for loop to see
// for(i=1;1<=arr.length; i++){
//    if(arr[i]>10)
//     console.log(arr[i]);
// }
//they all work except that use one where need be