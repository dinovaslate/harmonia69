'use client';
import React, { useState, useEffect } from 'react';
import { FaMedal, FaRecycle, FaHashtag } from 'react-icons/fa';
import s from '../styles/news.module.css';
import Menu from '@/GlobalComponents/menu';
export default function News({ setFocus, focus, setActive }) {
  const [activateMenu, setActivateMenu] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const news = [
    {
      src: 'https://cdn.glitch.global/7430fc43-4325-457b-a220-181fdbbe4b11/logo.png?v=1678587387015',
      title: 'Among Us',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo dignissimos ab animi, natus rerum a? Dolorem, possimus perspiciatis quis nobis unde ea, ratione corrupti odit eius sequi quo officia?',
      tags: ['Lorem', 'Ipsum'],
    },
    {
      src: 'https://cdn.glitch.global/7430fc43-4325-457b-a220-181fdbbe4b11/logo.png?v=1678587387015',
      title: 'Iam Gay',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo dignissimos ab animi, natus rerum a? Dolorem, possimus perspiciatis quis nobis unde ea, ratione corrupti odit eius sequi quo officia?',
      tags: ['Lorem', 'Ipsum'],
    },
  ];
  const opt = [
    {
      title: 'Update',
      icon: <FaMedal />,
    },
    {
      title: 'Delete',
      icon: <FaRecycle />,
    },
  ];
  const handleMenu = (e) => {
    e.preventDefault();
    setActivateMenu(true);
    setPosition(`${e.pageY}px auto auto ${e.pageX}px`);
    setFocus('Menu');
  };
  const handleRespond = (e) => {
    console.log(e);
  };
  useEffect(() => {
    if (focus != 'Menu') {
      setActivateMenu(false);
    }
  }, [focus]);
  return (
    <>
      {news.map(({ src, title, desc, tags }) => (
        <div
          className={s.news_card}
          onContextMenu={(e) => handleMenu(e)}
          onClick={() => setActive(true)}
        >
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
      ))}
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
