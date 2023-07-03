// --------------------------
// --------- Scope ----------
// --------------------------

/* 
    Scope determine the accessibility (visibility) of variables. In javascript there are two types of scope.
    1.Local
    2.Global
*/

// -- Local Variables --
/* 
    Variables declared with in a javascrip function, They can only be accessed from within the function.Local veriables are deleted when the function is completed
*/
function addNum(){
    var a = 10;  //locals variable
    var b = 20;  //locals variable
    console.log(a + b);
}

// calling
addNum();

// console.log(a);  //can't Access

// -- Global Variables --
/*
    A variable declared outside a function, All scripts and fuctions on web page can access it. In a web browser, global variables are deleted when you close the browser window (or tab)
*/
var subject = "Computer Science";
function mySub(){
    console.log("My Favourite Subject is " + subject);
    subject = 'Science'; // varible Mutation
}

// Calling
mySub();
mySub();
console.log(subject);