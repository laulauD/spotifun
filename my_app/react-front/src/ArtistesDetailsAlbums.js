import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Artistes.css';

class ArtistesDetailsAlbums extends Component{

    state={
        albums:[]
    }

    render() {
        console.log(this.props )
        return (
            <div>
                <div>
                    <h1>Ses albums</h1>
                </div>
                {
                    this.props.albums && this.props.albums.map(album =>
                        <>

                            <div>
                                <h3>{album.nomAlbum} </h3>
                                <Link to={"/albums/details/" + album.idAlbum}>
                                    {/* <p key={post.id}>{post.name}</p> */}
                                    <img className="imgScaleBig" width="200px" src={album.cover} />
                                </Link>
                            </div>
                        </>
                    )
                }
            </div>
        );
    }
}
export default ArtistesDetailsAlbums;