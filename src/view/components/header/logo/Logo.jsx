import React from "react";
import "./logo.scss";
import { Link } from "react-scroll";
import { linkDuration } from "../../../styles/setting/smoothLink"

function Logo() {
  return (
    <div id="home" className="logo">
      <Link
        className="logo__link"
        to="home"
        smooth={true}
        spy={true}
        duration={linkDuration}
        offset={-2000}
      >Liga School</Link>
    </div>
  );
}

export default Logo;

