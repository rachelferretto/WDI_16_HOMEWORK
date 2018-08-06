console.log('big pixel art');
var colorSelected = ""

var changeColor = function(event) {
    event.preventDefault()
    colorSelected = document.querySelector(".color-select").value
    $(".brush").css("background-color", colorSelected)
}

var draw = function() {
    $(".square").css("background-color", colorSelected)
}

$(".setbrush").on('click', changeColor)

for (i = 1; i <= 10000; i ++) {
    $("<div/>").attr('class','square').appendTo('.canvas'); 
}

$(".square").on("mouseover", () => {
    $(event.target).css('background-color', colorSelected);
})



