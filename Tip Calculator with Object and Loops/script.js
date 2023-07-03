// ------------------------------------------------
// ----- Tip Calculator with Object and Loops -----
// ------------------------------------------------

/*
    Remember the tip calculator challenge? Let's create a more advance version using object and Loops.

    Dasun and his friends went on a picnic. To get food they wrnt to 5 different restourants for each meal. The bills are Rs. 1230, Rs.982, Rs. 1640, Rs.1460, Rs.944.

    To tip the waiter a fair amount, Dasun create a simple tip calculator (as a funcition). He likes to tip 20% of the bill when the bill is less than Rs.1000, 15% when the bill is between Rs.1000 and Rs.1500, and 10% if the bill is more then Rs.1500.

    Implement a Tip Calculator using Object and Loops:
    1. Create an object with an array for bill values
    2. Add a method to calculate tips 
    3. This method should include a loop to iterate over all the paid bills and do the tip calculations.
    4. As an output create 2 arrays inside a object to share all tip and final amount 
*/

// Object

var billPay = {
    bill: [],
    tip: [],
    finalAmount: [],

    calTip: function(){
        for(var i=0; i<this.bill.length; i++){
            var tp;
            if(this.bill[i] < 1000){
                tp = 20/100;
            }
            else if(this.bill[i] >= 1000 && this.bill < 1500){
                tp = 15/100;
            }
            else{
                tp = 10/100;
            }
            // calculation and add tip to the array
            this.tip[i] = this.bill[i] * tp;
            // Add final amount to the array
            this.finalAmount[i] = this.bill + this.tip;
        }
    }
}

// Get Input
for(var i=0; i<5; i++){
    billPay.bill[i] = parseInt(prompt("Enter "+ (i+1) + " bill value :"));
}

// calling function
billPay.calTip();

console.log(billPay.bill);
console.log(billPay.tip);
console.log(billPay.finalAmount);