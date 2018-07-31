console.log('search movie using ajax');



var searchMovies = document.querySelector('.search');




function onSuccess(res) {
    
    res = res.Search
    var movie = document.querySelector('.search-result')
    for (i = 0; i <= res.length; i++) {
        var result = movie.appendChild(document.createElement("p"))
        result.textContent = res[i].Title
    }
    

};





searchMovies.addEventListener('click', function() {

    var query = document.getElementById("search-text").value

    $.ajax({
        method: 'get',
        url: "http://omdbapi.com/?s=" + query + "&apikey=2f6435d9", 
        dataType: 'json'
    }).done(onSuccess)
   
})




        
 