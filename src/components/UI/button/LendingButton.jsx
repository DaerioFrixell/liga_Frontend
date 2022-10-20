import React from "react";
import "./lendingButton.scss"

export const LendingButton = ({ nameBtn }) => {
  return (
    <button className="lending-button">{nameBtn}</button>
  )
}