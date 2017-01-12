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


