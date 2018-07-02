console.log('Timer');

var resetBtn = document.querySelector('#reset');
var startBtn = document.querySelector('#start');  //toggle
var pauseBtn = document.querySelector('#pause');
var seconds = 0;
var timerId = 0;
var time = document.querySelector('#timer').textContent;
var interval = 0
var lastUpdateTime = new Date().getTime()

// resetBtn.addEventListener('click', function);


startBtn.addEventListener('click', function(){
    //Replace "Stop Watch" in the HTML with the content of the seconds variable.
    updateTime();
    //Use setInterval() to increment the timer by 1 every second
    setInterval(function() {
        //     var timer = new timer();
        //     var t = d.toLocaleTimeString();
        //     time = t
    });
}); 

pauseBtn.addEventListener('click', function(){
    clearInterval();
});



//increments the time
var updateTime = function(seconds) {
   //replace string: function increments the seconds counter and inserts that value into the <h1> element with id="timer".
}; 

// var timer = new updateTime();
// time.start();





// setInterval(function() {
//     var timer = new timer();
//     var t = d.toLocaleTimeString();
//     time = t
// });
