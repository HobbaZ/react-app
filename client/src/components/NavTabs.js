import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      
      <li className="navItem">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'noEffect' : 'noEffect'}
        >
          Zachary Hobba
        </a>
      </li>

      <li className="navItem">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'navLink active' : 'navLink'}
        >
          About
        </a>
      </li>

      <li className="navItem">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'navLink active' : 'navLink'}
        >
          Projects
        </a>
      </li>

      <li className="navItem">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'navLink active' : 'navLink'}
        >
          Contact
        </a>
      </li>

      <li className="navItem">
        {/*When clicked will download resume*/}
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          //className={currentPage === 'Contact' ? 'navLink active' : 'assets/files/Zac-Hobba-TECHNICAL-RESUME.pdf'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
