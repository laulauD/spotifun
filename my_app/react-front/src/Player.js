import React, { Component } from 'react';
import './player.css';
import ReactAudioPlayer from 'react-audio-player';

class Tracks extends Component{
    render(){
        return (
            <div>
                <div class="carrousel box-shadow">

                    <div id="1" class="box gray flex-center">
                        <figure>
                            <figcaption>SAD MOOD SONG</figcaption>
                            <ReactAudioPlayer
                                src="https://www.auboutdufil.com/get.php?fla=https://archive.org/download/ryyzn-memories-erased/RYYZN-MemoriesErased.mp3"
                                controls/>
                        </figure>
                    </div>


                    <div id="2" class="box pink flex-center">
                        <figure>
                            <figcaption>PARADISE'S SONG</figcaption>
                            <ReactAudioPlayer
                                src="https://www.auboutdufil.com/get.php?fla=https://archive.org/download/kai-engel-maree/KaiEngel-Maree.mp3"
                                controls/>
                        </figure>
                    </div>


                    <div id="3" class="box green flex-center">
                        <figure>
                            <figcaption>LOVE SONG</figcaption>
                            <ReactAudioPlayer
                                src="https://www.auboutdufil.com/get.php?fla=https://archive.org/download/sapajou-intencion/Sapajou-Intencion.mp3"
                                controls/>
                        </figure>
                    </div>



                    <div id="4" class="box yellow flex-center">
                        <figure>
                            <figcaption>GOOD DAY SONG</figcaption>
                            <ReactAudioPlayer
                                src="https://www.auboutdufil.com/get.php?fla=https://archive.org/download/vexento-spark/Vexento-Spark.mp3"
                                controls />
                        </figure>
                    </div>



                    <div id="5" class="box violet flex-center">
                        <figure>
                            <figcaption>HAPPY MOOD SONG</figcaption>
                            <ReactAudioPlayer
                                src="https://www.auboutdufil.com/get.php?fla=https://archive.org/download/reatch-funk-city/Reatch-FunkCity.mp3"
                                controls/>
                        </figure>
                    </div>
                </div>

                <div class="link-box flex-center">
                    <a href="#1" class="flex-center box-shadow"></a>
                    <a href="#2" class="flex-center box-shadow"></a>
                    <a href="#3" class="flex-center box-shadow"></a>
                    <a href="#4" class="flex-center box-shadow"></a>
                    <a href="#5" class="flex-center box-shadow"></a>
                </div>

            </div>

        );
    }
}

export default Tracks;