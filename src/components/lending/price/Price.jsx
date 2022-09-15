import React from "react";
import './price.scss';

export const Price = () => {
  return (
    <div id="priceBlock" className="price">
      <h2 className="price__title">цены</h2>

      <div className="price__less">
        <p className="price__less__price">2000 рублей</p>
        <p className="price__less__description">4 урока в месяц по 45 минут</p>
        <p className="price__less__price">3700 рублей</p>
        <p className="price__less__description">8 уроков в месяц по 45 минут</p>
      </div>

      <div className="price__less">
        <p className="price__less__price">2400 рублей</p>
        <p className="price__less__description">4 урока в месяц по 60 минут</p>
        <p className="price__less__price">4000 рублей</p>
        <p className="price__less__description">8 уроков в месяц по 60 минут</p>
      </div>

    </div>
  )
}