import React from 'react';
import './header.scss';
import Logo from './logo/Logo';
import NavList from './navList/NavList';
import NavInfo from './navInfo/NavInfo';

export const Header = () => {
  return (
    <header className="sticky">
      <Logo />
      <NavList />
      <NavInfo />
    </header>
  );
}