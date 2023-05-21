import React from 'react'
import { Link } from 'react-router-dom'
import { useNavbarContext } from "../hooks/useNavbarContext"
import { useEffect } from "react"

const Navbar = () => {
  const { dispatchNavbar, currentPage } = useNavbarContext();

  useEffect(() => {
  }, []);

  return (
    <header>
      <div className="container">
        {(
          <Link to="/" className="logo">
            <h2>Home</h2>
          </Link>
        )}
        {(
          <Link to="/" className="logo">
            <h2>Projects</h2>
          </Link>
        )}
        {(
          <Link to="/" className="logo">
            <h2>Resume</h2>
          </Link>
        )}
        {(
          <Link to="/" className="logo">
            <h2>Contact Me</h2>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;