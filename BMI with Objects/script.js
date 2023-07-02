// ---------------------------------
// --------BMI with Objects---------
// ---------------------------------

/*
    Let's remember the first coding challenge where Kasun and chamal compared their BMIs. Let's new implement the same functionality with object and methods.
    
    1.For each of them, create an object with full name mass, and hight.
    2.Then add a methed to each object calcutate the BMI. save the BMI to the object and also returnit from the method.
    3.In the and, Display the highest BMI with the full name. Don't forget the might have the same BMI.
    
    BMI = mass/hight^2
*/

// Declare Objects
var kasun = new Object();
var chamal = new Object();

// Add properties to Kasun
kasun.fullName = prompt("What is Kasun full name? ");
kasun.mass = parseInt(prompt("What is " + kasun.fullName + " mass ? "));
kasun.hight = parseInt(prompt("What is " + kasun.fullName + " hight ? "));
kasun.bmi = bmi(kasun.mass, kasun.hight);
console.log(kasun.bmi);

// Add properties to chamal
chamal.fullName = prompt("What is Kasun full name? ");
chamal.mass = parseInt(prompt("What is " + chamal.fullName + " mass ? "));
chamal.hight = parseInt(prompt("What is " + chamal.fullName + " hight ? "));
chamal.bmi = bmi(chamal.mass, chamal.hight);
console.log(chamal.bmi);

// Calculate BMI Function
function bmi (mass, hight){
    return mass/(hight**2);
}

// display Hights BMI
if(kasun.bmi > chamal.bmi){
    alert(kasun.fullName + " BMI greater than Chamals BMI. highest | BMI: " + kasun.bmi);
}
else if(kasun.bmi < chamal.bmi){
    alert(chamal.fullName + " BMI greater than "+ kasun.fullName +" | BMI. highest Bmi: " + chamal.bmi);
}
else{
    alert(chamal.fullName+ " BMI same "+ kasun.fullName +" | BMI. Bmi: " + chamal.bmi);
}   