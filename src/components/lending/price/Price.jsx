import React from "react";
import './price.scss';

export const Price = () => {
  return (
    <div className="price">
      <h2>цены</h2>
      <div className="price__less45">
        <p className="price__less45__title">2000 рублей</p>
        <p className="price__less45__description">4 урока в месяц по 45 минут</p>
        <p className="price__less45__title">3700 рублей</p>
        <p className="price__less45__description">8 уроков в месяц по 45 минут</p>
      </div>
      <div className="price__less60">
        <p className="price__less60__title">2400 рублей</p>
        <p className="price__less60__description">4 урока в месяц по 60 минут</p>
        <p className="price__less60__title">4000 рублей</p>
        <p className="price__less60__description">8 уроков в месяц по 60 минут</p>
      </div>

    </div>
  )
}