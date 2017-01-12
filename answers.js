//printing out the positive numbers in an array

var allNumbers = [4, 6, -1, 7, -6];

Array.prototype.printPositives = function(){
    this.forEach(function(item) {
        if(item > 0) {
            console.log(item);
        }
    }

)};

allNumbers.printPositives();


//using the filter method to return only the positive numbers in an array

var allNumbers2 = [9, -6, 10, 8, -4];

allNumbers2.filter(function(number){
    if(number > 0){
        console.log(number);
    }
});

allNumbers2;
