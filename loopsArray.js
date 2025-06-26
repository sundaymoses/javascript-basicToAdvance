let arr=["Mango", "Apple", "Paes"];
//for loop to loop inside the array elements and display them one by one
for(i=0; i<arr.length; i++){
let individualElements=arr[i];//this will be grabing every element at position =(times)
console.log(individualElements);
}
//using for of to loop through arrays
for (let fruit of arr){
    console.log(fruit);//provides the same outcome
}
//using for...in to use index to access them
for (const f in arr) {
    console.log(arr[f]);
}
