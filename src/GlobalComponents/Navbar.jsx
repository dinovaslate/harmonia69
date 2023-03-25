'use client';
import { FaBars, FaSearch, FaBell, FaUser } from 'react-icons/fa';
import React from 'react';
import s from '../styles/navbar.module.css';
export default function Navbar({ activateSideNav, activateSearch }) {
  return (
    <div className={s.nav_wrapper}>
      <div className={s.left}>
        <FaBars onClick={() => activateSideNav(true)} />
        <b style={{ marginLeft: '0.6rem', fontSize: '1.3rem' }}>MACH </b>
      </div>
      <div className={s.right}>
        <div
          className={`${s.action} mobile`}
          onClick={() => activateSearch(true)}
        >
          <FaSearch />
        </div>

        <div className={s.action}>
          <FaBell />
        </div>
        <div
          className={`${s.input_wrapper} navbar desktop`}
          onClick={() => activateSearch(true)}
        >
          <FaSearch className={s.icon} />
          <input
            type="text"
            placeholder="Search..."
            className={s.input}
            readOnly
          />
          <div className={s.label}>Ctrl+K</div>
        </div>
        <div className={`${s.action} ${s.avatar}`}>
          <FaUser />
          <div className={s.texts}>
            <b>Btria Ayu</b>
            <sub>Piket Senin</sub>
          </div>
        </div>
      </div>
    </div>
  );
}
