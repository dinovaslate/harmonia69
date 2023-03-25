import React from 'react';
import s from '../styles/Filter.module.css';
export default function option({ title, items }) {
  return (
    <div className={`${s.option}`}>
      <div className={s.option_title}>{title}</div>
      <ul>
        {items &&
          items.map((item) => {
            return <li>{item}</li>;
          })}
      </ul>
    </div>
  );
}
