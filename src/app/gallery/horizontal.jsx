'use client';

import React from 'react';
import s from '../styles/gallery.module.css';
import { useRef, useState } from 'react';
import Barco from './Barco';
function Horizontal() {
  const [active, setActive] = useState();
  const Images = [
    {
      title: 'Japan',
      award: 'Greatest Art',
      rank: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Distinctio, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!',
      avatar:
        'https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg',
      name: 'Kiran Mahmud',
    },
    {
      title: 'Japan',
      award: 'Greatest Art',
      rank: 2,
      src: 'https://images.iphonephotographyschool.com/24755/1120/portrait-photography.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Distinctio, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!',
      avatar:
        'https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg',
      name: 'Kiran Mahmud',
    },
    {
      title: 'Japan',
      award: 'Greatest Art',
      rank: 3,
      src: 'https://img.freepik.com/free-photo/senior-man-face-portrait-wearing-bowler-hat_53876-148154.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Distinctio, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!',
      avatar:
        'https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg',
      name: 'Kiran Mahmud',
    },
    {
      title: 'Japan',
      award: 'Greatest Art',
      rank: 4,
      src: 'http://photographyicon.com/wp-content/uploads/2011/06/example-of-portrait-photography.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Distinctio, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!',
      avatar:
        'https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg',
      name: 'Kiran Mahmud',
    },
    {
      title: 'Japan',
      award: 'Greatest Art',
      rank: 5,
      src: 'http://photographyicon.com/wp-content/uploads/2011/06/example-of-portrait-photography.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Distinctio, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!',
      avatar:
        'https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg',
      name: 'Kiran Mahmud',
    },
  ];
  return (
    <>
      <div className={s.projects3}>
        {Images.map((prop) => (
          <Barco active={active} setActive={setActive} {...prop} />
        ))}
      </div>
    </>
  );
}

export default Horizontal;
