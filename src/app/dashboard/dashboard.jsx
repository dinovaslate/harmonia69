import React from 'react';
import { useRef } from 'react';
export default function Dashboard() {
  return (
    <>
      <div className="backdrop"></div>
      <div className="ambient"></div>
      <div className="ambient2"></div>
      <div className="el-wrap x">
        <svg
          className="el y"
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 700 700"
          width="700"
          height="700"
          opacity="1"
        >
          <defs>
            <linearGradient
              gradientTransform="rotate(150, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="ffflux-gradient"
            >
              <stop
                stop-color="hsl(280, 42%, 35%)"
                stop-opacity="1"
                offset="0%"
              ></stop>
              <stop
                stop-color="hsl(350, 51%, 64%)"
                stop-opacity="1"
                offset="100%"
              ></stop>
            </linearGradient>
            <filter
              id="ffflux-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.006 0.003"
                numOctaves="2"
                seed="2"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feGaussianBlur
                stdDeviation="12 0"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                edgeMode="duplicate"
                result="blur"
              ></feGaussianBlur>
              <feBlend
                mode="color-dodge"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                in2="blur"
                result="blend"
              ></feBlend>
            </filter>
          </defs>
          <rect
            width="700"
            height="700"
            fill="url(#ffflux-gradient)"
            filter="url(#ffflux-filter)"
          ></rect>
        </svg>
      </div>
      <div className="el-wrap x">
        <svg
          id="svg2"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 700 700"
          width="700"
          height="700"
          opacity="1"
        >
          <defs>
            <linearGradient
              gradientTransform="rotate(150, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="ffflux-gradient"
            >
              <stop
                stop-color="hsl(247, 38%, 30%)"
                stop-opacity="1"
                offset="0%"
              ></stop>
              <stop
                stop-color="rgb(102, 52, 127)"
                stop-opacity="1"
                offset="100%"
              ></stop>
            </linearGradient>
            <filter
              id="ffflux-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.006 0.003"
                numOctaves="2"
                seed="2"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feGaussianBlur
                stdDeviation="15 0"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                edgeMode="duplicate"
                result="blur"
              ></feGaussianBlur>
              <feBlend
                mode="color-dodge"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                in2="blur"
                result="blend"
              ></feBlend>
            </filter>
          </defs>
          <rect
            width="700"
            height="700"
            fill="url(#ffflux-gradient)"
            filter="url(#ffflux-filter)"
          ></rect>
        </svg>
      </div>
      <div className="nav-wrapper">
        <div className="left">
          <i className="fa-solid fa-bars sidetrigger"></i>
          <b style="margin-left: 0.6rem; font-size: 1.3rem">MACH </b>
        </div>
        <div className="right">
          <div className="action mobile input-trigger">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="action">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="input-wrapper desktop input-trigger">
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <input
              type="text"
              placeholder="Search..."
              className="input"
              readonly
            />
            <div className="label" style="color: white">
              Ctrl+K
            </div>
          </div>
          <div className="action avatar">
            <i className="fa-solid fa-user"></i>
            <div className="texts">
              <b>Btria Ayu</b>
              <sub>Piket Senin</sub>
            </div>
            <div className="logout">Logout</div>
          </div>
        </div>
      </div>
      <div className="modal">
        <i className="fa-solid fa-circle-xmark escp input-trigger"></i>
        <i className="fa-solid fa-magnifying-glass icon"></i>
        <input type="text" placeholder="Search..." className="input" />
      </div>
      <div className="FAB mobile">
        <i className="fa-solid fa-newspaper"></i>
        <div className="actions-FAB">
          <div className="button">
            <i className="fa-solid fa-house"></i>
          </div>
          <div className="button">
            <i className="fa-solid fa-pen"></i>
          </div>
          <div className="button upload-trigger">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      <div className="sidenav">
        <i className="fa-solid fa-circle-xmark icon sidetrigger"></i>
        <h1 style="color: white; font-weight: 300">SOSMED</h1>
        <div className="button-sd">
          <i className="fa-brands fa-instagram"></i> Instagram
        </div>
        <div className="button-sd">
          <i className="fa-brands fa-twitter"></i> Twitter
        </div>
        <div className="button-sd">
          <i className="fa-brands fa-deviantart"></i>Deviant Art
        </div>
        <div className="button-sd">
          <i className="fa-brands fa-youtube"></i>Youtube
        </div>
      </div>
      <div className="bottom-nav desktop">
        <div className="action" style="border: 0; border-radius: 20px 0 0 20px">
          <i className="fa-solid fa-house"></i>
        </div>
        <div className="action">
          <i className="fa-solid fa-newspaper"></i>
        </div>
        <div className="action">
          <i className="fa-solid fa-pen"></i>
        </div>
        <div
          className="action upload-trigger"
          style="border-radius: 0 20px 20px 0"
        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </>
  );
}
