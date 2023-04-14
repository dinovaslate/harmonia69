'use client';
import { FaBars, FaSearch, FaBell, FaUser } from 'react-icons/fa';
import React, { useState } from 'react';
import s from '../Globalstyles/navbar.module.css';
import Approval from './Approval';
export default function Navbar({ activateSideNav, activateSearch }) {
  const [active, setActive] = useState(false);
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

        <div
          className={s.action}
          onMouseOver={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <FaBell />
          <Approval active={active} />
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
