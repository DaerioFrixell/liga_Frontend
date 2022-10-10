import React from "react";
import './lendingForm.scss';

export const LendingForm = () => {

  const handler = e => {
    e.preventDefault()
  }
  return (
    <section id="lendingForm" className="lf">
      <h2 className="checkMe">Запишись на беспланый пробный урок</h2>
      <form >
        <div className="lf__item">
          <label className="lf__item_label">имя</label>
          <input className="lf__item_input" />
        </div>

        <div className="lf__item">
          <label className="lf__item_label">номер</label>
          <input className="lf__item_input" />
        </div>

        <div className="lf__item">
          <label className="lf__item_label">эл почта</label>
          <input className="lf__item_input" />
        </div>

        <button
          className="lf-btn"
          type="submit"
          onClick={handler}
        >записаться</button>

        <div className="lf-agree">
          Соглашаясь, Вы даете согласие на обработку персональных данных
        </div>
      </form>
    </section>
  );
}
