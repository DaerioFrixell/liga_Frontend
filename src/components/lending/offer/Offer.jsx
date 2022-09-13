import React from "react";
import './offer.scss';

export const Offer = () => {
  return (
    <div className='offer'>
      <div className='offer__bg'></div>
      <div className='offer__title'>
        <h1>Уроки гитары на гитаре</h1>
      </div>
      <p className='offer__text'>
        здесь действительно учат играть на гитаре, а не учат играть
        одну или две песни без знаний, как разбирать другие песни
      </p>
      <p className='offer__text'>
        скидка на первый абонемент 30% + бесплатный доступ в телеграм-канал!
      </p>
      <div className='offer__action'>
        <button className="offer__btn">Записаться на пробный урок</button>
      </div>
    </div>
  );
}
