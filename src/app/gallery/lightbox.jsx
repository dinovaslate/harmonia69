import React from 'react';
import s from '../styles/gallery.module.css';
function Lightbox({}) {
  return (
    <>
      <div className={s.lightbox}>
        <div className={s.content}>
          <img
            id="img"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
          <div className={s.avatar3}>
            <img
              className={s.avatar3_img}
              src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg"
            />
            Kiran Mahmud
          </div>
        </div>
      </div>
    </>
  );
}

export default Lightbox;
