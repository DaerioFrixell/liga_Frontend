import React from "react";
import './price.scss';

export const Price = () => {
  return (
    <div id="priceBlock" className="price">
      <h2 className="price__title">абонементы</h2>
      <p>*стоимость зависит от длительности и количества  занятий в месяц</p>
      <br />
      <p>список текущих абонементов:</p>
      <br />

      <div className="price__inner">
        <div className="price__inner__item">
          <p className="price__inner__item__count">количество: </p>
          <p className="price__inner__item__count">4 занятия</p>
          <p className="price__inner__item__duar">длительность:</p>
          <p className="price__inner__item__duar">45 мин</p>
          <p className="price__inner__item__price">цена:</p>
          <p className="price__inner__item__price">2000 руб</p>
        </div>

        <div className="price__inner__item">
          <p className="price__inner__item__count">количество: </p>
          <p className="price__inner__item__count">8 занятий</p>
          <p className="price__inner__item__duar">длительность:</p>
          <p className="price__inner__item__duar">45 мин</p>
          <p className="price__inner__item__price">цена:</p>
          <p className="price__inner__item__price">3700 руб</p>
        </div>

        <div className="price__inner__item">
          <p className="price__inner__item__count">количество: </p>
          <p className="price__inner__item__count">4 занятия</p>
          <p className="price__inner__item__duar">длительность:</p>
          <p className="price__inner__item__duar">60 мин</p>
          <p className="price__inner__item__price">цена:</p>
          <p className="price__inner__item__price">2400 руб</p>
        </div>

        <div className="price__inner__item">
          <p className="price__inner__item__count">количество: </p>
          <p className="price__inner__item__count">8 занятий</p>
          <p className="price__inner__item__duar">длительность:</p>
          <p className="price__inner__item__duar">60 мин</p>
          <p className="price__inner__item__price">цена:</p>
          <p className="price__inner__item__price">4000 руб</p>
        </div>
      </div>
    </div>
  )
}