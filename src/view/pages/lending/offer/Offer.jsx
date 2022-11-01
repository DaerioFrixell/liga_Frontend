import React from "react";
import { Link } from "react-scroll";
import { linkDuration, linkOffset } from "../../../styles/setting/smoothLink";
import "./offer.scss";

export const Offer = () => {
  return (
    <div className="offer">
      <h1 className="offer__title">Уроки игры на гитаре</h1>
      <p className="offer__text">скидка на первый абонемент 30% </p>
      <p className="offer__text" >+ бесплатный доступ в телеграм-канал! </p>
      <p className="offer__text hidden500">обучаю развиваться самостоятельно</p>
      <p className="offer__text">запишитесь на пробный урок и я вам перезвоню</p>
      <p className="offer__text">или позвоните по номеру +7-986-951-04-69</p>
      <Link
        className="offer__button-link"
        activeClass="offer__button-link"
        to="lendingForm"
        smooth={true}
        spy={true}
        duration={linkDuration}
        offset={linkOffset}
      >записаться на пробный урок</Link>
    </div >
  );
}