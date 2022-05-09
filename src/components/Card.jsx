import React from "react";
import Temp from "./Temp";

import style from "./Card.module.css";

export default function Card({ max, min, name, img, onClose, main }) {
  // acá va tu código
  return (
    <div className={[style.card, main ? style.mainCard : ""].join(" ")}>
      <span className={style.name}>{name}</span>
      <button onClick={onClose} className={style.cardBtn}>
        X
      </button>
      <section>
        <Temp className={style.temp} label="Min" value={min} />
        <Temp className={style.temp} label="Max" value={max} />
        <img
          src={`http://openweathermap.org/img/wn/${img}@${main ? 4 : 2 }x.png`}
          alt="icono"
        />
      </section>
    </div>
  );
}
