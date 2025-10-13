import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">

        <div className="navbar-brand">
          <Link to="/">@an3dree</Link>
        </div>

        <div className="navbar-links">
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            /projects
          </Link>

          <Link
            to="/skills"
            className={location.pathname === '/skills' ? 'active' : ''}
          >
            /skills
          </Link>

          <Link
            to="/career"
            className={location.pathname === '/career' ? 'active' : ''}
          >
            /career
          </Link>

        </div>


        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-mobile ${isMenuOpen ? 'open' : ''}`}>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            /projects
          </Link>

          <Link
            to="/skills"
            className={location.pathname === '/skills' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            /skills
          </Link>

          <Link
            to="/career"
            className={location.pathname === '/career' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            /career
          </Link>
        </div>
      </div>
    </nav>
  );
}
