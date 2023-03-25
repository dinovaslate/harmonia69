import React from 'react';
import style from '../styles/Projects.module.css';
import Project from './Project';
export default function Projects() {
  const projects = [
    {
      tag: 'MACH',
      title: 'Project: Harmonia',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam nihil harum doloribus animi saepe.',
      avatar: [
        'https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png',
        'https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png',
        'https://i1.adis.ws/i/canon/canon-ef-85mm-f1.4l-is-usm-sample-031-new-hero_f94a560c4aa4410698177eaa61d696c8?$hero-header-half-16by9-dt-jpg$',
      ],
    },
    {
      tag: 'MACH',
      title: 'Project: Harmonia',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam nihil harum doloribus animi saepe.',
      avatar: [
        'https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png',
        'https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png',
        'https://i1.adis.ws/i/canon/canon-ef-85mm-f1.4l-is-usm-sample-031-new-hero_f94a560c4aa4410698177eaa61d696c8?$hero-header-half-16by9-dt-jpg$',
      ],
    },
  ];
  return (
    <div className={style.projects}>
      {projects.map((elem) => (
        <Project {...elem} />
      ))}
    </div>
  );
}
