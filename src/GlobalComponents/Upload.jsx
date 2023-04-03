import React from 'react';
import { FaUpload, FaGlobe, FaFileImage } from 'react-icons/fa';
import s from '../styles/upload.module.css';
export default function Upload() {
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
