import React from 'react';
import s from '../styles/dashboards.module.css';
import '../globals.css';
import {} from 'react-icons';
export default function Dashboards() {
  return (
    <>
      <div className={s.sidenav}>
        {/* <i className="fa-solid fa-circle-xmark icon sidetrigger"></i> */}
        <h1 style="color: white; font-weight: 300">SOSMED</h1>
        <div className={s.button_sd}>Instagram</div>
        <div classname={s.button_sd}>Twitter</div>
        <div classname={s.button_sd}>Deviant Art</div>
        <div classname={s.button_sd}>Youtube</div>
      </div>
      <div className={`${s.bottom_nav} ${s.desktop}`}>
        <div
          classname={s.action}
          style={{ border: '0', borderRadius: '20px 0 0 20px' }}
        >
          <i className="fa-solid fa-house"></i>
        </div>
        <div classname={s.action}>
          <i className="fa-solid fa-newspaper"></i>
        </div>
        <div classname={s.action}>
          <i className="fa-solid fa-pen"></i>
        </div>
        <div
          className={`${s.action} ${s.upload_trigger}`}
          style="border-radius: 0 20px 20px 0"
        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>

      <div classname={s.news_container}>
        <div className={s.approval}>
          <div classname={s.card}>
            <h3>
              Barco501
              <div classname={s.sub}>An MACH Student</div>
            </h3>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div classname={s.tags}>
              <div classname={s.tag}>Perspective-1</div>
              <div classname={s.tag}>Photography</div>
            </div>
            <div classname={s.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              numquam architecto ipsum ipsam possimus dignissimos reprehenderit,
              magnam ducimus nisi quae.
            </div>
            <div classname={s.buttons}>
              <div classname={s.button}>Approve</div>
              <div classname={s.button}>Decline</div>
            </div>
          </div>
          <div classname={s.card}>
            <h3>
              Barco501
              <div classname={s.sub}>An MACH Student</div>
            </h3>
            <img
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
              alt=""
            />
            <div classname={s.tags}>
              <div classname={s.tag}>Perspective-1</div>
              <div classname={s.tag}>Photography</div>
            </div>
            <div classname={s.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              numquam architecto ipsum ipsam possimus dignissimos reprehenderit,
              magnam ducimus nisi quae.
            </div>
            <div classname={s.buttons}>
              <div classname={s.button}>Approve</div>
              <div classname={s.button}>Decline</div>
            </div>
          </div>
          <div classname={s.card}>
            <h3>
              Barco501
              <div classname={s.sub}>An MACH Student</div>
            </h3>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div classname={s.tags}>
              <div classname={s.tag}>Perspective-1</div>
              <div classname={s.tag}>Photography</div>
            </div>
            <div classname={s.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              numquam architecto ipsum ipsam possimus dignissimos reprehenderit,
              magnam ducimus nisi quae.
            </div>
            <div classname={s.buttons}>
              <div classname={s.button}>Approve</div>
              <div classname={s.button}>Decline</div>
            </div>
          </div>
          <div classname={s.card}>
            <h3>
              Barco501
              <div classname={s.sub}>An MACH Student</div>
            </h3>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div classname={s.tags}>
              <div classname={s.tag}>Perspective-1</div>
              <div classname={s.tag}>Photography</div>
            </div>
            <div classname={s.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              numquam architecto ipsum ipsam possimus dignissimos reprehenderit,
              magnam ducimus nisi quae.
            </div>
            <div classname={s.buttons}>
              <div classname={s.button}>Approve</div>
              <div classname={s.button}>Decline</div>
            </div>
          </div>
        </div>
        <div classname={s.news_title}>Images</div>
        <div classname={s.dashboard_wrapper}>
          <table>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Response</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Image.jpg</td>
              <td>Sunset</td>
              <td>Sunshine in the morning</td>
              <td>
                <button classname={s.d_btn}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Image.jpg</td>
              <td>Sunset</td>
              <td>Sunshine in the morning</td>
              <td>
                <button classname={s.d_btn}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Image.jpg</td>
              <td>Sunset</td>
              <td>Sunshine in the morning</td>
              <td>
                <button classname={s.d_btn}>Delete</button>
              </td>
            </tr>
          </table>
        </div>
        <div classname={s.news_title}>News-Article</div>
        <div classname={s.dashboard_wrapper}>
          <table>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Response</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Image.jpg</td>
              <td>Sunset</td>
              <td>Sunshine in the morning</td>
              <td>
                <button classname={s.d_btn}>Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
