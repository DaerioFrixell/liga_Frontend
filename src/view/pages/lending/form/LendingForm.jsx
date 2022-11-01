import React, { useState } from "react";
import { createLead } from "../../../../api/leadApi";
import './lendingForm.scss';

export const LendingForm = () => {
  //добавление нового Лида в DB 
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [comment, setComment] = useState('')
  const addNewLead = e => {
    e.preventDefault()
    createLead({ name: name, number: number, comment: comment })
    setName('')
    setNumber('')
    setComment('')
  }

  return (
    <section id="lendingForm" className="lf">
      <h2 className="checkMe">Запишись на беспланый пробный урок</h2>
      <form >
        <div className="lf__item">
          <label className="lf__item_label">имя</label>
          <input
            className="lf__item_input"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="lf__item">
          <label className="lf__item_label">номер</label>
          <input
            className="lf__item_input"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </div>

        <div className="lf__item">
          <label className="lf__item_label">оставьте комментарий</label>
          <input
            className="lf__item_input"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </div>

        <button
          className="lf-btn"
          type="submit"
          onClick={addNewLead}
        >записаться</button>


      </form>
    </section>
  );
}
