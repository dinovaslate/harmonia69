import React from 'react';
import s from '../Globalstyles/sidebar.module.css';
import {
  FaInstagram,
  FaTwitter,
  FaDeviantart,
  FaYoutube,
  FaTimesCircle,
} from 'react-icons/fa';
import { useEffect, useRef } from 'react';
export default function Side({ SideNavStatus, activateSideNav }) {
  const parrentRef = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (parrentRef.current.contains(e.target)) return;
      activateSideNav(false);
    });
  }, []);
  return (
    <div
      className={`${s.sidenav} ${SideNavStatus && s.sidenav_active}`}
      ref={parrentRef}
    >
      <FaTimesCircle
        className={s.icon}
        style={{ color: 'white' }}
        onClick={() => activateSideNav(false)}
      />
      <h1 style={{ color: 'white', fontWeight: '300', marginTop: '2rem' }}>
        SOSMED
      </h1>
      <div className={`${s.button_sd} ${SideNavStatus && s.button_d_active} `}>
        <FaInstagram /> Instagram
      </div>
      <div className={`${s.button_sd} ${SideNavStatus && s.button_d_active} `}>
        <FaTwitter /> Twitter
      </div>
      <div className={`${s.button_sd} ${SideNavStatus && s.button_d_active} `}>
        <FaDeviantart /> Deviant Art
      </div>
      <div className={`${s.button_sd} ${SideNavStatus && s.button_d_active} `}>
        <FaYoutube /> Youtube
      </div>
    </div>
  );
}
