import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Albums.css';


class Albums extends Component{
  state={
    posts:[]
  }
  componentDidMount(){
    fetch('http://myvhost.fr/W-WEB-090-LIL-1-1-spotify-alison.denis/my_app/react-backend/albums.php')
    .then(response => response.json())
    .then(posts => {
      this.setState({ posts })
     })
  }
 
  render() {
    return (

  <div className="wrapper">
      <h1 class="midnight">Découvrez des albums : </h1>

        <div class="img-area">
    {
      this.state.posts.map(post =>
          <>
          <Link to={"/albums/details/" + post.id}>
            <div>
              <img class="single_img" width="200px" src={post.cover} />
            </div>
          </Link>
        </>
      )
    }
      </div>
  </div>
    );
  }
}
export default Albums;