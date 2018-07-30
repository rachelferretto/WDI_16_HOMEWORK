console.log('city_pix');


// Update the drop down box to show the five cities NYC, SF, LA, SYD, ATX. Note: You might need to research how to add DOM objects to a web page to be able to add option tags to the select tag.

var cities = ["NYC", "SF", "LA", "SYD", "ATX"];

var dropdown = document.getElementById("city-type")

var i;
for (i = 0; i < cities.length; i++) {
    var option = document.createElement('option')
    option.textContent = cities[i]
    dropdown.add(option);  
}


// When you select a city in the drop-down box, the background image should change to show that city. The images for the five cities are in the images folder. We have already provided the css code for changing the background image in the style.css file (at the bottom). Feel free to use those classes.
var select = document.getElementById("city-type")
var background = document.querySelector('body')
var backgroundChange = function() {
    if (select.value === "NYC") {
        background.className = "nyc"
    }
    else if (select.value === "SF"){
        background.className = "sf"
    } 
    else if (select.value === "LA") {
        background.className = "la"
    }
    else if (select.value === "ATX") {
        background.className = "austin"
    }
    else if (select.value === "SYD") {
        background.className = "sydney"
    }
}

var selection = document.getElementById("city-type").addEventListener("change", backgroundChange )
