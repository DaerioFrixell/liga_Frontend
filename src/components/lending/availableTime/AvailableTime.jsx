import React from "react";
import "./availableTime.scss";

export const AvailableTime = () => {
  return (
    <div id="availableTimeBlock" className="time">
      <h2 className="time__title">свободное время</h2>
      <div className="time__list">

        <div className="time__list__day">
          <p className="time__list__day__item-d">понедельник</p>
          <p className="time__list__day__item navbl">15:30</p>
          <p className="time__list__day__item navbl">16:15</p>
          <p className="time__list__day__item navbl">18:00</p>
          <p className="time__list__day__item navbl">18:45</p>
          <p className="time__list__day__item navbl">19:30</p>
        </div>

        <div className="time__list__day">
          <p className="time__list__day__item-d">вторник</p>
          <p className="time__list__day__item avbl">15:30</p>
          <p className="time__list__day__item avbl">16:15</p>
          <p className="time__list__day__item navbl">18:00</p>
          <p className="time__list__day__item navbl">18:45</p>
          <p className="time__list__day__item avbl">19:30</p>
        </div>

        <div className="time__list__day">
          <p className="time__list__day__item-d">среда</p>
          <p className="time__list__day__item navbl">15:30</p>
          <p className="time__list__day__item navbl">16:15</p>
          <p className="time__list__day__item navbl">18:00</p>
          <p className="time__list__day__item navbl">18:45</p>
          <p className="time__list__day__item navbl">19:30</p>
        </div>

        <div className="time__list__day">
          <p className="time__list__day__item-d">пятница</p>
          <p className="time__list__day__item navbl">15:30</p>
          <p className="time__list__day__item navbl">16:15</p>
          <p className="time__list__day__item navbl">18:00</p>
          <p className="time__list__day__item avbl">18:45</p>
          <p className="time__list__day__item avbl">19:30</p>
        </div>
      </div>

    </div>




  )
}