'use client';

import React, { useEffect, useState } from "react"
import {Data} from "../CustomHooks/useGetData";
export default function page() {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const process = async () => {
        const post = new Data();
        await post.loadData('post');
        setLoading(false)
        if(post.error){
            console.log('Data error', post.error);
            return;
        }
        setPosts(Object.values(post.data));
        console.log(post.data);
    }
    process();
    const add = async () => {
        const db = new Data();
        await db.addData('post', {
            title: "Halo Semuanya",
            description: "Semuanya akan baik baik saja",
            name: "Dinova Ganteng",
            tag: "Cartoon; Real; 2D; 3D",
            imageUrl: 'https://cdn.glitch.global/7430fc43-4325-457b-a220-181fdbbe4b11/logo.png?v=1678587387015'
        }, 'postID3');
        console.log(db.error);
    }
    add();
  }, [])  
  
  return (
    <div>
      {post.map(({title, imageUrl, tag, description, name}) => (
          <>
            <img src={imageUrl}/>
            <div>{title}</div>
            <div>{tag}</div>
            <div>{name}</div>
            <div>{description}</div>
          </>
          ))}
    </div>
  )
}

