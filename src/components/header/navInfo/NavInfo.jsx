import React from "react";
import NavInfoCss from './NavInfo.module.css';

function NavInfo() {
  return (
    <div className={NavInfoCss.navbar}>

      <a id="linkOnSMTH" href="https://www.youtube.com/channel/UC9m90Sc3jcV6dTOc1Ng56sw" >
        <div className={NavInfoCss.icon}></div>
      </a>

      <a id="linkOnSMTH" href="https://www.youtube.com/channel/UC9m90Sc3jcV6dTOc1Ng56sw" >
        <div className={NavInfoCss.icon}></div>
      </a>

      <div>+7-986-951-04-69</div>

    </div>
  );
}

export default NavInfo;