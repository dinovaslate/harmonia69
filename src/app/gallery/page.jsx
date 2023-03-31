import React from 'react';
import s from '../styles/gallery.module.css';
// import Gambar from './esvege.svg';
// import Gambar2 from './esvege2.svg';
export default function Gallery() {
  return (
    <>
        <div className={s.lightbox}>
            <div className={s.content}>
                <img id="img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt=""/>
                <div className={s.avatar3}>
                    <img className={s.avatar3_img} src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg"/>
                    Kiran Mahmud
                </div>
            </div>
        </div>

    <div className={s.ambient}></div>
    <div className={s.ambient}></div>
    <div className={s.x}>
      <img src={"./esvege.svg"} id= alt="Gambar bahlul"/>
    </div>
    <div className={s.x}>
      <img src={"./esvege2.svg"} alt="Gambar Lucknut"/>
    </div>

    <div className={s.projects3}>
        <div className={s.project2}>
          <div className={s.section2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg"
                alt=""
                className={s.project2_img}
              />
                
                <div className={s.wrapper2}>
                  <div className={s.ribbon}>
                    <div className={s.square}>Greatest Art</div>
                    <div className={s.tail}></div>
                    <div className={s.tail}></div>
                  </div>
                  <h1 className={s.project2_desc}>Japan <span className={s.rank}>1</span></h1>
                  <div className={s.project2_sub}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!</div>
                  <div className={s.avatar2}>
                    <img className={s.avatar_img} src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg"/>
                    Kiran Mahmud
                  </div>
                </div>
          </div>
        </div>
          <div className={s.project2}>
          <div className={s.section2}>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className={s.project2_img}
              />
               
              <div className={s.wrapper2}>
                <div className={s.ribbon}>
                  <div className={s.square}>Greatest Art</div>
                  <div className={s.tail}></div>
                  <div className={s.tail}></div>
                </div>
                <h1 className={s.project2_desc}>Japan <span className={s.rank}>1</span></h1>
                <div className={s.project2_sub}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, deleniti?</div>
                <div className={s.avatar2}>
                  <img className={s.avatar_img} src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg"/>
                  Kiran Mahmud
                </div>
              </div>
          </div>
        </div>
          <div className={s.project2}>
          <div className={s.section2}>
              <img
                src="https://vanishingportrait.com/wp-content/uploads/2019/05/tiffanytrenda-vanishingportrait-identity.jpg"
                alt=""
                className={s.project2_img}
              />
               
              <div className={s.wrapper2}>
                <div className={s.ribbon}>
                  <div className={s.square}>Greatest Art</div>
                  <div className={s.tail}></div>
                  <div className={s.tail}></div>
                </div>
                <h1 className={s.project2_desc}>Japan <span className={s.rank}>1</span></h1>
                <div className={s.project2_sub}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, deleniti?</div>
                <div className={s.avatar2}>
                  <img className={s.avatar_img} src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg"/>
                  Kiran Mahmud
                </div>
              </div>
          </div>
        </div>
         <div className={s.project2}>
          <div className={s.section2}>
              <img
                src="https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg"
                alt=""
                className={s.project2_img}
              />
               
              <div className={s.wrapper2}>
                <div className={s.ribbon}>
                  <div className={s.square}>Greatest Art</div>
                  <div className={s.tail}></div>
                  <div className={s.tail}></div>
                </div>
                <h1 className={s.project2_desc}>Japan <span className={s.rank}>1</span></h1>
                <div className={s.project2_sub}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, deleniti?</div>
                <div className={s.avatar2}>
                  <img className={s.avatar_img} src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg"/>
                  Kiran Mahmud
                </div>
              </div>
          </div>
        </div>
         <div className={s.project2}>
          <div className={s.section2}>
              <img
                src="https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?cs=srgb&dl=pexels-breston-kenya-4156467.jpg&fm=jpg"
                alt=""
                className={s.project2_img}
              />
              
              <div className={s.wrapper2}>
                <div className={s.ribbon}>
                  <div className={s.square}>Greatest Art</div>
                  <div className={s.tail}></div>
                  <div className={s.tail}></div>
                </div>
                <h1 className={s.project2_desc}>Japan <span className={s.rank}>1</span></h1>
                <div className={s.project2_sub}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, deleniti?</div>
                <div className={s.avatar2}>
                  <img className={s.avatar_img} src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-web-page-ui-default-avatar-handsome-guy-png-image_344498.jpg"/>
                  Kiran Mahmud
                </div>
              </div>
          </div>
        </div>
    </div>

    <div className={s.wrapper3}>
      <h1 className={s.news_title}>Gallery</h1>
      <div className={s.filter}>
        <i className="fa-solid fa-filter"></i>
        Filter By
        <div className={s.options}>
          <div className={s.option}>
            <div className={s.option_title}>Types</div>
            <ul className={s.option_content}>
              <li>Digital Art</li>
              <li>Photography</li>
              <li>Traditional Art</li>
            </ul>
          </div>
          <div className={s.option}>
            <div className={s.option_title}>Style</div>
            <ul className={s.option_content}>
              <li>Perspective-1</li>
              <li>Perspective-2</li>
            </ul>
          </div>
          <div className={s.option}>
            <div className={s.option_title}>Ekskul</div>
            <ul className={s.option_content}>
              <li>MACH</li>
              <li>OBSCURA</li>
              <li>MJS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className={s.wrapper}>
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt=""
          className={s.item}
        />
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
          className={s.item}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahAXUymBi7SHnIOEvCPKCUmLlzCef78EyFJGPUe1SqpX6GRTW6bMg5ZNj6KxrAyZ5dcs&usqp=CAU"
          alt=""
          className={s.item}
        />
        <img
          src="https://media.istockphoto.com/id/1289220949/photo/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=612x612&w=0&k=20&c=BjyPRn28F3mc6IiBCf4Ko-lFZisaNUYXBBnAcO47ZgE="
          alt=""
          className={s.item}
        />
        <img
          src="https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg"
          alt=""
          className={s.item}
        />
        <img
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
          alt=""
          className={s.item}
        />
        <img
          src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          className={s.item}
        />
        <img
          src="https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?cs=srgb&dl=pexels-breston-kenya-4156467.jpg&fm=jpg"
          alt=""
          className={s.item}
        />
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
          className={s.item}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahAXUymBi7SHnIOEvCPKCUmLlzCef78EyFJGPUe1SqpX6GRTW6bMg5ZNj6KxrAyZ5dcs&usqp=CAU"
          alt=""
          className={s.item}
        />
        <img
          src="https://media.istockphoto.com/id/1289220949/photo/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=612x612&w=0&k=20&c=BjyPRn28F3mc6IiBCf4Ko-lFZisaNUYXBBnAcO47ZgE="
          alt=""
          className={s.item}
        />
        <img
          src="https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg"
          alt=""
          className={s.item}
        />
        <img
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
          alt=""
          className={s.item}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahAXUymBi7SHnIOEvCPKCUmLlzCef78EyFJGPUe1SqpX6GRTW6bMg5ZNj6KxrAyZ5dcs&usqp=CAU"
          alt=""
          className={s.item}
        />
        <img
          src="https://media.istockphoto.com/id/1289220949/photo/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=612x612&w=0&k=20&c=BjyPRn28F3mc6IiBCf4Ko-lFZisaNUYXBBnAcO47ZgE="
          alt=""
          className={s.item}
        />
        <img
          src="https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg"
          alt=""
          className={s.item}
        />
        <img
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
          alt=""
          className={s.item}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahAXUymBi7SHnIOEvCPKCUmLlzCef78EyFJGPUe1SqpX6GRTW6bMg5ZNj6KxrAyZ5dcs&usqp=CAU"
          alt=""
          className={s.item}
        />
        <img
          src="https://media.istockphoto.com/id/1289220949/photo/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=612x612&w=0&k=20&c=BjyPRn28F3mc6IiBCf4Ko-lFZisaNUYXBBnAcO47ZgE="
          alt=""
          className={s.item}
        />
        <img
          src="https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg"
          alt=""
          className={s.item}
        />
        <img
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
          alt=""
          className={s.item}
        />
      </div>
    </>
  )
}
