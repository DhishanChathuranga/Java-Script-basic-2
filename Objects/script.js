// -------------------------------
// ---------- Objaects -----------
// -------------------------------

/*
    In javascript objects are veriables that has many value.
    Those values written as name:value pairs called properties or matheds.
*/

// -- Object Literals --
// comma-seperated list of name-valus pairs wrapped in curly braces.

var dhishan = {
    firstName : 'Dhishan',
    lastName : 'Chathuranga',
    age : 29,
    isMarried : false,
    job : 'Softwere emgineering',
    subjects : ['Html', 'Css', 'Javascript', 'react', 'python', 'Ui Ux'],
    degree : {
        name : 'Applied science',
        duration : '3 years',
        credits : 90,
        subjects : ['Computer science', 'Mathamatics', 'Physics'],
        university : 'Univerity of Sri Jayawardanapura'
    },

    projects : [
        {
            name : 'Muidiyanse Brand',
            technology : 'Adobe illastrater',
            verson : 1.0
        },

        {
            name : 'Portfolio web',
            technology : 'figms',
            verson : 1.5
        },

        {
            name : 'simple web',
            technology : 'Html & Css',
            verson : 2.0
        }
    ],

    birthOfYear : function(year){
        return year-this.age;
    }
}

// Get values
console.log(dhishan);
console.log(dhishan.firstName);
console.log(dhishan['lastName']);
var x = 'age';
console.log(dhishan[x]);
console.log(dhishan.subjects);
console.log(dhishan.subjects[2]);
console.log(dhishan['subjects'][3]);
console.log(dhishan.degree);
console.log(dhishan.degree.name);
console.log(dhishan.degree.subjects);
console.log(dhishan.degree.subjects[2]);
console.log(dhishan.degree['subjects'][0]);
console.log(dhishan.projects[1]);
console.log(dhishan.birthOfYear(2023));

// modify values
dhishan.isMarried = true;
console.log(dhishan);
