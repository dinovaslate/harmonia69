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
  return (
    <div className={s.upload}>
      <div className={s.tab}>
        <div className={s['D-D']}>
          <FaUpload className={s['icon']} />
          Drag and Drop or <b style={{ display: 'contents' }}>browse</b> your
          file
        </div>
        <div className={s['input-wrapper']}>
          <FaGlobe />
          <input type="text" placeholder="Enter URL" className={s['input']} />
          <div className={s['button']}>Enter</div>
        </div>
        <div className={s['loadings']}>
          <div className={s['file']}>
            <FaFileImage />
            <div className={s['status']}>
              <div className={s['filename']}>Dinova.JPEG</div>
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
          <div className={s['transition']}>Next</div>
        </div>
      </div>
    </div>
  );
}
