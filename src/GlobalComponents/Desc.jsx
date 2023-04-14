import React from 'react';
import s from '../Globalstyles/upload.module.css';
import { FaTag, FaBack } from 'react-icons/fa';
export default function Desc({ setActive }) {
  return (
    <>
      <div className={s['tab']}>
        <label className={s['label']} for="">
          Add Description
        </label>
        <textarea className={s['textarea']} name="" id="" cols="30" rows="10">
          Enter Description
        </textarea>
        <label className={s['label']} for="">
          Add Tag
        </label>
        <div className={s['input-wrapper']}>
          <FaTag className={s['icon']} />
          <input
            type="text"
            placeholder="Enter Tag name"
            className={`${s['input']} ${s['input-tag']}`}
          />
          <div className={s['button']}>Add</div>
        </div>
        <div className={s['box']}>
          <div className={s['tags']}>
            <div className={s['tag']}>James Bond</div>
            <div className={s['tag']}>nIGGER</div>
            <div className={s['tag']}>James Bond bARCO</div>
            <div className={s['tag']}>es teh</div>
            <div className={s['tag']}>bb</div>
            <div className={s['tag']}>James Bond niGEER</div>
            <div className={s['tag']}>James Bond bARCO</div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div className={s['transition']} onClick={() => setActive(false)}>
            Back
          </div>
        </div>
      </div>
    </>
  );
}
