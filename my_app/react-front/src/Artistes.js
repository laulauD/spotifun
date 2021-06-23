import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //importation pour use linkTo (<a href>)
import './Artistes.css';


class Artistes extends Component{
  state={
    posts:[] //Récupère le state via tableau
  }

  componentDidMount() {
    fetch('http://myvhost.fr/W-WEB-090-LIL-1-1-spotify-alison.denis/my_app/react-backend/artistes.php')
    .then(response => response.json())
    .then(posts => {
      this.setState({ posts })
      // Met à jour l'état local du composant
      // Rend les posts du tableau
     })
  }

  render() {
    return (
        <div>
          <div class="midnight">
            <h1>Découvrez des artistes hors du commun.</h1>
          </div>

          <div className="artist">
            <div class="eachArtists">
              {
                this.state.posts.map(post =>
                    <>
                      <Link style={{textDecoration: 'none'}}to={"/artistes/details/" + post.id}>
                        <img src={post.photo} />
                        <b><p key={post.id}>{post.name}</p></b>
                        {/* <p key={post.id}>{post.bio}</p> */}
                      </Link>
                    </>
                )
              }
            </div>
          </div>
        </div>
    );
  }
}
export default Artistes;