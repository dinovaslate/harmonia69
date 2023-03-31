'use client';

import React from 'react';
import s from '../styles/gallery.module.css';
import { useRef, useState } from 'react';
function Horizontal() {
  const [active, setActive] = useState(false);
  const Images = [
    {
      title: 'Japan',
      award: 'Greatest Art',
      rank: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Distinctio, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!',
      avatar:
        'https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg',
      name: 'Kiran Mahmud',
    },
  ];
  return (
    <>
      <div className={s.projects3}>
        {Images.map(({ title, award, rank, src, desc, avatar, name }) => (
          <div
            className={s.project2}
            onMouseOver={() => setActive(true)}
            onMouseOut={() => setActive(false)}
          >
            <div className={s.section2}>
              <img src={src} alt="" className={s.project2_img} />

              <div className={`${s.wrapper2} ${active && s.active}`}>
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
        ))}
      </div>
    </>
  );
}

export default Horizontal;
