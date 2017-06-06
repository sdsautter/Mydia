$("#lookie").on("click", function(event){
    event.preventDefault();

    var query = $("#search").val().trim();
    var replaced = query.replace(/\s/g, '+');

    console.log(query);
});

