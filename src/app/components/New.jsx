import React from 'react';
import s from '../styles/news.module.css';
export default function New({ src, title, desc, tags }) {
  return (
    <>
      <div className={s.news_card}>
        <img className={s.news_image} src={src} alt="" />
        <div className={s.news_txt}>
          <h3 className={s.news_judul}>{title}</h3>
          <p className={s.news_desc}>{desc}</p>
          <div className={s.new_tag}>
            {tags.map((elem) => (
              <div className={s.tag}>{elem}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
