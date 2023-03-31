import React from 'react';
import s from '../styles/gallery.module.css';
import Lightbox from './lightbox';
import GalleryImg from './galleryImg';
import Horizontal from './horizontal';
// import Gambar from './esvege.svg';
// import Gambar2 from './esvege2.svg';
export default function Gallery() {
  return (
    <>
      <div className={s.ambient}></div>
      <div className={s.ambient}></div>

      <div className={s.x}>
        <img
          src={'./esvege.svg'}
          className={s.y}
          style={{
            position: 'fixed',
            aspectRatio: '1/1',
            borderRadius: '50%',
            right: '0%',
            left: '0%',
            top: '-20%',
            width: '400px',
            filter: 'blur(50px)',
            height: 'fit-content',
            mixBlendMode: 'color-burn',
          }}
          alt="Gambar bahlul"
        />
      </div>
      <div className={s.x}>
        <img
          src={'./esvege2.svg'}
          className={s.y}
          style={{
            position: 'fixed',
            aspectRatio: '1/1',
            borderRadius: '50%',
            right: '0%',
            left: '0%',
            top: '10rem',
            width: '400px',
            filter: 'blur(50px)',
            height: 'fit-content',
            mixBlendMode: 'color-burn',
          }}
          alt="Gambar Lucknut"
        />
      </div>

      <Lightbox />
      <Horizontal />
      <GalleryImg />
    </>
  );
}
