'use clients';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import s from '../styles/createProject.module.css';
import { FaTag, FaBack, FaBook, FaUser } from 'react-icons/fa';
import  { Data } from '../CustomHooks/useGetData'
export default function CreateProject({ setActive, active }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ capacity , setCapacity ] = useState("");
  const [ tag, setTag ] = useState("");
  const [ projectList, setProjectList] = useState([]);
  const uploadRef = useRef();
  const bubble = useCallback((e) => {
    if (uploadRef.current.contains(e.target)) return;
    setActive(false);
  }, []);
  useEffect(() => {
    document.body.addEventListener('click', bubble);
    return () => {
      document.body.removeEventListener('click', bubble)
    };
  }, []);
  const data = new Data((error) => alert(error));
  const Upload = async () => { 
    await data.addData('projects', title, description, radio ,capacity).then((err) => {
      if(err){
        console.log(err)
      }else{
        alert('Your Project Submitted')
      }
    })
  }
 
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
            onChange={(e) =>{
              setTitle(e.target.value)
            }}
          />
        </div>
        <label className={s['label']} for="">
          Add Description
        </label>
        <textarea className={s['textarea']} name="" id="" cols="30" rows="10" onChange={(e) => {setDescription(e.target.value)}}>
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
            onChange={(e) => {
              setTag(e.target.value)
            }}
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
            onChange={(e) => {
              setCapacity(e.target.value)
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div className={s['project_upload']} onClick={Upload}>Submit</div>
          <div className={s['transition']} onClick={() => setActive(false)}>
            Back
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
