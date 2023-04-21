'use client';

import React, { useEffect, useState, useRef } from "react"
import {Data, Uploader} from "../CustomHooks/useGetData";
import Editor from "../components/Editor";
import { auth } from "../../../services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import  { useAuthState } from 'react-firebase-hooks/auth'
export default function page() {
  // const [percentage, setPercetage] = useState(0);
  // const [error, setError] = useState("");
  // const uploader = new Uploader(setPercetage, setError, (url) => {
  //   const Database = new Data();
  //   Database.addData('gallery/', {
  //     url,
  //     title: "Ku Menangis"
  //   })
  // });
  // const fileref = useRef();
  // const handleClick = () => {
  //   console.log("Clicked");
  //   uploader.uploadFile(fileref?.current?.files[0], 'images/' + fileref?.current?.files[0]?.name);
  // }
  // useEffect(() => {
  //   console.log(percentage);
  // }, [percentage]);
  // useEffect(() => {
  //   if(error) alert(error);
  // }, [error]);
  // useEffect(() => {
  //   const data = new Data();
  //   data.query('images/ea1e5970-66e2-420a-b145-6bfb454176a8', [{
  //     key: 'title',
  //     comparator: "==",
  //     value: "Ku Menangis"
  //   }], []);
  //   console.log(data.data);
  //   console.log(data.error);
  // })
  const [ user,setUser ] = useAuthState(auth);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const result  = await signInWithPopup(auth, provider);

  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>    
      {/* <input type="file" ref={fileref} />
      <button onClick={() => handleClick()} style={{cursor: 'pointer'}}>Upload</button>
      {percentage}
      <Editor /> */}
      <button onClick={login}>Login with google</button>
      <div onClick={() => auth.signOut()}>
        SignOut
      </div>
      <div>
        {user ? "welcome, " + user.displayName + "Email:  " + user.email : ""}
      </div>
    </div>
  )
}

