import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/img/icons/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link href="/">Bio</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/photos">Photos</Link>
          </li>
          <li>
            <Link href="/comic">Comic</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
