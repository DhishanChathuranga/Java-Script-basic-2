// ------------------------------------
// ------- Function Expression --------
// ------------------------------------

// -- Function Declaration --
// function profession(job, firstName){}

// -- Function Expression --
var profession = function(job, firstName){
    switch(job){
        case 'doctor' :
            return firstName + " is treating patients.";
        case 'teacher' :
            return firstName + " is teaching students.";
        default:
            return firstName + " is something else.";
    }
}

// calling
console.log(profession('doctor', 'Amal'));
console.log(profession('teacher', 'kamal'));
console.log(profession('software', 'Dhishan'));