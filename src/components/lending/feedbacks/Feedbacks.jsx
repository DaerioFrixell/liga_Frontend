import React from "react";
import { Feedback } from "./feedback/Feedback";
import "./feedbacks.scss"

export const Feedbacks = () => {
  return (
    <section className="feedbacks">
      <p>|--</p>
      <Feedback />
      <Feedback />
      <Feedback />
      <p>--|</p>
    </section>
  )
}