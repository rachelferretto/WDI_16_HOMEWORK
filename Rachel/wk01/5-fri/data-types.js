console.log('Data Types');
typeof 15
// Prediction: number
// Actual number

typeof 5.5
// Prediction: float
// Actual: number

typeof NaN
// Prediction: Number
// Actual: Number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual:

typeof 1 != 2
// Prediction: true
// Actual: true

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: "hamburger"
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction:
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN

//ARRAYS

//Add an element to the back of an array: .push()
//Remove an element from the back of an array: .pop()
//Add an element to the front of an array: .unshift()
//Remove an element from the front of an array: .shift()
//Concatenates all the elements in an array into a string: . join()
//Separates the characters of a string into an array.
//This one is a string method: .substring()

var numbers = [2, 4, 6, 8]
//numbers.pop() - this returns 8 in the console (8 removed from the array numbers)
//numbers.push(10) - adds the number 10 to the array at the end
//numbers.unshift(3) - adds 3 to the
//front of the array, returning 5 (the total number within the array)

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ") //joins strings into one with dash replacing commas
moreMorse.split(" ") //adds spaces between the words again


var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) //adds beatles array to the bands array
bands.unshift(stones) // adds stones array to the front of the bands array
bands[bands.length - 1].pop() //Removes the last member of the array indexed 1 (pete)
//i.e var bands ['stones','beatles'] pop removes last element (arraylength - 1 i.e index of 2 - 1)
bands[0].shift() //removes the first element from the first array (brian)
bands[1][3] = "Ringo" // array with index1 ('beatles') is upated with a new person at index 3
/*
//a	  b	      a AND b
true	true	  true
true	false	  false
false	true	  false
false	false	  false

a	    b	      a OR b
true	true	  true
true	false	  true
false	true	  true
false	false	  false

a	b	    a != b
3	3	    false
1	5	    true
2	"2"	  false

a	    b	    !a AND (a OR b)
true	true	false
true	false	false
false	true	true
false	false	false
*/

//CONDITIONALS
var age = 99
var hasId = true

if (hasId === true) {
    if (age >= 21 && age <= 75) {
      console.log('Come on in!');
    } else if (age >= 18 && age < 21) {
      console.log( "Come on in (but no drinking)!");
    } else if (age < 18) {
      console.log("You're too young to be in here!");
    } else if (age >= 75) {
      console.log("Are you sure you want to be here?");
    }
} else {
  console.log("No ID, no entry");
}






for (i = 1; i <= 100; i++) {
  var fizzBuzz = function(i) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzBuzz')
      } else if (i % 3 === 0) {
        console.log('fizz');
      } else if (i % 5 ===0) {
        console.log('buzz');
      } else {
      console.log(i);
      }
  }
}
fizzBuzz(15)
fizzBuzz(24)
