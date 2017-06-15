Document.addEventListener('DOMContentLoaded', function(event) {
    var userID = sessionStorage.getItem('id');
    return userID;
}) 
module.exports = userId;