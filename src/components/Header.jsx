import React from 'react';
import '../components/Header.css';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className='HeaderContainer'>
      <div className="navbar">
        <div className="logo">
          <h1 className="logo1">ZAPH TOURS</h1>
        </div>
        <div className="navLinks">
          <ol className="navlist">
            <li className='navitems'><Link to="/">Home</Link></li>
            <li className='navitems'><Link to="/Destination">Destination</Link></li>
            <li className='navitems'><Link to="/Trips">Trips</Link></li>
            <li className='navitems'><Link to="/Contact">Contact us</Link></li>
          </ol>
        </div>
        <div className="search">
          <form action="">
            <CiSearch className="searchIcon" />
            <input type="text" placeholder='Search Trip here' />
            <button type='button'>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
