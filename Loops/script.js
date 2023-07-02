// --------------------------------
// -------------Loops--------------
// --------------------------------

/* 
    Loops are control structure that repeatedly run a block of code until a cretion condition get false.
*/

// -- without Loops --
console.log(1);
console.log(2);
console.log(3);

// -- For Loop --
for(var i=0; i<10; i++){
    console.log(i);
}

for(var i=10; i>0; i--){
    console.log(i);
}
console.log("-------------------------------------------");

// Iterate an array
var student = ['Kamal', 'Amara', 'Nayana', 'Kaluwa', 'John'];
for(var i=0; i<student.length; i++){
    console.log(student[i]);
}

console.log("-------------------------------------------");

//-- For/In Loop --
/* The javascript fot/in statement loops through the properties of an object */
var person = {fname: 'Dhishan', lname: 'Chathuranga', age : 29};
var i;
for(i in person){
    console.log(person[i]);
}

console.log("-------------------------------------------");

// -- For/of Loop
/* For/of lets you loop over data structures that are interable such as arrays, Strings, Maps, and more */
var fullName = 'Dhishan Chathuranga';
var j;
for(j of fullName){
    console.log(j);
}

for(j of student){
    console.log(j);
}

console.log("-------------------------------------------");

// --While Loop --
var marks = [23, 45, 67, 45, 67, 89];
var k = 0;
while(k < marks.length){
    console.log(marks[k]);
    k++;
} 

// -- Do While Loop --
var l = 10;
do{
    console.log(l);
    l--;
}while(l >= 1);

console.log("-------------------------------------------");

// -- Continue & Break --
/* The break and continue statements are the only javascript statements that can " jump out of " code block. */
var data = ['Dhishan', 'Galle', 1994, 'Maths', true, 'Chocolate'];

// continue 
/* If a specified condition accurs, and continue with the next iteration inthe loop. */
for(var i=0; i<data.length; i++){
    if(typeof(data[i]) !== 'string') continue;
    console.log(data[i]);
}
console.log("------------");
// Break
/* Break the loop and continues executing the code after the loop (if any) */
for(var i=0; i<data.length; i++){
    if(typeof(data[i]) !== 'string') break;
    console.log(data[i]);
}
