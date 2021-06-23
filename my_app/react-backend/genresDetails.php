<?php
require "connect_bdd.php";
// Se connecter à la base de données

$request_method = $_SERVER["REQUEST_METHOD"];
/*var_dump($_SERVER);*/
$album = explode("=",$_SERVER['QUERY_STRING']);

switch($request_method)
{
    case 'GET':

        if(count($album) > 1)
        {
            getData($album[1]);
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
function getData($recupAlbum)
{

    $newAlbum = intval($recupAlbum);
    global $link;
    $query=$link->prepare(
        "SELECT
    albums.id AS album_id, 
    albums.name AS album_name,
    albums.description AS album_description,
    albums.cover AS album_cover,
    albums.cover_small AS album_coverSmall,
    albums.release_date AS album_releaseDate,
    albums.popularity AS album_popularity
    FROM albums 
    INNER JOIN genres_albums 
    ON albums.id = genres_albums.album_id 
    WHERE genre_id = ?");
    $query->bindParam(1, $newAlbum , PDO::PARAM_INT);
    $query->execute();


    while($row = $query->fetch(PDO::FETCH_ASSOC))
    {
        $response[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);
}

?>