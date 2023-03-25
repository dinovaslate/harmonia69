import React from 'react';
import { useRef, useEffect } from 'react';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import s from '../styles/modal.module.css';
export default function Modal({ SearchStatus, activateSearch }) {
  const parrentRef = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (parrentRef.current.contains(e.target)) return;
      activateSearch(false);
    });
  }, []);
  return (
    <div
      className={`${s.modal} ${SearchStatus && s.modal_active} `}
      ref={parrentRef}
    >
      <FaTimesCircle className={s.escp} onClick={() => activateSearch(false)} />
      <FaSearch className={s.iconista} />
      <input type="text" placeholder="Search..." className={s.input} />
    </div>
  );
}
