//excercise: https://gist.github.com/epoch/5c2c42797947ffb413d0#file-js-1-vars-md
//The Fortune Teller
var numberOfChildren = 2;
var partnersName = 'John';
var city = 'NY';
var jobTitle = 'Managing Director';

var message = ('You will be a ' + jobTitle + 'in ' + city +
' , and married to' + partnersName + ' with ' + numberOfChildren + ' kids.');
console.log(message);

//The Age Calculator
var currentYear = 2018;
var birthYear = 1989;
var possibleAge = currentYear - birthYear;
var ageBeforeBirthday = possibleAge - 1;
console.log('you are either ' + ageBeforeBirthday + ' or ' + possibleAge);


//The Lifetime Supply Calculator
var currentAge = 28;
var maxAge = 101;
var estAmountPerDay = 3;
var perYear = estAmountPerDay * 365;
var restOfLife = (maxAge - currentAge);
console.log('You will need ' + restOfLife * perYear + ' snacks to last you until the ripe old age of ' + maxAge);

//excercises (loops): https://gist.github.com/epoch/0df5e2eeaadb8871b9a73887162c2ab4#file-js_week1_loops-md
// The odd/even reporter
 for (var number = 0; number < 20; number ++) {

   if (number % 2 === 0) {
   console.log(number + ' is even');
   } else {
     console.log(number + ' is odd');
   };
 };

 //Multiplication Tables
 for (var i = 0; i <= 10; i++) {

   for (var j = 0; j <= 10; j++) {
     console.log(i + ' x '+ j + ' = ' + (i * j));
   };

 };

 // Top Choices
var favoriteColors = ['pink','yellow','blue','purple'];
for (var i = 1; i < 4 ; i++) {
  console.log('my #' + i + ' choice is ' + favoriteColors[i-1]);
};


//bonus
var favoriteColors = ['pink','yellow', 'blue','purple'];
var suffix = ['st','nd','rd','th']
for (var i = 0; i < favoriteColors.length; i++) {
  if (i ===1) {
    console.log('my '+ i + suffix[0] + ' choice is ' + favoriteColors[i-1]);
} else if (i ===2) {
    console.log('my ' + i + 'nd choice is ' + favoriteColors[i-1]);
} else if (i ===3) {
    console.log('my ' + i + 'rd choice is ' + favoriteColors[i-1]);
} else if (i ===4) {
  console.log('my ' + i + 'th choice is ' + favoriteColors[i-1]);
};
};
