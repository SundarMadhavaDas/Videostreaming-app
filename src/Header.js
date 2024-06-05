import React from 'react';
import Home from './Home';
import { Link , Route} from 'react-router-dom';

function Header() {
  return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01" style={{ fontSize: 16 }}>
          <Link to="/" className="navbar-brand nav-link">VTE</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
            <li className="nav-item">
               <Link to="/movies" className="nav-link">Movies</Link>
            </li>
            <li className="nav-item">
              <Link to="/originals" className="nav-link">Originals</Link>
            </li>
            <li className="nav-item">
              <Link to="/webSeries" className="nav-link">Web Series</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
  );
}

export default Header;
