'use clients';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import s from '../styles/createProject.module.css';
import { FaTag, FaBack, FaBook, FaUser } from 'react-icons/fa';
export default function CreateProject({ setActive, active }) {
  const uploadRef = useRef();
  const [Tag, setTag] = useState("");
  const bubble = useCallback((e) => {
    if (uploadRef.current.contains(e.target)) return;
    setActive(false);
  }, []);
  useEffect(() => {
    document.body.addEventListener('click', bubble);
    return () => {
      document.body.removeEventListener('click', bubble);
    };
  }, []);
  return (
    <div className={`${s.upload} ${active && s.upload_active}`} ref={uploadRef}>
      <div className={s['tab']}>
        <label className={s['label']} for="">
          Add Title
        </label>
        <div className={s['input-wrapper']}>
          <FaBook className={s['icon']} />
          <input
            type="text"
            placeholder="Enter Title"
            className={`${s['input']} ${s['input-tag']}`}
            style={{ width: '100%' }}
          />
        </div>
        <label className={s['label']} for="">
          Add Description
        </label>
        <textarea className={s['textarea']} name="" id="" cols="30" rows="10">
          Enter Description
        </textarea>
        <label className={s['label']} for="">
          Add Tag
        </label>
        <div className="radio" >
          <div><input type="radio" id="age1" name="age" value="30" onClick={() => setTag("MACH")} />
          <label for="age1"><b>MACH</b></label></div>
          <div><input type="radio" id="age2" name="age" value="60" onClick={() => setTag("OBSCURA")}/>
          <label for="age2"><b>OBSCURA</b></label> </div>
          <div><input type="radio" id="age3" name="age" value="100" onClick={() => setTag("YANG LAINNYA")}/>
          <label for="age3"><b>YANG LAINNYA</b></label></div>
          
          
        </div>

        <label className={s['label']} for="">
          Capacity
        </label>
        <div className={s['input-wrapper']}>
          <FaUser className={s['icon']} />
          <input
            type="text"
            placeholder="Enter Capacity"
            className={`${s['input']} ${s['input-tag']}`}
            style={{ width: '100%' }}
          />
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
    </div>
  );
}
