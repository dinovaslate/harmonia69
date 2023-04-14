import React from 'react';

export default function Ambient() {
  return (
    <>
      <div className="bg">
        <div className="ambient"></div>
        <div className="ambient2"></div>
        <div className="x">
          <img
            src={'./esvege.svg'}
            className="y"
            style={{
              position: 'fixed',
              aspectRatio: '1/1',
              borderRadius: '50%',
              right: '0%',
              left: '0%',
              top: '-20%',
              width: '400px',
              filter: 'blur(150px) contrast(120%)',
              height: 'fit-content',
              mixBlendMode: 'color-burn',
            }}
            alt="Gambar bahlul"
          />
        </div>
        <div className="x">
          <img
            src={'./esvege2.svg'}
            className="y"
            style={{
              position: 'fixed',
              aspectRatio: '1/1',
              borderRadius: '50%',
              right: '5%',
              top: '30rem',
              width: '400px',
              filter: 'blur(150px)',
              height: 'fit-content',
              mixBlendMode: 'color-burn',
            }}
            alt="Gambar Lucknut"
          />
        </div>
      </div>
    </>
  );
}
