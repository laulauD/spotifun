import React, { Component } from 'react';
import AlbumsDetailsTracks from './AlbumsDetailsTracks';

class AlbumsDetails extends Component{

    state={
        album:{}
    }
    componentDidMount(){
        fetch(`http://myvhost.fr/W-WEB-090-LIL-1-1-spotify-alison.denis/my_app/react-backend/albumsDetails.php?id=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(album => this.setState({ album }))
    }

    render() {
        console.log(this.state.album )
        return (
            <div className="App">
                <h1>{this.state.album.name} </h1>
                <img width="200px" src={this.state.album.cover_small} />
                <p className="spaceBetween text-justify"><b>Description : </b>{this.state.album.description} </p>
                <p>{this.state.album.release_date} </p>
                <p>Nombres d'écoutes {this.state.album.popularity}K</p>

                <AlbumsDetailsTracks tracks ={this.state.album.tracks} />

            </div>
        );
    }
}
export default AlbumsDetails;