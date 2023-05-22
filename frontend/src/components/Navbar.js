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
            //Home
          </Link>
        )}
        {(
          <Link to="/about" className="logo">
            //About
          </Link>
        )}
        {(
          <Link to="/resume" className="logo">
            //Resume
          </Link>
        )}
        {(
          <Link to="/contact" className="logo">
            //Contact
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;