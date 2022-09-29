import React from "react";
import { connect, useDispatch } from "react-redux";
import { Lesson } from "./Lesson/Lesson";
import { addLessonAction } from "../../../redux/action";
import "./lessonsList.scss"

const LessonsList = ({ lessonsArr }) => {
  const allLessons = lessonsArr.map(less => <Lesson
    key={less.id}
    num={less.id}
    title={less.title}
    lessonsArr={lessonsArr}
  />)

  const newLesson = {
    id: 6,
    title: "new less title"
  }
  const dispatch = useDispatch();
  const addNewLesson = () => {
    dispatch(addLessonAction(newLesson))
  }

  return (
    <div className="lessons-list" >
      <h2>Программа обучения</h2>
      <button
        onClick={addNewLesson}>add lesson</button>
      <input />
      {allLessons}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    lessonsArr: state.lessons.lessons
  }
}

export default connect(mapStateToProps, null)(LessonsList);