import React from "react";
import LogoCss from './logo.module.css';
import { Link } from "react-scroll";
import { linkDuration } from '../../setting/smoothLink'

function Logo() {

  return (
    <div id='/' className={LogoCss.navbar}>
      <Link
        className={LogoCss.logo}
        to='/'
        spy={true}
        smooth={true}
        offset={-1000}
        duration={linkDuration}
      >Liga School</Link>
    </div>
  );
}

export default Logo;

