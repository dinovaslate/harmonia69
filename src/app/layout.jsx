'use client';
import './globals.css';
import { useState, useEffect } from 'react';
import Navbar from '@/GlobalComponents/Navbar';
import Modal from '@/GlobalComponents/Modal';
import FAB from '@/GlobalComponents/FAB';
import Side from '@/GlobalComponents/Side';
import Bottom from '@/GlobalComponents/Bottom';
import Upload from '@/GlobalComponents/Upload';
import LoginContext from './Context/LoginContext';
export const metadata = {
  title: 'Harmonia',
  description: 'Created by Haekal Dinova & Alfath ',
};

export default function RootLayout({ children }) {
  const [active, setActive] = useState(false);
  const [SideNavStatus, activateSideNav] = useState(false);
  const [SearchStatus, activateSearch] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('active');
  }, [SideNavStatus, SearchStatus]);
  return (
    <LoginContext>
      <html lang="en">
        <body>
          <div className={`backdrop ${(SideNavStatus || SearchStatus || active) && 'active'}`}></div>
          <Navbar activateSideNav={activateSideNav} activateSearch={activateSearch} />
          <Modal SearchStatus={SearchStatus} activateSearch={activateSearch} />
          <FAB />
          <Side SideNavStatus={SideNavStatus} activateSideNav={activateSideNav} />
          <Bottom setActive={setActive} />
          <Upload active={active} setActive={setActive} />
          <div className="news-container">{children}</div>
        </body>
      </html>
    </LoginContext>
  );
}
