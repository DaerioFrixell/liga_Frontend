import React from "react";
import NavListCss from './NavList.module.css';
import { Link } from "react-scroll";

import { linkDuration } from '../../setting/smoothLink'

function NavList() {

  return (
    <div className={NavListCss.navbar}>
      <Link
        to='eeee'
        // spy={true}
        smooth={true}
        // offset={0}
        duration={linkDuration}
      >пробный урок</Link>
      <p>абонементы</p>
      <p>адрес</p>
      <p>свободное время</p>
    </div >
  );
}

export default NavList;
