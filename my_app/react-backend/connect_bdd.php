<?php
  $server = "localhost";
  $username = "al-admin";
  $password = "admin";
  $db = "my_spotify_db";
  $conn = mysqli_connect($server, $username, $password, $db);

$link = new PDO('mysql:host=localhost;dbname='.$db, $username, $password,
array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
?>