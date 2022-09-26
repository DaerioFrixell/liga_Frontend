import React, { useState } from "react";
import { Feedback } from "./feedback/Feedback";
import { connect } from "react-redux";
import "./feedbacks.scss";

const Feedbacks = ({ syncFeedbacks }) => {
  const [numberFeedback, setNumberFeedback] = useState(0)
  const [feedState, setFeedState] = useState(syncFeedbacks[numberFeedback])

  const next = () => {
    if (numberFeedback === syncFeedbacks.length - 1) {
      setNumberFeedback(0)
      setFeedState(syncFeedbacks[0])
    } else {
      let index = numberFeedback;
      index += 1;
      setNumberFeedback(index)
      setFeedState(syncFeedbacks[index])
    }
  }

  const prev = () => {
    if (numberFeedback === 0) {
      setNumberFeedback(syncFeedbacks.length - 1)
      setFeedState(syncFeedbacks[syncFeedbacks.length - 1])
    } else {
      let index = numberFeedback;
      index -= 1;
      setNumberFeedback(index)
      setFeedState(syncFeedbacks[index])
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

const mapStateToProps = state => {
  return {
    syncFeedbacks: state.feedbacks.feedbacks
  }
}

export default connect(mapStateToProps, null)(Feedbacks);