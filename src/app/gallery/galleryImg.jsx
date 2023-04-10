'use client';

import React, { useState } from 'react';
import Filter from '../../GlobalComponents/Filter';
import { FaMedal, FaRecycle, FaHashtag } from 'react-icons/fa';
import s from '../styles/gallery.module.css';
import Lightbox from './lightbox';
import { Image } from 'next/image';
import Menu from '../../GlobalComponents/menu';
function GalleryImg() {
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(0);
  const [activateMenu, setActivateMenu] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
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

  const handleMenu = (e, index) => {
    e.preventDefault();
    setActivateMenu(true);
    setFocus(index);
    setPosition(`${e.pageY}px auto auto ${e.pageX}px`);
  };
  const handleRespond = (e) => {
    console.log(`Coming From ${focus}`);
    console.log(e);
  };
  const opt = [
    {
      title: 'Update',
      icon: <FaMedal />,
    },
    {
      title: 'Delete',
      icon: <FaRecycle />,
    },
    {
      title: 'Rank',
      icon: <FaMedal />,
      child: [
        {
          title: '1',
          icon: <FaHashtag />,
        },
        {
          title: '2',
          icon: <FaHashtag />,
        },
        {
          title: '3',
          icon: <FaHashtag />,
        },
        {
          title: '4',
          icon: <FaHashtag />,
        },
        {
          title: '5',
          icon: <FaHashtag />,
        },
      ],
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
        {images.map((attr, index) => (
          <img
            src={attr.src}
            alt=""
            className={s.item}
            ref={(input) => {
              if (!input) return;
              const onComplete = () => {
                let height = input.clientHeight;
                input.style.gridRow = `span ${~~(height / 20)}`;
              };
              if (input.complete) {
                onComplete();
              } else {
                input.addEventListener('load', onComplete);
              }
            }}
            onContextMenu={(e) => handleMenu(e, index)}
            onClick={() => {
              setImage(attr);
              setActive(true);
            }}
          />
        ))}
      </div>
      <Menu
        position={position}
        active={activateMenu}
        setActive={setActivateMenu}
        option={opt}
        handleRespond={handleRespond}
      />
    </>
  );
}

export default GalleryImg;
