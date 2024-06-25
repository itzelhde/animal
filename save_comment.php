<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $comment = $_POST['comment'];
    file_put_contents('comments.txt', $comment . PHP_EOL, FILE_APPEND);
    echo 'Comentario guardado';
}
?>
