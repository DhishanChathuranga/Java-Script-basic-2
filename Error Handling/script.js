// -----------------------------------------
// ------------ Error Handling -------------
// -----------------------------------------

// -- Try catch --
/*
    try - Last you test a block of code for errors
    catch -  Lets you handle the error
    throw - Ler's you create custom errors
    finally - let's you execute code, After try and catch, regardless of the result
*/

// Fuction to find the largest number
function findLargest(a, b, c){
    try{
        if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number'){
            throw "Enter only Numbers";
        }

        else if(a == b || a == c  || b == c){
            throw "Enter Deffrent Numbers";
        }
        else{
            if(a > b && a > b){
                console.log("A is a largest number" );
            }
            else if(b > a && b > c){
                console.log("B is a largest number" );
            }
            else if(c > a && c > a){
                console.log("C is a largest number" );
            }
            else{
                console.log("Invalid Inputs" );
            }
        }
    }
    catch(err){
        console.log(err);
    }
    
    finally{
        console.log("Input values are " + a +", " + b + ", " + c);
    }
}

// calling
findLargest(2, 6, 6);