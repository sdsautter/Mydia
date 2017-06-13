$("#lookie").on("click", function(event) {
    event.preventDefault();

    var mediaSearch = $("#search").val().trim();
    mediaSearch = mediaSearch.replace(/\s/g, '+');

    window.location.href = '/search/movie/' + mediaSearch;
});

$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$('.createuser').click(function() {
    event.preventDefault();
    var newUser = {
        newusername: $('#newUserName').val().trim(),
        newpassword: $('#newPassword').val().trim(),
        newemail: $('#newEmail').val().trim()
    };
    createUser(newUser);
})

function createUser(userData) {
    $.post('/api/user', userData, function() {
        window.location.href = '/'
    })
}