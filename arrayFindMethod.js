//find method is a function that loops through array elements to checks the passed
//condition if its true and returns the result
let arr=[
    {id:1, name:"John"},
    {id:2, name:"Mike"},
    {id:3, name:"fren"},
];

//to loop through this array we can say:
// let foundUser=arr.find((item)=>{
//     if (item.id==2) {
//         console.log(item.name);
//     }
// })
// letfoundUser=arr.forEach((item)=>{
//     if (item.id==2) {
//         console.log(item.name);
//     }
// })
//the difference btwn for each and find is that, find will always stop when it finds what it was looking for
letFoundUser=arr.find(item=> item.id===2)
console.log(item.name)

