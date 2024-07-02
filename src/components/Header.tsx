import React from 'react';
import logo from '../img/icons/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#about">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#about">Bio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#recentProjects">Portfolio</a></li>
          <li><a href="#photos">Photos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
