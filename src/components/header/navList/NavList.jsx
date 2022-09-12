import React from "react";
import NavListCss from './NavList.module.css';

function NavList() {
  return (
    <div className={NavListCss.navbar}>

      <div className="link">
        <a id="linkOnLessonsList" href="/front/lessonsList/lessonsList.html"
          target="_blank">Guitar Lessons</a>
      </div>

      <div className="blog">
        <a id="linkOnBlog" href="/front/blog/blog.html" target="_blank">My blog</a>
      </div>

      <div className="math">
        <a id="unknow" href="/front/math/mathUnit.html">Math</a>
      </div>

    </div>
  );
}

export default NavList;
