document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var comment = document.getElementById('comment').value;

    fetch('save_comment.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'comment=' + encodeURIComponent(comment)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('comment').value = '';
        console.log('Comentario guardado:', data);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
});
