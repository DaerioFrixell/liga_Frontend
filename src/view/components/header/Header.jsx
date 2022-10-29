import React from 'react';
import './header.scss';
import Logo from './logo/Logo';
import { Navbar } from './navList/Navbar';
import { NavIcon } from './navIcon/NavIcon';

export const Header = () => {
  return (
    <header className="sticky">
      <Logo />
      <Navbar />
      <NavIcon />
    </header>
  );
}