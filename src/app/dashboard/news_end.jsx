import React from 'react'

export default function news_end() {
  return (
    <>
    document.querySelectorAll('.input-trigger').forEach((el) =>
      el.addEventListener('click', () => {
        document.querySelector('.backdrop').classList.toggle('active');
        document.querySelector('.modal').classList.toggle('active');
      })
    );
    document
      .querySelector('.action.avatar')
      .addEventListener('mouseover', () => {
        document.querySelector('.logout').classList.add('active');
      });
    document
      .querySelector('.action.avatar')
      .addEventListener('mouseout', () => {
        document.querySelector('.logout').classList.remove('active');
      });
    document.querySelector('.FAB').addEventListener('click', (e) => {
      e.currentTarget
        .querySelector('.actions-FAB')
        .classList.toggle('active');
    });
    document.querySelectorAll('.sidetrigger').forEach((el) =>
      el.addEventListener('click', () => {
        document.querySelector('.backdrop').classList.toggle('active');
        document.querySelector('.sidenav').classList.toggle('active');
      })
    );
    </>
  )
}
 //frc