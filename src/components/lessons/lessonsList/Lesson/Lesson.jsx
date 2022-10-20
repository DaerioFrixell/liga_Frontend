import React from "react";
import { useDispatch } from "react-redux";
import { deleteLessonAction } from "../../../../redux/action";
import "./lesson.scss"

export const Lesson = ({
  num,
  title,
  lessonsArr
}) => {

  const dispatch = useDispatch();
  const deleteCurrentLesson = () => {
    dispatch(deleteLessonAction(lessonsArr.filter(less => less.id !== num)))
  }

  return (
    <div className="lesson">
      <p className="lesson__num">{num}</p>
      <p className="lesson__title">{title}</p>

      <div className="lesson__flex-wrapper">
        <button className="lesson__flex-wrapper__edit">edit</button>
        <button
          className="lesson__flex-wrapper__del"
          onClick={deleteCurrentLesson}
        >del</button>
      </div>
    </div>
  );
}