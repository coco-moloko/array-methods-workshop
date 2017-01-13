//printing out the positive numbers in an array

var allNumbers = [4, 6, -1, 7, -6];

function printPositives(item){
        if(item > 0) {
            console.log(item);
        }
    }


printPositives(allNumbers);


//using the filter method to return only the positive numbers in an array

var theNumbers2 = [9, -6, 10, 8, -4, 99, -87655, 5];

function getPositives(x) {
    return x >= 0;
}

console.log(theNumbers2.filter(getPositives));


//using the filter method to filter imput array

var arr = [4, 6, -1, 7, -6, 400, -3424];

arr.filter(getPositives).forEach(printPositives);

//function filteredArray

var filterArray = Array.prototype.filter;

// the longest word
function theWholeThing(str) {
    var rayTheArray = str.split(" ");
    var theWord = "";
    var hi = rayTheArray.reduce(function(a, b) {
        if (a.length < b.length) {
        theWord = b;
        }
    return theWord;
});

return hi;
}
var rayTheString = "Hello I am the superhero of the day!";

console.log(theWholeThing(rayTheString));

