import React from 'react';
import s from '../styles/Projects.module.css';
export default function Project({ tag, title, desc, avatar }) {
  return (
    <div className={s.project}>
      <div className={s.marker}>{tag}</div>
      <div className={s.title}>{title}</div>
      <div className={s.desc}>{desc}</div>
      <div className={s.niggers}></div>
      <div className={s.section}>
        <div className={s.project_avatar}>
          {avatar.map((elem) => (
            <img src={elem} />
          ))}
        </div>
        <div className={s.button}>Join Code</div>
      </div>
    </div>
  );
}
