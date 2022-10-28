import React from "react";
import { Button } from "../../../components/UI/button/Button";
import './offer.scss';

export const Offer = () => {
  return (
    <div className='offer'>
      <h1 className='offer__title'>Уроки гитары на гитаре</h1>
      <div>
        <p className='offer__text'>я учу играть на гитаре, а не разбирать пару песен,без знаний,</p>
        <p className='offer__text'>как выучить другие самостоятельно</p>
        <p className='offer__text'>скидка на первый абонемент 30% </p>
        <p className='offer__text'>+ бесплатный доступ в телеграм-канал! </p>
      </div>
      <Button
        classname={'offer__button'}
        nameBtn={'записаться на пробный урок'} />
    </div>
  );
}