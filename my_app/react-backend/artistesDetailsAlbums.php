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
function getData($recupID)
{
    $newID = $recupID;
    global $link;
    $query=$link->prepare("SELECT *, albums.id AS `idAlbum` albums.name AS 'nomAlbum' , albums.description AS 'descriptionAlbum' FROM `albums` INNER JOIN artists ON albums.artist_id = artists.id WHERE artist_id = ?");
    $query->bindParam(1, $newID , PDO::PARAM_INT);
    $query->execute();


    while($row = $query->fetch(PDO::FETCH_ASSOC))
    {
        $response[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);
}

?>