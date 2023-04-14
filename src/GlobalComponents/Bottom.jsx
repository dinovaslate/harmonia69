import React from 'react';
import s from '../Globalstyles/bottom.module.css';
import {
  FaHouseUser,
  FaNewspaper,
  FaPen,
  FaCalendar,
  FaImages,
  FaPlus,
} from 'react-icons/fa';
import Link from 'next/link';
export default function Bottom({ setActive }) {
  return (
    <>
      <div className={`${s.bottom_nav} desktop`}>
        <Link href="/gallery" style={{ display: 'contents' }}>
          <div
            className={`${s.action} ${s.action_first}`}
            style={{ border: 0, borderRadius: '20px 0 0 20px' }}
          >
            <FaImages style={{ color: 'white' }} />
          </div>
        </Link>
        <Link href="/" style={{ display: 'contents' }}>
          <div className={s.action}>
            <FaNewspaper />
          </div>
        </Link>
        <div className={s.action}>
          <FaPen />
        </div>
        <div
          className={`${s.action} ${s.action_last}`}
          onClick={() => setActive(true)}
        >
          <FaPlus />
        </div>
      </div>
    </>
  );
}
