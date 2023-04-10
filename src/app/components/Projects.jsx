'use client';

import React, { useEffect, useState } from 'react';
import s from '../styles/Projects.module.css';
import Menu from '@/GlobalComponents/menu';
import { FaMedal, FaRecycle, FaHashtag } from 'react-icons/fa';
export default function Projects({ setFocus, focus }) {
  const [activateMenu, setActivateMenu] = useState(false);
  const [position, setPosition] = useState('auto auto auto auto');
  const projects = [
    {
      tag: 'MACH',
      title: 'Project: Harmonia',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam nihil harum doloribus animi saepe.',
      avatar: [
        'https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png',
        'https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png',
        'https://i1.adis.ws/i/canon/canon-ef-85mm-f1.4l-is-usm-sample-031-new-hero_f94a560c4aa4410698177eaa61d696c8?$hero-header-half-16by9-dt-jpg$',
      ],
    },
    {
      tag: 'MACH',
      title: 'Project: Harmonia',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam nihil harum doloribus animi saepe.',
      avatar: [
        'https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png',
        'https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png',
        'https://i1.adis.ws/i/canon/canon-ef-85mm-f1.4l-is-usm-sample-031-new-hero_f94a560c4aa4410698177eaa61d696c8?$hero-header-half-16by9-dt-jpg$',
      ],
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
    setFocus('Project');
  };
  useEffect(() => {
    if (focus != 'Project') {
      setActivateMenu(false);
    }
  }, [focus]);
  const handleRespond = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className={s.projects}>
        {projects.map(({ tag, title, desc, avatar }) => (
          <div className={s.project} onContextMenu={(e) => handleMenu(e)}>
            <div className={s.marker}>{tag}</div>
            <div className={s.title}>{title}</div>
            <div className={s.desc}>{desc}</div>
            <div className={s.niggers}></div>
            <div className={s.section}>
              <div className={s.project_avatar}>
                {avatar.map((elem) => (
                  <img src={elem} />
                ))}
              </div>
              <div className={s.button}>Join Code</div>
            </div>
          </div>
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
