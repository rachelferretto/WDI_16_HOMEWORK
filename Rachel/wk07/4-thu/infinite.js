$(document).ready(function() {
    console.log('search for a giphy');
    var offset = 1;

    var modal = document.getElementById('myModal');
    var hideResetBtn = document.querySelector("#reset")

    function getModal(event) {
        $("#caption").remove()
        $(".modal-image").remove()
        modal.style.display = "block";
        var modalCaption = modal.appendChild(document.createElement("p"))
        modalCaption.textContent = event.target.src
        modalCaption.id = "caption"

        var modalImg = modal.appendChild(document.createElement("img"))
        modalImg.src = event.target.src
        modalImg.classList.add("modal-image") 

        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() { 
        modal.style.display = "none";
        }
    }

    const onSuccess = (res) => {
        var gif = document.querySelector('.search-result')
        for (i = 0; i <= 10; i++) {
            var displayGif = gif.appendChild(document.createElement("img"))
            displayGif.src = res.data[i].images.fixed_height.url
            displayGif.classList.add("giphy")  
        }

        $(".giphy").on('click', function(event) {
            getModal(event)
        })
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
        searchResultInstructions = document.querySelector("p")
        searchResultInstructions.classList.remove('hidden')
        hideResetBtn.classList.remove('hidden')
    })

    $(window).scroll(function() {
        if($(window).scrollTop() == $(document).height() - $(window).height()) {
            offset = offset + 10
            getResults()
        }
    })

    $("#reset").click(function(){
        document.location.reload(true);
        hideResetBtn.classList.add('hidden')
    });
})
    



