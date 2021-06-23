import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Menu.css';

const Menu = () => {
    return (
    <>
      <nav class="navbar">
    <div class="container">
      <ul class="nav-ul">
      <li class="nav-li"><NavLink to ='/' >Accueil</NavLink></li>
      <li class="nav-li"><NavLink to='/artistes'>Artistes</NavLink></li>
      <li class="nav-li"><NavLink to='/albums'>Albums</NavLink></li>
      {/*<li class="nav-li"><NavLink to='/tracks'>Tracks</NavLink></li>*/}
      <li class="nav-li"><NavLink to='/genres'>Genres</NavLink></li>
    </ul>
    </div>
  </nav>
    {/* <a href="/">Accueil </a>
    <a href="/artistes"> Artistes </a>
    <a href="/albums"> Albums </a>
    <a href="/tracks"> Tracks </a>
    <a href="/genres"> Genres </a> */}
    </>
    
        )
}
export default Menu;