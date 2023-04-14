import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import s from '../Globalstyles/approval.module.css';
export default function Approval({ active }) {
  return (
    <div className={`${s.box} ${active && s.active_box}`}>
      <div className={s.content}>
        <img
          className={s.image}
          src={
            'https://images.iphonephotographyschool.com/24755/1120/portrait-photography.jpg'
          }
        />
        <div className={s.info}>
          <div className={s.title}>Looking At Me</div>
          <div className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            corrupti?
          </div>
          <div className={s.buttons}>
            <div className={s.button}>
              <FaCheck />
            </div>
            <div
              className={s.button}
              style={{ background: 'hsl(318, 38%, 25%)' }}
            >
              <FaTimes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
