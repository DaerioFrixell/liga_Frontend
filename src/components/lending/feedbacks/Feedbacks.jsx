import React, { useState } from "react";
import { Feedback } from "./feedback/Feedback";
import { connect, useDispatch } from "react-redux";
import "./feedbacks.scss";
import { addFeedbackAction } from "../../../redux/action";
import { useReducer } from "react";
import { addAuthor, addDescription, clearFeedbackFields, newFeedbackReducer } from "./newFeedbackReducer";

const Feedbacks = ({ feedbacksState }) => {
  const feedbacksArray = feedbacksState.feedbacks

  const dispatch = useDispatch();
  const [numberFeedbacksArr, setNumberFeedbacksArr] = useState(0)
  const [viewFeedback, setViewFeedback] = useState(feedbacksArray[numberFeedbacksArr])
  const [newFeedback, newFeedbackDispatch] = useReducer(newFeedbackReducer, {
    id: 7,
    author: '',
    description: ''
  })

  const next = () => {
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

  const prev = () => {
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
    newFeedbackDispatch(addAuthor(author))
  }

  const onTextAreaChange = e => {
    const description = e.target.value
    newFeedbackDispatch(addDescription(description))
  }


  const addNewFeedback = () => {
    dispatch(addFeedbackAction(newFeedback))
    newFeedbackDispatch(clearFeedbackFields('newFeedback'))
  }

  return (
    <section className="feedbacks">
      <h2 className="we">Отзывы</h2>

      <div className="feedbacks__wrapper">
        <button
          className="feedbacks__wrapper__arrow a-left"
          onClick={prev}></button>
        <Feedback viewFeedback={viewFeedback} />
        <button
          className="feedbacks__wrapper__arrow a-right"
          onClick={next}></button>
      </div>

      <div className="feedbacks__add"  >
        <input
          className="feedbacks__add__name"
          placeholder="как вас зовут?"
          value={newFeedback.author}
          onChange={onAuthorChange} />
        <button
          className="feedbacks__add__btn"
          onClick={addNewFeedback}
        >оставить отзыв</button>
        <textarea
          className="feedbacks__add__description"
          placeholder="напишите что-то"
          value={newFeedback.description}
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