import React, { useState } from "react";
import { Feedback } from "./feedback/Feedback";
import { connect, useDispatch } from "react-redux";
import "./feedbacks.scss";
import { addFeedbackAction } from "../../../redux/action";

const Feedbacks = ({ feedbacksArr }) => {
  const [numberFeedbacksArr, setNumberFeedbacksArr] = useState(0)
  const [feedState, setFeedState] = useState(feedbacksArr[numberFeedbacksArr])

  const next = () => {
    if (numberFeedbacksArr === feedbacksArr.length - 1) {
      setNumberFeedbacksArr(0)
      setFeedState(feedbacksArr[0])
    } else {
      let index = numberFeedbacksArr;
      index += 1;
      setNumberFeedbacksArr(index)
      setFeedState(feedbacksArr[index])
    }
  }

  const prev = () => {
    if (numberFeedbacksArr === 0) {
      setNumberFeedbacksArr(feedbacksArr.length - 1)
      setFeedState(feedbacksArr[feedbacksArr.length - 1])
    } else {
      let index = numberFeedbacksArr;
      index -= 1;
      setNumberFeedbacksArr(index)
      setFeedState(feedbacksArr[index])
    }
  }

  const newFeedback = {
    id: 10,
    author: 'Daerio Frixell',
    description: `1. Автор, это просто ааааааааааааааааааааааааааааааааааааа ааааааааааааааааааа аааа-аааааааааа аааааааааааааа аааааааааааааааааааааааааааа ааааааааааааа ааааааааааааа-ааааааааааааааа
    2. Здравствуйте, автор, ваша книга мне понравилась, особенно вот этот момент: цитата на полглавы
    3. Ах, какой хороший роман, он мне напомнил, как я прошлым летом...изливает душу на - ти абзацах`
  }

  const dispatch = useDispatch();
  const addNewFeedback = () => {
    dispatch(addFeedbackAction(newFeedback))
  }

  return (
    <section className="feedbacks">
      <h2 className="we">Отзывы</h2>

      <div className="feedbacks__wrapper">
        <button
          className="feedbacks__wrapper__arrow a-left"
          onClick={prev}></button>
        <Feedback feedState={feedState} />
        <button
          className="feedbacks__wrapper__arrow a-right"
          onClick={next}></button>
      </div>

      <div className="feedbacks__add"  >
        <input className="feedbacks__add__name" placeholder="как вас зовут?" />
        <button
          className="feedbacks__add__btn"
          onClick={addNewFeedback}
        >оставить отзыв</button>
        <textarea className="feedbacks__add__description" placeholder="напишите что-то"></textarea>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    feedbacksArr: state.feedbacks.feedbacks
  }
}

export default connect(mapStateToProps, null)(Feedbacks);