$("#lookie").on("click", function(event) {
    event.preventDefault();

    var mediaSearch = $("#search").val().trim();
    mediaSearch = mediaSearch.replace(/\s/g, '+');

    window.location.href = '/search/movie/' + mediaSearch;
});

$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});
