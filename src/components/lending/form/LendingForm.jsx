import React from "react";
import './ThirdBlock.css';

export const LendingForm = () => {
  return (
    <section className="lending-from">

      <h2 id="eeee" className="checkMe">Запишись на беспланый пробный урок</h2>
      <form >
        <div className="form-item">
          <label className="form-label">имя</label>
          <input className="form-control" />
        </div>
        <div className="form-item">
          <label className="form-label">номер</label>
          <input className="form-control" />
        </div>
        <div className="form-item">
          <label className="form-label">эл почта</label>
          <input className="form-control" />
        </div>
        <div className="form-item-input">
          <button className="form-btn" />
        </div>
        <div className="form-item-agree">
          Соглашаясь, Вы даете согласие на обработку персональных данных
        </div>
      </form>

    </section>
  );
}
