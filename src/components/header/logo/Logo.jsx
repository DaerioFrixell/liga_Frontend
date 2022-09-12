import React from "react";
import LogoCss from './logo.module.css';

function Logo() {
  return (
    <div className={LogoCss.navbar}>
      <a className={LogoCss.logo} href="">Liga School</a>
    </div>
  );
}

export default Logo;

