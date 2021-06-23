import React from 'react';
import Player from './Player';
import $ from 'jquery';
import Albums from './Albums';

const Home = () =>{
    $(document).ready(function(){
        $("#default_option").click(function(){
            $('#type option').toggleClass('active');
            $()
        })
    })
    $(document).ready(function(){
        $("#requeteChansons").on("keyup", function() {
            //On récupère le texte rechérché
            var requete =  $("#requeteChansons").val();

            //Envoi de l arequête à l'api
            console.log("../my_app/react-backend/api.php?requete="+requete);

            $.get("http://myvhost.fr/W-WEB-090-LIL-1-1-spotify-alison.denis/my_app/react-backend/api.php?requete="+requete).done(function(data){

                //recup des résultat de la requête
                $("#results").html("");

                //boucle qui parcours tous le tableau data
                var i=0;
                while(i<data.length){
                    //selectionner puis append(ajouter)du code à l'interieur
                    $("#results").append(

                        "<a href='/artistes/details/"+data[i].id+"'>"
                        +"<div class='d-flex align-items-center p-2 hover:shadow-lg cursor-pointer transition grismoinsfonce shadow p-1 mb-1 bg-body rounded'>"
                        +"<div class='d-flex align-items-center ml-2'>"
                        +"<img width='60' height='60' class='rounded' src='"+data[i].photo+"'/>"
                        +"<div class='ml-2'>"
                        +"<p style='font-weight: bolder;color:lightgrey'>"+data[i].name +"</p>"
                        +"</div>"
                        +"</div>"
                        +"</a>"
                    )
                    i++;
                }
                console.log(data[0]);
                //affiche aab dans la console
            }) //en chargeant au préalable la bibliothèque jQuery...

        })
    })
    return(
        <div class="main" id="content">
            <div class="midnight">
                <div class="container">

                    <h1>Bienvenue sur SpotiFun !</h1>

                    <form action="search.php" method="GET" class="navbar-form navbar-right">

                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for..." name="search" id="requeteChansons" />
                            <span class="input-group-btn">
                            &nbsp;<i class="fas fa-search"></i>
                            </span>
                        </div>

                    </form>

                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">

                        <div id="root">
                            <div id="results"></div>

                            <Player/>
                        <Albums />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;