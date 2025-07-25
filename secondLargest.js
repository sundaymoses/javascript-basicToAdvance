function secondLargest(str){
   
//convert to array
let numbers=[]
 let newArray=[]
let cleanArray=str.split('');
// console.log(cleanArray)
//loop through to filter out numbers
for(let i=0; i<cleanArray.length; i++){
    if(!isNaN(cleanArray[i])){
        numbers.push(cleanArray[i]);
    }
 
    numbers.sort();
    // console.log(numbers)
//  console.log(numbers.sort())
// return secondlargest
}
   if (numbers.length===0){
  return -1;
    }
// console.log(numbers);
//fiter them out to a new array
for(let j=0; j<numbers.length; j++){
    let listTwo=[]
numbers.filter((nums)=>{
    if(!listTwo.includes(nums[j])){
        listTwo.push(nums[j]);
    }
})
//    console.log(listTwo)
//convert all list two elements to numbers
for(let i=0;i<listTwo.length;i++){
 newArray.push(Number(listTwo[i]))
}
// console.log(typeof newArray[0])
// console.log(newArray)
if(newArray.length>=2){
return newArray.at(-2);
}
else{
    return -1;
}
}


}
console.log(secondLargest("abc1111"))
