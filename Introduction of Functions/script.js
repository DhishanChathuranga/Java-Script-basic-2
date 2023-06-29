// ------------------------------------
// -----Introductions of Functions-----
// ------------------------------------

/*
    Function is a re-usable peace of code that does a specific thing.
*/

//--- Define Function ---

// without return
function addNumbers(num1, num2){
    var ans = num1 + num2;
    console.log("Addition : "+ans);
}

// With return
function subNumbers(num1, num2){
    // Return the value to where we call the function
    // Exit the function
    return(num1 - num2);
}

// Calling Function
addNumbers(20, 35.5);

var sub = subNumbers(20,15);
console.log("Substraction : "+sub);

// --------------------------------------------------------------------

// Define 
function calculateAge(birthYear){
    return(2023 - birthYear);
}

// Calling
console.log("My Age : "+ calculateAge(1994) +"years old.");
console.log("Your are "+ calculateAge(prompt("When are you born year?")) +"years old.");
alert("Your are "+ calculateAge(prompt("When are you born year?")) +"years old.");

// Define
function retiringYear(firstName, birthYear){
    // Calling
    var age = calculateAge(birthYear);
    var retire = 60 - age;
    console.log(firstName + " retires in " + retire + " years, in " + parseInt(birthYear+age+retire));
}

retiringYear("Dhishan", 1994);
