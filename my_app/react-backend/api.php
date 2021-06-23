<?php
//api.php?requete=the
header('Content-Type:application/json');
require "connect_bdd.php";


// Récuperr la requête transmise en GET
$requete = "";
if(isset($_GET["requete"])){
    $requete = $_GET["requete"];
}
if ($requete == ""){
    echo "[]";

}else {
    $sql = "SELECT id,name,photo from artists WHERE name LIKE :requete ";
    //On prépare la requête avant l'envoi :
    $req = $link -> prepare($sql);
    // On exécute la requête en insérant la valeur transmise en GET
    $req -> execute(array(":requete" => '%'.$requete.'%'));
    //Permet de récuperer les résultat de la requete dans un tableau assosicatif en php
    $data=$req ->  fetchAll();
    echo json_encode($data);

}
?>