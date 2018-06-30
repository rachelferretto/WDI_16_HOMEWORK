//https://gist.github.com/epoch/7f6be44ac361d939816a0131fa81637b

console.log('Set Timeout and Set Interval homework');

//setTimeout() - method that calls a function or evaluates an expression after a specified number of milliseconds
//cleartieout to prevent
//syntax: setTimeout(function, milliseconds, param1, param2, ...)

var timeout = function() {
  setTimeout(greeting, 3000);
};

var greeting = function(){
  alert("Hello there")
};

//timeout();


//setInterval() - calls a function or evaluates an expression at specified intervals (in milliseconds
//syntax: setInterval(function, milliseconds, param1, param2, ...)

var repeatInterval = function() {
  setInterval(greeting, 1000);
};

repeatInterval();
