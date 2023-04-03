import React from 'react';
import s from '../styles/gallery.module.css';
export default function Barco({
  setActive,
  active,
  title,
  award,
  rank,
  src,
  desc,
  avatar,
  name,
}) {
  return (
    <div
      className={s.project2}
      onMouseOver={() => setActive(rank)}
      onMouseOut={() => setActive(0)}
    >
      <div className={s.section2}>
        <img src={src} alt="" className={s.project2_img} />

        <div className={`${s.wrapper2} ${active == rank && s.active}`}>
          <div className={s.ribbon}>
            <div className={s.square}>{award}</div>
            <div className={s.tail}></div>
            <div className={s.tail}></div>
          </div>
          <h1 className={s.project2_desc}>
            {title} <span className={s.rank}>{rank}</span>
          </h1>
          <div className={s.project2_sub}>{desc}</div>
          <div className={s.avatar2}>
            <img className={s.avatar_img} src={avatar} />
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
