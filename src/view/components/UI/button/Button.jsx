import React from "react";
import "./Button.scss"
import classNames from "classnames";

export const Button = ({ nameBtn, classname }) => {
  return (
    <button
      className={classNames("lending-button", [classname])}>{nameBtn}</button>
  )
}