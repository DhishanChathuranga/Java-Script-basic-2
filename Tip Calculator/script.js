// -----------------------------
// -------Tip Calculator--------
// -----------------------------

/* Dasun and his friends went on a picnic. To get food they went to 3 diffrent restaurents for each meal. The bills are Rs. 1230, Rs. 982, Rs.1640.

to tip the waiter a fair amount, Dasun create a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less then Rs. 1000, 15% when the bill is between Rs. 1000 and Rs. 1500, and 10% if the bill is more then Rs. 1500.

In the end, Dasun would like to have two arrays:
1.Cataining all 3 tips
2.Cataining all three final paid amount (bill + amount)
*/

var tips = Array();
var amount = Array();

// function
function tipCalculator(bill){
    var tip;    
    if(bill < 1000){
        tip = bill * (20/100);
    }
    else if(1000 <= bill <1500){
        tip = bill * (15/100);
    }
    else if(1500 < bill){
        tip = bill * (10/100);
    }

    // Store in arrays
    tips.push(tip);
    amount.push(bill + tip);

    return(tip);
}

// calling
console.log('1 st tip : ' + tipCalculator(1230) + ' | Bill : ' + amount[0]);
console.log('2 st tip : ' + tipCalculator(982) + ' | Bill : ' + amount[1]);
console.log('3 st tip : ' + tipCalculator(1640) + ' | Bill : ' + amount[2]);

// Arrays
console.log(tips);
console.log(amount);
