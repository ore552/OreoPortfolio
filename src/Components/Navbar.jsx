import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  // State to handle the mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          {/* Logo */}
          <Link to="/" className="logo">
            <h2>OreoPages</h2>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="menu-toggle"
            aria-label="Toggle Navigation"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <ul className={`all-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" onClick={() => setMenuOpen(false)}>
                Project
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;