<<<<<<< HEAD
"use client"
import React from 'react';
import {useEffect, useState, useRef } from 'react' 
import { FaUpload, FaGlobe, FaFileImage } from 'react-icons/fa';
import s from '../styles/upload.module.css';
import firebaseApp from '../../services/firebase';
import { getDatabase, ref, child, get } from 'firebase/database'
export default function Upload() {

  const [isLoading, setIsLoading] = useState(true)
  const snapshot = useRef(null)
  const error = useRef(null)

  const getValue = async () => {
    try{
      const database = getDatabase(firebaseApp)
      const rootReference = ref(database)
      const dbGet = await get(child(rootReference, "news"))
      const dbValue = dbGet.val()
      snapshot.current = dbValue()
    } catch(getError){
      error.current = getError.message
    }
    setIsLoading(false)
    
  }

  useEffect(() => {
    getValue()
  }, [])

  if (isLoading){
    return <p>Fetching data....</p>
  }
=======
'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { FaUpload, FaGlobe, FaFileImage } from 'react-icons/fa';
import s from '../Globalstyles/upload.module.css';
import Desc from './Desc';
export default function Upload({ active, setActive }) {
  const [next, setNext] = useState(false);
  const uploadRef = useRef();
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

>>>>>>> 9478228f7deb2bc9779edd997d73714ab31c66f5
  return (
    <>
      <div
        className={`${s.upload} ${active && s.upload_active}`}
        ref={uploadRef}
      >
        <div className={s.tab} style={{ marginLeft: next && '-105%' }}>
          <div className={s['D-D']}>
            <FaUpload className={s['icon_big']} />
            Drag and Drop or <b style={{ display: 'contents' }}>browse</b> your
            file
          </div>
          <div className={s['input-wrapper']}>
            <FaGlobe className={s['icon']} />
            <input type="text" placeholder="Enter URL" className={s['input']} />
            <div className={s['button']}>Enter</div>
          </div>
          <div className={s['loadings']}>
            <div className={s['file']}>
              <FaFileImage className={s['icon_med']} />
              <div className={s['status']}>
                <div className={s['filename']}>
                  Dinova.JPEG{' '}
                  <div className={s['sub']} onClick={() => setNext(true)}>
                    Edit Description
                  </div>{' '}
                </div>
                <div className={s['progressBar']}>
                  <div className={s['value']}></div>
                </div>
                <div className={s['statistic']}>
                  <div className={s['process']}>10 MB of 72MB</div>
                  <div className={s['speed']}>10 MB/s</div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <div className={s['transition']}>Submit</div>
          </div>
        </div>
        <Desc setActive={setNext} />
      </div>
    </>
  );
}
