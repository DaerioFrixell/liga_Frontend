
import React, { useState } from "react";
import "./feedbacks.scss";
import { Feedback } from "./feedback/Feedback";
import { connect, useDispatch } from "react-redux";
import {
  addAuthor,
  addDescription,
  clearFeedbackFields,
  fbsCompReducer
} from "./fbsCompReducer";
import { addFeedbackAction } from "../../../redux/feedbacks/feedbacksAction";
import { useReducer } from "react";
// import {
//   addFeedbackAction,
//   addAuthor,
//   addDescription,
//   clearFeedbackFields,
// } from "../../../redux/feedbacks/feedbacksAction";

const Feedbacks = ({ feedbacksState }) => {
  const feedbacksArray = feedbacksState.feedbacks
  const [stateFB, FDdispatch] = useReducer(fbsCompReducer, {
    id: 7,
    author: "",
    description: ""
  })

  const [numberFeedbacksArr, setNumberFeedbacksArr] = useState(0)
  const [viewFeedback, setViewFeedback] = useState(feedbacksArray[numberFeedbacksArr])
  const dispatch = useDispatch();

  const nextFeedback = () => {
    if (numberFeedbacksArr === feedbacksArray.length - 1) {
      setNumberFeedbacksArr(0)
      setViewFeedback(feedbacksArray[0])
    } else {
      let index = numberFeedbacksArr;
      index += 1;
      setNumberFeedbacksArr(index)
      setViewFeedback(feedbacksArray[index])
    }
  }

  const prevFeedback = () => {
    if (numberFeedbacksArr === 0) {
      setNumberFeedbacksArr(feedbacksArray.length - 1)
      setViewFeedback(feedbacksArray[feedbacksArray.length - 1])
    } else {
      let index = numberFeedbacksArr;
      index -= 1;
      setNumberFeedbacksArr(index)
      setViewFeedback(feedbacksArray[index])
    }
  }

  const onAuthorChange = e => {
    const author = e.target.value
    FDdispatch(addAuthor(author))
  }

  const onTextAreaChange = e => {
    const description = e.target.value
    FDdispatch(addDescription(description))
  }

  const addNewFeedback = () => {
    dispatch(addFeedbackAction(stateFB))
    FDdispatch(clearFeedbackFields())
  }

  return (
    <section className="feedbacks">
      <h2 className="we">Отзывы</h2>

      <div className="feedbacks__wrapper">
        <button
          className="feedbacks__wrapper__arrow a-left"
          onClick={prevFeedback}></button>
        <Feedback viewFeedback={viewFeedback} />
        <button
          className="feedbacks__wrapper__arrow a-right"
          onClick={nextFeedback}></button>
      </div>

      <div className="feedbacks__add"  >
        <input
          className="feedbacks__add__name"
          placeholder="как вас зовут?"
          value={stateFB.author}
          onChange={onAuthorChange} />
        <button
          className="feedbacks__add__btn"
          onClick={addNewFeedback}
        >оставить отзыв</button>
        <textarea
          className="feedbacks__add__description"
          placeholder="напишите что-то"
          value={stateFB.description}
          onChange={onTextAreaChange}></textarea>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    feedbacksState: state.feedbacks
  }
}

export default connect(mapStateToProps, null)(Feedbacks);