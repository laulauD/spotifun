<?php
  require "connect_bdd.php";
    // Se connecter à la base de données
	$request_method = $_SERVER["REQUEST_METHOD"];
	
	switch($request_method)
	{
	  case 'GET':
		if(!empty($_GET["name"]))
		{
		  // Récupérer un seul produit
		  $id = intval($_GET["name"]);
		  getData($id);
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
	function getData()
	{
	  global $conn;
	  $query = "SELECT * FROM genres ";
	  $response = array();
	  $result = mysqli_query($conn, $query);
	  while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
	  {
		$response[] = $row;
	  }
	  header('Content-Type: application/json');
	  echo json_encode($response, JSON_PRETTY_PRINT);
	}
	
?>