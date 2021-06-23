<?php
require "connect_bdd.php";
// Se connecter à la base de données

$request_method = $_SERVER["REQUEST_METHOD"];
/*var_dump($_SERVER);*/
$tracks = explode("=",$_SERVER['QUERY_STRING']);

switch($request_method)
{
    case 'GET':

        if(count($tracks) > 1)
        {
            getData($tracks[1]);
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
function getData($recupTracks)
{

    $newTracks = intval($recupTracks);
    global $link;
    $query=$link->prepare("SELECT * FROM `tracks` INNER JOIN albums ON tracks.album_id = albums.id WHERE tracks.album_id = ? ");
    $query->bindParam(1, $newTracks , PDO::PARAM_INT);
    $query->execute();

    while($row = $query->fetch(PDO::FETCH_ASSOC))
    {
        $response[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);
}

?>