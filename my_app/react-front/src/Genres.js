import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Genres extends Component{
    state={
        posts:[]
    }
    componentDidMount(){
        fetch('http://myvhost.fr/W-WEB-090-LIL-1-1-spotify-alison.denis/my_app/react-backend/genres.php')
            .then(response => response.json())
            .then(posts => {
                this.setState({ posts })
            })
    }

    render() {
        return (
            <div>
                <div class="midnight">
                    <h1>Tous les genres pour tous les gens. </h1>
                </div>
                <div className="tracksList">
                    {

                        this.state.posts.map(post =>
                            <>
                                <div class="genre">
                                    <Link to={"/genres/details/" + post.id}>
                                        {/* <p key={post.id}>{post.name}</p> */}
                                        <p class="songs genre" key={post.id}>{post.name}</p>
                                    </Link>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        );
    }
}
// const Genres = () =>{
//     return <h1>Hello i am a page of Genres</h1>
// }
export default Genres;