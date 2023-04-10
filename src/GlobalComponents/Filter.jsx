'use client';

import React from 'react';
import { FaFilter } from 'react-icons/fa';
import s from '../Globalstyles/Filter.module.css';
import Option from './Option';
import { useState, useRef, useEffect } from 'react';
export default function Filter({ options }) {
  const [active, setActive] = useState(false);
  const sref = useRef();
  const parrentRef = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (parrentRef.current && parrentRef.current.contains(e.target)) return;
      setActive(false);
    });
  }, []);
  const toggle = (e) => {
    if (!sref.current.contains(e.target)) {
      setActive((active) => !active);
    }
  };
  return (
    <div className={`${s.filter}`} ref={parrentRef} onClick={(e) => toggle(e)}>
      <FaFilter />
      Filter By
      <div className={`${s.options} ${active && s.options_active}`} ref={sref}>
        {options.map(({ title, items }) => (
          <Option title={title} items={items} />
        ))}
      </div>
    </div>
  );
}
