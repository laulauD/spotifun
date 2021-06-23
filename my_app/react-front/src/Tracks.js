import React, { Component } from 'react';
import './Tracks.css';
import ReactAudioPlayer from "react-audio-player";

class Tracks extends Component{
  state={
    posts:[]
  }
  componentDidMount(){
    fetch('http://myvhost.fr/W-WEB-090-LIL-1-1-spotify-alison.denis/my_app/react-backend/tracks.php')
    .then(response => response.json())
    .then(posts => {
      this.setState({ posts })
     })
  }

    render() {
        return (
            <div>
                <div class="midnight">
                    <h1>Toutes les musiques du monde ici.</h1>
                </div>
                <div className="tracksList">

                    {
                        this.state.posts.map(post =>
                            <>
                                <figure>
                                    <figcaption>{post.name}</figcaption>
                                    <ReactAudioPlayer
                                        src={post.mp3}
                                        controls/>
                                </figure>
                            </>
                        )
                    }
                </div>
            </div>
    );
  }
}

export default Tracks;