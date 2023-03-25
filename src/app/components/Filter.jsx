'use client';

import React from 'react';
import { FaFilter } from 'react-icons/fa';
import s from '../styles/Filter.module.css';
import Option from './Option';
import { useState, useRef, useEffect } from 'react';
export default function Filter() {
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
