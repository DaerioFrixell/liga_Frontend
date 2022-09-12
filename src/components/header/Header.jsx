import React from 'react';
import '../header/header.css';
import Logo from './logo/Logo';
import NavList from './navList/NavList';
import NavInfo from './navInfo/NavInfo';

function Header() {
  return (
    <header className="sticky">
      <Logo />
      <NavList />
      <NavInfo />
    </header>
  );
}

export default Header;