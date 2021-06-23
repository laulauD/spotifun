import React, { Component } from 'react';
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
      <div className="App">
      <h1 class="midnight">Découvrez des albums : </h1>
    
  {
 
    this.state.posts.map(post => 
      <>
    <p key={post.id}>{post.name}</p>
    <img width="200px" src={post.cover} />
    </>
    )
  }
      </div>
    );
  }
}

// const Albums = () =>{
//     return <h1>Hello i am a page of Albums</h1>
// }
export default Albums;