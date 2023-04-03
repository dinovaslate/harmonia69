'use client';

import React, { useState } from 'react';
import Filter from '../components/Filter';
import s from '../styles/gallery.module.css';
import Lightbox from './lightbox';
import { Image } from 'next/image';
function GalleryImg() {
  const [active, setActive] = useState(false);
  const [image, setImage] = useState({
    src: '',
    desc: '',
    title: '',
    avatar: '',
    tags: [],
    creator: '',
  });
  const options = [
    {
      id: 1,
      title: 'Style',
      items: ['Digital', 'Traditional', 'Photography'],
    },
    {
      id: 2,
      title: 'Color',
      items: ['Red', 'Yellow', 'Green'],
    },
    {
      id: 2,
      title: 'Background',
      items: ['Red', 'Yellow', 'Green'],
    },
  ];
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://www.anthropics.com/portraitpro/img/page-images/homepage/v22/what-can-it-do-2B.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://variety.com/wp-content/uploads/2022/12/Chadwick-1.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://www.anthropics.com/portraitpro/img/page-images/homepage/v22/what-can-it-do-2B.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://variety.com/wp-content/uploads/2022/12/Chadwick-1.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://www.anthropics.com/portraitpro/img/page-images/homepage/v22/what-can-it-do-2B.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://variety.com/wp-content/uploads/2022/12/Chadwick-1.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://www.anthropics.com/portraitpro/img/page-images/homepage/v22/what-can-it-do-2B.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://variety.com/wp-content/uploads/2022/12/Chadwick-1.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: 'Looking at Me',
      avatar:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      tags: ['Barco', 'Animan', '3D'],
      creator: 'Mahfud MD',
    },
  ];
  return (
    <>
      <div className={`backdrop ${active && 'active'}`}></div>
      <Lightbox active={active} setActive={setActive} {...image} />
      <div className={s.wrapper3}>
        <h1 className={s.news_title}>Gallery</h1>
        <Filter options={options} />
      </div>

      <div className={s.wrapper}>
        {images.map((attr) => (
          <img
            src={attr.src}
            alt=""
            className={s.item}
            ref={(input) => {
              if (!input) return;
              if (input.complete) {
                let height = input.clientHeight;
                input.style.gridRow = `span ${~~(height / 10)}`;
              }
            }}
            onClick={() => {
              setImage(attr);
              setActive(true);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default GalleryImg;
