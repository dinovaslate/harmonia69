import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { FaHouseUser, FaPen, FaCalendarDay, FaNewspaper } from 'react-icons/fa';
import s from '../Globalstyles/fab.module.css';
export default function FAB() {
  const [active, setActive] = useState(false);
  const sref = useRef();
  const parrentRef = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (parrentRef.current.contains(e.target)) return;
      setActive(false);
    });
  }, []);
  const toggle = (e) => {
    if (!sref.current.contains(e.target)) {
      setActive((active) => !active);
    }
  };
  return (
    <>
      <div
        className={`${s.FAB} mobile`}
        onClick={(e) => toggle(e)}
        ref={parrentRef}
      >
        <FaNewspaper />
        <div className={s.actions_FAB} ref={sref}>
          <div className={`${s.button} ${active && s.button_active}`}>
            <FaHouseUser />
          </div>
          <div className={`${s.button} ${active && s.button_active}`}>
            <FaPen />
          </div>
          <div className={`${s.button} ${active && s.button_active}`}>
            <FaCalendarDay />
          </div>
        </div>
      </div>
    </>
  );
}
