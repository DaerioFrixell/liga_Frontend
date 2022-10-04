
import { React } from "react";
import "./lessonsList.scss"
import { connect, useDispatch } from "react-redux";
import { Lesson } from "./Lesson/Lesson";
import { addLessonAction } from "../../../redux/action";

const LessonsList = ({ lessonsArr }) => {
  // const [newLesson, newLessonDispatch] = useReducer(newLessonReducer, {
  //   id: 10,
  //   lvl: "Н-1",
  //   title: "new",
  // })

  const allLessons = lessonsArr.map(less => <Lesson
    key={less.id}
    num={less.id}
    title={less.title}
    lessonsArr={lessonsArr}
  />)

  const dispatch = useDispatch();
  const addNewLesson = () => {
    dispatch(addLessonAction('newLesson'))
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