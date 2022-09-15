import React from "react";
import NavListCss from './NavList.module.css';
import { Link } from "react-scroll";

import { linkDuration } from '../../setting/smoothLink'

function NavList() {

  return (
    <div className={NavListCss.navbar}>
      <Link
        to='feedbacks'
        smooth={true}
        duration={linkDuration}
        spy={true}
        offset={0}
      >отзывы</Link>

      <Link
        to='price'
        smooth={true}
        duration={linkDuration}
        spy={true}
        offset={0}
      >цены</Link>

      <Link
        to='availableTime'
        smooth={true}
        duration={linkDuration}
        spy={true}
        offset={0}
      >свободное время</Link>

      <Link
        to='les'
        smooth={true}
        duration={linkDuration}
        spy={true}
        offset={0}
      >пробный урок</Link>
    </div >
  );
}

export default NavList;
