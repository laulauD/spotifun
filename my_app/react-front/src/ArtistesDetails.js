import React, { Component } from 'react';
import './Artistes.css';
import ArtistesDetailsAlbums from './ArtistesDetailsAlbums';
import {Link} from "react-router-dom";

class ArtistesDetails extends Component{

    state={
        artist:{}
    }
    componentDidMount(){
        fetch(`http://myvhost.fr/W-WEB-090-LIL-1-1-spotify-alison.denis/my_app/react-backend/artistesDetails.php?id=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(artist =>
                this.setState({ artist }))
    }

    render() {
        console.log(this.state.artist )
        return (
            <div>
                <div className="title">
                    <h1>{this.state.artist.name} </h1>
                </div>

                <div>
                    <img className="imgScaleBig" width="350px" src={this.state.artist.photo} />
                    <b><p className="spaceBetween ">{this.state.artist.description} </p></b>
                    <p className="spaceBetween text-justify"> <b>Biographie : </b>{this.state.artist.bio} </p>
                </div>

                        <ArtistesDetailsAlbums albums ={this.state.artist.albums} />

            </div>
        );
    }
}
export default ArtistesDetails;