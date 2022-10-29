import React from "react";
import { Button } from "../../../components/UI/button/Button";
import './offer.scss';

export const Offer = () => {
  return (
    <div className='offer'>
      <h1 className='offer__title'>Уроки игры на гитаре</h1>
      <p className='offer__text'>скидка на первый абонемент 30% </p>
      <p className='offer__text' >+ бесплатный доступ в телеграм-канал! </p>
      <p className='offer__text hidden500'>обучаю развиваться самостоятельно</p>
      <p className='offer__text'>оставьте заявку и я вам перезвоню</p>
      <p className='offer__text'>или позвоните по номеру +7-986-951-04-69</p>
      <Button
        classname={'offer__button'}
        nameBtn={'записаться на пробный урок'} />
    </div>
  );
}