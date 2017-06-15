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

$('.login').click(function() {
    event.preventDefault();
    var user = {
        name: $('#loginUser').val().trim(),
        password: $('#loginPassword').val().trim()
    };
    authenticatePassword(user);
})

function createUser(userData) {
    $.post('/api/user', userData, function() {
        window.location.href = '/'
    })
}
//used to hide scrollable div areas of user content.
$(".respond").hide();

$('img').on("error", function() {
    $(this).parent().hide();
});
function authenticatePassword(userData) {
    $.get('/api/user', userData.name, function(userTime) {
        var passwordAttempted = userData.password
        var passwordToCheck = userTime.password;
        if (userTime === null) {
            alert('No User Found!')
        } else if (passwordAttempted != passwordToCheck) {
            alert('Incorrect Password!')
        } else {
            sessionStorage.setItem('user', userTime.user_name)
            window.location.href = '/home'
        }
    })
}
