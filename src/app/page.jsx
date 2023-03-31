import Image from 'next/image';
import styles from './page.module.css';
import Projects from './components/Projects';
import Filter from './components/Filter';
import News from './components/News';
export default function Home() {
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
  return (
    <main>
      <h1 className={styles.news_title}>Recent Project</h1>
      <Projects />
      <div className={styles.wrapper}>
        <h1 className={styles.news_title}>News</h1>

        <Filter options={options} />
      </div>
      <News />
    </main>
  );
}
