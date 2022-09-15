import React from "react";
import NavListCss from './NavList.module.css';

function NavList() {
  return (
    <div className={NavListCss.navbar}>
      <p>цены</p>
      <p>пробный урок</p>
      <p>абонементы</p>
      <p>адрес</p>
      <p>свободное время</p>
    </div >
  );
}

export default NavList;
