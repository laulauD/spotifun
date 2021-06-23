import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GenresDetails extends Component{

    state={
        album:[]
    }
    componentDidMount(){
        fetch(`http://myvhost.fr/W-WEB-090-LIL-1-1-spotify-alison.denis/my_app/react-backend/genresDetails.php?id=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(album => {
                this.setState({ album })
                console.log(album);
            })
    }


    render() {
        console.log(this.props.album )
        return (
            <div className="wrapper">
                <div class="midnight">
                    <h1>Tous les albums de ce genre. </h1>
                </div>

                <div class="img-area">
                    {this.state.album.map((album) => (
                        <div>
                            <Link to={"/albums/details/" +album.album_id}>
                                <img width="230px" src={album.album_cover} />
                            </Link>
                            <p class="songs long" >{album.album_name}</p>
                        </div>
                    ))}
                </div>

            </div>
        );

    }
}


export default GenresDetails;