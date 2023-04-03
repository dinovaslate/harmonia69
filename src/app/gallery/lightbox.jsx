'use client';

import React, { useEffect, useRef } from 'react';
import s from '../styles/gallery.module.css';
function Lightbox({
  src,
  desc,
  title,
  avatar,
  creator,
  tags,
  active,
  setActive,
}) {
  const lightboxRef = useRef();
  useEffect(() => {
    document.body.addEventListener(
      'click',
      (e) => {
        if (lightboxRef.current.contains(e.target)) return;
        setActive(false);
      },
      { capture: true }
    );
  }, []);
  return (
    <>
      <div
        ref={lightboxRef}
        className={`${s.lightbox} ${active && s.lightbox_active}`}
      >
        <div className={s.content}>
          <img className={s.img} src={src} alt="" />
          <h1 className={s.judul}>{title}</h1>
          <div className={s.tags}>
            {tags.map((tag) => (
              <div className={s.tag}>{tag}</div>
            ))}
          </div>
          <p>{desc}</p>
          <div className={s.avatar3}>
            <img className={s.avatar3_img} src={avatar} />
            {creator}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lightbox;
