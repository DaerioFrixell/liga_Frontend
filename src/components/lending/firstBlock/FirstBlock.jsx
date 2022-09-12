import React from "react";
import FirstBlockCss from './FirstBlock.module.css';

function FirstBlock() {
  return (
    <section className={FirstBlockCss.fb}>

      <div className={FirstBlockCss.cont}>
        <div className={FirstBlockCss.cover}></div>

        <div className={FirstBlockCss.title}>
          <h1>Уроки гитары на гитаре</h1>
        </div>

        <div className={FirstBlockCss.offer}>
          Звони, чтобы записаться на бесплатный пробный урок
        </div>

        <div className={FirstBlockCss.action}  >
          <button className="btn">Записаться на пробный урок</button>
        </div>
      </div>

    </section>
  );
}

export default FirstBlock;
