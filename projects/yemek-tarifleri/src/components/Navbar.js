import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';
import SearchBar from './SearchBar';


function Navbar() {
  return (
    <div className="Navbar-Container">
      <div className="site-title">
        <i class="fa-solid fa-cookie-bite"></i>
        <Link to="/">Yemek Tarifleri</Link>
      </div>
      <SearchBar></SearchBar>
      <div className="NavLink-Container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar