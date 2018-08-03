$(document).ready(function() {
    console.log('search for a giphy');
    var offset = 0;

    const onSuccess = (res) => {
        var gif = document.querySelector('.search-result')
        for (i = 0; i <= 10; i++) {
        var giphyUrl = res.data[i].images.fixed_height.url
        result = gif.appendChild(document.createElement("img"))
        result.src = giphyUrl
        }
    }

    function getResults() {
        var query = document.getElementById("search-text").value
        $.ajax({
            method: 'get',
            url: "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=k9mr6XS5bWv8chZJT1EhPGoLeYCLRuvX&offset=" + offset, 
            dataType: 'json'
        }).done(onSuccess) 
    }


    $(".search").on('click', function() {
        event.preventDefault()
        getResults()
    })


    $(window).scroll(function() {
        if($(window).scrollTop() == $(document).height() - $(window).height()) {
            offset = offset + 11
            getResults()
        }
    })
})

    



