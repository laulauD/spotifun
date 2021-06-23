import React from 'react';
import {Route, Switch} from 'react-router-dom'; // switch entre root/url

// Importation de chacune des pages
import Home from "./Home";
import Artistes from "./Artistes";
import ArtistesDetails from "./ArtistesDetails";
import Albums from "./Albums";
import AlbumsDetails from "./AlbumsDetails";
import AlbumsDetailsTracks from "./AlbumsDetailsTracks";
import Tracks from "./Tracks";
import Genres from "./Genres";
import GenresDetails from "./GenresDetails";
import Error from "./Error";
import Menu from './Menu';
import Test from './Test';
import './App.css';

const App = () => {

  const Name =() => {
    return <h1>Hello i am a Name page</h1>
  }
    return (
    <>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/artistes/details/:id" component={ArtistesDetails} />
      <Route exact path="/artistes" component={Artistes} />

      <Route path="/albums/details/:id" component={AlbumsDetails} />
      <Route exact path="/albums" component={Albums} />

      <Route exact path="/tracks" component={Tracks} />
      {/*<Route exact path="/albums/details/tracks:id" component={AlbumsDetailsTracks} />*/}

      <Route exact path="/genres" component={Genres} />
      <Route path="/genres/details/:id" component={GenresDetails} />

      <Route path="/artistes/name" component={Name} />
      <Route path="/test" component={Test} />
      <Route component={Error} />
    </Switch>
    </>
)
};
/* Intégration du menu etc entre balises
Exact path = / pour pouvoir ajouter qqchose derrière
component = chabadabadou */




export default App;
