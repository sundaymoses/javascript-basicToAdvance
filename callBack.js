//learn how to use callBacks
function sayBye(name, callback) {
    console.log("Hi," +name);
callback();
};
//declare a function that will be passed as a parameter as a cLLBACK FUNCTION
function byeBye(){
console.log("Byeee!");
};
//note how I have passed the fucntion to be used as a call back,, no parenthesis, just the name!!
sayBye("Jonte", byeBye);

//when you run the main function sayBye(), first it prints name, then lastly executes the function passed to it