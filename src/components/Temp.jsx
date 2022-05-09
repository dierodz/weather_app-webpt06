import React from "react";

import style from "./Temp.module.css";

export default function Temp({ label, value, className }) {
  return (
    <div className={[style.temp, className].join(' ')}>
      <span className={style.label}>{label}</span>
      <span className={style.value}>{value}</span>
    </div>
  );
}
