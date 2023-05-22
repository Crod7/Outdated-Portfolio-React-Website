import React from 'react'

const Navbar = ({ scrollToSection }) => {


  return (
    <header>
      <div className="navContainer">
        {(
          <button onClick={() => scrollToSection('home')}>Home</button>
        )}
        {(
          <button onClick={() => scrollToSection('projects')}>Projects</button>
        )}
        {(
          <button onClick={() => scrollToSection('skills')}>Skills</button>
        )}
        {(
          <button onClick={() => scrollToSection('about')}>About</button>
        )}
        {(
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        )}
      </div>
    </header>
  );
}

export default Navbar;