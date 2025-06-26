//declareing
let arr=[];
//or
// let arr2=new Array();
// assigning
arr.push("Apple", "Mango");
// console.log(arr);
arr.pop();//removes the last array element
arr.at(-1);//returns the last element just as array.pop
// console.log(arr);
let arr2=[3,4,5];
let arr3=arr2.concat([2,4]).concat(arr)//joining since we can not split an array
//to run a function .forEach array
arr3.forEach((item)=>{
console.log("hi " +item);
})