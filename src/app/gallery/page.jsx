import React from 'react';
import s from '../styles/gallery.module.css';
import Lightbox from './lightbox';
import GalleryImg from './galleryImg';
import Horizontal from './horizontal';
import Ambient from '@/GlobalComponents/Ambient';
export default function Gallery() {
  return (
    <>
      <div className={s.ambient}></div>
      <div className={s.ambient}></div>

      <Ambient />
      <Horizontal />
      <GalleryImg />
    </>
  );
}
