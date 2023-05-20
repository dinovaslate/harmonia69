'use client';

import React, { useEffect, useState } from 'react';
import s from '../styles/Projects.module.css';
import Menu from '@/GlobalComponents/menu';
import { FaMedal, FaRecycle, FaHashtag } from 'react-icons/fa';
import { auth } from '../../../services/firebase';
import CreateProject from './CreateProject';
export default function Projects({ setFocus, focus }) {
  const [activateMenu, setActivateMenu] = useState(false);
  const [position, setPosition] = useState('auto auto auto auto');
  const [project, setProject] = useState(auth);
  const [projectList, setProjectList] = useState([]);
  // const projects = [
  //   {
  //     tag: 'MACH',
  //     title: 'Project: Harmonia',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam nihil harum doloribus animi saepe.',
  //   },
  //   {
  //     tag: 'MACH',
  //     title: 'Project: Harmonia',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam nihil harum doloribus animi saepe.',
  //   },
  // ];
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
        {/* {projects.map(({}) => (
          <div className={s.project} onContextMenu={(e) => handleMenu(e)}>
            <div className={s.marker}>{}</div>
            <div className={s.title}>{}</div>
            <div className={s.desc}>{}</div>
            <div className={s.niggers}></div>
            <div className={s.section}>
              <div className={s.tag}>Capacity: 5</div>
              <div className={s.button}>Join Code</div>
            </div>
          </div>
        ))} */}
        
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
