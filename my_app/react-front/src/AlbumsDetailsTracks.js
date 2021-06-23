import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AlbumsDetailsTracks extends Component{

    state={
        tracks:[]
    }
    render() {
        console.log(this.props )
        return (
            <div>
                <div>
                    <h1>Titres sur l'albums</h1>
                </div>
                {
                    this.props.tracks && this.props.tracks.map(track =>
                        <>
                            <div>
                                <h3>{track.track_no} .{track.nameTracks} </h3>
                                <figure>
                                    <ReactAudioPlayer
                                        src={track.mp3}
                                        controls/>
                                </figure>
                            </div>
                        </>
                    )
                }
            </div>
        );
    }
}
export default AlbumsDetailsTracks;