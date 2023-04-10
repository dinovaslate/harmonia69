import React from 'react';
import s from '../styles/display.module.css';
import { FaArrowLeft } from 'react-icons/fa';
export default function Display({ active, setActive }) {
  return (
    <div className={`${active && s['blog-active']} ${s['blog']}`}>
      <div className={s['blog-container']}>
        <div className={s['back']} onClick={() => setActive(false)}>
          <FaArrowLeft />
        </div>
        <div className={s['blog-wrapper']}>
          <h1 className={s['blog-title']}>
            Murid SMAN 2 Tangerang Selatan Memenangkan Perlombaan
          </h1>
          <p className={s['blog-date']}>Selasa, 21 Maret 2023</p>
          <img
            className={s['blog-image']}
            alt=""
            src="https://cdn-2.tstatic.net/wartakota/foto/bank/images/belasan-siswasiswi-sman-2-kota-tangerang-selatan.jpg"
          />
          <p className={s['blog-date']}>Source: "SMAN2 Tangerang Selatan"</p>
          <div className={s['text-wrapper']}>
            <p className={s['blog-content']}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."{' '}
            </p>
            <p className={s['blog-content']}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p className={s['blog-content']}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p className={s['blog-content']}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p className={s['blog-content']}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>

        <div className={s['side-container']}>
          <div className={s['side-wrapper']}>
            <h1 className={s['side-title']}>Hot News</h1>
            <div className={s['side-card']}>
              <img
                className={s['side-img']}
                src="https://i.pcmag.com/imagery/reviews/02lcg0Rt9G3gSqCpWhFG0o1-2..v1656623239.jpg"
                alt=""
              />
              <div className={s['side-txt-wrap']}>
                <p className={s['side-text']}>
                  Ini adalah kumpulan laptop-laptop yang bagus di tahun 2023
                </p>
                <p className={s['side-date']}>21 Maret 2023</p>
              </div>
            </div>
            <div className={s['side-card']}>
              <img
                className={s['side-img']}
                src="https://img.antaranews.com/cache/730x487/2023/04/10/Raker-Komisi-I-DPR-dengan-Menkominfo-10042023-gp-3.jpg"
                alt=""
              />
              <div className={s['side-txt-wrap']}>
                <p className={s['side-text']}>
                  Ini adalah kumpulan laptop-laptop yang bagus di tahun 2023
                </p>
                <p className={s['side-date']}>21 Maret 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
