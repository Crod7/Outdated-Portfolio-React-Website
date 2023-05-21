import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from "react"

const Navbar = () => {

  useEffect(() => {
  }, []);

  return (
    <header>
      <div className="navContainer">
        {(
          <Link to="/" className="logo">
            <h2>Home</h2>
          </Link>
        )}
        {(
          <Link to="/about" className="logo">
            <h2>About</h2>
          </Link>
        )}
        {(
          <Link to="/resume" className="logo">
            <h2>Resume</h2>
          </Link>
        )}
        {(
          <Link to="/contact" className="logo">
            <h2>Contact Me</h2>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;