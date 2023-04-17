'use client';

import React, { useEffect, useState, useRef } from "react"
import {Data, Uploader} from "../CustomHooks/useGetData";
import Editor from "../components/Editor";
export default function page() {
  const [percentage, setPercetage] = useState(0);
  const [error, setError] = useState("");
  const uploader = new Uploader(setPercetage, setError, (url) => {
    const Database = new Data();
    Database.addData('gallery/', {
      url,
      title: "Ku Menangis"
    })
  });
  const fileref = useRef();
  const handleClick = () => {
    console.log("Clicked");
    uploader.uploadFile(fileref?.current?.files[0], 'images/' + fileref?.current?.files[0]?.name);
  }
  useEffect(() => {
    console.log(percentage);
  }, [percentage]);
  useEffect(() => {
    if(error) alert(error);
  }, [error]);
  useEffect(() => {
    const data = new Data();
    data.query('images/ea1e5970-66e2-420a-b145-6bfb454176a8', [{
      key: 'title',
      comparator: "==",
      value: "Ku Menangis"
    }], []);
    console.log(data.data);
    console.log(data.error);
  })
  return (
    <div>    
      <input type="file" ref={fileref} />
      <button onClick={() => handleClick()} style={{cursor: 'pointer'}}>Upload</button>
      {percentage}
      <Editor />
    </div>
  )
}

