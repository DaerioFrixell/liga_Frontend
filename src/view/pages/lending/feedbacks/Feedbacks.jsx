import { React, useState, useEffect } from "react";
import "./feedbacks.scss";
import { Feedback } from "./feedback/Feedback";
import { useDispatch, useSelector } from "react-redux";
import { addFeedbackAction, getFeedbackAction } from "../../../../models/feedbacks/feedbacksAction";
import { createFeedback } from "../../../../api/feedbackApi";

export const Feedbacks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedbackAction())
  }, [dispatch])

  const feedbacksArray = useSelector(state => state.feedbacks.feedbacks)

  //добавление нового фидбэка в DB (+ в редакс)
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const addNewFeedback = () => {
    createFeedback({ author: author, description: description })
    dispatch(addFeedbackAction({
      author,
      description,
    }));
    setAuthor("")
    setDescription("")
  }

  // функционал переключения фидбэков
  const [numberFeedbacksArr, setNumberFeedbacksArr] = useState(0)
  const [viewFeedback, setViewFeedback] = useState(feedbacksArray[0])

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

  const loader = feedbacksArray
    ? (<div className="feedbacks__wrapper">
      <button
        className="feedbacks__wrapper__arrow a-left"
        onClick={prevFeedback}></button>
      <Feedback viewFeedback={viewFeedback} />
      <button
        className="feedbacks__wrapper__arrow a-right"
        onClick={nextFeedback}></button>
    </div>)
    : ('loading...')

  return (
    <section className="feedbacks">
      <h2 className="we">Отзывы</h2>
      {loader}
      <div className="feedbacks__add"  >
        <input
          className="feedbacks__add__name"
          placeholder="как вас зовут?"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <textarea
          className="feedbacks__add__description"
          placeholder="напишите что-то"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <button
          className="feedbacks__add__btn"
          onClick={addNewFeedback}
        >оставить отзыв</button>

      </div>
    </section>
  )
}