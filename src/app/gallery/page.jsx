import React from 'react';
import s from '../styles/gallery.module.css';
import Lightbox from './lightbox';
import GalleryImg from './galleryImg';
import Horizontal from './horizontal';
import Ambient from '@/GlobalComponents/Ambient';
import PageWrapper from '@/GlobalComponents/PageWrapper';
export default function Gallery() {
  return (
    <PageWrapper>
      <Ambient />
      <Horizontal />
      <GalleryImg />
    </PageWrapper>
  );
}
