'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { EDITOR_JS_TOOLS } from '../tools';
import { FaFile } from 'react-icons/fa';
import s from '../styles/display.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import Editor from './Editor';
import { Context } from '../Context/LoginContext';
import { Data } from '../CustomHooks/useGetData';
import { where } from 'firebase/firestore';
export default function CreateDisplay({ active, setActive }) {
  const [content, setContent] = useState([]);
  const LoginContext = useContext(Context);
  const DraftRef = useRef();
  useEffect(() => {
    if (!LoginContext.user) return;
    console.log(LoginContext.user);
    const data = new Data((error) => alert(error));
    data.query('articles', [where('author', '==', LoginContext.user.uid)], (data) => (DraftRef.current = data));
  }, [LoginContext.user]);
  return (
    <div className={`${active && s['blog-active']} ${s['blog']}`}>
      <div className={s['blog-container']}>
        <div className={s['back']} onClick={() => setActive(false)}>
          <FaArrowLeft />
        </div>
        <div className={s['blog-wrapper']}>
          <Editor content={content} isActive={active} />
        </div>

        <div className={s['side-container']}>
          <div className={s['side-wrapper']}>
            <h1 className={s['side-title']}>Hot News</h1>
            <div className={s['side-card']}>
              <img
                className={s['side-img']}
                src="https://i.guim.co.uk/img/static/sys-images/Admin/BkFill/Default_image_group/2011/6/29/1309363500324/Elliot-Gleave-aka-Example-007.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ed7209820989b42876f69f138ba740e2"
                alt=""
              />
              <div className={s['side-txt-wrap']}>
                <p className={s['side-text']}>This is an example of a side page</p>
                <p className={s['side-date']}>21 Maret 2023</p>
              </div>
            </div>
            <div className={s['side-card']}>
              <img
                className={s['side-img']}
                src="https://i.guim.co.uk/img/static/sys-images/Admin/BkFill/Default_image_group/2011/6/29/1309363500324/Elliot-Gleave-aka-Example-007.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ed7209820989b42876f69f138ba740e2"
                alt=""
              />
              <div className={s['side-txt-wrap']}>
                <p className={s['side-text']}>This is an example of a side page</p>
                <p className={s['side-date']}>21 Maret 2023</p>
              </div>
            </div>
          </div>
          <div className={s['side-wrapper']}>
            <h1 className={s['side-title']}>Draft</h1>
            {DraftRef.current?.map(({ author, date, content }) => {
              <div className={s['side-card']} onClick={() => setContent(content)}>
                <FaFile className={s['side-icon']} />
                <div className={s['side-txt-wrap']}>
                  <p className={s['side-text']}>{date}</p>
                  <p className={s['side-date']}>{author}</p>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
