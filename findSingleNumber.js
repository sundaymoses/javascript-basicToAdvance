function singleNum(arr) {
    let leng;
    let res=[];
for (let i = 0; i < arr.length; i++) {
  res.push(arr.filter((el)=> el === arr[i]));
  console.log(res)
}
res.forEach((el)=>{
    if (el.length===1){
   leng=el;
    }

}
)
return leng[0];
}
console.log(singleNum([1,2,1,2,4]))