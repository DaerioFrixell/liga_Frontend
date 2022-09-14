import React from "react";
import { Feedback } from "./feedback/Feedback";
import "./feedbacks.scss"

export const Feedbacks = () => {
  return (
    <section className="feedbacks">
      <div className="feedbacks__arrow-left"></div>
      <Feedback />
      <Feedback />
      <Feedback />
      <div className="feedbacks__arrow-right"></div>
    </section>
  )
}