import React from 'react'

const Navbar = ({ scrollToSection }) => {


  return (
    <header>
      <div className="navContainer">
        {(
          // eslint-disable-next-line
          <button onClick={() => scrollToSection('home')}>//Home</button>
        )}
        {(
          // eslint-disable-next-line
          <button onClick={() => scrollToSection('projects')}>//Projects</button>
        )}
        {(
          // eslint-disable-next-line
          <button onClick={() => scrollToSection('skills')}>//Skills</button>
        )}
        {(
          // eslint-disable-next-line
          <button onClick={() => scrollToSection('about')}>//About</button>
        )}
        {(
          // eslint-disable-next-line
          <button onClick={() => scrollToSection('contact')}>//Contact</button>
        )}
      </div>
    </header>
  );
}

export default Navbar;