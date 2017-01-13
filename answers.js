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
    var red = rayTheArray.reduce(function(a, b) {
        if (a.length < b.length) {
        theWord = b;
        }
    return theWord;
});

return red;
}
var rayTheString = "Hello I am the superhero of the day!";

console.log(theWholeThing(rayTheString));


//count vowels

// function countVowels(str) {
//     var chars = str.split("");
//     var number = 0;
//     chars.forEach(function(a){
//         if (a == "a" || a == "e" || a == "i"|| a == "o"|| a == "u") {
//             number ++;
//         }
        
//     });
    
//     return number;
// }

// var stringTheString = "The best movie ever is full metal jacket";

// console.log(countVowels(stringTheString));

//change below to reduce
function countVowels(str) {
    var chars = str.split("");
    var number = 0;
    chars.forEach(function(a){
        if (a == "a" || a == "e" || a == "i"|| a == "o"|| a == "u") {
            number ++;
        }
        
    });
    
    return number;
}

var stringTheString = "The best movie ever is full metal jacket";

console.log(countVowels(stringTheString));

//high/low function

var numbers = [1, -10, 20, 40, 5];

function highLow(arr) {
	return arr.reduce(function(currentExtremes, num){
		if (num < currentExtremes.lowest) {
			currentExtremes.lowest = num;
		}

		if (num > currentExtremes.highest) {
			currentExtremes.highest = num;
		}

		return currentExtremes;

	}, {lowest: Infinity, highest: -Infinity});

}

console.log(highLow(numbers));

//wheel of fortune

var str = "hello world how are you today";

function countLetters(aString) {
    var letters = {};
    
    aString
        .split("")
        .forEach(function(currentLetter) {
            if (letters[currentLetter]) {
                letters[currentLetter]  = letters[currentLetter] + 1;
            }
            else {
                letters[currentLetter] = 1;
            }

        });
    
    return letters;
}
console.log(countLetters(str));

//negate function

function negate(fn) {
      return function(x) {
          return !fn(x);
      };
}

function isEven(num) {
  return num % 2 === 0;
}
function isEmpty(someList) {
  return someList.length === 0;
}

// New functions
var isOdd = negate(isEven);
var isNotEmpty = negate(isEmpty);

console.log([1,2,3].filter(isEven));
console.log([1,2,3].filter(isOdd));

console.log(isEmpty([1,3,4]));

//negate function expanded

function negateTwo(fn) {
      return function() {
          return !fn(arguments);
      };
}

function firstDividesSecond(first, second) {
  return second % first === 0;
}

var firstDoesNotDivideSecond = negateTwo(firstDividesSecond);
var firstDividesSecond = negateTwo(firstDoesNotDivideSecond);

console.log(firstDoesNotDivideSecond(100, 2));
console.log(firstDividesSecond(100000, 20));

//Find By ID

var totalArray = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
];

var emptyObject = {};

function convertArray() { 
totalArray()
    .forEach(function(arr) {
      return emptyObject;  
    });
    
}

console.log(convertArray());