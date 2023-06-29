// --------------------------
// ---------Arrays-----------
// --------------------------

/*
    In javascript, array is a single variabe that is used to store different elements. It is often used when we want to store list of elemrnts and access them by a single variable.
*/

// ways to declare an array
var team = [];
var vegetables = new Array();

// ways to define an array
var students = ['Amara', 'Dhishan', 'Pawan', 'Ruwan', 'Avishka'];
var marks = new Array(45, 67, 31, 32, 82);

// Print Array
console.log(students);
console.log(team);
console.log(vegetables);
console.log(marks);

console.log(students.length);

console.log(students[3] + ' is got ' + marks[3] + ' marks.');

// Array mutation
students[3] = 'Saduni';
students[5] = 'Thilini';
console.log(students);
students[students.length] = "Chathu";
console.log(students);

// Different data types in an array
var std1 = ['Dhishan', 'Chathuranaga', 29, 1994, 'Software engineer', 'Galle', true];
console.log(std1);
console.log(typeof(std1[2]));

// Add Elements
// add end
std1.push('Red');
console.log(std1);
// add start
std1.unshift('Mr.');
console.log(std1);

// Remove Elements
// remove end
std1.pop();
console.log(std1);
// remove start
std1.shift();
console.log(std1);

// Get index of an element
console.log(std1.indexOf(29));
console.log(std1.indexOf(290));

var isAgriStudent = std1.indexOf('Agri') === -1 ? std1[0] + ' is not a agri student.' : std1[0] + ' is a agri student.';

console.log(isAgriStudent);