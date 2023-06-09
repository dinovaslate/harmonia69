'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Projects from './components/Projects';
import Filter from '../GlobalComponents/Filter';
import News from './components/News';
import Ambient from '@/GlobalComponents/Ambient';
import PageWrapper from '@/GlobalComponents/PageWrapper';
import { useState, useEffect, useContext } from 'react';
import Display from './components/Display';
import CreateProject from './components/CreateProject';
import CreateDisplay from './components/createNews';
import { Context } from './Context/LoginContext';
export default function Home() {
  const [focus, setFocus] = useState('');
  const [active, setActive] = useState(false);
  const [editor, setEditor] = useState(false);
  const [projectForm, setProjectForm] = useState(false);
  const LoginContext = useContext(Context);
  const options = [
    {
      id: 1,
      title: 'Style',
      items: ['Digital', 'Traditional', 'Photography'],
    },
    {
      id: 2,
      title: 'Color',
      items: ['Red', 'Yellow', 'Green'],
    },
    {
      id: 2,
      title: 'Background',
      items: ['Red', 'Yellow', 'Green'],
    },
  ];
  useEffect(() => {
    document.body.classList.toggle('active');
  }, [active]);
  return (
    <PageWrapper>
      <div className={`backdrop ${projectForm && 'active'}`}></div>
      <CreateDisplay setActive={setEditor} active={editor} />
      <Display active={active} setActive={setActive} />
      <CreateProject setActive={setProjectForm} active={projectForm} />
      <Ambient />
      <div className={styles.wrapper}>
        <h1 className={styles.news_title}>Recent Project</h1>
        <button style={{ cursor: 'pointer' }} onClick={() => setProjectForm(true)}>
          Create New
        </button>
      </div>
      <Projects focus={focus} setFocus={setFocus} />
      <div className={styles.wrapper}>
        <h1 className={styles.news_title}>News</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {LoginContext.user && (
            <button style={{ cursor: 'pointer' }} onClick={() => setEditor(true)}>
              Create New
            </button>
          )}
          <Filter options={options} />
        </div>
      </div>
      <News focus={focus} setFocus={setFocus} setActive={setActive} />
    </PageWrapper>
  );
}
