//https://gist.github.com/epoch/fd1060cc1ca3502fab1c#file-week1-js-functions2-js
//// 1. Build your own concatenation
// Write a function named combineWords that:
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse

var combineWords = function (word1, word2) {
  return word1 + word2;
}
var newWord = combineWords('slack', 'ers');
console.log(newWord);

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var calculateAge = function(birthYear, currYear) {
  var age = currYear - birthYear;
  var ageBeforeBirthday = age - 1;
  console.log('you are either ' + ageBeforeBirthday + ' or ' + age);
};
calculateAge(1989, 2018);
calculateAge(1977, 2014);

//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
var languages = ['ruby', 'js', 'css'];

var lengths = function(arrayOfStrings) { //new function
  var newArr = []; // new array/ container

  for (var i = 0; i < arrayOfStrings.length; i++) { //loops through array but no more times than the length of the array
  newArr.push( arrayOfStrings[i].length); //pushes to new array/ container
  };
  return newArr // returns the results in an array / new container
};

lengths(languages); //runs the function with the results

// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

 var transmogrifier = function(num1, num2, num3) {
   var product = num1 * num2;
   var result = Math.pow(product, num3);
   return result;
 };
transmogrifier(3,3,3);

// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'


var wordReverse = function(string) { //create a function to reverse the string
  return string.split('').reverse().join(''); //split the string(no spaces), reverse and rejoin words (no spaces between letters)
};
console.log(wordReverse('join the navy')); //A simpsons reference 
