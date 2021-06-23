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
function getData($artistID)
{
    $artistID = intval($artistID);
    global $link;
    $query=$link->prepare("SELECT * FROM artists WHERE `id` = ?");
    $query->bindParam(1, $artistID , PDO::PARAM_INT);
    $query->execute();

    $artiste = $query->fetch(PDO::FETCH_ASSOC);

    $queryalbums=$link->prepare("SELECT *,albums.id as 'idAlbum',albums.name as 'nomAlbum' ,albums.description as 'descriptionAlbum' FROM `albums` INNER JOIN artists ON albums.artist_id = artists.id WHERE artist_id = ?");
    $queryalbums->bindParam(1, $artistID , PDO::PARAM_INT);
    $queryalbums->execute();

    while($row = $queryalbums->fetch(PDO::FETCH_ASSOC))
    {
        $albums[] = $row;
    }
    $artiste['albums']=$albums;
    header('Content-Type: application/json');
    echo json_encode($artiste, JSON_PRETTY_PRINT);



}


?>