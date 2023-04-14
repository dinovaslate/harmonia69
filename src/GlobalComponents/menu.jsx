import React, { useRef, useCallback, useEffect, useState } from 'react';
import s from '../Globalstyles/menu.module.css';
import {
  FaMedal,
  FaTrash,
  FaRecycle,
  FaCaretRight,
  FaHashtag,
} from 'react-icons/fa';
export default function Menu({
  position,
  active,
  setActive,
  handleRespond,
  option,
}) {
  const [focus, setFocus] = useState(0);
  const uploadRef = useRef();
  const bubble = useCallback((e) => {
    if (uploadRef.current && uploadRef.current.contains(e.target)) return;
    console.log('Called');
    setActive(false);
  }, []);
  useEffect(() => {
    document.body.addEventListener('click', bubble);
    return () => {
      document.body.removeEventListener('click', bubble);
    };
  }, []);

  return (
    <>
      <div
        className={s['menu']}
        style={{
          '--inset': position,
          display: active ? 'flex' : 'none',
        }}
        ref={uploadRef}
      >
        <div className={s['background']}></div>
        {option.map(({ title, icon, child = [] }, index) => (
          <li
            className={s['menu-list']}
            onClick={() => child.length != 0 || handleRespond({ title })}
            onMouseOver={() => setFocus(index)}
            onMouseOut={() => setFocus(Number.MAX_SAFE_INTEGER)}
          >
            <div className={s['title']}>
              {icon} {title}
            </div>
            {child.length != 0 && <FaCaretRight />}
            {child.length != 0 && (
              <Menu
                active={focus == index}
                setActive={setActive}
                position={`${2.8 * index}rem auto auto 100%`}
                handleRespond={(respond) => handleRespond({ title, respond })}
                option={child}
              />
            )}
          </li>
        ))}
      </div>
    </>
  );
}
