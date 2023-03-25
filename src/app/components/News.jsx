import React from 'react';
import New from './New';

export default function News() {
  const news = [
    {
      src: 'https://cdn.glitch.global/7430fc43-4325-457b-a220-181fdbbe4b11/logo.png?v=1678587387015',
      title: 'Among Us',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo dignissimos ab animi, natus rerum a? Dolorem, possimus perspiciatis quis nobis unde ea, ratione corrupti odit eius sequi quo officia?',
      tags: ['Lorem', 'Ipsum'],
    },
    {
      src: 'https://cdn.glitch.global/7430fc43-4325-457b-a220-181fdbbe4b11/logo.png?v=1678587387015',
      title: 'Iam Gay',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo dignissimos ab animi, natus rerum a? Dolorem, possimus perspiciatis quis nobis unde ea, ratione corrupti odit eius sequi quo officia?',
      tags: ['Lorem', 'Ipsum'],
    },
  ];
  return (
    <>
      {news.map((elem) => (
        <New {...elem} />
      ))}
    </>
  );
}
