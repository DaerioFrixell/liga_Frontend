import React from "react";
import "./availableTime.scss";

export const AvailableTime = () => {
  return (
    <div id="availableTimeBlock" className="time">
      <h2 className="time__title">доступное время</h2>
      <div className="time__list">
        <div className="time__list__day">
          <p className="time__list__day__item-d">вторник</p>
          <p className="time__list__day__item ">15:30</p>
          <p className="time__list__day__item ">16:15</p>
          <p className="time__list__day__item ">18:00</p>
          <p className="time__list__day__item ">18:45</p>
          <p className="time__list__day__item ">19:30</p>
        </div>

        <div className="time__list__day">
          <p className="time__list__day__item-d">четверг</p>
          <p className="time__list__day__item ">15:30</p>
          <p className="time__list__day__item ">16:15</p>
          <p className="time__list__day__item ">18:00</p>
          <p className="time__list__day__item ">18:45</p>
          <p className="time__list__day__item ">19:30</p>
        </div>

        <div className="time__list__day">
          <p className="time__list__day__item-d">пятница</p>
          <p className="time__list__day__item ">15:30</p>
          <p className="time__list__day__item ">16:15</p>
          <p className="time__list__day__item ">18:00</p>
          <p className="time__list__day__item ">18:45</p>
          <p className="time__list__day__item ">19:30</p>
        </div>
      </div>

    </div>




  )
}