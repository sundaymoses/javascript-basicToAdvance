function sumAll(arr, target) {
    let sum=0;
    let answer = []
    // console.log(arr, target)

    for (let i = 0; i < arr.length-1; i++) {
        
for (let j = i; j < arr.length-1; j++) {
    sum=arr[i]+arr[j+1];
    // console.log(sum)
if (sum==target) {
    // answer.push(i,j)
    // console.log(arr[i], arr[j+1])
    answer.push(i, j+1)
}
    }
}


  
return answer
}

console.log(sumAll([2,5,5,11],10))