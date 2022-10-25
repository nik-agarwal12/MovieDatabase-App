import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="header__icon"
              alt="Logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fs-5 mx-3">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/movies/popular"
                >
                  Popular
                </Link>
              </li>
              <li className="nav-item fs-5 mx-3">
                <Link className="nav-link" to="/movies/top_rated">
                  Top Rated
                </Link>
              </li>
              <li className="nav-item fs-5 mx-3">
                <Link className="nav-link" to="/movies/upcoming">
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
