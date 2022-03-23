import React from "react";
import { Link } from "react-router-dom";

const Headerbar = () => {
  return (
    <div>  

      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
        <div className="container">
        <div className="navbar-header">
          <button 
            className="navbar-toggler float-xs-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand mb-0 h1">Name list</span>
        </div>
        
        <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/name" className="nav-link">
              Show Name List
            </Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Headerbar;
