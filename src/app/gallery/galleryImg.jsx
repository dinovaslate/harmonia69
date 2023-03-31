'use client';

import React from 'react';
import Filter from '../components/Filter';
import s from '../styles/gallery.module.css';
function GalleryImg() {
  const images = [
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahAXUymBi7SHnIOEvCPKCUmLlzCef78EyFJGPUe1SqpX6GRTW6bMg5ZNj6KxrAyZ5dcs&usqp=CAU',
    'https://media.istockphoto.com/id/1289220949/photo/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=612x612&w=0&k=20&c=BjyPRn28F3mc6IiBCf4Ko-lFZisaNUYXBBnAcO47ZgE=',
    'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahAXUymBi7SHnIOEvCPKCUmLlzCef78EyFJGPUe1SqpX6GRTW6bMg5ZNj6KxrAyZ5dcs&usqp=CAU',
    'https://media.istockphoto.com/id/1289220949/photo/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=612x612&w=0&k=20&c=BjyPRn28F3mc6IiBCf4Ko-lFZisaNUYXBBnAcO47ZgE=',
    'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
  ];
  return (
    <>
      <div className={s.wrapper3}>
        <h1 className={s.news_title}>Gallery</h1>
        <Filter />
      </div>

      <div className={s.wrapper}>
        {images.map((elem) => (
          <img
            src={elem}
            alt=""
            className={s.item}
            onLoad={(e) => {
              let height = e.currentTarget.clientHeight;
              e.currentTarget.style.gridRow = `span ${~~(height / 10)}`;
            }}
          />
        ))}
      </div>
    </>
  );
}

export default GalleryImg;
