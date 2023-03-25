'use client';
import './globals.css';
import { useState, useEffect } from 'react';
import Navbar from '@/GlobalComponents/Navbar';
import Modal from '@/GlobalComponents/Modal';
import FAB from '@/GlobalComponents/FAB';
import Side from '@/GlobalComponents/Side';
import Bottom from '@/GlobalComponents/Bottom';
export const metadata = {
  title: 'Harmonia',
  description: 'Created by Haekal Dinova & Alfath ',
};

export default function RootLayout({ children }) {
  const [SideNavStatus, activateSideNav] = useState(false);
  const [SearchStatus, activateSearch] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('active');
  }, [SideNavStatus, SearchStatus]);
  return (
    <html lang="en">
      <body>
        <div
          className={`backdrop ${(SideNavStatus || SearchStatus) && 'active'}`}
        ></div>
        <Navbar
          activateSideNav={activateSideNav}
          activateSearch={activateSearch}
        />
        <Modal SearchStatus={SearchStatus} activateSearch={activateSearch} />
        <FAB />
        <Side SideNavStatus={SideNavStatus} activateSideNav={activateSideNav} />
        <Bottom />
        <div className="news-container">{children}</div>
      </body>
    </html>
  );
}
