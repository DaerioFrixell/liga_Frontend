import React from "react";
import { Feedback } from "./feedback/Feedback";
import "./feedbacks.scss"

export const Feedbacks = ({
  feedbacks,
  feedState,
  setFeedState,
  arrNum,
  setArrNum }) => {

  const next = () => {
    if (arrNum === feedbacks.length - 1) {
      arrNum = 0
      setArrNum(arrNum)
      setFeedState(feedbacks[arrNum])
    } else {
      arrNum = arrNum + 1
      setArrNum(arrNum)
      setFeedState(feedbacks[arrNum])
    }
  }

  const prev = () => {
    if (feedbacks[arrNum].id === 1) {
      arrNum = feedbacks.length - 1;
      setArrNum(arrNum);
      setFeedState(feedbacks[arrNum])
    } else {
      arrNum = arrNum - 1
      setArrNum(arrNum)
      setFeedState(feedbacks[arrNum])
    }
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


    </section>
  )
}