'use client';
import { FaBars, FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import React, { useEffect, useState } from 'react';
import s from '../Globalstyles/navbar.module.css';
import Approval from './Approval';
import { auth } from '../../services/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
export default function Navbar({ activateSideNav, activateSearch }) {
  const [active, setActive] = useState(false);
  const [ user, setUser ] = useAuthState(auth);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const result  = await signInWithPopup(auth, provider);

  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className={s.nav_wrapper}>
      <div className={s.left}>
        <FaBars onClick={() => activateSideNav(true)} />
        <b style={{ marginLeft: '0.6rem', fontSize: '1.3rem' }}>MACH </b>
      </div>
      <div className={s.right}>
        <div
          className={`${s.action} mobile`}
          onClick={() => activateSearch(true)}
        >
          <FaSearch />
        </div>

        <div
          className={s.action}
          onMouseOver={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <FaBell />
          <Approval active={active} />
        </div>
        <div
          className={`${s.input_wrapper} navbar desktop`}
          onClick={() => activateSearch(true)}
        >
          <FaSearch className={s.icon} />
          <input
            type="text"
            placeholder="Search..."
            className={s.input}
            readOnly
          />
          <div className={s.label}>Ctrl+K</div>
        </div>
        <div className={`${s.action} ${s.avatar}`}>
          <FaUser />
          <div className={s.texts}>
            <b>Btria Ayu</b>
            <sub>Piket Senin</sub>
          </div>
        </div>
        <div className={s.login} onClick={login}>
         <FcGoogle/>
         <b className={s.login_txt}>Sign In</b>
        </div>
        <div 
          className={s.account}
          onClick={() => auth.signOut().then(() => {
            alert('Logout')
          })}
        >
          <div className={s.acc_wrap}>
            <img className={s.accImg} src={user?.photoURL} alt={user?.displayName}/>
            <BsChevronDown style={{width: '15px'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
