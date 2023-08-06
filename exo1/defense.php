<?php

$host = "db.3wa.io";
$port = "3306";
$dbname = "tonygohin_secu";
$connexionString = "mysql:host=$host;port=$port;dbname=$dbname";

$user = "tonygohin";
$password = "f80620de30f1b8d1caba3a7e4b950a9a";

$db = new PDO(
    $connexionString,
    $user,
    $password
);


$queryString = "SELECT * FROM users WHERE email=".$_POST["username"];

$query = $db->prepare($queryString);
$query->execute();

/* 'yep';UPDATE users SET users.password='123' WHERE id=4 */