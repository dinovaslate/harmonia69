'use client';

import './globals.css'
import { FaBell, FaBars, FaSearch, FaHouseUser, FaPen, FaCalendar, FaNews, FaUser } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
export const metadata = {
  title: 'Harmonia',
  description: 'Created by Haekal Dinova & Alfath ',
}

export default function RootLayout({ children }) {
  useEffect(() => {
  
  }, [])
  return (
    <html lang="en">
      <body>
      <div className="backdrop"></div>
        <div className="nav-wrapper">
          <div className="left">
            <FaBars/>
            <b style={{marginLeft: '0.6rem', fontSize: '1.3rem'}}>MACH </b>
          </div>
          <div className="right">
            <div className="action mobile input-trigger">
              <FaSearch className="icon"/>
            </div>

            <div className="action">
              <FaBell/>
            </div>
            <div className="input-wrapper desktop input-trigger">
            <FaSearch className="icon"/>
              <input type="text" placeholder="Search..." className="input" readOnly />
              <div className="label">Ctrl+K</div>
            </div>
            <div className="action avatar">
              <FaUser/>
              <div className="texts">
                <b>Btria Ayu</b>
                <sub>Piket Senin</sub>
              </div>
            </div>
          </div>
        </div>
        <div className="modal">
          <i className="fa-solid fa-circle-xmark escp input-trigger"></i>
          <FaSearch/>
          <input type="text" placeholder="Search..." className="input" />
        </div>
        <div className="FAB mobile">
          
          <div className="actions-FAB">
            <div className="button">
              <FaHouseUser />
            </div>
            <div className="button">
              <FaPen/>
            </div>
            <div className="button">
              <i className="fa-solid fa-calendar-days"></i>
            </div>
          </div>
        </div>
        <div className="sidenav">
          <i className="fa-solid fa-circle-xmark icon sidetrigger"></i>
          <h1 style={{color: 'white', fontWeight: '300'}}>SOSMED</h1>
          <div className="button-sd">
            <i className="fa-brands fa-instagram"></i> Instagram
          </div>
          <div className="button-sd"><i className="fa-brands fa-twitter"></i> Twitter</div>
          <div className="button-sd">
            <i className="fa-brands fa-deviantart"></i>Deviant Art
          </div>
          <div className="button-sd"><i className="fa-brands fa-youtube"></i>Youtube</div>
        </div>
        <div className="bottom-nav desktop">
          <div className="action action-first" style={{border: 0, borderRadius: '20px 0 0 20px'}}>
             <FaHouseUser />
          </div>
          <div className="action">
            <a href="gallery.html"><i className="fa-solid fa-newspaper"></i></a>
          </div>
          <div className="action">
            <i className="fa-solid fa-pen"></i>
          </div>
          <div className="action action-last" >
            <i className="fa-solid fa-calendar-days"></i>
          </div>
        </div>
        <div className="news-container">
          {children}
        </div>
      </body>
    </html>
  )
}
