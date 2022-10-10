import React from "react";
import { LendingButton } from "../../UI/button/LendingButton";
import './offer.scss';

export const Offer = () => {
  return (
    <div className='offer'>
      <h1 className='offer__title'>Уроки гитары на гитаре</h1>
      <p className='offer__text'>
        здесь действительно учат играть на гитаре, а не учат играть
        одну или две песни без знаний, как разбирать другие песни
      </p>
      <p className='offer__text'>
        скидка на первый абонемент 30% + бесплатный доступ в телеграм-канал!
      </p>
      <LendingButton nameBtn={'записаться на пробный урок'} />
    </div>
  );
}
