import React from "react";
import './navList.scss';
import { Link } from "react-scroll";
import { linkDuration, linkOffset } from '../../setting/smoothLink'

export function NavList() {

  return (
    <div className='navbar'>
      <Link
        className="navbar__link"
        activeClass="navbar__link--active"
        to='feedbacks'
        smooth={true}
        spy={true}
        duration={linkDuration}
        offset={linkOffset}
      >отзывы</Link>

      <Link
        className="navbar__link"
        activeClass="navbar__link--active"
        to='priceBlock'
        smooth={true}
        spy={true}
        duration={linkDuration}
        offset={linkOffset}
      >цены</Link>

      <Link
        className="navbar__link"
        activeClass="navbar__link--active"
        to='availableTimeBlock'
        smooth={true}
        spy={true}
        duration={linkDuration}
        offset={linkOffset}
      >свободное время</Link>

      <Link
        className="navbar__link"
        activeClass="navbar__link--active"
        to='lendingForm'
        smooth={true}
        spy={true}
        duration={linkDuration}
        offset={linkOffset}
      >пробный урок</Link>
    </div >
  );
}
