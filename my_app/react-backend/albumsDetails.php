<?php
require "connect_bdd.php";
// Se connecter à la base de données

$request_method = $_SERVER["REQUEST_METHOD"];
// var_dump($_SERVER);
$id = explode("=",$_SERVER['QUERY_STRING']);

switch($request_method)
{
    case 'GET':

        if(count($id) > 1)
        {
            getData($id[1]);
        }
        else
        {
            // Récupérer tous les produits
            getData();
        }
        break;
    default:
        // Requête invalide
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}
function getData($albumID)
{
    $albumID = intval($albumID);
    global $link;

    $query=$link->prepare("SELECT * FROM albums WHERE `id` = ?");
    $query->bindParam(1, $albumID , PDO::PARAM_INT);
    $query->execute();

    $album= $query->fetch(PDO::FETCH_ASSOC);


    $querytracks=$link->prepare("SELECT *,tracks.name as 'nameTracks',tracks.id as 'idTracks' FROM `tracks` INNER JOIN albums ON tracks.album_id = albums.id WHERE tracks.album_id =  ?  ");
    $querytracks->bindParam(1, $albumID , PDO::PARAM_INT);
    $querytracks->execute();


    while($row = $querytracks->fetch(PDO::FETCH_ASSOC))
    {
        $tracks[] = $row;
    }
    $album['tracks']=$tracks;
    header('Content-Type: application/json');
    echo json_encode($album, JSON_PRETTY_PRINT);
}

?>